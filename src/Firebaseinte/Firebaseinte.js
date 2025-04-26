// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2PzeiG6vyw_s-wSkwNzoSxmGSNPJUcSg",
  authDomain: "assignment-10-client-fb50d.firebaseapp.com",
  projectId: "assignment-10-client-fb50d",
  storageBucket: "assignment-10-client-fb50d.firebasestorage.app",
  messagingSenderId: "1047722841580",
  appId: "1:1047722841580:web:35a498041a10915bfddcc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);