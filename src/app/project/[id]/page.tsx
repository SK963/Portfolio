"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";
import Mermaid from "@/components/Mermaid";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import userData from "@/data/user.json";

// Helper function to get project data from JSON
const getProjectFromJSON = (id: string) => {
  const projectMappings: { [key: string]: string } = {
    "cake-delight": "Cake Delight",
    "tribelingo": "TribeLingo",
    "hr-analytics-excel": "HR Analytics",
    "ibm-hr-tableau": "IBM HR Analytics"
  };
  
  const projectName = projectMappings[id];
  if (!projectName) {
    console.log('No mapping found for project ID:', id);
    return null;
  }
  
  const foundProject = userData.projects.find(project => 
    project.name.toLowerCase().includes(projectName.toLowerCase()) ||
    project.name.toLowerCase() === projectName.toLowerCase()
  );
  
  console.log('Looking for project:', projectName, 'Found:', foundProject?.name);
  return foundProject;
};

// Project data with all images and details
const projectsData = {
    "cake-delight": {
    id: "cake-delight",
    title: "Cake Delight",
    description: "A scalable, cloud-native E-commerce platform for a premium bakery.",
    fullDescription: "Cake Delight is a modern, scalable, and resilient microservices-based E-commerce application designed for a premium bakery. It features an API Gateway, Catalog Service, Order Service, Rating Service, and Notification Service, seamlessly communicating via REST and Apache Kafka. The system is containerized with Docker and orchestrated using Kubernetes for production readiness.",
    technologies: ["Node.js", "Express", "React", "MongoDB", "Apache Kafka", "Docker", "Kubernetes"],
    features: [
      "API Gateway Pattern",
      "Event-Driven Architecture (Kafka)",
      "JWT-Based Authentication",
      "Kubernetes Orchestration"
    ],
    images: [
      "/assets/projects/cake-delight/image1.png",
      "/assets/projects/cake-delight/image2.png",
      "/assets/projects/cake-delight/image3.png",
      "/assets/projects/cake-delight/image4.png",
      "/assets/projects/cake-delight/image5.png",
      "/assets/projects/cake-delight/image6.png",
      "/assets/projects/cake-delight/image7.png",
      "/assets/projects/cake-delight/image8.png",
      "/assets/projects/cake-delight/image9.png"
    ],
    liveDemo: "https://ckaedelight.onrender.com",
    github: "https://github.com/SK963/cake-delight",
    architecture: 'graph TB\n    User([User / Browser])\n\n    subgraph Edge["Edge Layer / Gateway"]\n        Gateway["API Gateway<br/>Node.js + Express 4 + Mongoose<br/>:3000"]\n    end\n\n    subgraph Frontend["Frontend SPA"]\n        Client["Modern Web Client<br/>Vite + Vanilla JS / CSS<br/>:5173 (Dev) / :8080 (Prod)"]\n    end\n\n    subgraph Microservices["Core Business Microservices"]\n        Catalog["Catalog Service<br/>Node.js / Express / Multer<br/>:3001"]\n        OrderSvc["Order Service<br/>Node.js / Express / KafkaJS<br/>:3002"]\n        RatingSvc["Rating Service<br/>Node.js / Express / Mongoose<br/>:3003"]\n        NotifSvc["Notification Service<br/>Node.js / Express / KafkaJS<br/>:3004"]\n    end\n\n    subgraph EventTier["Event-Driven Message Broker"]\n        Kafka[("Apache Kafka (KRaft Mode)<br/>Topic: order-events<br/>:9092 / :29092")]\n    end\n\n    subgraph Storage["Persistence Layer (MongoDB 7.0)"]\n        MongoAuth[("auth-db")]\n        MongoCatalog[("catalog-db")]\n        MongoOrder[("order-db")]\n        MongoRating[("rating-db")]\n        MongoNotif[("notification-db")]\n    end\n\n    User -->|HTTP / Browser| Client\n    User -->|HTTP REST / JWT| Gateway\n    Client -->|API Calls & Uploads| Gateway\n\n    Gateway -->|Auth / Users| MongoAuth\n    Gateway -->|HTTP Proxy /api/cakes| Catalog\n    Gateway -->|HTTP Proxy /api/basket, /api/orders| OrderSvc\n    Gateway -->|HTTP Proxy /api/cakes/:id/ratings| RatingSvc\n    Gateway -->|HTTP Proxy /api/notifications| NotifSvc\n\n    Catalog --> MongoCatalog\n    OrderSvc --> MongoOrder\n    RatingSvc --> MongoRating\n    NotifSvc --> MongoNotif\n\n    OrderSvc -->|HTTP Stock Deduction| Catalog\n    OrderSvc -->|Publish ORDER_COMPLETED| Kafka\n    Kafka -->|Consume ORDER_COMPLETED| NotifSvc',
    category: "Full Stack, Microservices",
    timeline: "Aug 2026",
    team: "1 member",
    highlights: [
      "Microservices Architecture",
      "Asynchronous Order Processing",
      "Cloud-Native Deployment"
    ]
  },
  "tribelingo": {
    id: "tribelingo",
    title: "TribeLingo",
    description: "AI-powered Kokborok language platform with Translation, POS tagging, and Conversational AI Chatbot.",
    fullDescription: "TribeLingo is a microservices-based system designed to preserve and promote the Kokborok (Tripuri) language, a Tibeto-Burman language spoken in Tripura, India. It provides Machine Translation (NLLB transformer model, fine-tuned on a custom Kokborok–English parallel corpus), Morphological POS Tagging (BiLSTM model, custom-trained for Kokborok morphological segmentation and UPOS tagging), and a Conversational Chatbot (Gemma-2B-it model fine-tuned with LoRA on a curated Kokborok language & culture dataset). All models are trained and fine-tuned on a custom Kokborok dataset and served behind a unified microservices API gateway.",
    technologies: ["React.js", "Express.js", "Python", "K8s", "Postgres", "Redis", "Figma"],
    features: [
      "Machine Translation with NLLB Transformer",
      "Morphological POS Tagging (BiLSTM)",
      "Conversational Chatbot (Gemma-2B + LoRA)",
      "Microservices Architecture"
    ],
    images: [
      "/assets/projects/tribelingo/image.png",
      "/assets/projects/tribelingo/image 1.png",
      "/assets/projects/tribelingo/image 2.png",
      "/assets/projects/tribelingo/image 3.png",
      "/assets/projects/tribelingo/image 4.png",
      "/assets/projects/tribelingo/image 15.png",
      "/assets/projects/tribelingo/image 16.png"
    ],
    liveDemo: "https://tribelingo.onrender.com/",
    github: "https://github.com/SK963/TribeLingo",
    architecture: 'graph TB\n    User([User / Browser])\n\n    subgraph Edge["Edge Layer - K8s"]\n        GWF["NGINX Gateway Fabric<br/>LoadBalancer :80"]\n    end\n\n    subgraph Frontend\n        Client["React + Vite + Tailwind<br/>tribelingo-client :80"]\n    end\n\n    subgraph GatewaySvc["API Gateway"]\n        GW["Node.js / Express / Prisma<br/>tribelingo-gateway :4000"]\n    end\n\n    subgraph ML["AI / ML Microservices - Custom Models"]\n        Translate["Translation Service<br/>NLLB Transformer<br/>:4001"]\n        POS["POS Tagging Service<br/>BiLSTM Model<br/>:4002"]\n        Chatbot["Chatbot Service<br/>Gemma-2B + LoRA<br/>:4003"]\n    end\n\n    subgraph Storage\n        Postgres[("PostgreSQL 15<br/>User Data & History")]\n        Redis[("Redis 7<br/>Caching & Sessions")]\n    end\n\n    subgraph External\n        GoogleOAuth["Google / GitHub OAuth"]\n    end\n\n    User -->|HTTP| GWF\n    GWF -->|"/* static assets"| Client\n    GWF -->|"/api/*"| GW\n\n    Client -->|"/api/* calls"| GW\n\n    GW <-->|OAuth2| GoogleOAuth\n    GW <-->|Prisma ORM| Postgres\n    GW <-->|ioredis| Redis\n\n    GW -->|HTTP Proxy| Translate\n    GW -->|HTTP Proxy| POS\n    GW -->|HTTP Proxy| Chatbot',
    category: "Data Science, Web",
    timeline: "May 2026",
    team: "1 member",
    highlights: [
      "AI-powered language preservation",
      "Custom-trained BiLSTM and NLLB models",
      "LoRA fine-tuned Gemma-2B-it model"
    ]
  },
  "hr-analytics-excel": {
    id: "hr-analytics-excel",
    title: "HR Analytics Excel Dashboard",
    description: "An Excel-based analysis dashboard for Human Resources data.",
    fullDescription: "A comprehensive Excel dashboard created to analyze and track key Human Resources metrics. It provides an intuitive interface for viewing employee data, attrition rates, and overall organizational health through dynamic charts and tables.",
    technologies: ["Excel"],
    features: [
      "Data visualization and reporting",
      "Employee attrition analysis",
      "Performance tracking",
      "Interactive dashboard"
    ],
    images: [
      "/assets/projects/hr-analytics-excel/image.png"
    ],
    liveDemo: "https://1drv.ms/x/c/b722794a7ace580f/EfSivCOtm6hGiFht4PuQ1J8BLjoiTTwH48H_5w3zHd6Efg?e=kos38f",
    github: "#",
    category: "Data Science",
    timeline: "2025",
    team: "1 member",
    highlights: [
      "Interactive Excel Dashboard",
      "Key HR Metrics Visualization"
    ]
  },
  "ibm-hr-tableau": {
    id: "ibm-hr-tableau",
    title: "IBM HR Analytics Tableau Dashboard",
    description: "A Tableau visualization dashboard for analyzing IBM HR data.",
    fullDescription: "An advanced Tableau dashboard built to analyze IBM's Human Resources dataset. This visualization project uncovers insights into employee attrition, satisfaction levels, and demographics, providing actionable data for HR professionals.",
    technologies: ["Tableau", "Excel"],
    features: [
      "Advanced data visualization",
      "Interactive Tableau dashboards",
      "HR metrics tracking",
      "Predictive analytics"
    ],
    images: [
      "/assets/projects/ibm-hr-tableau/Screenshot_2025-05-29_205004.png",
      "/assets/projects/ibm-hr-tableau/image.png"
    ],
    liveDemo: "https://public.tableau.com/views/IBMHRAnalytics_17485310101300/Dashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    github: "#",
    category: "Data Science",
    timeline: "2025",
    team: "1 member",
    highlights: [
      "Published on Tableau Public",
      "In-depth attrition analysis"
    ]
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData[resolvedParams.id as keyof typeof projectsData];
  const jsonProject = getProjectFromJSON(resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Use JSON data if available, otherwise fallback to hardcoded data
  const projectData = {
    ...project,
    liveDemo: jsonProject?.liveDemo || project.liveDemo || '#',
    github: jsonProject?.github || project.github || '#',
    images: project.images
  };

  // Debug logging to check if JSON data is loaded correctly
  console.log('Project ID:', resolvedParams.id);
  console.log('JSON Project:', jsonProject);
  console.log('Final Project Data:', projectData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-muted/50 via-muted/70 to-muted/50 border-b border-border/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-sm rounded-full shadow-lg">
                {project.category}
              </span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* About Project */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-tl from-card via-card/80 to-muted/30 border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Architecture */}
            {(project as { architecture?: string }).architecture && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 overflow-x-auto text-sm text-center">
                  <Mermaid chart={(project as { architecture?: string }).architecture!} />
                </div>
              </div>
            )}

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-tr from-muted/20 via-card to-muted/40 border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 card-3d rounded-lg bg-gradient-to-br from-card to-muted/30"
                  >
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-gradient-to-bl from-card via-muted/20 to-card border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="px-4 py-2 card-3d rounded-lg text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar - 30% */}
          <div className="lg:col-span-2 space-y-6">
            {/* All Project Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-muted/30 via-card to-muted/50 border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">All Screenshots</h3>
              <div className="space-y-3">
                {projectData.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-border/50 shadow-sm bg-gradient-to-br from-card to-muted/20"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-tl from-card via-muted/20 to-card border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Project Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-muted/30 to-card border border-border/30">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Timeline: {project.timeline}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-card to-muted/30 border border-border/30">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Team: {project.team}</span>
                </div>
              </div>
            </motion.div>

            {/* Project Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-gradient-to-tr from-muted/40 via-card to-muted/20 border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Key Highlights</h3>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200/30 dark:border-emerald-800/30">
                    <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 p-4 rounded-lg bg-gradient-to-bl from-card via-muted/30 to-card border border-border/50 shadow-lg"
            >
              <motion.a
                href={projectData.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </motion.a>
              <motion.a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full card-3d hover:bg-muted/30 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Code
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
