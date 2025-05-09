/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Download, Sparkles, Users, Lightbulb, BarChart4 } from 'lucide-react';

const traits = [
  { icon: <Lightbulb className="w-5 h-5 text-red-900" />, label: 'Problem Solver' },
  { icon: <Users className="w-5 h-5 text-red-900" />, label: 'Team Leader' },
  { icon: <BarChart4 className="w-5 h-5 text-red-900" />, label: 'Data Enthusiast' },
  { icon: <Sparkles className="w-5 h-5 text-red-900" />, label: 'Decision Maker' },
];

function About() {
  return (
    <div>
          <section id="about" className="py-16 px-4 md:px-12 bg-red-50 text-red-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section Title */}
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-inter">About Me</h2>
            <motion.div
              className="absolute bottom-0 left-0 h-[3px] w-20 bg-red-600 text-center rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Professional Summary */}
          <p className="text-lg text-gray-900 leading-relaxed">
            I hold dual degrees in <span className="text-red-800 font-semibold">Data Science</span> and <span className="text-red-800 font-semibold">Mathematics</span>, with hands-on experience as a Machine Learning Intern at <span className="text-red-700">Bluechip Technologies Asia</span>. As the former Vice President of the RUSL Hiking Club, I bring leadership and strategic thinking to every project. I'm deeply passionate about translating complex data into <span className="text-red-900 font-semibold">clear, actionable insights</span> that drive impact.
          </p>

          {/* Soft Skills */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {traits.map((trait, index) => (
              <div key={index} className="flex items-center gap-3 text-red-900">
                {trait.icon}
                <span>{trait.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons & Quote */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="Resume.pdf"
              download
              className="flex items-center gap-2 bg-red-700 hover:bg-red-900 text-white px-5 py-3 rounded-lg shadow-md transition"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <p className="text-gray-900 italic text-sm">
              “Let data tell the story — I just translate.”
            </p>
          </div>
        </motion.div>

        {/* Right - Visual/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Replace the below with Lottie animation or your image */}
          <img
            src="sample.jpeg"
            alt="Machine Learning Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg bg-gray-600 backdrop-blur-sm p-4"
          />
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default About