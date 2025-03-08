import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "./config";

export const apiPostMessageDoc = async ({
  subject,
  email,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const messageRef = collection(firestore, "messages");
    const q = query(messageRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return await setDoc(doc(firestore, "messages", email), {
        email,
        subject,
        messages: [{ message, createdAt: new Date().toISOString() }],
      });
    } else {
      return await updateDoc(doc(firestore, "messages", email), {
        messages: [
          ...querySnapshot.docs[0].data().messages,
          { message, createdAt: new Date().toISOString() },
        ],
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const apiMatchAdminPassword = async (password: string) => {
  try {
    const adminRef = collection(firestore, "admin");
    const q = query(adminRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs[0].data().password === password;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const apiPostCreateTestimonialBoilerplate = async (
  testimonialId: string
) => {
  try {
    return await setDoc(doc(firestore, "testimonials", testimonialId), {
      id: testimonialId,
      name: "",
      email: "",
      company: "",
      message: "",
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.log(err);
  }
};

export const apiUpdateTestimonial = async ({
  id,
  name,
  email,
  company,
  message,
}: {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
}) => {
  try {
    const testimonialRef = collection(firestore, "testimonials");
    const q = query(testimonialRef, where("id", "==", id));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return;
    } else {
      return await updateDoc(doc(firestore, "testimonials", id), {
        name,
        email,
        company,
        message,
        updatedAt: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const apiCheckTestimonial = async (testimonialId: string) => {
  try {
    const testimonialRef = collection(firestore, "testimonials");
    const q = query(testimonialRef, where("id", "==", testimonialId));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0].data();
    return doc;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
