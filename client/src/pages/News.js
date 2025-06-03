// client/src/pages/News.js
import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "RAI-Lab Receives Grant for Smart City Mobility Project", // Updated
      date: "June 15, 2025",
      content: "The RAI-Lab has been awarded a significant grant from the Department of Transportation to develop an AI-powered system for optimizing urban traffic flow in smart cities. This project will run for three years and involves collaboration with local government agencies.", // Updated
      link: "#"
    },
    {
      id: 2,
      title: "Ph.D. Student Awarded Best Paper at ITSC 2025",
      date: "May 28, 2025",
      content: "Congratulations to our Ph.D. student, Alex Kim, for receiving the 'Best Paper Award' at the International Traffic and Transportation Systems Conference (ITSC) for his work on 'Predictive Control for Autonomous Intersections'.",
      link: "#"
    },
    {
      id: 3,
      title: "New Research on AI for Public Transportation Safety Published",
      date: "April 10, 2025",
      content: "Our latest research exploring the use of computer vision and machine learning to enhance safety in public transportation systems has been published in Transportation Research Part C: Emerging Technologies.",
      link: "#"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Latest News & Announcements</h1>

      <div className="max-w-3xl mx-auto space-y-10">
        {newsItems.length > 0 ? (
          newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{item.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {item.content}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium flex items-center"
                >
                  Read More <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700 mt-10">No news updates yet.</p>
        )}
      </div>
    </motion.div>
  );
};

module.exports = News;