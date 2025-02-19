// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA2bKWS7AtGWUNqkLvulYgBNF7C7Tw7N1E",
//   authDomain: "nanded-hackathon.firebaseapp.com",
//   projectId: "nanded-hackathon",
//   storageBucket: "nanded-hackathon.firebasestorage.app",
//   messagingSenderId: "140328645970",
//   appId: "1:140328645970:web:d8826075b7c034fa58768b",
//   measurementId: "G-4T55YBGCYH"
// };

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(db);

// export { db, analytics };




// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add Firestore import
import { getAuth } from "firebase/auth"; // Add Auth import
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bKWS7AtGWUNqkLvulYgBNF7C7Tw7N1E",
  authDomain: "nanded-hackathon.firebaseapp.com",
  projectId: "nanded-hackathon",
  storageBucket: "nanded-hackathon.firebasestorage.app",
  messagingSenderId: "140328645970",
  appId: "1:140328645970:web:d8826075b7c034fa58768b",
  measurementId: "G-4T55YBGCYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Authentication
const analytics = getAnalytics(app); // Initialize Analytics

export { db, auth, analytics }; // Export Firestore, Auth, and Analytics