import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB38kPwb0vQrB-nEVbX2h1bvQs9VnhegXw",
  authDomain: "booking-project-7a088.firebaseapp.com",
  projectId: "booking-project-7a088",
  storageBucket: "booking-project-7a088.appspot.com",
  messagingSenderId: "246265704271",
  appId: "1:246265704271:web:514124858eebb391cb9f3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
