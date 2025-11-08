import { motion } from 'framer-motion'
import { Cpu, Code2, Zap, Shield, Satellite, Terminal } from 'lucide-react'

const CommandCenter = ({ mousePosition }) => {
  const techIcons = [
    { icon: <Cpu style={{ width: '20px', height: '20px' }} />, name: 'FastAPI' },
    { icon: <Code2 style={{ width: '20px', height: '20px' }} />, name: 'React' },
    { icon: <Zap style={{ width: '20px', height: '20px' }} />, name: 'Python' },
    { icon: <Shield style={{ width: '20px', height: '20px' }} />, name: 'Security' },
  ]

  const dataStreams = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    text: Math.random() > 0.5 ? '1' : '0',
    delay: Math.random() * 5
  }))

  return (
    <div style={{ 
      height: '100%', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Data Stream */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.1
      }}>
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              color: '#00ff00',
              fontFamily: 'Courier New, monospace',
              fontSize: '12px'
            }}
            animate={{
              y: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: stream.delay
            }}
          >
            {stream.text}
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1rem',
        gap: '1rem'
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
            <Satellite style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
            <h1 style={{
              color: '#3b82f6',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              fontFamily: 'Courier New, monospace',
              margin: 0
            }}>
              COMMAND CENTER // AGENT PROFILE
            </h1>
          </div>
          
          <div style={{
            padding: '0.75rem',
            background: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.5rem',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.75rem',
            color: '#60a5fa'
          }}>
            SYSTEM STATUS: ONLINE | AGENT: AKINROGUNDE, O. | CLEARANCE: LEVEL 1
          </div>
        </motion.div>

        {/* Scrollable Content Area */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem',
          overflowY: 'auto',
          paddingRight: '0.5rem'
        }}>
          {/* Agent Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 style={{
              color: '#e2e8f0',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              OMOMIJOLAOLUWA
              <br />
              <span style={{ 
                color: '#cbd5e1', 
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                background: 'none',
                WebkitTextFillColor: '#cbd5e1'
              }}>
                AKINROGUNDE
              </span>
            </h2>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              padding: '0.5rem 0.75rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '0.5rem',
              width: 'fit-content'
            }}>
              <Zap style={{ width: '14px', height: '14px', color: '#60a5fa' }} />
              <span style={{ 
                color: '#60a5fa', 
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                SECURITY-FOCUSED FULL STACK DEVELOPER
              </span>
            </div>

            <p style={{
              color: '#cbd5e1',
              lineHeight: '1.6',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              Building <span style={{ color: '#60a5fa', fontWeight: '500' }}>scalable, secure applications</span> with 
              Python, JavaScript, and cutting-edge technologies. Specializing in 
              <span style={{ color: '#a78bfa', fontWeight: '500' }}> blockchain integration</span> and 
              <span style={{ color: '#10b981', fontWeight: '500' }}> AI-driven solutions</span>.
            </p>

            {/* Tech Stack */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '0.5rem',
                    color: '#60a5fa'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: 'rgba(59, 130, 246, 0.2)'
                  }}
                >
                  {tech.icon}
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '500' 
                  }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Status Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                padding: '1.25rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{
                color: '#10b981',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontFamily: 'Courier New, monospace'
              }}>
                SYSTEM STATUS
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: '#cbd5e1',
                fontFamily: 'Courier New, monospace'
              }}>
                <div>SECURITY: <span style={{ color: '#10b981' }}>ACTIVE</span></div>
                <div>BLOCKCHAIN: <span style={{ color: '#10b981' }}>ONLINE</span></div>
                <div>AI SYSTEMS: <span style={{ color: '#10b981' }}>OPERATIONAL</span></div>
                <div>DATABASE: <span style={{ color: '#10b981' }}>SECURE</span></div>
              </div>
            </motion.div>

            {/* Active Missions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                padding: '1.25rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{
                color: '#f59e0b',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontFamily: 'Courier New, monospace'
              }}>
                ACTIVE OPERATIONS
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {['KANEC BLOCKCHAIN', 'SECURE API DEV', 'AI INTEGRATION'].map((mission, index) => (
                  <motion.div
                    key={mission}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                      borderRadius: '0.25rem',
                      color: '#fbbf24',
                      fontSize: '0.7rem',
                      fontFamily: 'Courier New, monospace'
                    }}
                    whileHover={{ 
                      borderColor: 'rgba(245, 158, 11, 0.4)',
                      background: 'rgba(245, 158, 11, 0.1)'
                    }}
                  >
                    {mission}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Coordinates Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '0.5rem',
              backdropFilter: 'blur(10px)',
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#a78bfa'
            }}
          >
            MOUSE TRACKING: {Math.round(mousePosition.x)}%, {Math.round(mousePosition.y)}%
            <br />
            TIMESTAMP: {new Date().toLocaleTimeString()}
            <br />
            SATELLITE FEED: ACTIVE | ENCRYPTION: ENABLED
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CommandCenter