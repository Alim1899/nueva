// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDMeuKh18qbU8XW5yApa-syrbmo7fRiTU",
  authDomain: "nueva-bec93.firebaseapp.com",
  databaseURL: "https://nueva-bec93-default-rtdb.firebaseio.com",
  projectId: "nueva-bec93",
  storageBucket: "nueva-bec93.appspot.com",
  messagingSenderId: "770525187197",
  appId: "1:770525187197:web:7e2f3825efc261c5b7f514",
  measurementId: "G-J4E94ZL4CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
