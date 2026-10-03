"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import userData from "@/data/user.json";

// Helper function to get project data from JSON
const getProjectDataFromJSON = (projectId: string) => {
  const projectMappings: { [key: string]: string } = {
    "cake-delight": "Cake Delight",
    "tribelingo": "TribeLingo",
    "hr-analytics-excel": "HR Analytics",
    "ibm-hr-tableau": "IBM HR Analytics"
  };
  
  const projectName = projectMappings[projectId];
  if (!projectName) return null;
  
  return userData.projects.find(project => 
    project.name.toLowerCase().includes(projectName.toLowerCase()) ||
    project.name.toLowerCase() === projectName.toLowerCase()
  );
};

const Projects = () => {
  // Base projects structure with hardcoded data as fallback
  const baseProjects = [
    {
      id: "cake-delight",
      title: "Cake Delight",
      description: "A scalable, cloud-native E-commerce platform for a premium bakery.",
      image: "/assets/projects/cake-delight/image1.png",
      technologies: ["Node.js", "Express", "React", "MongoDB", "Apache Kafka", "Docker", "Kubernetes"],
      features: [
        "API Gateway Pattern",
        "Event-Driven Architecture (Kafka)",
        "JWT-Based Authentication",
        "Kubernetes Orchestration"
      ],
      liveDemo: "https://cakedelight.onrender.com/",
      github: "https://github.com/SK963/cake-delight",
      category: "Full Stack, Microservices",
      timeline: "Aug 2026",
      team: "1 member"
    },
    {
      id: "tribelingo",
      title: "TribeLingo",
      description: "AI-powered Kokborok language platform with Translation, POS tagging, and Conversational AI Chatbot.",
      image: "/assets/projects/tribelingo/image 15.png",
      technologies: ["React.js", "Express.js", "Python", "K8s", "Postgres", "Redis", "Figma"],
      features: [
        "Machine Translation with NLLB Transformer",
        "Morphological POS Tagging (BiLSTM)",
        "Conversational Chatbot (Gemma-2B + LoRA)",
        "Microservices Architecture"
      ],
      liveDemo: "https://tribelingo.onrender.com/",
      github: "https://github.com/SK963/TribeLingo-Gateway",
      category: "Data Science, Web",
      timeline: "May 2026",
      team: "1 member"
    },
    {
      id: "hr-analytics-excel",
      title: "HR Analytics Excel Dashboard",
      description: "An Excel-based analysis dashboard for Human Resources data.",
      image: "/assets/projects/hr-analytics-excel/image.png",
      technologies: ["Excel"],
      features: [
        "Data visualization and reporting",
        "Employee attrition analysis",
        "Interactive dashboard"
      ],
      liveDemo: "https://1drv.ms/x/c/b722794a7ace580f/EfSivCOtm6hGiFht4PuQ1J8BLjoiTTwH48H_5w3zHd6Efg?e=kos38f",
      github: "#",
      category: "Data Science",
      timeline: "2025",
      team: "1 member"
    },
    {
      id: "ibm-hr-tableau",
      title: "IBM HR Analytics Tableau Dashboard",
      description: "A Tableau visualization dashboard for analyzing IBM HR data.",
      image: "/assets/projects/ibm-hr-tableau/image.png",
      technologies: ["Tableau", "Excel"],
      features: [
        "Advanced data visualization",
        "Interactive Tableau dashboards",
        "HR metrics tracking"
      ],
      liveDemo: "https://public.tableau.com/views/IBMHRAnalytics_17485310101300/Dashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      github: "#",
      category: "Data Science",
      timeline: "2025",
      team: "1 member"
    }
  ];

  // Enhanced projects with JSON data integration
  const projects = baseProjects.map(project => {
    const jsonData = getProjectDataFromJSON(project.id);
    return {
      ...project,
      liveDemo: jsonData?.liveDemo || project.liveDemo,
      github: jsonData?.github || project.github
    };
  });

  const categories = ["All", "Web", "Data Science"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 cursor-default"
            whileHover={{ 
              scale: 1.05,
              backgroundImage: "linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto cursor-default"
            whileHover={{ 
              scale: 1.02,
              color: "#10b981"
            }}
            transition={{ duration: 0.3 }}
          >
            A showcase of my work including full-stack applications, machine learning projects, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded border border-border/50">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-1">
                        <span className="h-1 w-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-border hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </motion.a>
                  </div>
                  <motion.a
                    href={`/project/${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-border/50"
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
