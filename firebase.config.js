import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY, FIREBASE_APP_ID } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "booking-project-7a088.firebaseapp.com",
  projectId: "booking-project-7a088",
  storageBucket: "booking-project-7a088.appspot.com",
  messagingSenderId: "246265704271",
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
