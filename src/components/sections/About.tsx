"use client";

import { motion } from "framer-motion";
import { Code, Globe, Laptop, Users } from "lucide-react";
import userData from "@/data/user.json"

const About = () => {

  const {information  , stats } = userData.about;
  
   
  const highlightsData = userData.about.highlights;

  
  const icons = [Code, Globe, Laptop, Users];

  // merge icons with data safely
  const highlights = highlightsData.map((item, index) => ({
    ...item,
    icon: icons[index] || Code // fallback to Code if out of range
  }));


  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {information.description}
          </p>
        </motion.div>

        {/* information  serction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {information.sectionTitle}
            </h3>
            <p className="text-muted-foreground">
              {information.introduction}
            </p>
            <p className="text-muted-foreground">
             {information.philosophy}
            </p>
            <p className="text-muted-foreground">
              {information.personalNote}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-lg shadow-lg border border-border/50"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
