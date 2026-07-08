"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram , Code, Sparkles ,NotebookPen   } from "lucide-react";
import Image from "next/image";
import userData from "@/data/user.json"




const Hero = () => {

  const usertechnologies = userData.technologies;
  const {github , linkedin , instagram , leetcode ,  notion_notes} = userData.Socials
  const mail = userData.contact.email;

  const usersocials = [
  { 
    icon: Mail, 
    href: `mailto:${mail}`, 
    color: "hover:bg-green-100 dark:hover:bg-green-900/30", 
    iconColor: "text-green-700 dark:text-green-300",
    type: "icon"
  },
  { 
    icon: Github,
    href: github, 
    color: "hover:bg-gray-100 dark:hover:bg-gray-800", 
    iconColor: "text-gray-800 dark:text-white",
    type: "icon"
  },
  { 
    icon: Linkedin, 
    href: linkedin, 
    color: "hover:bg-blue-100 dark:hover:bg-blue-900/30", 
    iconColor: "text-blue-700 dark:text-blue-300",
    type: "icon"
  },
  { 
    icon: Code, 
    href: leetcode, 
    color: "hover:bg-amber-100 dark:hover:bg-amber-900/30", 
    iconColor: "text-amber-600 dark:text-amber-300",
    type: "icon"   // important
  },
  { 
    icon: Instagram, 
    href: instagram,
    color: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-300",
    type: "icon"
  },
  { 
    icon: NotebookPen, 
    href: notion_notes,
    color: "hover:bg-yellow-100 dark:hover:bg-yellow-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-300",
    type: "icon"
  }
];

  // Predefined positions for floating elements around profile
  const floatingElementPositions = [
    { top: 15, left: 55 },  // Math.sin(0 * 0.785) = 0, Math.cos(0 * 0.785) = 1
    { top: 43, left: 69 },  // Math.sin(1 * 0.785) ≈ 0.71, Math.cos(1 * 0.785) ≈ 0.71
    { top: 55, left: 55 },  // Math.sin(2 * 0.785) ≈ 1, Math.cos(2 * 0.785) ≈ 0
    { top: 43, left: 41 },  // Math.sin(3 * 0.785) ≈ 0.71, Math.cos(3 * 0.785) ≈ -0.71
    { top: 15, left: 15 },  // Math.sin(4 * 0.785) ≈ 0, Math.cos(4 * 0.785) ≈ -1
    { top: -13, left: 41 }, // Math.sin(5 * 0.785) ≈ -0.71, Math.cos(5 * 0.785) ≈ -0.71
    { top: -25, left: 55 }, // Math.sin(6 * 0.785) ≈ -1, Math.cos(6 * 0.785) ≈ 0
    { top: -13, left: 69 }  // Math.sin(7 * 0.785) ≈ -0.71, Math.cos(7 * 0.785) ≈ 0.71
  ];

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 20 },
    { left: 85, top: 25 },
    { left: 30, top: 60 },
    { left: 70, top: 15 },
    { left: 45, top: 80 },
    { left: 90, top: 55 },
    { left: 10, top: 75 },
    { left: 60, top: 35 },
    { left: 25, top: 45 },
    { left: 80, top: 70 },
    { left: 55, top: 10 },
    { left: 35, top: 90 }
  ];

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  // Background grid animation
  const gridVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear" as const,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <motion.div
        variants={gridVariants}
        animate="animate"
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Greeting with Icon */}
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  👋
                </motion.div>
                <span className="text-lg font-medium text-blue-600 dark:text-blue-400">Hello there!</span>
              </motion.div>

            {/* username */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I&apos;m{" "}
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent relative"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  {userData.name}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                </motion.span>
              </h1>

                {/* Job Role  */}
              <motion.h2 
                className="text-xl md:text-2xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-gray-700 dark:text-gray-300">{userData.title} </span>
                <motion.span 
                  className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
               
                </motion.span>
              </motion.h2>

                  {/* one liner */}
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Passionate about creating{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">innovative solutions</span>{" "}
                and building{" "}
                <span className="text-purple-600 dark:text-purple-400 font-medium">robust applications</span>{" "}
                with modern technologies. I love turning ideas into reality through code.
              </motion.p>


              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {usertechnologies.map((tech, index) => (
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
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                Let&apos;s Connect
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Mail className="h-4 w-4" />
                </motion.div>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="flex gap-4"
>
  {usersocials.map(({ icon: Icon, href, color, iconColor }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-white dark:bg-gray-800 ${color} rounded-lg transition-all duration-200 shadow-md border border-gray-200 dark:border-gray-700`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <Icon className={`h-5 w-5 ${iconColor}`} />
    </motion.a>
  ))}
</motion.div>

          </motion.div>


          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Animated Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                >
                  <div className="w-full h-full bg-background rounded-full" />
                </motion.div>

                {/* Floating Elements */}
                {floatingElementPositions.map((position, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    style={{
                      top: `${position.top + 15}%`,
                      left: `${position.left + 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Pulsing Background */}
                <motion.div 
                  className="absolute inset-4 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="relative z-10 w-full h-full"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/images/profile.png"
                    alt= {userData.name}
                    fill
                    className="object-cover rounded-full shadow-2xl"
                    priority
                  />
                  
                  {/* Floating Code Icons */}
                  <motion.div
                    className="absolute -top-4 -right-4 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="h-4 w-4" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white shadow-lg"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border-2 border-blue-300 dark:border-blue-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg cursor-pointer hover:scale-110 transition-transform"
          >
            <ArrowDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.p
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center cursor-pointer"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
