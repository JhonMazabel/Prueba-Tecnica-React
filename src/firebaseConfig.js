// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7uJzYZj3v5Uh-cPNdoyeQAJtZQIYWwUk",
  authDomain: "prueba-2942d.firebaseapp.com",
  projectId: "prueba-2942d",
  storageBucket: "prueba-2942d.appspot.com",
  messagingSenderId: "889509527356",
  appId: "1:889509527356:web:38606a971276c6f03c2839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };