import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { Lock, Unlock, Satellite, Radar, Cpu, User, Briefcase, Mail, Code2, Database } from 'lucide-react'
import CommandCenter from '../sections/CommandCenter'
import AgentProfile from '../sections/AgentProfile'
import TechnicalSpecs from '../sections/TechnicalSpecs'
import MissionFiles from '../sections/MissionFiles'
import OperationLog from '../sections/OperationLog'
import Communications from '../sections/Communications'
import InteractiveEarth from '../effects/InteractiveEarth'
import IntroductionOverlay from './IntroductionOverlay'
import InteractiveTerminal from '../security/Terminal'

const SecurityInterface = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const interfaceRef = useRef(null)
  const [showIntro, setShowIntro] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  // Sections with positions and security clearance
    const sections = [
    {
        id: 'command',
        name: 'COMMAND CENTER',
        icon: <Satellite style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 1',
        position: { x: 20, y: 20 }, // Moved higher for mobile
        color: '#3b82f6'
    },
    {
        id: 'profile',
        name: 'AGENT PROFILE',
        icon: <User style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 2',
        position: { x: 80, y: 25 }, // Moved higher for mobile
        color: '#10b981'
    },
    {
        id: 'specs',
        name: 'TECHNICAL SPECS',
        icon: <Cpu style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 3',
        position: { x: 30, y: 60 }, // Adjusted for mobile
        color: '#f59e0b'
    },
    {
        id: 'missions',
        name: 'MISSION FILES',
        icon: <Briefcase style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 4',
        position: { x: 70, y: 65 }, // Adjusted for mobile
        color: '#8b5cf6'
    },
    {
        id: 'operations',
        name: 'OPERATION LOG',
        icon: <Database style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 3',
        position: { x: 85, y: 50 }, // Adjusted for mobile
        color: '#ec4899'
    },
    {
        id: 'comms',
        name: 'COMMUNICATIONS',
        icon: <Mail style={{ width: 'clamp(16px, 4vw, 24px)', height: 'clamp(16px, 4vw, 24px)' }} />,
        clearance: 'LEVEL 2',
        position: { x: 15, y: 80 }, // Adjusted for mobile
        color: '#06b6d4'
    }
    ]

  useEffect(() => {
    const visited = localStorage.getItem('portfolio_visited')
    if (visited) {
      setShowIntro(false)
      setHasVisited(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setHasVisited(true)
    localStorage.setItem('portfolio_visited', 'true')
  }
  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (interfaceRef.current) {
        const rect = interfaceRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Parallax background springs
  const parallaxBg1 = useSpring({
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  })

  const parallaxBg2 = useSpring({
    transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`
  })

  const handleSectionClick = async (section) => {
    setIsDecrypting(true)
    
    // Simulate decryption sequence
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsDecrypting(false)
    setActiveSection(section)
  }

  const handleBackToMap = () => {
    setActiveSection(null)
  }

    return (
    <div 
        ref={interfaceRef}
        style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Courier New, monospace'
        }}
    >
        {/* 3D Earth Background */}
        <InteractiveEarth />

        {/* Parallax Background Layers */}
        <animated.div style={{
        ...parallaxBg1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: 1
        }} />

        {/* Grid Pattern */}
        <animated.div style={{
        ...parallaxBg2,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.1
        }} />

        {/* Radar Sweep */}
        {/* <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(200px, 70vmin, 600px)', // Responsive based on viewport
        height: 'clamp(200px, 70vmin, 600px)', // Responsive based on viewport
        border: '2px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 2,
        background: 'transparent'
        }}>
        <motion.div
            style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '2px',
            height: '50%',
            background: 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
            transformOrigin: 'bottom center'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        </div> */}

        {/* Section Targets */}
        {sections.map((section) => (
        <SectionTarget
            key={section.id}
            section={section}
            isActive={activeSection?.id === section.id}
            onClick={() => handleSectionClick(section)}
            mousePosition={mousePosition}
        />
        ))}
      {!showIntro && !activeSection && (
        <motion.button
          onClick={() => setShowIntro(true)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem 1rem',
            background: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(59, 130, 246, 0.5)',
            borderRadius: '0.5rem',
            color: '#60a5fa',
            fontFamily: 'Courier New, monospace',
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
            cursor: 'pointer',
            zIndex: 25
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NEED HELP?
        </motion.button>
      )}

      {/* Terminal Status Bar */}
        <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        borderTop: '1px solid rgba(59, 130, 246, 0.3)',
        padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
        fontFamily: 'Courier New, monospace',
        fontSize: 'clamp(0.6rem, 2vw, 0.875rem)',
        color: '#60a5fa',
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row', // Stack on mobile
        justifyContent: 'space-between',
        alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
        gap: window.innerWidth < 768 ? '0.25rem' : '0',
        zIndex: 10
        }}>
        <div>
            SYSTEM STATUS: <span style={{ color: '#10b981' }}>ONLINE</span> | 
            SATELLITE LINK: <span style={{ color: '#10b981' }}>ACTIVE</span>
        </div>
        <div>
            MOUSE TRACKING: {Math.round(mousePosition.x)}%, {Math.round(mousePosition.y)}%
        </div>
        </div>

      {/* Decryption Overlay */}
      <AnimatePresence>
        {isDecrypting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                color: '#3b82f6',
                fontSize: '2rem',
                marginBottom: '2rem'
              }}
            >
              <Lock style={{ width: '64px', height: '64px' }} />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '300px' }}
              transition={{ duration: 1.5 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                marginBottom: '1rem',
                borderRadius: '2px'
              }}
            />
            
            <div style={{
              color: '#60a5fa',
              fontSize: '1.25rem',
              fontFamily: 'Courier New, monospace',
              textAlign: 'center'
            }}>
              DECRYPTING SECURITY CLEARANCE...
              <br />
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                █
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Content Overlay */}
      <AnimatePresence>
        {activeSection && (
          <SectionView 
            section={activeSection} 
            onBack={handleBackToMap}
            mousePosition={mousePosition}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && (
          <IntroductionOverlay onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Section Target Component with Mouse Tracking
const SectionTarget = ({ section, isActive, onClick, mousePosition }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const distance = Math.sqrt(
    Math.pow(mousePosition.x - section.position.x, 2) + 
    Math.pow(mousePosition.y - section.position.y, 2)
  )
  
  const proximityScale = Math.max(0.8, 1.2 - (distance * 0.01))
  const proximityGlow = Math.max(0, 1 - (distance * 0.02))

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${section.position.x}%`,
        top: `${section.position.y}%`,
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        zIndex: isHovered ? 20 : 10
      }}
      animate={{
        scale: isActive ? 1.5 : isHovered ? 1.2 : proximityScale,
        filter: `blur(${isHovered ? '0px' : '1px'})`
      }}
      whileHover={{ scale: 1.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Target Ring - Responsive size */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2, repeat: Infinity }
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(40px, 10vw, 80px)', // Responsive width
          height: 'clamp(40px, 10vw, 80px)', // Responsive height
          border: `2px solid ${section.color}`,
          borderRadius: '50%',
          opacity: isHovered ? 0.8 : 0.4
        }}
      />
      
      {/* Glow Effect - Responsive */}
      <motion.div
        animate={{ 
          opacity: isHovered ? 0.6 : proximityGlow * 0.3,
          scale: isHovered ? 1.5 : 1
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(30px, 8vw, 60px)', // Responsive
          height: 'clamp(30px, 8vw, 60px)', // Responsive
          background: `radial-gradient(circle, ${section.color}40 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(8px)'
        }}
      />

      {/* Main Icon - Responsive */}
      <motion.div
        style={{
          width: 'clamp(30px, 8vw, 50px)', // Responsive
          height: 'clamp(30px, 8vw, 50px)', // Responsive
          background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
          border: `2px solid ${section.color}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: section.color,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 0 20px ${section.color}${isHovered ? '80' : '40'}`,
          fontSize: 'clamp(12px, 3vw, 16px)' // Responsive icon size
        }}
        whileHover={{ 
          boxShadow: `0 0 30px ${section.color}`
        }}
      >
        {section.icon}
      </motion.div>

      {/* Label - Better mobile positioning */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '0.5rem',
          padding: 'clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem)', // Responsive padding
          background: 'rgba(0, 0, 0, 0.8)',
          border: `1px solid ${section.color}`,
          borderRadius: '4px',
          color: section.color,
          fontSize: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive font
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          minWidth: 'max-content'
        }}
      >
        {section.name}
        <div style={{
          fontSize: 'clamp(0.4rem, 1.5vw, 0.6rem)', // Responsive
          opacity: 0.8,
          marginTop: '0.1rem'
        }}>
          {section.clearance}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Section Content View with Holographic Effect
const SectionView = ({ section, onBack, mousePosition }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const renderSectionContent = () => {
    switch (section.id) {
      case 'command':
        return <CommandCenter mousePosition={mousePosition} />
      case 'profile':
        return <AgentProfile />
      case 'specs':
        return <TechnicalSpecs />
      case 'missions':
        return <MissionFiles />
      case 'operations':
        return <OperationLog />
      case 'comms':
        return <Communications />
      default:
        return <div>SECTION NOT FOUND</div>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        position: 'fixed',
        top: isMobile ? '2%' : '5%',
        left: isMobile ? '2%' : '5%',
        right: isMobile ? '2%' : '5%',
        bottom: isMobile ? '2%' : '5%',
        background: 'rgba(15, 23, 42, 0.98)',
        border: `2px solid ${section.color}80`,
        borderRadius: isMobile ? '0.5rem' : '1rem',
        backdropFilter: 'blur(20px)',
        zIndex: 50,
        overflow: 'hidden',
        boxShadow: `
          0 0 100px ${section.color}40,
          inset 0 0 50px ${section.color}20
        `,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Holographic Grid Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(${section.color}10 1px, transparent 1px),
          linear-gradient(90deg, ${section.color}10 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        opacity: 0.3
      }} />

      {/* Holographic Glow Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at center, ${section.color}15 0%, transparent 50%)`,
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      {/* Header with Close Button */}
      <div style={{
        padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
        borderBottom: `1px solid ${section.color}30`,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{
            color: section.color,
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: 'bold',
            margin: 0,
            fontFamily: 'Courier New, monospace'
          }}>
            {section.name}
          </h2>
          <div style={{
            color: '#94a3b8',
            fontSize: isMobile ? '0.65rem' : '0.75rem',
            fontFamily: 'Courier New, monospace'
          }}>
            SECURITY CLEARANCE: {section.clearance} | ACCESS GRANTED
          </div>
        </div>
        
        {/* Close Button - Top Right */}
        <motion.button
          onClick={onBack}
          style={{
            padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
            background: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.5)',
            borderRadius: '0.5rem',
            color: '#fca5a5',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            whiteSpace: 'nowrap'
          }}
          whileHover={{ 
            scale: 1.05,
            background: 'rgba(239, 68, 68, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          CLOSE
        </motion.button>
      </div>

      {/* Content Area - Centered and Scrollable */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: isMobile ? '0.5rem' : '0'
      }}>
        {renderSectionContent()}
      </div>
    </motion.div>
  )
}

export default SecurityInterface