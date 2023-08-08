import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABckUAy-Nl3hUDL6xSAWBh5KC2eL-9rDQ",
  authDomain: "whatsapp2-347c1.firebaseapp.com",
  projectId: "whatsapp2-347c1",
  storageBucket: "whatsapp2-347c1.appspot.com",
  messagingSenderId: "317487287007",
  appId: "1:317487287007:web:d03c53cc2cd3a43a3a776a",
  measurementId: "G-Y1GGFWWZ1V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();