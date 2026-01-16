import { motion } from 'framer-motion'
import { User, Shield, MessageSquare, Cpu, Database, Cloud } from 'lucide-react'
import { useState, useEffect } from 'react'
import { portfolioData } from '../../data/portfolioData'

const AgentProfile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { personal, education } = portfolioData

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
      icon: <Cpu style={{ width: 22, height: 22 }} />,
      title: "FULL-STACK OPS",
      description: "Development of resilient, end-to-end digital infrastructure using modern security protocols.",
      color: '#3b82f6'
    },
    {
      icon: <Shield style={{ width: 22, height: 22 }} />,
      title: "SECURITY ARCHITECT",
      description: "Implementing advanced defensive measures and secure-by-default logic across all software layers.",
      color: '#10b981'
    },
    {
      icon: <MessageSquare style={{ width: 22, height: 22 }} />,
      title: "STRATEGIC COMMS",
      description: "Leveraging background in Mass Communication for high-impact stakeholder engagement and clarity.",
      color: '#8b5cf6'
    }
  ]

  const stats = [
    { number: "18+", label: "SUCCESSFUL MISSIONS", icon: <Database style={{ width: 14, height: 14 }} /> },
    { number: "02+", label: "YEARS FIELD SERVICE", icon: <Cloud style={{ width: 14, height: 14 }} /> },
    { number: "10+", label: "SPECIALIZED SKILLS", icon: <Cpu style={{ width: 14, height: 14 }} /> }
  ]

  return (
    <div style={{
      height: '100%',
      padding: '1.5rem',
      overflowY: 'auto',
      fontFamily: "'JetBrains Mono', monospace",
      color: '#f8fafc'
    }}>
      {/* Dossier Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ marginBottom: '2rem', position: 'relative' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            padding: '0.6rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid #10b98144',
            borderRadius: '0.25rem'
          }}>
            <User style={{ width: 24, height: 24, color: '#10b981' }} />
          </div>
          <h1 style={{
            color: '#10b981',
            fontSize: '1.5rem',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            OPERATIVE_DOSSIER: {personal.name.split(' ').pop().toUpperCase()}
          </h1>
        </div>

        <div style={{
          padding: '0.5rem 1rem',
          background: 'rgba(2, 6, 23, 0.6)',
          borderLeft: '4px solid #10b981',
          fontSize: '0.7rem',
          color: '#94a3b8',
          letterSpacing: '0.05em'
        }}>
          STATUS: ACTIVE-DUTY // CLEARANCE: LEVEL 02 // ACCESS: GRANTED
        </div>

        {/* TOP SECRET STAMP - Visual only */}
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '0',
          padding: '0.25rem 0.5rem',
          border: '3px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '4px',
          color: 'rgba(239, 68, 68, 0.2)',
          fontSize: '1rem',
          fontWeight: '900',
          transform: 'rotate(15deg)',
          userSelect: 'none',
          pointerEvents: 'none'
        }}>
          APPROVED
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
        gap: '2.5rem'
      }}>
        {/* Biography Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.3)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              borderRadius: '0.25rem',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '800', marginBottom: '1rem' }}>RECORD: PERSONAL_HISTORY</div>
            <div style={{
              color: '#94a3b8',
              lineHeight: '1.75',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p>
                Operative <span style={{ color: '#f8fafc' }}>{personal.name}</span> bridges the gap between
                <span style={{ color: '#10b981' }}> technical engineering</span> and <span style={{ color: '#8b5cf6' }}> strategic communication</span>.
              </p>

              <p>
                {personal.bio}
              </p>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}>
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                style={{
                  padding: '1.25rem 0.5rem',
                  background: 'rgba(2, 6, 23, 0.4)',
                  border: '1px solid rgba(148, 163, 184, 0.05)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#f8fafc', marginBottom: '0.25rem' }}>{stat.number}</div>
                <div style={{ fontSize: '0.55rem', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialties & Intelligence */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#8b5cf6', fontWeight: '800', letterSpacing: '0.05em' }}>FIELD_SPECIALTIES</div>
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.2)',
                borderLeft: `2px solid ${feature.color}44`,
                alignItems: 'center'
              }}
              whileHover={{ background: 'rgba(15, 23, 42, 0.4)', borderLeftColor: feature.color }}
            >
              <div style={{ color: feature.color, opacity: 0.8 }}>{feature.icon}</div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: feature.color, marginBottom: '0.2rem' }}>{feature.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4' }}>{feature.description}</div>
              </div>
            </motion.div>
          ))}

          {/* Training Record Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              marginTop: '1rem',
              padding: '1rem',
              border: '1px dashed rgba(148, 163, 184, 0.2)',
              borderRadius: '0.25rem'
            }}
          >
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginBottom: '0.5rem' }}>ACADEMIC_RECORD:</div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>{education.institution}</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{education.degree}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AgentProfile