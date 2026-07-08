"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import userData from "@/data/user.json"

const Education = () => {
  
  const education = userData.education;

  const certifications = userData.certifications;

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education and Certifications Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic background and continuous learning journey in technology and software development.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-800 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <h5 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {edu.field}
                  </h5>
                  <h6 className="text-gray-300 font-medium">{edu.institution}</h6>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-700/70 rounded-full">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-700/70 rounded-full">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-blue-900/70 text-blue-300 rounded-full">
                    <Award className="h-3 w-3" />
                    {edu.grade}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h6 className="font-semibold text-sm mb-2 text-blue-300">Key Achievements:</h6>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achIdx) => (
                      <div key={achIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-800 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                    <p className="text-gray-300 font-medium">{cert.issuer}</p>
                    
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-900/50 text-green-300 rounded-full text-xs">
                    <Calendar className="h-3 w-3" />
                    {cert.year}
                  </div>
                </div>
                <motion.div
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {cert.skills.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800/50"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

                {cert.description && (
                  <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                <Award className="h-3 w-3" />
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono bg-gray-700/50 px-2 py-1 rounded hover:bg-green-700/40 hover:text-green-300 transition-colors duration-300"
                  >
                    🔗 {cert.id && `${cert.id}`}
                  </a>
                ) : (
                  <span className="font-mono bg-gray-700/50 px-2 py-1 rounded">ID: {cert.id || "N/A"}</span>
                )}
              </div>

              </motion.div>
            ))}

            {/* Additional Skills Section */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-gray-800 border border-border/50 shadow-lg text-white"
            >
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Additional Skills
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {["Problem Solving", "Team Leadership", "Project Management", "Technical Writing"].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 bg-orange-400 rounded-full"></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
