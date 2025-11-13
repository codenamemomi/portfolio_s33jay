import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, Github, Zap, Cpu, Database } from 'lucide-react'

const MissionFiles = () => {
  const projects = [
    {
      id: 1,
      name: 'KANEC IMPACT',
      codename: 'BLOCKCHAIN TRANSPARENCY',
      description: 'Blockchain-powered platform for transparent donations using Hedera DLT. Ensures 100% transparency in charitable giving to African impact projects.',
      status: 'ACTIVE',
      technologies: ['FastAPI', 'React', 'PostgreSQL', 'Hedera SDK', 'Docker'],
      clearance: 'LEVEL 4',
      liveUrl: 'https://kanec.vercel.app',
      githubUrl: 'https://github.com/codenamemomi/KANEC_IMPACT',
      color: '#8b5cf6'
    },
    {
      id: 2,
      name: 'DORUP',
      codename: 'HOUSING AND HOSPITALITY',
      description: 'End-to-end development of Leading technological innovation and driving the development of cutting-edge solutions.',
      status: 'ACTIVE',
      technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'NGINX'],
      clearance: 'LEVEL 4',
      liveUrl: 'https://dorup.vercel.app/',
      githubUrl: 'https://github.com/codenamemomi/DORUP',
      color: '#eeb600ff'
    },
    {
      id: 2,
      name: 'KONASALTI TECH',
      codename: 'EDUCATION PLATFORM',
      description: 'End-to-end development of educational platform with course management and user authentication systems.',
      status: 'DEPLOYED',
      technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'NGINX'],
      clearance: 'LEVEL 3',
      liveUrl: 'https://konasalti.com',
      githubUrl: 'https://github.com/codenamemomi/konasal_frontend',
      color: '#3b82f6'
    },
    {
      id: 3,
      name: 'CLUST',
      codename: 'EVENT MANAGEMENT',
      description: 'Minimalist web application for creating, managing, and tracking events with automated reminders.',
      status: 'COMPLETED',
      technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
      clearance: 'LEVEL 3',
      liveUrl: '#',
      githubUrl: 'https://github.com/codenamemomi/clust',
      color: '#10b981'
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
          <Briefcase style={{ width: '24px', height: '24px', color: '#8b5cf6' }} />
          <h1 style={{
            color: '#8b5cf6',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            MISSION FILES // PROJECT ARCHIVES
          </h1>
        </div>
        
        <div style={{
          padding: '0.75rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: '0.75rem',
          color: '#a78bfa'
        }}>
          MISSION STATUS: ACTIVE | FILES: CLASSIFIED | CLEARANCE: LEVEL 4 REQUIRED
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        overflowY: 'auto'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: `1px solid ${project.color}30`,
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              borderColor: `${project.color}60`,
              boxShadow: `0 10px 30px -10px ${project.color}20`
            }}
          >
            {/* Project Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <h2 style={{
                    color: project.color,
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    margin: 0,
                    fontFamily: 'Courier New, monospace'
                  }}>
                    {project.name}
                  </h2>
                  <div style={{
                    padding: '0.25rem 0.75rem',
                    background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.2)`,
                    border: `1px solid ${project.color}40`,
                    borderRadius: '1rem',
                    color: project.color,
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    fontFamily: 'Courier New, monospace'
                  }}>
                    {project.status}
                  </div>
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontFamily: 'Courier New, monospace',
                  marginBottom: '0.5rem'
                }}>
                  CODENAME: {project.codename} | CLEARANCE: {project.clearance}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      borderRadius: '0.5rem',
                      color: '#4ade80',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </motion.a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(139, 92, 246, 0.4)',
                      borderRadius: '0.5rem',
                      color: '#a78bfa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github style={{ width: '16px', height: '16px' }} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p style={{
              color: '#cbd5e1',
              lineHeight: '1.6',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              {project.description}
            </p>

            {/* Technologies */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + techIndex * 0.1 }}
                  style={{
                    padding: '0.4rem 0.75rem',
                    background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.1)`,
                    border: `1px solid ${project.color}30`,
                    borderRadius: '1rem',
                    color: project.color,
                    fontSize: '0.7rem',
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
        ))}
      </div>
    </div>
  )
}

export default MissionFiles