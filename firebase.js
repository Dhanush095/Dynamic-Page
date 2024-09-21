import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDhimxcRcBhdtGUkaYPHE2glBWQ4lIqS0",
  authDomain: "react-node-f3bef.firebaseapp.com",
  projectId: "react-node-f3bef",
  storageBucket: "react-node-f3bef.appspot.com",
  messagingSenderId: "716352200707",
  appId: "1:716352200707:web:50d3de56646005bce5ae36"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
