// client/src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ labName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-blue-700 to-indigo-900 p-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:text-blue-200 transition duration-300">
          {labName || "RAI-Lab"}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white text-lg hover:text-blue-200 transition duration-300 relative group ${isActive ? 'font-bold border-b-2 border-blue-200' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="md:hidden fixed inset-0 bg-blue-800 bg-opacity-95 z-40 flex flex-col items-center justify-center"
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="text-center">
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/" className="text-white text-3xl font-bold hover:text-blue-200">Home</NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/people" className="text-white text-3xl font-bold hover:text-blue-200">People</NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/projects" className="text-white text-3xl font-bold hover:text-blue-200">Projects</NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/publications" className="text-white text-3xl font-bold hover:text-blue-200">Publications</NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/news" className="text-white text-3xl font-bold hover:text-blue-200">News</NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="mb-6">
              <NavLink onClick={toggleMenu} to="/contact" className="text-white text-3xl font-bold hover:text-blue-200">Contact</NavLink>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;