import { database } from "./init";
import { collection, doc, setDoc } from "firebase/firestore";

const servicesRef = collection(database, "services");

export const setServices = async ({urlSlug,heroContent,heroHeading,heroImage}) => {
  await setDoc(doc(servicesRef, urlSlug), {
    urlSlug,
    heroHeading,
    heroContent,
    heroImage
  });
};
