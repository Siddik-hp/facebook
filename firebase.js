import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDb8d_f2BR-CzNPoLpE1yTXkAiVDTauTMw",
  authDomain: "facebook-b9eb9.firebaseapp.com",
  projectId: "facebook-b9eb9",
  storageBucket: "facebook-b9eb9.appspot.com",
  messagingSenderId: "617336896032",
  appId: "1:617336896032:web:83b9293aa257d5dac21a45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Database
const db = getFirestore(app);
const colRef = collection(db, "posts");
// Storage
const stroage = getStorage(app);
// export
export { colRef, stroage, db };
