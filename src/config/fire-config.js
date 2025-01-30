import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "expense-teacker.firebaseapp.com",
  projectId: "expense-teacker",
  storageBucket: "expense-teacker.appspot.com",
  messagingSenderId: "233979420003",
  appId: "1:233979420003:web:427532e713cd93ffe98756",
  measurementId: "G-X3ZFD3XZX6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
