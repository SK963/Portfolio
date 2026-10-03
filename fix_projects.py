import json

with open('src/components/sections/Projects.tsx', 'r') as f:
    content = f.read()

# Fix getProjectDataFromJSON mapping
content = content.replace('"tribelingo": "TribeLingo",', '"cake-delight": "Cake Delight",\n    "tribelingo": "TribeLingo",')

# Add to baseProjects
cake_delight_obj = """    {
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
      id: "tribelingo","""

content = content.replace('    {\n      id: "tribelingo",', cake_delight_obj)

with open('src/components/sections/Projects.tsx', 'w') as f:
    f.write(content)

print("Fixed Projects.tsx")
