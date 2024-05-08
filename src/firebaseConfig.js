// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgw5XvujVmQYyw4ytXhqVTOIriJqmfb7w",
  authDomain: "react-5b820.firebaseapp.com",
  databaseURL: "https://react-5b820-default-rtdb.firebaseio.com",
  projectId: "react-5b820",
  storageBucket: "react-5b820.appspot.com",
  messagingSenderId: "1076942444989",
  appId: "1:1076942444989:web:83a92aa71442d02230dad4",
  measurementId: "G-GJQ0EC9052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;