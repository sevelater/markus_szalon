import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWYHQ1AZeOHVjQ3RhtPQZTRicfkLAOEsk",
  authDomain: "markus-szalon.firebaseapp.com",
  projectId: "markus-szalon",
  storageBucket: "markus-szalon.firebasestorage.app",
  messagingSenderId: "225840342527",
  appId: "1:225840342527:web:067fc2abdaba3e78aab3ca",
  measurementId: "G-N57SWJWTZQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);