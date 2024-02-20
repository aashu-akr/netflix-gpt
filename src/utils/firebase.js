// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfi8vvTcoSfqVvBxx50Ex2J2LRBgs_41k",
  authDomain: "netflixgpt-58117.firebaseapp.com",
  projectId: "netflixgpt-58117",
  storageBucket: "netflixgpt-58117.appspot.com",
  messagingSenderId: "887583044668",
  appId: "1:887583044668:web:5f7926153553f308f8bf39",
  measurementId: "G-ZDMKM5V3SY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// writing getAuth() in the central place:
export const auth = getAuth();
