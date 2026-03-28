// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1z3MLtWr94zs-H8Z13p4UEFsLNjLy14w",
  authDomain: "travel-itinerary-generat-f8f7c.firebaseapp.com",
  projectId: "travel-itinerary-generat-f8f7c",
  storageBucket: "travel-itinerary-generat-f8f7c.firebasestorage.app",
  messagingSenderId: "118185528981",
  appId: "1:118185528981:web:0b477c5576755aa1ac159c",
  measurementId: "G-6QH9G21VH0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);