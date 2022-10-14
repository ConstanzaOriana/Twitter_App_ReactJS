const REDUCTION_INTERVAL = 0.01;

export const readImageFile = (imageFile, configs) =>
  new Promise((resolve, reject) => {
    const mimeType = imageFile.type;

    let reader = new FileReader();
    reader.onload = async (readerEvent) => {
      if (mimeType.split("/")[1] === "tiff") {
        // let tiffImage = new Tiff({ buffer: readerEvent.target.result });
        // let tiffImageCanvas = tiffImage.toCanvas();

        // const processedImage = await downScaleCanvas(tiffImageCanvas, configs);
        // resolve({ base64: processedImage, mimeType: "image/jpeg" });

        throw new Error("TIFF not supported");
      } else {
        const _URL = window.URL || window.webkitURL;
        let image = new Image();

        image.onload = async (e) => {
          const currentImgCanvas = getProcessedImgCanvas(image, readerEvent);
          const processedImage = await downScaleCanvas(
            currentImgCanvas,
            configs
          );
          resolve({ base64: processedImage, mimeType: "image/jpeg" });
        };
        image.src = _URL.createObjectURL(imageFile);
      }
    };
    reader.readAsArrayBuffer(imageFile);
  });

export const getProcessedImgCanvas = (img, event) => {
  let degrees = 0;

  if (event) {
    degrees = getRotationAngle(event);
  }

  let imgCV = document.createElement("canvas");
  imgCV.width = degrees === 0 || degrees === 180 ? img.width : img.height;
  imgCV.height = degrees === 0 || degrees === 180 ? img.height : img.width;

  const imgCtx = imgCV.getContext("2d");

  //rotate if its needed
  imgCtx.clearRect(0, 0, imgCV.width, imgCV.height);
  imgCtx.save();
  imgCtx.translate(imgCV.width / 2, imgCV.height / 2);
  imgCtx.rotate((degrees * Math.PI) / 180);
  imgCtx.drawImage(img, -img.width / 2, -img.height / 2);
  imgCtx.restore();

  return imgCV;
};

export const downScaleCanvas = async (
  cv,
  imgConfigs,
  successCallback,
  errorCallback,
  args
) => {
  const scale = imgConfigs.scaleMayor
    ? cv.width < cv.height
      ? imgConfigs.resolution / cv.height
      : imgConfigs.resolution / cv.width
    : cv.width > cv.height
    ? imgConfigs.resolution / cv.height
    : imgConfigs.resolution / cv.width;
  let resCV;

  if (scale < 1 && scale > 0) {
    // var sqScale = scale * scale; // square scale = area of source pixel within target
    var sw = cv.width; // source image width
    var sh = cv.height; // source image height
    var tw =
      cv.width === cv.height ? imgConfigs.resolution : Math.floor(sw * scale); // target image width
    var th =
      cv.width === cv.height ? imgConfigs.resolution : Math.floor(sh * scale); // target image height

    // create result canvas
    resCV = document.createElement("canvas");
    resCV.width = tw;
    resCV.height = th;
    var resCtx = resCV.getContext("2d");
    resCtx.drawImage(cv, 0, 0, tw, th);
  } else resCV = cv;

  const compressedImage = await compressImage(
    resCV,
    imgConfigs,
    successCallback,
    errorCallback,
    args
  );
  return compressedImage;
};

export const compressImage = async (canvas, imgConfigs) => {
  let jpegDataURL = canvas.toDataURL("image/jpeg", imgConfigs.maxQuality);
  let quality;
  // const initialSize = getBase64Size(jpegDataURL, "KB");

  for (
    quality = imgConfigs.maxQuality;
    quality >= imgConfigs.minQuality &&
    getBase64Size(jpegDataURL, "KB") > imgConfigs.targetSize;
    quality -= REDUCTION_INTERVAL
  )
    jpegDataURL = canvas.toDataURL("image/jpeg", quality);

  if (getBase64Size(jpegDataURL, "KB") <= imgConfigs.maxSize) {
    return jpegDataURL;
  } else {
    console.log("imagen excedida");
    return jpegDataURL;
  }
};

export const getBase64Size = (base64string, multiplier) => {
  let divider = 1;

  if (multiplier) {
    if (multiplier === "KiB" || multiplier === "kib") divider = 1024;
    else if (multiplier === "MiB" || multiplier === "mib") divider = 1048576;
    else if (multiplier === "GiB" || multiplier === "gib") divider = 1073741824;
    else if (multiplier === "KB" || multiplier === "kb") divider = 1024;
    else if (multiplier === "MB" || multiplier === "mb") divider = 1048576;
    else if (multiplier === "GB" || multiplier === "gb") divider = 1073741824;
    else divider = 1;
  }

  return parseInt(base64string.replace(/=/g, "").length * 0.75) / divider;
};

export const getRotationAngle = (e) => {
  switch (getOrientation(e)) {
    case 3:
    case 4:
      return 180;

    case 5:
    case 6:
      return 90;

    case 7:
    case 8:
      return -90;

    default:
      return 0;
  }
};

export const getOrientation = (e) => {
  var view = new DataView(e.target.result);
  if (view.getUint16(0, false) !== 0xffd8) {
    return -2;
  }
  var length = view.byteLength,
    offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    var marker = view.getUint16(offset, false);
    offset += 2;
    if (marker === 0xffe1) {
      if (view.getUint32((offset += 2), false) !== 0x45786966) {
        return -1;
      }

      var little = view.getUint16((offset += 6), false) === 0x4949;
      offset += view.getUint32(offset + 4, little);
      var tags = view.getUint16(offset, little);
      offset += 2;
      for (var i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) === 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xff00) !== 0xff00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
};
