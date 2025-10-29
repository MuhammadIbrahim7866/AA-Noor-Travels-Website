// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC91sqSVkfDwV1abrhjm089KH7B6KTYkjg",
  authDomain: "aa-noor-travels.firebaseapp.com",
  projectId: "aa-noor-travels",
  storageBucket: "aa-noor-travels.firebasestorage.app",
  messagingSenderId: "838140344217",
  appId: "1:838140344217:web:5738595b584e76eef18508",
  measurementId: "G-886R1TFJT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
