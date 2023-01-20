import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase configuration data, unique
const firebaseConfig = {
  apiKey: "AIzaSyD2BVHbMCSM2RL5SNuR-MI5AnsxeZhjlVo",
  authDomain: "nightclub-f72a2.firebaseapp.com",
  projectId: "nightclub-f72a2",
  storageBucket: "nightclub-f72a2.appspot.com",
  messagingSenderId: "717934716379",
  appId: "1:717934716379:web:35809c5d77e0b88a5df3fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
