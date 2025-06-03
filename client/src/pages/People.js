// client/src/pages/People.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const People = () => {
  const [people, setPeople] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const activeRes = await axios.get('http://localhost:5000/api/people');
        const alumniRes = await axios.get('http://localhost:5000/api/people/alumni');
        setPeople(activeRes.data);
        setAlumni(alumniRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch people data. Please ensure the backend is running.');
        setLoading(false);
        console.error("Error fetching people:", err);
      }
    };
    fetchPeople();
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-gray-600 mt-16 animate-pulse">Loading team members...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl mt-16">{error}</div>;
  }

  const roleOrder = [
    'Professor', 'Associate Professor', 'Assistant Professor',
    'Postdoc', 'Ph.D. Student', 'M.S. Student', 'Research Assistant',
    'Visiting Scholar', 'Undergraduate Researcher', 'Other'
  ];

  const groupAndSortPeople = (peopleArray) => {
    const grouped = peopleArray.reduce((acc, person) => {
      const role = person.role || 'Other';
      if (!acc[role]) {
        acc[role] = [];
      }
      acc[role].push(person);
      return acc;
    }, {});

    const sortedRoles = Object.keys(grouped).sort((a, b) => {
      const indexA = roleOrder.indexOf(a);
      const indexB = roleOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return a.localeCompare(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    return sortedRoles.map(role => ({
      role,
      members: grouped[role].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
    }));
  };

  const activePeopleGrouped = groupAndSortPeople(people);
  const alumniGrouped = groupAndSortPeople(alumni);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Team</h1>

      {activePeopleGrouped.length > 0 ? (
        activePeopleGrouped.map((group, groupIndex) => (
          <div key={group.role} className={`mb-16 ${groupIndex > 0 ? 'mt-12' : ''}`}>
            <h2 className="text-3xl font-semibold text-blue-700 mb-8 border-b-2 border-blue-200 pb-3">
              {group.role}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {group.members.map((person, index) => (
                <motion.div
                  key={person._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-200"
                >
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-blue-300 shadow-md"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{person.name}</h3>
                  <p className="text-md text-blue-600 font-medium mb-3">{person.role}</p>

                  {person.bio && <p className="text-gray-700 text-sm mt-2 mb-4 italic line-clamp-3">{person.bio}</p>}

                  <div className="flex justify-center space-x-4 mt-auto pt-4 border-t border-gray-100 w-full">
                    {person.email && (
                      <a href={`mailto:${person.email}`} className="text-gray-500 hover:text-blue-600 transition duration-300" title="Email">
                        <FaEnvelope size={20} />
                      </a>
                    )}
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="LinkedIn">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {person.googleScholar && (
                      <a href={person.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="Google Scholar">
                        <FaGraduationCap size={20} />
                      </a>
                    )}
                    {person.personalWebsite && (
                      <a href={person.personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="Personal Website">
                        <FaGlobe size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-700 mt-10">No active team members to display.</p>
      )}

      {alumniGrouped.length > 0 && (
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Alumni</h2>
          {alumniGrouped.map((group, groupIndex) => (
            <div key={group.role} className={`mb-16 ${groupIndex > 0 ? 'mt-12' : ''}`}>
              <h3 className="text-3xl font-semibold text-blue-700 mb-8 border-b-2 border-blue-200 pb-3">
                {group.role}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {group.members.map((person, index) => (
                  <motion.div
                    key={person._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-200"
                  >
                    <img
                      src={person.imageUrl}
                      alt={person.name}
                      className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-gray-300 shadow-md grayscale"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{person.name}</h3>
                    <p className="text-md text-gray-600 font-medium mb-3">{person.role}</p>

                    {person.bio && <p className="text-gray-700 text-sm mt-2 mb-4 italic line-clamp-3">{person.bio}</p>}

                    <div className="flex justify-center space-x-4 mt-auto pt-4 border-t border-gray-100 w-full">
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="text-gray-500 hover:text-blue-600 transition duration-300" title="Email">
                          <FaEnvelope size={20} />
                        </a>
                      )}
                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="LinkedIn">
                          <FaLinkedin size={20} />
                        </a>
                      )}
                      {person.googleScholar && (
                        <a href={person.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="Google Scholar">
                          <FaGraduationCap size={20} />
                        </a>
                      )}
                      {person.personalWebsite && (
                        <a href={person.personalWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300" title="Personal Website">
                          <FaGlobe size={20} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default People;