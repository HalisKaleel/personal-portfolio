import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpenText,
  Calendar,
  Award,
  ChevronRight,
} from 'lucide-react';

const educationData = [
  {
    id: 1,
    icon: <GraduationCap className="w-6 h-6" />,
    degree: "BSc (Hons) in IT – Specializing in Data Science",
    institute: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2020 – 2024",
    highlights: [
      "Machine Learning",
      "Data Analytics",
      "Internship at Bluechip Technologies",
    ],
    achievements: [
      "Dean's List - 2022, 2023",
      "Best Research Project Award",
      "Data Science Club President",
    ],
  },
  {
    id: 2,
    icon: <BookOpenText className="w-6 h-6" />,
    degree: "BSc in Applied Science – Specializing in Mathematics",
    institute: "Rajarata University of Sri Lanka",
    duration: "2019 – 2023",
    highlights: [
      "Statistics & Probability",
      "Computational Mathematics",
      "Leadership – RUSL Hiking Club VP",
    ],
    achievements: [
      "First Class Honors",
      "Student Representative",
      "Research Publication in Mathematics",
    ],
  },
];

const Education = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-red-50 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-4" />
          <p className="text-lg text-gray-900 dark:text-gray-900 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-red-900 text-blue-100 rounded-lg">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-900 ">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-900 ">
                    {edu.institute}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-700  mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700  mb-3">
                  Key Focus Areas
                </h4>
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 ">
                      <ChevronRight className="w-4 h-4 text-red-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700  mb-3">
                  Notable Achievements
                </h4>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 ">
                      <Award className="w-4 h-4 text-red-500" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;