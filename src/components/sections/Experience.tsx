"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Star, ArrowRight } from "lucide-react";
import userData from "@/data/user.json"


const Experience = () => {

  const {title , workexperience} = userData.experience;

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-default"
            whileHover={{ 
              scale: 1.05,
              backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #10b981)",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg cursor-default"
            whileHover={{ 
              scale: 1.02,
              color: "#8b5cf6"
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {workexperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-8 md:left-1/2 md:-ml-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center"
                >
                  <Building className="h-3 w-3 text-white" />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-card via-card/90 to-muted/30 border border-border/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : exp.type === 'Internship'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1 px-2 py-1 bg-muted/30 rounded-full">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-muted/30 rounded-full">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Image if available */}
                    {exp.image && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-4 overflow-hidden rounded-lg border border-border/30"
                      >
                        <img 
                          src={exp.image} 
                          alt={exp.company} 
                          className="w-full h-auto object-cover max-h-48 hover:scale-105 transition-transform duration-500" 
                        />
                      </motion.div>
                    )}

                    {/* Description */}
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.slice(0, 1).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Achievements */}
                      <div className="pt-3 border-t border-border/30">
                        <h5 className="font-semibold text-sm mb-2 text-emerald-600 dark:text-emerald-400">Key Achievements:</h5>
                        <div className="space-y-1">
                          {exp.achievements.map((achievement, achIdx) => (
                            <div key={achIdx} className="flex items-start gap-2">
                              <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-3 border-t border-border/30">
                        <h5 className="font-semibold text-sm mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={techIdx}
                              className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-800/50 cursor-default"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "#3b82f6",
                                color: "#ffffff",
                                borderColor: "#3b82f6",
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
