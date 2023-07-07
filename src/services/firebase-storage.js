import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { v4 as uuidv4 } from "uuid";

const storage = getStorage();

async function uploadResume({
  resume,
  username,
  onUploading,
  onError,
  onUploaded,
}) {
  if (isPDF(resume)) {
    const storageRef = ref(
      storage,
      "resume/" + username + "/" + changeFileName(resume).name
    );
    const uploadTask = uploadBytesResumable(storageRef, resume);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
  } else {
    onError("Please upload a PDF file");
  }
}

function isPDF(file) {
  return file.type === "application/pdf";
}

function changeFileName(file) {
  const fileExtension = getFileExtension(file.name);
  const newFileName = uuidv4();
  const modifiedFile = new File([file], newFileName + fileExtension, {
    type: file.type,
    lastModified: file.lastModified,
  });
  return modifiedFile;
}

function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf("."));
}

export { uploadResume };
