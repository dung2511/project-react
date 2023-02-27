// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH2V0R8iadLN7z3CkQi1IZNWxV8lNXgCE",
  authDomain: "project-person-304c2.firebaseapp.com",
  projectId: "project-person-304c2",
  storageBucket: "project-person-304c2.appspot.com",
  messagingSenderId: "320761339830",
  appId: "1:320761339830:web:1f48dd94e56431571aeb17",
  measurementId: "G-PMF87R1S3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const database = getDatabase(app);
console.log(database);