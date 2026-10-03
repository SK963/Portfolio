import json
import os

# Update user.json
with open('src/data/user.json', 'r') as f:
    data = json.load(f)

new_project = {
  "type": "inuse",
  "id": "cake-delight",
  "name": "Cake Delight",
  "title": "Cake Delight - Microservices Cloud-Native Bakery Platform",
  "description": "A scalable, cloud-native E-commerce platform for a premium bakery.",
  "image": "/assets/projects/cake-delight/image1.png",
  "technologies": ["Node.js", "Express", "React", "MongoDB", "Apache Kafka", "Docker", "Kubernetes"],
  "features": [
    "API Gateway",
    "Catalog Service",
    "Order Service",
    "Rating & Notification Services",
    "JWT Authentication"
  ],
  "liveDemo": "#",
  "github": "https://github.com/SK963/cake-delight",
  "category": "Full Stack, Microservices",
  "timeline": "Aug 2026",
  "team": "1 member"
}
data['projects'].insert(0, new_project)

with open('src/data/user.json', 'w') as f:
    json.dump(data, f, indent=2)

# Update layout.tsx
with open('src/app/project/[id]/layout.tsx', 'r') as f:
    layout = f.read()
layout = layout.replace("{ id: 'tribelingo' },", "{ id: 'cake-delight' },\n    { id: 'tribelingo' },")
with open('src/app/project/[id]/layout.tsx', 'w') as f:
    f.write(layout)

# Update page.tsx
with open('src/app/project/[id]/page.tsx', 'r') as f:
    page = f.read()

page = page.replace('"tribelingo": "TribeLingo",', '"cake-delight": "Cake Delight",\n    "tribelingo": "TribeLingo",')

project_data_code = """  "cake-delight": {
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
    liveDemo: "#",
    github: "https://github.com/SK963/cake-delight",
    category: "Full Stack, Microservices",
    timeline: "Aug 2026",
    team: "1 member",
    highlights: [
      "Microservices Architecture",
      "Asynchronous Order Processing",
      "Cloud-Native Deployment"
    ]
  },
  "tribelingo": {"""

page = page.replace('"tribelingo": {', project_data_code)

with open('src/app/project/[id]/page.tsx', 'w') as f:
    f.write(page)

print("Updates applied successfully.")
