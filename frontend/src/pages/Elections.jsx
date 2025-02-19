import React, { useState } from "react";
import { motion } from "framer-motion";

const ElectionPage = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: "John Doe",
      bio: "Passionate about student welfare and academic reforms.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Dedicated to making the campus a better place for everyone.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Alice Johnson",
      bio: "Advocating for student rights and extracurricular activities.",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [voted, setVoted] = useState(false);

  const handleVote = (candidateId) => {
    if (voted) return alert("You have already voted!");
    setVoted(true);
    alert(`Vote submitted for ${candidates.find(c => c.id === candidateId).name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🗳️ Student Elections 2025
      </motion.h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {candidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: candidate.id * 0.2 }}
          >
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-3 text-gray-800">
              {candidate.name}
            </h2>
            <p className="text-gray-600 mt-2">{candidate.bio}</p>
            <motion.button
              className={`mt-4 px-5 py-2 rounded-lg w-full text-white font-bold text-lg transition-all ${
                voted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
              }`}
              onClick={() => handleVote(candidate.id)}
              disabled={voted}
              whileTap={{ scale: 0.95 }}
            >
              {voted ? "✅ Voted" : "🗳 Vote"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElectionPage;
