import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Calendar,
  Building2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SiPython, SiPandas, SiTensorflow } from 'react-icons/si';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('leadership');
  const [expandedCard, setExpandedCard] = useState(null);

  const leadershipExperiences = [
    {
      id: 1,
      title: 'Vice President',
      organization: 'Hiking Club (RUSL)',
      duration: '2022 - 2023',
      description: 'Led a team of 50+ members in organizing hiking expeditions and outdoor activities. Managed club operations, coordinated events, and fostered a strong community spirit.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Chief Editor',
      organization: 'Undergraduate Association of Beruwala (UAB)',
      duration: '2021 - 2022',
      description: 'Oversaw content creation and publication for the student association. Managed a team of writers and editors, ensuring high-quality content production.',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Chief Media Coordinator',
      organization: 'Undergraduate Association of Beruwala (UAB)',
      duration: '2020 - 2021',
      description: 'Coordinated media coverage and promotional activities for association events. Managed social media presence and content strategy.',
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const industrialExperiences = [
    {
      id: 1,
      title: 'Data Science and Machine Learning Intern',
      company: 'Bluechip Technologies Asia',
      duration: 'April 2023 – October 2023',
      description: 'Worked on developing machine learning models for predictive analytics and business intelligence.',
      technologies: ['Python', 'Pandas', 'TensorFlow', 'EDA'],
      impact: 'Built ML models for predictive insights, automated report generation, and improved data processing efficiency by 40%.',
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return <SiPython className="w-5 h-5" />;
      case 'pandas':
        return <SiPandas className="w-5 h-5" />;
      case 'tensorflow':
        return <SiTensorflow className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leadership, Collaboration & Industry Exposure
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeTab === 'leadership'
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeTab === 'industrial'
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              Industrial Experience
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'leadership' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {leadershipExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'industrial' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {industrialExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                            >
                              {getTechIcon(tech)}
                              <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Impact
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;