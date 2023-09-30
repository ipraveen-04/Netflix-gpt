// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmoDa8I3CvinLOtaXoXjpoYEKD2105sB0",
  authDomain: "netflixgpt-11881.firebaseapp.com",
  projectId: "netflixgpt-11881",
  storageBucket: "netflixgpt-11881.appspot.com",
  messagingSenderId: "865151714711",
  appId: "1:865151714711:web:87555fc5376d82d6aff0d2",
  measurementId: "G-DME8V9798M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();