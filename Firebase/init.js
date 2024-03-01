// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmSRsuWfUqExJnLF--NlzgjXY9YqgGYeA",
  authDomain: "page-automation.firebaseapp.com",
  projectId: "page-automation",
  storageBucket: "page-automation.appspot.com",
  messagingSenderId: "1043251631798",
  appId: "1:1043251631798:web:9b5812e81dbc00ea37f817"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);