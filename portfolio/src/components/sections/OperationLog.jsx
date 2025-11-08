import { motion } from 'framer-motion'
import { Calendar, MapPin, Database, Cpu, Cloud, Server } from 'lucide-react'

const OperationLog = () => {
  const experiences = [
    {
      id: 1,
      role: 'FULL-STACK DEVELOPER & DEVOPS',
      company: 'KONASALTI TECH SCHOOL',
      period: '2025',
      location: 'REMOTE',
      status: 'ACTIVE',
      clearance: 'LEVEL 3',
      achievements: [
        'Led end-to-end development of konasalti.com platform',
        'Engineered backend with FastAPI and PostgreSQL',
        'Implemented CI/CD pipelines with GitHub Actions',
        'Containerized services with Docker and configured NGINX',
        'Built responsive frontend with Next.js and React'
      ],
      technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'NGINX'],
      color: '#3b82f6'
    },
    {
      id: 2,
      role: 'DEV/IT SUPPORT',
      company: 'CLOUDTALK NETWORKS LIMITED',
      period: '07/2025 – PRESENT',
      location: 'LAGOS, NIGERIA',
      status: 'ACTIVE',
      clearance: 'LEVEL 2',
      achievements: [
        'Delivered efficient 1st–2nd line IT support across hardware, software, and network systems',
        'Administered and secured Active Directory, Microsoft 365, and Google Workspace',
        'Developed internal tools using FastAPI and React/Next.js',
        'Automated IT tasks using Python and Bash scripts',
        'Managed infrastructure including LAN/WAN, firewalls, and software assets'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'Next.js', 'Bash'],
      color: '#10b981'
    },
    {
      id: 3,
      role: 'BACK-END DEVELOPER AND DEVOPS',
      company: 'MENTORLED',
      period: '01/2025',
      location: 'LAGOS, NIGERIA',
      status: 'COMPLETED',
      clearance: 'LEVEL 3',
      achievements: [
        'Collaborated on Clust event planning web application development',
        'Designed and built RESTful APIs with FastAPI',
        'Integrated Celery with Redis for asynchronous tasks',
        'Deployed and managed backend infrastructure with NGINX',
        'Maintained CI/CD pipelines with GitHub Actions'
      ],
      technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'NGINX'],
      color: '#f59e0b'
    },
    {
      id: 4,
      role: 'BACK-END DEVELOPMENT INTERN',
      company: 'HNG INTERNSHIP',
      period: '06/2024',
      location: 'NIGERIA',
      status: 'COMPLETED',
      clearance: 'LEVEL 2',
      achievements: [
        'Contributed to Outbound.im business calling platform backend',
        'Developed RESTful APIs with Django and Flask',
        'Implemented subscription models and payment integration',
        'Optimized database queries and backend logic',
        'Gained experience with Git and Agile methodologies'
      ],
      technologies: ['Django', 'Flask', 'PostgreSQL', 'Stripe API', 'Git'],
      color: '#8b5cf6'
    }
  ]

  return (
    <div style={{ 
      height: '100%', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          flexShrink: 0
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '0.5rem'
        }}>
          <Database style={{ width: '24px', height: '24px', color: '#ec4899' }} />
          <h1 style={{
            color: '#ec4899',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            OPERATION LOG // MISSION HISTORY
          </h1>
        </div>
        
        <div style={{
          padding: '0.75rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: '0.75rem',
          color: '#f472b6'
        }}>
          OPERATION STATUS: ACTIVE | LOG ENTRIES: CLASSIFIED | CLEARANCE: LEVEL 3 REQUIRED
        </div>
      </motion.div>

      {/* Timeline */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '30px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, #ec4899, #8b5cf6)',
          opacity: 0.3
        }} />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              width: '60px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <motion.div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: exp.color,
                  borderRadius: '50%',
                  border: '2px solid #0f172a',
                  boxShadow: `0 0 10px ${exp.color}`
                }}
                whileHover={{ scale: 1.5 }}
              />
            </div>

            {/* Content */}
            <motion.div
              style={{
                flex: 1,
                padding: '1.5rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${exp.color}30`,
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                marginBottom: '1rem'
              }}
              whileHover={{ 
                borderColor: `${exp.color}60`,
                boxShadow: `0 10px 30px -10px ${exp.color}20`
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <h2 style={{
                      color: exp.color,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      margin: 0,
                      fontFamily: 'Courier New, monospace'
                    }}>
                      {exp.role}
                    </h2>
                    <div style={{
                      padding: '0.25rem 0.5rem',
                      background: `rgba(${parseInt(exp.color.slice(1, 3), 16)}, ${parseInt(exp.color.slice(3, 5), 16)}, ${parseInt(exp.color.slice(5, 7), 16)}, 0.2)`,
                      border: `1px solid ${exp.color}40`,
                      borderRadius: '0.5rem',
                      color: exp.color,
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      fontFamily: 'Courier New, monospace'
                    }}>
                      {exp.status}
                    </div>
                  </div>
                  
                  <div style={{
                    color: exp.color,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontFamily: 'Courier New, monospace'
                  }}>
                    {exp.company}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    fontFamily: 'Courier New, monospace'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar style={{ width: '12px', height: '12px' }} />
                      {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin style={{ width: '12px', height: '12px' }} />
                      {exp.location}
                    </div>
                    <div>
                      CLEARANCE: {exp.clearance}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                  color: '#cbd5e1',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  fontFamily: 'Courier New, monospace'
                }}>
                  MISSION OBJECTIVES:
                </h3>
                <ul style={{
                  color: '#cbd5e1',
                  fontSize: '0.8rem',
                  lineHeight: '1.6',
                  paddingLeft: '1rem',
                  margin: 0
                }}>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + achievementIndex * 0.05 }}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {exp.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + techIndex * 0.1 }}
                    style={{
                      padding: '0.3rem 0.6rem',
                      background: `rgba(${parseInt(exp.color.slice(1, 3), 16)}, ${parseInt(exp.color.slice(3, 5), 16)}, ${parseInt(exp.color.slice(5, 7), 16)}, 0.1)`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: '0.75rem',
                      color: exp.color,
                      fontSize: '0.65rem',
                      fontWeight: '500',
                      fontFamily: 'Courier New, monospace'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default OperationLog