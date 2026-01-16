import { motion } from 'framer-motion'
import { Cpu, Code2, Zap, Shield, Satellite, Terminal, Lock, Activity } from 'lucide-react'

const CommandCenter = ({ mousePosition }) => {
  const techIcons = [
    { icon: <Cpu style={{ width: 14, height: 14 }} />, name: 'FAST_API' },
    { icon: <Code2 style={{ width: 14, height: 14 }} />, name: 'REACT_FRAMEWORK' },
    { icon: <Zap style={{ width: 14, height: 14 }} />, name: 'PYTHON_CORE' },
    { icon: <Shield style={{ width: 14, height: 14 }} />, name: 'SECURITY_OPS' },
  ]

  const dataStreams = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    text: Math.random().toString(16).substring(2, 8).toUpperCase(),
    delay: Math.random() * 8
  }))

  return (
    <div style={{
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'JetBrains Mono', monospace",
      color: '#60a5fa'
    }}>
      {/* Tactical Data Stream Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '1rem',
        width: '60px',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.15,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            style={{ fontSize: '10px' }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: stream.delay
            }}
          >
            {stream.text}
          </motion.div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.5rem',
        gap: '1.5rem'
      }}>
        {/* Console Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ flexShrink: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Terminal style={{ width: 18, height: 18, color: '#3b82f6' }} />
              <h1 style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '0.05em', margin: 0 }}>OPERATIVE_INTERFACE_V1.0</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.6rem', opacity: 0.7 }}>
              <Lock style={{ width: 12, height: 12 }} />
              ENCRYPTION: AES-256
            </div>
          </div>
          <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, #3b82f644, transparent 100%)' }} />
        </motion.div>

        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
          overflowY: 'auto',
          paddingRight: '0.5rem'
        }}>
          {/* Operative Identity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.4)',
              borderLeft: '4px solid #3b82f6',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#3b82f6', marginBottom: '1rem' }}>IDENT_CONFIRMED: ACTIVE_AGENT</div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '900',
              color: '#f8fafc',
              margin: 0,
              lineHeight: '1',
              letterSpacing: '-0.03em'
            }}>
              AKINROGUNDE.O
            </h2>
            <div style={{
              marginTop: '1rem',
              fontSize: '0.8rem',
              color: '#94a3b8',
              lineHeight: '1.6',
              maxWidth: '450px'
            }}>
              Engineering <span style={{ color: '#60a5fa' }}>secure digital ecosystems</span>. Specialized in
              high-performance backend architectures and responsive intelligence interfaces.
              Currently assigned to: <span style={{ color: '#10b981' }}>Strategic Ops // Web3 Integration</span>.
            </div>

            {/* Tactical Chips */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {techIcons.map((tech, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.6rem',
                  background: 'rgba(30, 41, 59, 0.4)',
                  fontSize: '0.6rem',
                  fontWeight: '700',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: '2px'
                }}>
                  {tech.icon}
                  {tech.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grid: Diagnostics & Missions */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            {/* Real-time Diagnostics */}
            <div style={{
              padding: '1.25rem',
              background: 'rgba(2, 6, 23, 0.4)',
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Activity style={{ width: 14, height: 14, color: '#10b981' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#10b981' }}>SYSTEM_DIAGNOSTICS</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.6 }}>NETWORK_LOAD</span>
                  <span style={{ color: '#10b981' }}>NORMAL</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.6 }}>DATABASE_SYNC</span>
                  <span style={{ color: '#10b981' }}>HEALTHY</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.6 }}>SECURITY_MESH</span>
                  <span style={{ color: '#10b981' }}>ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Current Objectives */}
            <div style={{
              padding: '1.25rem',
              background: 'rgba(2, 6, 23, 0.4)',
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#fbbf24', marginBottom: '1rem' }}>CURRENT_OBJECTIVES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['BLOCKCHAIN_CORE_V2', 'AI_PIPELINE_MOD', 'SECURE_UPLINK'].map(obj => (
                  <div key={obj} style={{
                    fontSize: '0.6rem',
                    padding: '0.4rem',
                    background: 'rgba(251, 191, 36, 0.05)',
                    borderLeft: '2px solid #fbbf24',
                    opacity: 0.8
                  }}>
                    {obj}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Telemetry */}
          <div style={{
            padding: '1rem',
            background: 'rgba(2, 6, 23, 0.6)',
            fontSize: '0.6rem',
            color: '#64748b',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(148, 163, 184, 0.05)'
          }}>
            <div>LOC: {Math.round(mousePosition.x)}, {Math.round(mousePosition.y)} // FEED: LIVE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              UP-TIME: 14:22:04
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandCenter