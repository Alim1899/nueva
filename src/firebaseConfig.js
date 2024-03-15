// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxLoVsO_yrVNFK5g-GRdvMOhXdA3TUcM",
  authDomain: "nuevadb-777bc.firebaseapp.com",
  databaseURL: "https://nuevadb-777bc-default-rtdb.firebaseio.com",
  projectId: "nuevadb-777bc",
  storageBucket: "nuevadb-777bc.appspot.com",
  messagingSenderId: "180783480080",
  appId: "1:180783480080:web:b5d7b4d26f6381106b7995",
  measurementId: "G-WK7Y052X18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
