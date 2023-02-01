// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAozVJYvuj8BIvNGJWQPJsDsNfb9BJJ1vU",
  authDomain: "project-noi-that.firebaseapp.com",
  projectId: "project-noi-that",
  storageBucket: "project-noi-that.appspot.com",
  messagingSenderId: "172130437670",
  appId: "1:172130437670:web:2ff39d856325336d4d34e7",
  measurementId: "G-4200LY2VX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app)
