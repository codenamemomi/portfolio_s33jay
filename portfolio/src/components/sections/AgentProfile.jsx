import { motion } from 'framer-motion'
import { User, Shield, MessageSquare, Cpu, Database, Cloud } from 'lucide-react'
import { useState, useEffect } from 'react'

const AgentProfile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const features = [
    {
      icon: <Cpu style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} />,
      title: "FULL-STACK DEVELOPMENT",
      description: "Building end-to-end solutions with modern technologies and security protocols.",
      color: '#3b82f6'
    },
    {
      icon: <Shield style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} />,
      title: "SECURITY FIRST",
      description: "Cybersecurity-trained operative focused on building secure, robust applications.",
      color: '#10b981'
    },
    {
      icon: <MessageSquare style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} />,
      title: "COMMUNICATIONS EXPERT",
      description: "Mass Communication background enables effective stakeholder communication.",
      color: '#8b5cf6'
    }
  ]

  const stats = [
    { number: "10+", label: "MISSIONS COMPLETED", icon: <Database style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} /> },
    { number: "2+", label: "YEARS ACTIVE SERVICE", icon: <Cloud style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} /> },
    { number: "5+", label: "SPECIALTIES MASTERED", icon: <Cpu style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} /> }
  ]

  return (
    <div style={{ 
      height: '100%', 
      padding: isMobile ? '1rem' : '2rem', 
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: isMobile ? '1rem' : '2rem' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '1rem',
          marginBottom: isMobile ? '0.5rem' : '1rem',
          flexWrap: 'wrap'
        }}>
          <User style={{ 
            width: isMobile ? '24px' : '28px', 
            height: isMobile ? '24px' : '28px', 
            color: '#10b981' 
          }} />
          <h1 style={{
            color: '#10b981',
            fontSize: isMobile ? '1.1rem' : '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            AGENT PROFILE // BACKGROUND ANALYSIS
          </h1>
        </div>
        
        <div style={{
          padding: isMobile ? '0.75rem' : '1rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: isMobile ? '0.7rem' : '0.875rem',
          color: '#34d399',
          wordBreak: 'break-word'
        }}>
          AGENT STATUS: ACTIVE | SECURITY CLEARANCE: LEVEL 2 | PROFILE: UNCLASSIFIED
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '1.5rem' : '2rem',
        height: '100%',
        overflow: 'visible'
      }}>
        {/* Left Column - Profile Data */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '1.5rem' : '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              padding: isMobile ? '1.5rem' : '2rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              minHeight: isMobile ? 'auto' : '300px'
            }}
          >
            <h2 style={{
              color: '#e2e8f0',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              fontWeight: 'bold',
              marginBottom: isMobile ? '1rem' : '1.5rem'
            }}>
              OPERATIVE BACKGROUND
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '0.75rem' : '1rem',
              color: '#cbd5e1',
              lineHeight: '1.7',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              <p>
                Agent <span style={{ color: '#10b981', fontWeight: '600' }}>Akinrogunde</span> combines 
                advanced technical training in <span style={{ color: '#3b82f6', fontWeight: '600' }}>cybersecurity</span> with 
                specialized background in <span style={{ color: '#8b5cf6', fontWeight: '600' }}>Mass Communication</span>. 
                This unique operational profile enables development of secure, user-focused digital solutions.
              </p>
              
              <p>
                Primary expertise includes <span style={{ color: '#f59e0b', fontWeight: '600' }}>Python-based systems</span>, 
                <span style={{ color: '#ec4899', fontWeight: '600' }}> JavaScript frameworks</span>, and advanced 
                <span style={{ color: '#06b6d4', fontWeight: '600' }}> DevOps protocols</span>. Currently pioneering 
                operations in blockchain and AI integration sectors.
              </p>
              
              <p>
                Operational philosophy emphasizes <span style={{ color: '#10b981', fontWeight: '600' }}>security-first development</span>, 
                scalable architecture, and clear communication with command structure and stakeholders.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '0.75rem' : '1rem'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: isMobile ? '1rem 0.5rem' : '1.5rem 1rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '1rem',
                  backdropFilter: 'blur(10px)',
                  minWidth: isMobile ? '120px' : 'auto'
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(16, 185, 129, 0.4)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: isMobile ? '32px' : '40px',
                  height: isMobile ? '32px' : '40px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '0.75rem',
                  margin: '0 auto 0.5rem auto',
                  color: '#34d399'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.25rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.65rem' : '0.75rem',
                  color: '#94a3b8',
                  fontWeight: '500',
                  fontFamily: 'Courier New, monospace',
                  lineHeight: '1.2'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Specializations */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '1rem' : '1.5rem'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: isMobile ? '0.75rem' : '1rem',
                padding: isMobile ? '1rem' : '1.5rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${feature.color}30`,
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                minHeight: isMobile ? 'auto' : '140px'
              }}
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.02,
                borderColor: `${feature.color}60`,
                boxShadow: `0 10px 30px -10px ${feature.color}20`
              }}
            >
              <div style={{
                flexShrink: 0,
                padding: isMobile ? '0.5rem' : '0.75rem',
                background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                borderRadius: '0.75rem',
                color: feature.color
              }}>
                {feature.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: '600',
                  marginBottom: isMobile ? '0.25rem' : '0.5rem',
                  color: feature.color,
                  fontFamily: 'Courier New, monospace',
                  lineHeight: '1.2'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.8rem' : '0.9rem'
                }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Education Record */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              padding: isMobile ? '1rem' : '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{
              color: '#8b5cf6',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: 'bold',
              marginBottom: isMobile ? '0.75rem' : '1rem',
              fontFamily: 'Courier New, monospace'
            }}>
              TRAINING RECORD
            </h3>
            <div style={{
              color: '#cbd5e1',
              lineHeight: '1.6',
              fontSize: isMobile ? '0.8rem' : '0.875rem'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#a78bfa' }}>BABCOCK UNIVERSITY</strong>
              </div>
              <div style={{ 
                fontSize: isMobile ? '0.75rem' : '0.875rem', 
                color: '#94a3b8',
                lineHeight: '1.4'
              }}>
                Bachelor of Arts in Mass Communication<br/>
                Specialized in strategic communication and media analysis
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AgentProfile