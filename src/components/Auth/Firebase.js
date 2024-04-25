// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaGGQWfhEGvSARDFXS2D9puRtckXLEzA4",
  authDomain: "best-ea7ba.firebaseapp.com",
  projectId: "best-ea7ba",
  storageBucket: "best-ea7ba.appspot.com",
  messagingSenderId: "763630248328",
  appId: "1:763630248328:web:ac6397a78f504cb8b2da3d",
  measurementId: "G-ESVNQR37RR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
