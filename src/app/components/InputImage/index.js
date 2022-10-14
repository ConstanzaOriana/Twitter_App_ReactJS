import "./styles.css";
import { IoIosCamera } from "react-icons/io";
import { forwardRef, useRef, useState } from "react";
import { readImageFile } from "../../../utils/upload_images";
import { IMAGE_UPLOAD_CONFIGS } from "../../configs/constants/image_upload";

const InputImage = ({ className, onChange }, ref) => {
  const fileInputRef = useRef(ref);
  const [photoValue, setPhotoValue] = useState(null);

  const handlePhotoUpload = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageData = await readImageFile(
        e.target.files[0],
        IMAGE_UPLOAD_CONFIGS
      );
      setPhotoValue(imageData.base64);
      onChange(imageData);
    }
  };
  return (
    <div className={`input-image-container ${className}`}>
      <div
        className="input-image-clickable"
        onClick={() => fileInputRef?.current?.click?.()}
      >
        <IoIosCamera size={30} color="#fff" />
      </div>
      {photoValue && <img src={photoValue} alt="User profile" />}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
      />
    </div>
  );
};

export default forwardRef(InputImage);
