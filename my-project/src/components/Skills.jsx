import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import {
  Database,
  BarChart2,
  Activity,
  Terminal,
  Code2,
  LineChart,
  TestTube2,
  FileSearch,
  FlaskConical,
  GitBranch,
  FileSpreadsheet,
  BrainCircuit,
} from 'lucide-react';
import { SiPython, SiR, SiMysql, SiOracle, SiJupyter, SiGooglecolab, SiGithub } from 'react-icons/si';

const skillsData = [
  {
    category: "Data Science & Analytics",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: [
      { name: "Probability and Statistics", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Data Visualization", level: 88 },
      { name: "Data Cleaning and Preprocessing", level: 92 },
      { name: "Hypothesis Testing", level: 87 },
      { name: "Exploratory Data Analysis (EDA)", level: 90 },
    ],
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 95, subSkills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "OpenCV"] },
      { name: "R", level: 85, subSkills: ["ggplot2", "dplyr", "Shiny"] },
      { name: "C", level: 80 },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MSSQL Server", level: 88 },
      { name: "Oracle", level: 85 },
      { name: "SQL", level: 92, subSkills: ["Query Optimization", "Data Modeling"] },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "RStudio", level: 90 },
      { name: "Excel", level: 95 },
      { name: "Jupyter Notebooks", level: 92 },
      { name: "Google Colab", level: 90 },
      { name: "Git/GitHub", level: 88 },
      { name: "Minitab", level: 85 },
      { name: "SAS", level: 82 },
    ],
  },
];

const getSkillIcon = (category, skillName) => {
  const lowerName = skillName.toLowerCase();
  
  if (category === "Programming Languages") {
    if (lowerName.includes("python")) return <SiPython className="w-5 h-5" />;
    if (lowerName.includes("r")) return <SiR className="w-5 h-5" />;
    return <Code2 className="w-5 h-5" />;
  }
  
  if (category === "Databases") {
    if (lowerName.includes("mysql")) return <SiMysql className="w-5 h-5" />;
    if (lowerName.includes("mssql")) return <Database className="w-5 h-5" />;
    if (lowerName.includes("oracle")) return <SiOracle className="w-5 h-5" />;
    return <Database className="w-5 h-5" />;
  }
  
  if (category === "Tools & Technologies") {
    if (lowerName.includes("jupyter")) return <SiJupyter className="w-5 h-5" />;
    if (lowerName.includes("colab")) return <SiGooglecolab className="w-5 h-5" />;
    if (lowerName.includes("git")) return <SiGithub className="w-5 h-5" />;
    if (lowerName.includes("sas")) return <SiJupyter className="w-5 h-5" />;
    if (lowerName.includes("excel")) return <FileSpreadsheet className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  }
  
  if (category === "Data Science & Analytics") {
    if (lowerName.includes("power bi")) return <BarChart2 className="w-5 h-5" />;
    if (lowerName.includes("visualization")) return <LineChart className="w-5 h-5" />;
    if (lowerName.includes("hypothesis")) return <TestTube2 className="w-5 h-5" />;
    if (lowerName.includes("eda")) return <FileSearch className="w-5 h-5" />;
    return <Activity className="w-5 h-5" />;
  }
  
  return <Activity className="w-5 h-5" />;
};

const Skills = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical proficiency and tools that power my data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(category.category, skill.name)}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-teal-500 rounded-full"
                      />
                    </div>

                    {/* Sub-skills */}
                    {skill.subSkills && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skill.subSkills.map((subSkill, subIdx) => (
                          <span
                            key={subIdx}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                          >
                            {subSkill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
