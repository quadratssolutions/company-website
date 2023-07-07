import { app } from "./firebasecore.js";
import {
  getDocs,
  getFirestore,
  query,
  where,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);

async function addResume({ name, email, resumeLink }) {
  try {
    const oldDocId = await oldDocIdForEmail({ email });
    if (oldDocId != null) {
      const docRef = doc(db, "resume", oldDocId);
      const data = {
        name: name,
        email: email,
        resumeLink: resumeLink,
        modifiedAt: new Date(),
      };
      await updateDoc(docRef, data);
      return "SUCCEED";
    } else {
      const collectionRef = collection(db, "resume");
      const data = {
        name: name,
        email: email,
        resumeLink: resumeLink,
        createdAt: new Date(),
        modifiedAt: new Date(),
      };
      await addDoc(collectionRef, data);
      return "SUCCEED";
    }
  } catch (e) {
    return "FAILED";
  }
}

async function oldDocIdForEmail({ email }) {
  try {
    const resumeRef = collection(db, "resume");
    const sameEmailQuery = query(resumeRef, where("email", "==", email));
    const snapshots = await getDocs(sameEmailQuery);

    if (snapshots.size > 0) {
      return snapshots.docs[0].id;
    } else {
      return null;
    }
  } catch (e) {
    throw e;
  }
}

export { addResume };
