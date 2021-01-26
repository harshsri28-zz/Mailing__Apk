import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB308RHT27nZqlqFiLvfxsvITChW8ilfo",
  authDomain: "clone-8d8b3.firebaseapp.com",
  projectId: "clone-8d8b3",
  storageBucket: "clone-8d8b3.appspot.com",
  messagingSenderId: "1071870326868",
  appId: "1:1071870326868:web:587de0c5d7512461b915c1",
  measurementId: "G-TNCFYZP022",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
