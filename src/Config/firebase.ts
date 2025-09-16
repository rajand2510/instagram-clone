// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFb1vMQPPU1uRPCI6fqA9qrcaG3YXJENI",
  authDomain: "cloneapp-4ba4a.firebaseapp.com",
  projectId: "cloneapp-4ba4a",
  storageBucket: "cloneapp-4ba4a.firebasestorage.app",
  messagingSenderId: "534753276672",
  appId: "1:534753276672:web:f8b6f1b65f3a57283179e5",
  measurementId: "G-KJ4LW1KLS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);