import { motion } from "framer-motion";
import { GraduationCap, BookOpenText, LineChart } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap className="text-white w-6 h-6" />,
    degree: "BSc (Hons) in IT – Specializing in Data Science",
    institute: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2020 – 2024",
    highlights: [
      "Machine Learning",
      "Data Analytics",
      "Internship at Bluechip Technologies",
    ],
  },
  {
    icon: <BookOpenText className="text-white w-6 h-6" />,
    degree: "BSc in Applied Science – Specializing in Mathematics",
    institute: "Rajarata University of Sri Lanka",
    duration: "2019 – 2023",
    highlights: [
      "Statistics & Probability",
      "Computational Mathematics",
      "Leadership – RUSL Hiking Club VP",
    ],
  },
  
];

function Education() {
  return (
    <div>
         <section id="education" className="py-16 bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">Education</h2>
          <p className="text-gray-400 mt-2">My academic journey and achievements</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400/60 via-white/20 to-slate-600 rounded-full" />

          {/* Timeline Entries */}
          <div className="space-y-20">
            {educationData.map((edu, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-teal-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-slate-900">
                    {edu.icon}
                  </div>

                  {/* Spacer for alignment */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-10" : "md:pl-10"}`} />

                  {/* Card */}
                  <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/10">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-sm text-teal-400 mt-1">{edu.institute}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {edu.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Education