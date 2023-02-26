import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function firebase_upload_image(file, callback) {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `images/${Date.now().toString() + file.name}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    () => {},
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        callback(downloadURL);
      });
    }
  );
}
