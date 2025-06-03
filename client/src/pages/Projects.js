// client/src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects data. Please ensure the backend is running.');
        setLoading(false);
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-gray-600 mt-16 animate-pulse">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl mt-16">{error}</div>;
  }

  const statusOrder = ['Ongoing', 'Upcoming', 'Completed'];

  const groupedProjects = projects.reduce((acc, project) => {
    const status = project.status || 'Ongoing';
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(project);
    return acc;
  }, {});

  const sortedStatuses = Object.keys(groupedProjects).sort((a, b) => {
    const indexA = statusOrder.indexOf(a);
    const indexB = statusOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Projects</h1>

      {sortedStatuses.length > 0 ? (
        sortedStatuses.map((status, statusIndex) => (
          <div key={status} className={`mb-16 ${statusIndex > 0 ? 'mt-12' : ''}`}>
            <h2 className="text-3xl font-semibold text-blue-700 mb-8 border-b-2 border-blue-200 pb-3">
              {status} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects[status].map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col border border-gray-200"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-grow">{project.shortDescription}</p>

                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <Link to={`/projects/${project._id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        View Details <FaExternalLinkAlt className="ml-2 text-xs" />
                      </Link>
                      <div className="flex space-x-3">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition duration-300" title="GitHub Repository">
                            <FaGithub size={20} />
                          </a>
                        )}
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition duration-300" title="Live Demo">
                            <FaExternalLinkAlt size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-700 mt-10">No projects to display yet.</p>
      )}
    </motion.div>
  );
};

export default Projects;