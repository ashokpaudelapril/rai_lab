// client/src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-16 px-4"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Welcome to the <span className="text-blue-700">Robotics and Artificial Intelligence Lab (RAI-Lab)</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
        We are dedicated to advancing the field of transportation through cutting-edge research and innovation in artificial intelligence. Our work focuses on creating intelligent, efficient, and sustainable transportation systems for the future.
      </p>

      {/* Hero Section Call to Action */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center gap-6 mb-16"
      >
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Explore Our Projects
        </Link>
        <Link
          to="/people"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Meet Our Team
        </Link>
      </motion.div>

      {/* Research Areas / Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Intelligent Traffic Systems</h3>
          <p className="text-gray-700">
            Developing AI models for real-time traffic prediction, adaptive signal control, and congestion management.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Autonomous Driving & Robotics</h3>
          <p className="text-gray-700">
            Researching perception, decision-making, and control algorithms for self-driving vehicles and transportation robots.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Urban Mobility & Planning</h3>
          <p className="text-gray-700">
            Utilizing AI to analyze urban mobility patterns, optimize public transit, and inform smart city planning.
          </p>
        </motion.div>
      </div>

      {/* Recent News Section */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example News Item 1 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md text-left"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">New Publication Accepted!</h3>
            <p className="text-gray-600 mb-3">
              Our paper "Deep Learning for Predictive Maintenance in Rail Systems" has been accepted by IEEE Transactions on Intelligent Transportation Systems.
            </p>
            <span className="text-sm text-gray-500">June 1, 2025</span>
            <Link to="/news" className="text-blue-600 hover:underline ml-4 text-sm">Read more</Link>
          </motion.div>

          {/* Example News Item 2 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md text-left"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Student Spotlight: Jane Doe</h3>
            <p className="text-gray-600 mb-3">
              Congratulations to Jane Doe on receiving the prestigious National Science Foundation Graduate Research Fellowship!
            </p>
            <span className="text-sm text-gray-500">May 20, 2025</span>
            <Link to="/news" className="text-blue-600 hover:underline ml-4 text-sm">Read more</Link>
          </motion.div>
        </div>
        <div className="mt-8">
          <Link to="/news" className="text-blue-600 hover:underline font-medium text-lg">View All News &rarr;</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;