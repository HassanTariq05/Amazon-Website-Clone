// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA958y8fEeULWKDaygCDfcKhK-_M69L07E",
  authDomain: "clone-467e9.firebaseapp.com",
  projectId: "clone-467e9",
  storageBucket: "clone-467e9.appspot.com",
  messagingSenderId: "639070753969",
  appId: "1:639070753969:web:6c3a82a2b02d99c84c3e90",
  measurementId: "G-PGYEVDEZ1K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
