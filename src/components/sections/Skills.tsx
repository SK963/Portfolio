"use client";

import { motion } from "framer-motion";
import { Database, Globe, Server, Wrench, Cloud, Terminal, LucideIcon } from "lucide-react";
import userData from "@/data/user.json"






const Skills = () => {

  const skillIcons: Record<string, LucideIcon> = {
    "Frontend Development": Globe,
    "Backend Development": Server,
    "DevOps": Wrench,
    "Cloud": Cloud,
    "Databases & SQL": Database,
    "OS": Terminal
  };

   const skill = userData.skills.map((category) => ({
    ...category,
    icon: skillIcons[category.title] || skillIcons["Programming Languages"]
  }));

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_10px_rgba(52,211,153,0.5)]";
    if (level >= 80) return "bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_10px_rgba(96,165,250,0.5)]";
    if (level >= 70) return "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_10px_rgba(250,204,21,0.5)]";
    return "bg-gradient-to-r from-orange-400 to-orange-600 shadow-[0_0_10px_rgba(251,146,60,0.5)]";
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skill.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2 group/skill cursor-default"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm text-foreground/80 group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                      <span className="text-xs font-bold text-muted-foreground group-hover/skill:text-primary transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden border border-border/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg max-w-3xl mx-auto"
        >
          <h4 className="text-lg font-semibold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Proficiency Legend</h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-2.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              <span className="text-sm font-medium text-muted-foreground">Expert (90%+)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
              <span className="text-sm font-medium text-muted-foreground">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
              <span className="text-sm font-medium text-muted-foreground">Intermediate (70-79%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.5)]"></div>
              <span className="text-sm font-medium text-muted-foreground">Beginner (60-69%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
