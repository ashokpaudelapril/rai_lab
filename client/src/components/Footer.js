// client/src/components/Footer.js
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = ({ labName }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/your-lab-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://twitter.com/your-lab-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="https://linkedin.com/company/your-lab-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={28} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {labName || "RAI-Lab"}. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with React, Tailwind CSS, Express, and MongoDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
