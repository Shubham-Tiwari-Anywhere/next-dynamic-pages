import { doc, getDoc } from "firebase/firestore";
import { database } from "./init";

export const getServices = async (pageName) => {
  const docRef = doc(database, "services", pageName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
