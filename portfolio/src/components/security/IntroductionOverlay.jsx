import { motion } from 'framer-motion'
import { useState } from 'react'
import { Satellite, User, Cpu, Briefcase, Database, Mail, ArrowRight } from 'lucide-react'

const IntroductionOverlay = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "WELCOME TO THE OMOMIJOLAOLUWA's PORTFOLIO CONCEPT",
      description: "This is your interactive mission control interface. Navigate through different sections to learn about my skills and projects.",
      icon: <Satellite style={{ width: 48, height: 48 }} />,
      color: '#3b82f6'
    },
    {
      title: "EXPLORE THE SECTIONS",
      description: "Click on any target to access different portfolio sections. Each requires 'decryption' for immersive experience.",
      icon: <User style={{ width: 48, height: 48 }} />,
      color: '#10b981'
    },
    {
      title: "MOBILE READY",
      description: "Fully optimized for all devices. Tap targets to navigate on mobile.",
      icon: <Cpu style={{ width: 48, height: 48 }} />,
      color: '#f59e0b'
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
        background: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        padding: '1rem',
        fontFamily: 'Courier New, monospace'
      }}
    >
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          background: 'rgba(15, 23, 42, 0.8)',
          border: `2px solid ${steps[currentStep].color}80`,
          borderRadius: '1rem',
          padding: '2rem',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{
          color: steps[currentStep].color,
          marginBottom: '1.5rem'
        }}>
          {steps[currentStep].icon}
        </div>
        
        <h2 style={{
          color: 'white',
          fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          {steps[currentStep].title}
        </h2>
        
        <p style={{
          color: '#cbd5e1',
          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          {steps[currentStep].description}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            color: '#64748b',
            fontSize: '0.875rem'
          }}>
            {currentStep + 1} / {steps.length}
          </div>
          
          <motion.button
            onClick={nextStep}
            style={{
              padding: '0.75rem 1.5rem',
              background: `linear-gradient(135deg, ${steps[currentStep].color}, ${steps[currentStep].color}80)`,
              border: 'none',
              borderRadius: '0.5rem',
              color: 'white',
              fontFamily: 'Courier New, monospace',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep < steps.length - 1 ? 'CONTINUE' : 'BEGIN MISSION'}
            <ArrowRight style={{ width: 16, height: 16 }} />
          </motion.button>
        </div>
      </motion.div>

      {/* Skip button */}
      <motion.button
        onClick={onComplete}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          background: 'transparent',
          border: '1px solid #64748b',
          borderRadius: '0.5rem',
          color: '#64748b',
          fontFamily: 'Courier New, monospace',
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}
        whileHover={{ borderColor: '#ef4444', color: '#ef4444' }}
      >
        SKIP INTRODUCTION
      </motion.button>
    </motion.div>
  )
}

export default IntroductionOverlay