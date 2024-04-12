//import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6Lk7Ct8mYC0KylAb5lbjspN0QkKAMes",
  authDomain: "drive-clone-998b7.firebaseapp.com",
  projectId: "drive-clone-998b7",
  storageBucket: "gs://drive-clone-998b7.appspot.com",
  messagingSenderId: "131395673365",
  appId: "1:131395673365:web:d1a8f4cd36b4953a4d5d1c",
  measurementId: "G-2STCFELBBP"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp, "gs://drive-clone-998b7.appspot.com");

const db = getFirestore(firebaseApp);
console.log(firebaseApp);

export { auth, provider, storage, db };
export default firebaseApp;