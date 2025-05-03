// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwEapsaJ3SaDJgEgdKed58V5Z-pJ2SeAU",
  authDomain: "dragon-news-firebase-282be.firebaseapp.com",
  projectId: "dragon-news-firebase-282be",
  storageBucket: "dragon-news-firebase-282be.firebasestorage.app",
  messagingSenderId: "1026131826052",
  appId: "1:1026131826052:web:a83370ddc5f0b9be21b9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;