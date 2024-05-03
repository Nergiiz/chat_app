// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN6yOmF8yVjU6lJKS74W4ybhOMrKKkL_w",
  authDomain: "chat-app-9e241.firebaseapp.com",
  projectId: "chat-app-9e241",
  storageBucket: "chat-app-9e241.appspot.com",
  messagingSenderId: "339206574872",
  appId: "1:339206574872:web:ac7de782d932f769fa846d",
  measurementId: "G-218TBC7WW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth (app);
export const provider = new GoogleAuthProvider ();
export const db = getFirestore(app);
