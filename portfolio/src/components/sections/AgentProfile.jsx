import { motion } from 'framer-motion'
import { User, Shield, MessageSquare, Cpu, Database, Cloud } from 'lucide-react'

const AgentProfile = () => {
  const features = [
    {
      icon: <Cpu style={{ width: '24px', height: '24px' }} />,
      title: "FULL-STACK DEVELOPMENT",
      description: "Building end-to-end solutions with modern technologies and security protocols.",
      color: '#3b82f6'
    },
    {
      icon: <Shield style={{ width: '24px', height: '24px' }} />,
      title: "SECURITY FIRST",
      description: "Cybersecurity-trained operative focused on building secure, robust applications.",
      color: '#10b981'
    },
    {
      icon: <MessageSquare style={{ width: '24px', height: '24px' }} />,
      title: "COMMUNICATIONS EXPERT",
      description: "Mass Communication background enables effective stakeholder communication.",
      color: '#8b5cf6'
    }
  ]

  const stats = [
    { number: "10+", label: "MISSIONS COMPLETED", icon: <Database style={{ width: '16px', height: '16px' }} /> },
    { number: "2+", label: "YEARS ACTIVE SERVICE", icon: <Cloud style={{ width: '16px', height: '16px' }} /> },
    { number: "5+", label: "SPECIALTIES MASTERED", icon: <Cpu style={{ width: '16px', height: '16px' }} /> }
  ]

  return (
    <div style={{ height: '100%', padding: '2rem', overflowY: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <User style={{ width: '28px', height: '28px', color: '#10b981' }} />
          <h1 style={{
            color: '#10b981',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            AGENT PROFILE // BACKGROUND ANALYSIS
          </h1>
        </div>
        
        <div style={{
          padding: '1rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: '0.875rem',
          color: '#34d399'
        }}>
          AGENT STATUS: ACTIVE | SECURITY CLEARANCE: LEVEL 2 | PROFILE: UNCLASSIFIED
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        height: '100%'
      }}>
        {/* Left Column - Profile Data */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              padding: '2rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 style={{
              color: '#e2e8f0',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>
              OPERATIVE BACKGROUND
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: '#cbd5e1',
              lineHeight: '1.7'
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
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '1rem',
                  backdropFilter: 'blur(10px)'
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
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '0.75rem',
                  margin: '0 auto 0.75rem auto',
                  color: '#34d399'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.25rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  fontWeight: '500',
                  fontFamily: 'Courier New, monospace'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Specializations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
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
                gap: '1rem',
                padding: '1.5rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${feature.color}30`,
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ 
                scale: 1.02,
                borderColor: `${feature.color}60`,
                boxShadow: `0 10px 30px -10px ${feature.color}20`
              }}
            >
              <div style={{
                flexShrink: 0,
                padding: '0.75rem',
                background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                borderRadius: '0.75rem',
                color: feature.color
              }}>
                {feature.icon}
              </div>
              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: feature.color,
                  fontFamily: 'Courier New, monospace'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  fontSize: '0.9rem'
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
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{
              color: '#8b5cf6',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Courier New, monospace'
            }}>
              TRAINING RECORD
            </h3>
            <div style={{
              color: '#cbd5e1',
              lineHeight: '1.6'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#a78bfa' }}>BABCOCK UNIVERSITY</strong>
              </div>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
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