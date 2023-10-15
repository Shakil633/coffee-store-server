// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0OsjspHGss-wr860o24NS9O43Xync0Gw",
  authDomain: "coffee-store-2089b.firebaseapp.com",
  projectId: "coffee-store-2089b",
  storageBucket: "coffee-store-2089b.appspot.com",
  messagingSenderId: "448954249501",
  appId: "1:448954249501:web:2ce135e5bd995e231471f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
