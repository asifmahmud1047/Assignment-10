// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNhaK-keSDvyreLtmNkZ4pBtyUcJ79OlU",
  authDomain: "visa-navigator-client-96a5b.firebaseapp.com",
  projectId: "visa-navigator-client-96a5b",
  storageBucket: "visa-navigator-client-96a5b.firebasestorage.app",
  messagingSenderId: "834869461345",
  appId: "1:834869461345:web:5c555d6ce896fd5008c520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
