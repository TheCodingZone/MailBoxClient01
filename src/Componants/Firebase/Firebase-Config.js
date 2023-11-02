// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDliCUyS6bJWaAveFCKcXLejEI5iImThls",
  authDomain: "mail-box-client-89196.firebaseapp.com",
  projectId: "mail-box-client-89196",
  storageBucket: "mail-box-client-89196.appspot.com",
  messagingSenderId: "1027838846015",
  appId: "1:1027838846015:web:8272a2cd762cd3e998448a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const database=getDatabase(app);
export { auth ,database}