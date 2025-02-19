
// // with auth //



// // src/pages/Profile.jsx
// import React, { useEffect, useState } from "react";
// import { db } from "../firebase/firebase"; // Import Firestore instance
// import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
// import { getAuth } from "firebase/auth"; // Import Auth functions

// const Profile = () => {
//   const [student, setStudent] = useState(null); // State to store student data
//   const [loading, setLoading] = useState(true); // State to handle loading
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         const auth = getAuth(); // Get the authentication instance
//         const user = auth.currentUser; // Get the currently logged-in user

//         if (user) {
//           // Reference to the student document in Firestore
//           const studentRef = doc(db, "students", user.uid);
//           const studentDoc = await getDoc(studentRef); // Fetch the document

//           if (studentDoc.exists()) {
//             setStudent(studentDoc.data()); // Set student data if document exists
//           } else {
//             setError("No student data found."); // Handle case where document doesn't exist
//           }
//         } else {
//           setError("User not logged in."); // Handle case where user is not logged in
//         }
//       } catch (err) {
//         setError("Failed to fetch student data."); // Handle any errors
//         console.error(err);
//       } finally {
//         setLoading(false); // Set loading to false after fetching data
//       }
//     };

//     fetchStudentData(); // Call the function to fetch data
//   }, []);

//   // Display loading message while data is being fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Display error message if there's an error
//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   // Display message if no student data is found
//   if (!student) {
//     return <div>No student data available.</div>;
//   }

//   // Render the student data
//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-5">Student Profile</h1>
//       <div className="bg-white p-5 rounded-lg shadow-md">
//         <p><strong>Name:</strong> {student.name}</p>
//         <p><strong>Email:</strong> {student.email}</p>
//         <p><strong>Roll Number:</strong> {student.rollNumber}</p>
//         <p><strong>Department:</strong> {student.department}</p>
//         <p><strong>Year:</strong> {student.year}</p>
//         <p><strong>Address:</strong> {student.address}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;









// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions

const Profile = () => {
  const [student, setStudent] = useState(null); // State to store student data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Hardcoded document ID for testing
        const studentId = "olaqplwScyagJUE8ejyo"; // Replace with your Firestore document ID

        // Reference to the student document in Firestore
        const studentRef = doc(db, "students", studentId);
        const studentDoc = await getDoc(studentRef); // Fetch the document

        if (studentDoc.exists()) {
          setStudent(studentDoc.data()); // Set student data if document exists
        } else {
          setError("No student data found."); // Handle case where document doesn't exist
        }
      } catch (err) {
        setError("Failed to fetch student data."); // Handle any errors
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchStudentData(); // Call the function to fetch data
  }, []);

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there's an error
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Display message if no student data is found
  if (!student) {
    return <div>No student data available.</div>;
  }

  // Render the student data
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Student Profile</h1>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Address:</strong> {student.address}</p>
      </div>
    </div>
  );
};

export default Profile;