export const portfolioData = {
  personal: {
    name: "Omomijolaoluwa Akinrogunde",
    title: "Full Stack Developer",
    email: "akinrogundecodenamemomi@gmail.com",
    phone: "+2349011123434",
    location: "Nigeria",
    portfolio: "codename-rho.vercel.app",
    github: "https://github.com/codenamemomi",
    linkedin: "https://linkedin.com/in/yourprofile" // Add your LinkedIn
  },
  
  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 }
    ],
    backend: [
      { name: "Python", level: 88 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "Flask", level: 80 },
      { name: "Node.js", level: 75 }
    ],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    devops: ["Docker", "GitHub Actions", "NGINX", "Vercel", "Render"],
    blockchain: ["Hedera SDK", "Smart Contracts"],
    tools: ["Git", "REST APIs", "CI/CD", "JWT", "Stripe API"]
  },

  projects: [
    {
      id: 1,
      title: "KANEC IMPACT",
      description: "Blockchain-powered platform for transparent donations using Hedera's DLT. Ensures 100% transparency in charitable giving to African impact projects.",
      longDescription: "A revolutionary platform leveraging blockchain technology to create immutable, transparent records of all donations. Built on Hedera's high-performance distributed ledger with AI-powered analytics and real-time tracking.",
      image: "/images/kanec-impact.jpg",
      technologies: ["FastAPI", "React", "PostgreSQL", "Hedera SDK", "Docker", "Redis", "Celery"],
      liveUrl: "https://kanec.vercel.app",
      githubUrl: "https://github.com/codenamemomi/KANEC_IMPACT",
      featured: true
    },
    {
      id: 2,
      title: "Konasalti Tech School",
      description: "End-to-end development of an educational platform with course management and user authentication systems.",
      technologies: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "NGINX"],
      liveUrl: "https://Konasalti.com",
      githubUrl: "https://github.com/codenamemomi/Konasalti",
      featured: true
    },
    {
      id: 3,
      title: "Clust - Event Planner",
      description: "Minimalist web application for creating, managing, and tracking events with automated reminders.",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Celery"],
      liveUrl: "#",
      githubUrl: "https://github.com/codenamemomi/clust",
      featured: true
    },
    {
      id: 4,
      title: "Outbound AI Calling",
      description: "Business calling and automation platform with voice call workflows and payment integration.",
      technologies: ["Django", "Flask", "PostgreSQL", "Stripe API"],
      liveUrl: "#",
      githubUrl: "https://github.com/codenamemomi/outbound-ai",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full-Stack Developer & DevOps",
      company: "Konasalti Tech School",
      period: "2025",
      location: "Remote",
      achievements: [
        "Led end-to-end development of Konasalti.com platform",
        "Engineered backend with FastAPI and PostgreSQL",
        "Implemented CI/CD pipelines with GitHub Actions",
        "Containerized services with Docker and configured NGINX",
        "Built responsive frontend with Next.js and React"
      ]
    },
    {
      id: 2,
      role: "Dev/IT Support",
      company: "Cloudtalk Networks Limited",
      period: "07/2025 – Present",
      location: "Lagos, Nigeria",
      achievements: [
        "Delivered efficient 1st–2nd line IT support across hardware, software, and network systems",
        "Administered and secured Active Directory, Microsoft 365, and Google Workspace",
        "Developed internal tools using FastAPI and React/Next.js",
        "Automated IT tasks using Python and Bash scripts",
        "Managed infrastructure including LAN/WAN, firewalls, and software assets"
      ]
    },
    {
      id: 3,
      role: "Back-end Developer and DevOps",
      company: "Mentorled",
      period: "01/2025",
      location: "Lagos, Nigeria",
      achievements: [
        "Collaborated on Clust event planning web application development",
        "Designed and built RESTful APIs with FastAPI",
        "Integrated Celery with Redis for asynchronous tasks",
        "Deployed and managed backend infrastructure with NGINX",
        "Maintained CI/CD pipelines with GitHub Actions"
      ]
    },
    {
      id: 4,
      role: "Back-end Development Intern",
      company: "HNG Internship",
      period: "06/2024",
      location: "Nigeria",
      achievements: [
        "Contributed to Outbound.im business calling platform backend",
        "Developed RESTful APIs with Django and Flask",
        "Implemented subscription models and payment integration",
        "Optimized database queries and backend logic",
        "Gained experience with Git and Agile methodologies"
      ]
    }
  ]
}