// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvMPemhSEINOUjLo9sA70mABaLTHkCKQs",
  authDomain: "insta-next-js.firebaseapp.com",
  projectId: "insta-next-js",
  storageBucket: "insta-next-js.appspot.com",
  messagingSenderId: "150322674700",
  appId: "1:150322674700:web:0fae898547a8156af8c229"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };