import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const HealthLeavePage = () => {
  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState("Healthy");
  const [leaveReason, setLeaveReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("/api/notify", { studentName, status, leaveReason });
      alert("Notification Sent Successfully!");
      setStudentName("");
      setStatus("Healthy");
      setLeaveReason("");
    } catch (error) {
      console.error("Error sending notification", error);
      alert("Failed to send notification.");
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
        🚑 Automated Health & Leave Notifications
      </motion.h1>

      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Health Status
            </label>
            <select
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Healthy">Healthy</option>
              <option value="Sick">Sick</option>
            </select>
          </div>

          {status === "Sick" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-lg font-semibold text-gray-700">
                Leave Reason (if sick)
              </label>
              <textarea
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                value={leaveReason}
                onChange={(e) => setLeaveReason(e.target.value)}
                required
              ></textarea>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
            disabled={submitting}
            whileTap={{ scale: 0.95 }}
          >
            {submitting ? "Submitting..." : "Send Notification"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default HealthLeavePage;
