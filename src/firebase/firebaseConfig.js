


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ0Eak2ooa6ymDL6ERWWoUhmr1jVHfwd0",
  authDomain: "finsight-e59a0.firebaseapp.com",
  projectId: "finsight-e59a0",
  storageBucket: "finsight-e59a0.appspot.com",
  messagingSenderId: "300637227061",
  appId: "1:300637227061:web:4f53e376ee53bc2f2ac97c",
  measurementId: "G-SWQ7W4K3JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
    analytics,
    auth,
    db,
    googleProvider
}