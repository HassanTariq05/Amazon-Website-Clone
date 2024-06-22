import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA958y8fEeULWKDaygCDfcKhK-_M69L07E",
    authDomain: "clone-467e9.firebaseapp.com",
    projectId: "clone-467e9",
    storageBucket: "clone-467e9.appspot.com",
    messagingSenderId: "639070753969",
    appId: "1:639070753969:web:6c3a82a2b02d99c84c3e90",
    measurementId: "G-PGYEVDEZ1K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.fireStore();
  const auth = firebase.auth();

  export {db, auth};