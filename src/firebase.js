// Firebase initialization file
// -----------------------------
// 1) Create a Firebase project at https://console.firebase.google.com
// 2) In Project Settings -> Your apps -> Add a Web app and copy the config below
// 3) Replace the placeholder values in `firebaseConfig` with your values
// 4) This file exports `auth` which is used by the Login/Signup components

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following config object with your Firebase app config
// You can find these values in the Firebase console after creating a Web app.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

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
