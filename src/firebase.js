// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-6JfwXahObAWtFNLPdPF2Xs5Z5SStwM4",
  authDomain: "fl-studios.firebaseapp.com",
  projectId: "fl-studios",
  storageBucket: "fl-studios.firebasestorage.app",
  messagingSenderId: "444150112248",
  appId: "1:444150112248:web:3fd03b3dbe6e8af6edc00d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);