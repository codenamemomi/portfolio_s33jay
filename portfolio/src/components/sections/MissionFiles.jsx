import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, Github, FileText, Lock, Shield } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'

const MissionFiles = () => {
  const projects = portfolioData.projects.map(p => ({
    ...p,
    name: p.title,
    codename: `PROJECT: ${p.tagline.toUpperCase()}`,
    status: p.featured ? 'ACTIVE' : 'ARCHIVED',
    clearance: p.featured ? 'LEVEL 4' : 'LEVEL 2',
    color: p.id === 1 ? '#8b5cf6' : p.id === 2 ? '#fbbf24' : '#3b82f6'
  }))

  return (
    <div style={{
      height: '100%',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      fontFamily: "'JetBrains Mono', monospace"
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ flexShrink: 0 }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '0.75rem'
        }}>
          <div style={{
            padding: '0.5rem',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(139, 92, 246, 0.4)'
          }}>
            <Briefcase style={{ width: '24px', height: '24px', color: '#a78bfa' }} />
          </div>
          <h1 style={{
            color: '#a78bfa',
            fontSize: '1.5rem',
            fontWeight: '800',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            MISSION ARCHIVES
          </h1>
        </div>

        <div style={{
          padding: '0.5rem 1rem',
          background: 'rgba(2, 6, 23, 0.8)',
          borderLeft: '4px solid #8b5cf6',
          fontSize: '0.75rem',
          color: '#94a3b8',
          letterSpacing: '0.05em'
        }}>
          STATUS: CLASSIFIED // ACCESS LEVEL: 04 // ENCRYPTION: AES-256
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        overflowY: 'auto',
        paddingRight: '0.5rem',
        paddingBottom: '2rem'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              position: 'relative',
              background: 'rgba(15, 23, 42, 0.4)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              borderRadius: '0.25rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            whileHover={{
              borderColor: `${project.color}40`,
              background: 'rgba(15, 23, 42, 0.6)'
            }}
          >
            {/* Dossier Tab */}
            <div style={{
              height: '8px',
              width: '100%',
              background: `linear-gradient(90deg, ${project.color} 0%, ${project.color}33 100%)`,
              opacity: 0.8
            }} />

            <div style={{ padding: '1.5rem' }}>
              {/* TOP SECRET Watermark */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-15deg)',
                fontSize: '4rem',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.03)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                zIndex: 0
              }}>
                TOP SECRET
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.65rem',
                      color: project.color,
                      fontWeight: '800',
                      marginBottom: '0.25rem',
                      letterSpacing: '0.1em'
                    }}>
                      {project.codename}
                    </div>
                    <h2 style={{
                      color: '#f8fafc',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: 0
                    }}>
                      {project.name}
                    </h2>
                  </div>
                  <div style={{
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: `1px solid ${project.color}40`,
                    borderRadius: '0.25rem',
                    color: project.color,
                    fontSize: '0.6rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Shield style={{ width: 10, height: 10 }} />
                    {project.clearance}
                  </div>
                </div>

                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  lineHeight: '1.625',
                  marginBottom: '1.5rem',
                  minHeight: '4.5rem'
                }}>
                  {project.description}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem'
                  }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '0.65rem',
                        color: '#64748b',
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(30, 41, 59, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                        borderRadius: '0.15rem'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px dashed rgba(148, 163, 184, 0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.65rem',
                      color: '#4ade80'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#4ade80',
                        boxShadow: '0 0 8px #4ade80'
                      }} />
                      {project.status}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#94a3b8' }}
                          whileHover={{ color: '#f8fafc', scale: 1.1 }}
                        >
                          <Github style={{ width: 16, height: 16 }} />
                        </motion.a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#94a3b8' }}
                          whileHover={{ color: project.color, scale: 1.1 }}
                        >
                          <ExternalLink style={{ width: 16, height: 16 }} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MissionFiles