/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  BarChart2,
  TrendingUp,
  Database,
  MessageSquare,
} from 'lucide-react';

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/haliskaleel" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/haliskaleel" },
    { icon: <Mail className="w-6 h-6" />, url: "mailto:contact@haliskaleel.com" }
  ];

  const skills = [
    { icon: <Brain className="w-6 h-6" />, label: "Machine Learning" },
    { icon: <BarChart2 className="w-6 h-6" />, label: "Data Analytics" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Statistical Modeling" },
    { icon: <Database className="w-6 h-6" />, label: "Data Engineering" },
    { icon: <MessageSquare className="w-6 h-6" />, label: "Communication" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-red-900/90" />
        <div className="absolute inset-0 bg-[url('/personal-portfolio/hero.png')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Halis Kaleel
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-red-100 font-semibold flex flex-wrap gap-2 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Data Scientist</span>
              <span className="text-[#94B4C1]">|</span>
              <span>ML Enthusiast</span>
              <span className="text-[#94B4C1]">|</span>
              <span>Problem Solver</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I specialize in transforming data into insights using ML, stats, and code.
              With dual degrees and real-world experience, I bridge the gap between data and decisions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => setShowSocial(true)}
                className="px-8 py-3 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-lg 
                           shadow-md transition duration-300 transform hover:scale-105"
              >
                Let's Connect
              </button>
            </motion.div>

            {/* Skills Strip */}
            <motion.div
              className="flex flex-wrap gap-6 mt-8 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Social Links Modal */}
      {showSocial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowSocial(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSocial(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect with Me</h3>

            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-red-100 dark:bg-red-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500
                             transition transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
