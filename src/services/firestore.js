import { app } from "./firebasecore.js";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

async function addResume({ name, email, resumeLink }) {
  console.log(name, email, resumeLink);
  try {
    await addDoc(collection(db, "resume"), {
      name: name,
      email: email,
      resumeLink: resumeLink,
    });
    return "SUCCEED";
  } catch (e) {
    return "FAILED";
  }
}

export { addResume };
