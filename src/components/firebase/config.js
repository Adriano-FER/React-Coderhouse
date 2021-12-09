import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyDbiFyl0h4tUPPBPdFZo_rhTuiPGVAzWN0",
  authDomain: "e-commerceafp.firebaseapp.com",
  projectId: "e-commerceafp",
  storageBucket: "e-commerceafp.appspot.com",
  messagingSenderId: "39563530667",
  appId: "1:39563530667:web:4cfa7a6d5db0a9adb642ee",
  measurementId: "G-HRTJF73SM5"
};


const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore }