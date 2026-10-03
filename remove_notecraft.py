import json
import os

# Update user.json
with open('src/data/user.json', 'r') as f:
    data = json.load(f)

# Filter out NoteCraft
data['projects'] = [p for p in data['projects'] if p['id'] != 'notecraft']

with open('src/data/user.json', 'w') as f:
    json.dump(data, f, indent=2)

# Update layout.tsx
with open('src/app/project/[id]/layout.tsx', 'r') as f:
    layout = f.read()
layout = layout.replace("{ id: 'notecraft' },\n    ", "")
with open('src/app/project/[id]/layout.tsx', 'w') as f:
    f.write(layout)

# Update page.tsx
with open('src/app/project/[id]/page.tsx', 'r') as f:
    page = f.read()

# This part is a bit tricky, let's use regex or string replace.
page = page.replace('"notecraft": "NoteCraft",\n    ', '')

# Remove from projectsData
notecraft_data = """  "notecraft": {
    id: "notecraft",
    title: "NoteCraft",
    description: "A note taking application with a clean interface and user dashboard.",
    fullDescription: "NoteCraft is a comprehensive note-taking application designed with a focus on simplicity and productivity. It features a clean, intuitive interface that allows users to quickly capture ideas, organize thoughts, and access their notes from anywhere. Built with a robust full-stack architecture, it ensures secure data storage and fast performance.",
    technologies: [ 'React.js', 'Express.js', 'MongoDB', 'Node.js' ],
    features: [
      'User Authentication (Login/Signup)',
      'Secure Notes Management',
      'Clean, Distraction-Free Interface',
      'Interactive User Dashboard'
    ],
    images: [
      '/assets/projects/notecraft/image.png',
      '/assets/projects/notecraft/Screenshot_2025-03-07_143244.png',
      '/assets/projects/notecraft/Screenshot_2025-03-07_143316.png',
      '/assets/projects/notecraft/Screenshot_2025-03-07_143519.png',
      '/assets/projects/notecraft/Screenshot_2025-03-07_143536.png',
      '/assets/projects/notecraft/Screenshot_2025-03-07_143547.png'
    ],
    liveDemo: 'https://notemehere.netlify.app/',
    github: 'https://github.com/SK963/Notecraft',
    category: 'Web',
    timeline: 'July 2025',
    team: '1 member',
    highlights: [
      'Secure user authentication',
      'Responsive and clean design',
      'Real-time note updates'
    ]
  },
"""
page = page.replace(notecraft_data, "")

with open('src/app/project/[id]/page.tsx', 'w') as f:
    f.write(page)

print("Updates applied successfully.")
