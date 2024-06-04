// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-48e13.firebaseapp.com",
  projectId: "blog-48e13",
  storageBucket: "blog-48e13.appspot.com",
  messagingSenderId: "920643051099",
  appId: "1:920643051099:web:57fd47dd8a62c974e5e97e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
