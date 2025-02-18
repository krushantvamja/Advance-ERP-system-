import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const facilities = [
  { id: 1, name: "Tennis Court", image: "https://source.unsplash.com/400x250/?tennis" },
  { id: 2, name: "Auditorium", image: "https://source.unsplash.com/400x250/?auditorium" },
  { id: 3, name: "Library Hall", image: "https://source.unsplash.com/400x250/?library" },
  { id: 4, name: "Gym", image: "https://source.unsplash.com/400x250/?gym" },
];

const FacilityBookingPage = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookingStatus, setBookingStatus] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleBooking = async () => {
    if (!selectedFacility || !date || !time) {
      alert("Please select all fields.");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post("/api/bookings", { facility: selectedFacility.name, date, time });
      setBookingStatus({ ...bookingStatus, [selectedFacility.id]: "Pending Approval" });
      alert("Booking request submitted!");
    } catch (error) {
      console.error("Error booking facility", error);
      alert("Failed to submit booking request.");
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
        🏛️ Campus Facility Booking
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {facilities.map((facility) => (
          <motion.div
            key={facility.id}
            className={`bg-white shadow-lg rounded-xl p-4 ${
              selectedFacility?.id === facility.id ? "ring-2 ring-blue-500" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedFacility(facility)}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{facility.name}</h2>
            <p className="text-gray-600">
              {bookingStatus[facility.id] ? `Status: ${bookingStatus[facility.id]}` : "Available"}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {selectedFacility && (
        <motion.div
          className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Booking: {selectedFacility.name}
          </h2>

          <div className="mt-4">
            <label className="block text-lg font-semibold text-gray-700">Select Date</label>
            <input
              type="date"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-lg font-semibold text-gray-700">Select Time</label>
            <input
              type="time"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <motion.button
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
            onClick={handleBooking}
            disabled={submitting}
            whileTap={{ scale: 0.95 }}
          >
            {submitting ? "Submitting..." : "Request Booking"}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default FacilityBookingPage;
