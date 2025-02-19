// scripts/addStudents.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2bKWS7AtGWUNqkLvulYgBNF7C7Tw7N1E",
  authDomain: "nanded-hackathon.firebaseapp.com",
  projectId: "nanded-hackathon",
  storageBucket: "nanded-hackathon.appspot.com",
  messagingSenderId: "140328645970",
  appId: "1:140328645970:web:d8826075b7c034fa58768b",
  measurementId: "G-4T55YBGCYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const students = [
  {
    uid: "student_1",
    name: "John Doe",
    email: "john@example.com",
    rollNumber: "101",
    department: "Computer Science",
    year: "2023",
    address: "123 Main St, City, Country",
  },
  {
    uid: "student_2",
    name: "Jane Smith",
    email: "jane@example.com",
    rollNumber: "102",
    department: "Electrical Engineering",
    year: "2022",
    address: "456 Elm St, City, Country",
  },
  // Add 8 more students...
];

const addStudents = async () => {
  try {
    for (const student of students) {
      await setDoc(doc(db, "students", student.uid), student);
      console.log(`Added student: ${student.name}`);
    }
    console.log("All students added successfully!");
  } catch (error) {
    console.error("Error adding students: ", error);
  }
};

addStudents();