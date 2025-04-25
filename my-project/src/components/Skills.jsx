import { motion } from "framer-motion";
import { Database, BarChart2, Activity, Terminal, CheckCircle } from "lucide-react";

const technicalSkills = [
  { name: "Python", icon: <Terminal className="w-6 h-6" /> },
  { name: "Pandas", icon: <BarChart2 className="w-6 h-6" /> },
  { name: "NumPy", icon: <Activity className="w-6 h-6" /> },
  { name: "TensorFlow", icon: <Terminal className="w-6 h-6" /> },
  { name: "SQL", icon: <Database className="w-6 h-6" /> },
  { name: "Power BI", icon: <BarChart2 className="w-6 h-6" /> },
];

const softSkills = [
  { name: "Leadership", icon: <CheckCircle className="w-6 h-6 text-teal-400" /> },
  { name: "Problem Solving", icon: <CheckCircle className="w-6 h-6 text-teal-400" /> },
  { name: "Communication", icon: <CheckCircle className="w-6 h-6 text-teal-400" /> },
  { name: "Teamwork", icon: <CheckCircle className="w-6 h-6 text-teal-400" /> },
  { name: "Decision Making", icon: <CheckCircle className="w-6 h-6 text-teal-400" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-inter relative inline-block">
            My Skills
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 left-0 h-1 bg-teal-500"
            />
          </h2>
          <p className="text-gray-400 mt-2">Tools, technologies & traits that power my data journey</p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <p className="text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <p className="text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
