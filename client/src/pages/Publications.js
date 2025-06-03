// client/src/pages/Publications.js
import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "AI-Powered Traffic Flow Prediction for Smart Cities",
      authors: "J. Doe, R. Smith, A. Khan",
      journal: "Journal of Intelligent Transportation Systems",
      year: 2024,
      link: "https://example.com/pub1",
      abstract: "This paper proposes a novel deep learning approach for predicting traffic flow in urban environments..."
    },
    {
      id: 2,
      title: "Reinforcement Learning for Adaptive Traffic Signal Control",
      authors: "M. Lee, S. Chen",
      journal: "IEEE Transactions on Intelligent Vehicles",
      year: 2023,
      link: "https://example.com/pub2",
      abstract: "We investigate the application of reinforcement learning techniques to optimize traffic signal timings in complex intersections..."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Publications</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {publications.length > 0 ? (
          publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{pub.title}</h2>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Authors:</strong> {pub.authors}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                <strong>Journal/Conference:</strong> {pub.journal}, {pub.year}
              </p>
              {pub.abstract && (
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {pub.abstract}
                </p>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Publication &rarr;
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700 mt-10">No publications to display yet.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Publications;