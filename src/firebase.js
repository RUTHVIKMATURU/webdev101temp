import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9MB6ueHNC6Gdsz_ZH6tkhHPmloUcvbtw",
  authDomain: "temporary-bfe8f.firebaseapp.com",
  projectId: "temporary-bfe8f",
  storageBucket: "temporary-bfe8f.firebasestorage.app",
  messagingSenderId: "353911609311",
  appId: "1:353911609311:web:bc8e2785ed19cbb94bd66a",
  measurementId: "G-PD4DJC7QC5"
};
// Firebase initialization file
// -----------------------------
// 1) Create a Firebase project at https://console.firebase.google.com
// 2) In Project Settings -> Your apps -> Add a Web app and copy the config below
// 3) Replace the placeholder values in `firebaseConfig` with your values
// 4) This file exports `auth` which is used by the Login/Signup components

// Initialize Firebase app and export the auth instance
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app

/*
What this file does (for beginners):
- We import the Firebase functions we need from the Firebase SDK.
- We create a config object that tells Firebase which project to connect to.
- We call initializeApp(config) to create a Firebase app instance.
- We call getAuth(app) and export it — this is what the rest of the app uses to sign up and log in users.
*/

