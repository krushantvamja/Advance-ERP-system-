import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const applicationsData = [
  { id: 1, type: "Event Organization", status: "Pending", priority: "Medium" },
  { id: 2, type: "Budget Approval", status: "Approved", priority: "Low" },
  { id: 3, type: "Sponsorship", status: "Rejected", priority: "High" },
];

const ApplicationApprovalPage = () => {
  const [applications, setApplications] = useState(applicationsData);
  const [newApplication, setNewApplication] = useState({ type: "", details: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!newApplication.type || !newApplication.details) {
      alert("Please fill in all fields!");
      return;
    }

    setSubmitting(true);

    try {
      const newApp = {
        id: applications.length + 1,
        type: newApplication.type,
        status: "Pending",
        priority: "Medium",
      };
      setApplications([...applications, newApp]);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application", error);
      alert("Submission failed!");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🏛️ Application & Approval System
      </motion.h1>

      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Submit Application</h2>

        <div className="mt-4">
          <label className="block text-lg font-semibold text-gray-700">Application Type</label>
          <select
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newApplication.type}
            onChange={(e) => setNewApplication({ ...newApplication, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="Event Organization">Event Organization</option>
            <option value="Budget Approval">Budget Approval</option>
            <option value="Sponsorship">Sponsorship</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-lg font-semibold text-gray-700">Details</label>
          <textarea
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Describe your application..."
            value={newApplication.details}
            onChange={(e) => setNewApplication({ ...newApplication, details: e.target.value })}
          />
        </div>

        <motion.button
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
          onClick={handleSubmit}
          disabled={submitting}
          whileTap={{ scale: 0.95 }}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </motion.button>
      </motion.div>

      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-4xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Submitted Applications</h2>

        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3">ID</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Priority</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <motion.tr
                  key={app.id}
                  className="border border-gray-300 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <td className="p-3">{app.id}</td>
                  <td className="p-3">{app.type}</td>
                  <td
                    className={`p-3 font-semibold ${
                      app.status === "Approved"
                        ? "text-green-600"
                        : app.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {app.status}
                  </td>
                  <td className="p-3">{app.priority}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationApprovalPage;
