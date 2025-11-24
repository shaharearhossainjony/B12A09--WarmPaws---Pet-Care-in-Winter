// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqSekeeZiM_y41ervqLPepNx2EN_F19S4",
  authDomain: "warmpaws---pet-care-in-winter.firebaseapp.com",
  projectId: "warmpaws---pet-care-in-winter",
  storageBucket: "warmpaws---pet-care-in-winter.firebasestorage.app",
  messagingSenderId: "273163706350",
  appId: "1:273163706350:web:aca17d6f4f34e4018ab8ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
