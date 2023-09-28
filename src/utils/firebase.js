// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.TENNIS_APP_API_KEY,
  authDomain: TENNIS_APP_AUTH_DOMAIN,
  projectId: TENNIS_APP_PROJECT_ID,
  storageBucket: TENNIS_APP_STORAGE_BUCKET,
  messagingSenderId: TENNIS_APP_MESSAGING_SENDER_ID,
  appId: TENNIS_APP_APP_ID,
  measurementId: TENNIS_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
