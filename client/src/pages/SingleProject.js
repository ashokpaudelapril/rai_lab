import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUser,
  FaLink,
  FaFileAlt,
} from 'react-icons/fa';

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch project details. Project might not exist or backend is down.');
        setLoading(false);
        console.error("Error fetching project:", err);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl text-gray-600 mt-16 animate-pulse">Loading project details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl mt-16">{error}</div>;
  }

  if (!project) {
    return <div className="text-center text-gray-700 text-xl mt-16">Project not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-8 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl"
    >
      <Link to="/projects" className="text-blue-600 hover:underline mb-6 flex items-center">
        <span className="mr-2">&larr;</span> Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6 italic">{project.shortDescription}</p>

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-gray-700 text-sm">
        <p className="flex items-center">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <strong>Status:</strong>
          <span
            className={`ml-2 px-3 py-1 rounded-full text-white ${
              project.status === 'Ongoing'
                ? 'bg-green-500'
                : project.status === 'Completed'
                ? 'bg-gray-500'
                : 'bg-orange-500'
            }`}
          >
            {project.status}
          </span>
        </p>
        {(project.startDate || project.endDate) && (
          <p className="flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <strong>Duration:</strong>{' '}
            {project.startDate ? new Date(project.startDate).toLocaleDateString() : 'N/A'} -{' '}
            {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Present'}
          </p>
        )}
      </div>

      {project.fullDescription && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Details</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{project.fullDescription}</p>
        </div>
      )}

      {project.teamMembers && project.teamMembers.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Team Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {project.teamMembers.map((member) => (
              <Link
                to={`/people/${member._id}`}
                key={member._id}
                className="flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={member.imageUrl || 'https://via.placeholder.com/60'}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p className="text-sm font-medium text-gray-800 text-center">{member.name}</p>
                <p className="text-xs text-gray-600 text-center">{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {project.publications && project.publications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Related Publications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.publications.map((pub, index) => (
              <li key={index} className="flex items-start">
                <FaFileAlt className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
                <span>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-start space-x-4 mt-8 pt-6 border-t border-gray-200">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition duration-300 shadow-md"
          >
            <FaGithub className="mr-2" /> GitHub Repo
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProject;
