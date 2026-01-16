export const portfolioData = {
  personal: {
    name: "Omomijolaoluwa Akinrogunde",
    title: "Full Stack Developer",
    motto: "CREATE | BUILD | AUTOMATE",
    email: "akinrogundecodenamemoni@gmail.com",
    phone: "+2349011123434",
    location: "Nigeria",
    portfolio: "codename-rho.vercel.app",
    github: "https://github.com/codenamemomi",
    linkedin: "https://linkedin.com/in/yourprofile",
    socials: [
      { name: "X_PLATFORM", url: "https://x.com/he_is_a_dev?s=21", platform: "Twitter" },
      { name: "TIKTOK", url: "https://www.tiktok.com/@he_is_a_developer?_r=1&_t=ZS-937QZa0xKYX", platform: "TikTok" },
      { name: "INSTAGRAM", url: "https://www.instagram.com/papi_jay.x?igsh=aDhxdXZ6dGZjbXp2&utm_source=qr", platform: "Instagram" }
    ],
    bio: "Security-focused Full-Stack Developer with expertise in Python (Django, FastAPI) and JavaScript (React, Next.js), specializing in building scalable, high-performance applications. Combines a background in Mass Communication with cybersecurity training to deliver robust, user-centric solutions."
  },

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ],
    backend: [
      { name: "Python", level: 95 },
      { name: "Django", level: 88 },
      { name: "FastAPI", level: 92 },
      { name: "Flask", level: 80 },
      { name: "SQL / PostgreSQL", level: 85 },
      { name: "Node.js", level: 75 }
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 88 },
      { name: "NGINX", level: 80 },
      { name: "CI/CD Protocols", level: 90 },
      { name: "Vercel / Render", level: 95 }
    ],
    security: [
      { name: "OWASP Top 10", level: 80 },
      { name: "System Hardening", level: 85 },
      { name: "Secure Auth (JWT/MFA)", level: 90 },
      { name: "Blockchain Security", level: 82 },
      { name: "Diagnostic Analysis", level: 88 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "KANEC IMPACT",
      tagline: "Blockchain Donation Platform",
      description: "Led the full-stack development of a blockchain-powered platform using Hedera's DLT to ensure 100% transparent and verifiable donations for African impact projects.",
      technologies: ["FastAPI", "React", "PostgreSQL", "Hedera SDK", "Docker", "Redis", "Celery", "Tailwind CSS"],
      achievements: [
        "Integrated Hedera SDK to automate wallet creation and P2P HBAR transfers",
        "Developed real-time analytics dashboards with AI-powered insights",
        "Managed asynchronous task queues with Celery & Redis"
      ],
      liveUrl: "https://kanec.vercel.app",
      githubUrl: "https://github.com/codenamemomi/KANEC_IMPACT",
      featured: true
    },
    {
      id: 2,
      title: "Wunmi's Booking API",
      tagline: "Backend Service",
      description: "Developed a secure and efficient RESTful API using Django REST Framework for managing booking information.",
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "Python"],
      achievements: [
        "Designed PostgreSQL database schema for efficient storage and retrieval",
        "Implemented robust user authentication and data validation"
      ],
      liveUrl: "https://github.com/codenamemomi/wunmi",
      githubUrl: "https://github.com/codenamemomi/wunmi",
      featured: true
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
        "Led end-to-end development of konasalti.com, architecting a scalable platform",
        "Engineered backend with FastAPI and PostgreSQL for complex data relationships",
        "Built responsive, mobile-first frontend using Next.js and React",
        "Implemented CI/CD pipelines using GitHub Actions for automated testing/deployment",
        "Containerized services with Docker and configured NGINX as a reverse proxy"
      ]
    },
    {
      id: 2,
      role: "Dev/IT Support",
      company: "Cloudtalk Networks Limited",
      period: "07/2025 – Present",
      location: "Lagos, Nigeria",
      achievements: [
        "Deliver efficient 1st–2nd line IT support, resolving hardware, software, and network issues",
        "Administer and secure core platforms including Active Directory and Microsoft 365",
        "Develop and maintain internal full-stack tools using FastAPI and React/Next.js",
        "Automate repetitive tasks like user onboarding and log analysis using Python/Bash",
        "Manage IT infrastructure including LAN/WAN, firewalls, and software assets"
      ]
    },
    {
      id: 3,
      role: "Back-end Developer and DevOps",
      company: "Mentorled",
      period: "01/2025",
      location: "Lagos, Nigeria",
      achievements: [
        "Collaborated on Clust backend, an event planning app, focusing on scalability",
        "Designed and built RESTful APIs with FastAPI for core features",
        "Integrated Celery with Redis to manage asynchronous background tasks",
        "Deployed and managed infrastructure using NGINX for load balancing",
        "Maintained CI/CD pipelines with GitHub Actions for stable development cycles"
      ]
    },
    {
      id: 4,
      role: "Back-end Development Intern",
      company: "HNG Internship",
      period: "06/2024",
      location: "Nigeria",
      achievements: [
        "Contributed to Outbound.im backend, a business calling platform",
        "Developed and integrated RESTful APIs using Django and Flask",
        "Implemented subscription billing logic and payment API integration",
        "Optimized database queries and backend logic to improve system scalability"
      ]
    },
    {
      id: 5,
      role: "Python Developer (Capstone Project)",
      company: "UNIVELCITY",
      period: "04/2024",
      location: "Nigeria",
      achievements: [
        "Designed and built a RESTful API for an e-commerce platform using Django REST Framework",
        "Implemented Stripe payment integration for secure transactions and order processing",
        "Structured backend with a scalable, modular design supporting product catalogs",
        "Secured API endpoints using authentication and CORS best practices"
      ]
    }
  ],
  education: {
    degree: "Bachelor of Arts in Mass Communication (IN VIEW)",
    institution: "Babcock University"
  },
  vision: {
    pitch: "I don't just build software; I architect resilient digital ecosystems that scale with human ambition. By blending high-performance backend engineering with strategic communication and security protocols, I ensure that every line of code serves a larger operational goal.",
    growthVectors: [
      {
        id: "gv1",
        title: "SCALABLE ARCHITECTURE",
        description: "Transforming legacy systems into distributed, high-availability microservices capable of handling millions of requests with sub-second latency.",
        color: "#3b82f6"
      },
      {
        id: "gv2",
        title: "BLOCKCHAIN INTEGRATION",
        description: "Pioneering transparent DLT solutions (Hedera/Ethereum) to build next-generation trust frameworks for finance and social impact.",
        color: "#10b981"
      },
      {
        id: "gv3",
        title: "SECURE-FIRST DEV",
        description: "Moving from reactive to proactive security, integrating OWASP security patterns natively into the CI/CD pipeline.",
        color: "#f59e0b"
      },
      {
        id: "gv4",
        title: "AI-DRIVEN AUTOMATION",
        description: "Leveraging LLMs and custom AI agents to automate complex DevOps workflows and internal data analysis.",
        color: "#ef4444"
      }
    ]
  }
}