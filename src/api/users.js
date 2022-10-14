import { firestore, storage } from "../app/configs/connections/firebase";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import * as refs from "../app/configs/constants/firebase_refs";

export const registerUser = async (name, image = null) => {
  const userDocRef = await addDoc(
    collection(firestore, refs.USERS_COLLECTION),
    {
      name,
      created_at: new Date(),
    }
  );

  let imageUrl;

  if (image) {
    const ext = image.mimeType.split("/")[1];
    var metadata = {
      contentType: image.mimeType,
    };
    const imagePath = `${refs.USERS_IMAGES_DIR}/${userDocRef.id}/profile.${ext}`;
    const imageRef = ref(storage, imagePath);
    await uploadString(imageRef, image.base64, "data_url", metadata);
    imageUrl = await getDownloadURL(imageRef);
    await setDoc(userDocRef, { photo: imageUrl }, { merge: true });
  }

  return {
    id: userDocRef.id,
    name,
    photo: imageUrl,
  };
};
