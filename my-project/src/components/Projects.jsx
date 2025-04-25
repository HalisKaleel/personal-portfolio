import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  ExternalLink,
} from 'lucide-react';
import { SiPython, SiTensorflow, SiMongodb, SiReact } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'ml', label: 'Machine Learning' },
    
  ];

  const projects = [
    
      {
        id: 1,
        title: 'Enhancing Sri Lankan Railway Safety Using Computer Vision and Cloud Technologies',
        description: 'Final year research project focused on preventing train-elephant collisions using real-time image processing and cloud-based solutions.',
        image: 'pro1.png',
        category: 'ml',
        status: 'completed',
        technologies: ['YOLO', 'OpenCV', 'React', 'PostgreSQL'],
        github: 'https://github.com/HalisKaleel',
        demo: 'https://www.linkedin.com/in/halis-kaleel'
      },
      {
        id: 2,
        title: 'Probability and Statistics Project (Predictive Model)',
        description: 'Developed a predictive model for statistical data analysis using BI tools.',
        image: 'pro2.png',
        category: 'data-science',
        status: 'completed',
        technologies: ['Probability and Statistics', 'Power BI', 'MS Excel'],
        github: 'https://github.com/HalisKaleel',
        demo: ''
      },
      {
        id: 3,
        title: 'FDM Mini-Project (Data Mining)',
        description: 'Mini data mining project built using Python, Streamlit, and data visualization libraries.',
        image: 'pro3.png',
        category: 'ml',
        status: 'completed',
        technologies: ['Python', 'Streamlit', 'Matplotlib', 'Pandas', 'NumPy'],
        github: 'https://github.com/HalisKaleel',
        demo: ''
      },
      {
        id: 4,
        title: 'Winning Horse Speed Prediction',
        description: 'A statistical analysis project using Excel and Minitab to predict horse race outcomes.',
        image: 'pro4.png',
        category: 'data-science',
        status: 'completed',
        technologies: ['Excel', 'Minitab', 'Multiple Linear Regression'],
        github: 'https://github.com/HalisKaleel',
        demo: ''
      }
    
    
    // Add more projects as needed
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return <SiPython className="w-5 h-5" />;
      case 'tensorflow':
        return <SiTensorflow className="w-5 h-5" />;
      case 'react':
        return <SiReact className="w-5 h-5" />;
      case 'mongodb':
        return <SiMongodb className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured projects that showcase my skills in Data Science, Machine Learning, and more.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-900  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 bg-sky-900  rounded-full text-sm"
                      >
                        {getTechIcon(tech)}
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-teal-500 transition-colors text-xl"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                {/* Project Image */}
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {getTechIcon(tech)}
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;