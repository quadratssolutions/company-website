import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage();

async function uploadResume({
  resume,
  username,
  onUploading,
  onError,
  onUploaded,
}) {
  const storageRef = ref(storage, "resume/" + username + "/" + resume.name);
  const uploadTask = uploadBytesResumable(storageRef, resume);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onUploading(progress);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          console.log("Upload is unknown");
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          onError(error.message);
          break;
        case "storage/canceled":
          onError(error.message);
          break;
        case "storage/unknown":
          onError(error.message);
          break;
        default:
          onError("Failed to upload");
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        onUploaded(downloadURL);
      });
    }
  );
}

export { uploadResume };
