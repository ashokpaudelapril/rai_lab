import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Contact Us</h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <p className="text-lg text-gray-700 text-center mb-8">
          We'd love to hear from you! Whether you have questions about our research,
          collaboration opportunities, or are interested in joining our RAI-Lab team, please reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm"
          >
            <FaMapMarkerAlt className="text-blue-700 text-3xl mr-4" />
            <div>
              <h2 className="font-semibold text-gray-800">Our Location</h2>
              <p className="text-gray-700">
                RAI-Lab, Department of Civil Engineering <br />
                University Name, Street Address <br />
                City, State, ZIP Code
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm"
          >
            <FaEnvelope className="text-blue-700 text-3xl mr-4" />
            <div>
              <h2 className="font-semibold text-gray-800">Email Us</h2>
              <p className="text-gray-700">
                <a href="mailto:contact@railab.com" className="text-blue-600 hover:underline">contact@railab.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm"
          >
            <FaPhone className="text-blue-700 text-3xl mr-4" />
            <div>
              <h2 className="font-semibold text-gray-800">Call Us</h2>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm"
          >
            <FaMapMarkerAlt className="text-blue-700 text-3xl mr-4" />
            <div>
              <h2 className="font-semibold text-gray-800">Office Hours</h2>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
            </div>
          </motion.div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 w-full"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
