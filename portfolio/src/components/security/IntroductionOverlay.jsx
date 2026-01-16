import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Satellite, User, Cpu, ArrowRight, Shield, Terminal } from 'lucide-react'

const IntroductionOverlay = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const steps = [
    {
      title: "OPERATIONAL_READY_STATUS",
      description: "Welcome to Mission Control. This interface provides secure access to agent profile data, project archives, and communication channels.",
      icon: <Satellite style={{ width: 42, height: 42 }} />,
      color: '#3b82f6',
      label: "OBJECTIVE_01: SYSTEM_INIT"
    },
    {
      title: "DECRYPT_ARCHIVES",
      description: "Mission files are encrypted by default. Use terminal nodes to access classified project dossiers and technical specifications.",
      icon: <Shield style={{ width: 42, height: 42 }} />,
      color: '#10b981',
      label: "OBJECTIVE_02: DATA_ACCESS"
    },
    {
      title: "SECURE_UPLINK",
      description: "The communication array is optimized for low-latency transmission. Signal strength is monitored in real-time.",
      icon: <Terminal style={{ width: 42, height: 42 }} />,
      color: '#f59e0b',
      label: "OBJECTIVE_03: UPLINK_CORE"
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#020617ef',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        padding: '1.5rem',
        fontFamily: "'JetBrains Mono', monospace",
        backdropFilter: 'blur(20px)'
      }}
    >
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          maxWidth: '550px',
          width: '100%',
          background: 'rgba(2, 6, 23, 0.8)',
          border: `1px solid ${steps[currentStep].color}44`,
          padding: isMobile ? '1.5rem 1.25rem' : '2.5rem',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '4px'
        }}
      >
        {/* Corner Accents */}
        <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: `2px solid ${steps[currentStep].color}`, borderLeft: `2px solid ${steps[currentStep].color}` }} />
        <div style={{ position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: `2px solid ${steps[currentStep].color}`, borderRight: `2px solid ${steps[currentStep].color}` }} />

        <div style={{
          color: steps[currentStep].color,
          fontSize: '0.65rem',
          fontWeight: '900',
          letterSpacing: '0.2em',
          marginBottom: '2rem'
        }}>
          {steps[currentStep].label}
        </div>

        <div style={{
          color: steps[currentStep].color,
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          {steps[currentStep].icon}
        </div>

        <h2 style={{
          color: '#f8fafc',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          fontWeight: '800',
          letterSpacing: '-0.02em'
        }}>
          {steps[currentStep].title}
        </h2>

        <p style={{
          color: '#94a3b8',
          fontSize: '0.9rem',
          lineHeight: '1.7',
          marginBottom: '2.5rem'
        }}>
          {steps[currentStep].description}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? '1.5rem' : '0'
        }}>
          <div style={{
            color: '#475569',
            fontSize: '0.7rem',
            fontWeight: '700',
            letterSpacing: '0.1em'
          }}>
            BRIEF_STEP: 0{currentStep + 1} / 0{steps.length}
          </div>

          <motion.button
            onClick={nextStep}
            style={{
              width: isMobile ? '100%' : 'auto',
              padding: isMobile ? '0.75rem 1rem' : '0.8rem 1.8rem',
              background: 'transparent',
              border: `1px solid ${steps[currentStep].color}`,
              color: steps[currentStep].color,
              fontFamily: 'inherit',
              fontWeight: '800',
              fontSize: isMobile ? '0.7rem' : '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: '0.75rem',
              borderRadius: '2px',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            whileHover={{ background: `${steps[currentStep].color}11` }}
            whileTap={{ scale: 0.98 }}
          >
            {currentStep < steps.length - 1 ? 'PROCEED' : 'INITIALIZE_SIMULATION'}
            <ArrowRight style={{ width: 14, height: 14 }} />
          </motion.button>
        </div>
      </motion.div>

      {/* Abort button */}
      <motion.button
        onClick={onComplete}
        style={{
          marginTop: '3rem',
          padding: '0.6rem 1.2rem',
          background: 'transparent',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '2px',
          color: '#64748b',
          fontFamily: 'inherit',
          cursor: 'pointer',
          fontSize: '0.65rem',
          fontWeight: '700',
          letterSpacing: '0.1em'
        }}
        whileHover={{ borderColor: '#ef444466', color: '#ef4444' }}
      >
        [ ABORT_BRIEFING ]
      </motion.button>
    </motion.div>
  )
}

export default IntroductionOverlay