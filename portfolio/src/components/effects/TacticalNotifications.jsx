import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AlertTriangle, Info, Shield, Target, MousePointer2, Zap, Search } from 'lucide-react'

const instructions = [
    { id: 1, type: 'MANUAL', text: 'TACTICAL_ADVICE: LEFT-CLICK ON ORBITAL NODES TO ENGAGE DATA MODULES.', icon: <MousePointer2 size={14} />, color: '#3b82f6' },
    { id: 2, type: 'MISSION', text: 'CORE_OBJECTIVE: SCROLL VERTICALLY TO ANALYZE LONG-TERM GROWTH VECTORS.', icon: <Target size={14} />, color: '#f59e0b' },
    { id: 3, type: 'SECURITY', text: 'ACCESS_LOG: AGENT PROFILE CONTAINS HIGH-LEVEL CLEARANCE CREDENTIALS.', icon: <Shield size={14} />, color: '#10b981' },
    { id: 4, type: 'ALERT', text: 'SYSTEM_DIAGNOSTIC: ALL INTERFACE ELEMENTS ARE TOUCH-REACTIVE.', icon: <AlertTriangle size={14} />, color: '#ef4444' },
    { id: 5, type: 'COMMS', text: 'SIGNAL_MODULATION: SECURE CONTACT CHANNEL LOCATED IN REAR-RIGHT SECTOR.', icon: <Info size={14} />, color: '#8b5cf6' },
    { id: 6, type: 'TECH', text: 'HARDWARE_SCAN: TECH SPECIFICATIONS REVEAL MASTER-LEVEL STACK CAPACITY.', icon: <Zap size={14} />, color: '#3b82f6' },
    { id: 7, type: 'PROJECTION', text: 'FUTURE_REVEAL: EXPLORE POSSIBILITIES OF GROWTH IN LOWER DATA STRATA.', icon: <Search size={14} />, color: '#10b981' }
]

const TacticalNotifications = () => {
    const [currentNotification, setCurrentNotification] = useState(null)

    useEffect(() => {
        // Initial notification after a very short delay
        const initialTimer = setTimeout(() => {
            setCurrentNotification(instructions[0])
            setTimeout(() => setCurrentNotification(null), 7000)
        }, 2000)

        // Cycle through random notifications more frequently
        const interval = setInterval(() => {
            const randomIdx = Math.floor(Math.random() * instructions.length)
            setCurrentNotification(instructions[randomIdx])

            // Clear notification after 7 seconds
            setTimeout(() => setCurrentNotification(null), 7000)
        }, 12000) // Show every 12 seconds instead of 15

        return () => {
            clearTimeout(initialTimer)
            clearInterval(interval)
        }
    }, [])

    return (
        <div style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            zIndex: 10000,
            pointerEvents: 'none',
            width: '340px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontFamily: "'JetBrains Mono', monospace"
        }}>
            <AnimatePresence>
                {currentNotification && (
                    <motion.div
                        key={currentNotification.id}
                        initial={{ opacity: 0, x: 100, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: 100, scale: 0.8, filter: 'blur(10px)' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        style={{
                            background: 'rgba(2, 6, 23, 0.95)',
                            border: `1px solid ${currentNotification.color}88`,
                            borderLeft: `5px solid ${currentNotification.color}`,
                            padding: '1.25rem',
                            backdropFilter: 'blur(15px)',
                            boxShadow: `0 0 30px ${currentNotification.color}33`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Visual Glitch Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(45deg, transparent, ${currentNotification.color}05, transparent)`,
                            pointerEvents: 'none'
                        }} />

                        {/* Pulsing Status Indicator */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '2px',
                            background: currentNotification.color,
                        }}>
                            <motion.div
                                animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '2px',
                                    background: currentNotification.color
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ color: currentNotification.color, display: 'flex' }}
                            >
                                {currentNotification.icon}
                            </motion.span>
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: '900',
                                color: currentNotification.color,
                                letterSpacing: '0.25em',
                                textShadow: `0 0 10px ${currentNotification.color}66`
                            }}>
                                [ {currentNotification.type}_BROADCAST ]
                            </span>
                        </div>

                        <p style={{
                            fontSize: '0.8rem',
                            color: '#f8fafc',
                            margin: 0,
                            lineHeight: 1.6,
                            fontWeight: '700',
                            letterSpacing: '0.02em'
                        }}>
                            {currentNotification.text}
                        </p>

                        {/* Horizontal Scanning Node */}
                        <motion.div
                            animate={{ left: ['-10%', '110%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                width: '1px',
                                background: `linear-gradient(to bottom, transparent, ${currentNotification.color}, transparent)`,
                                boxShadow: `0 0 15px ${currentNotification.color}`,
                                zIndex: 1
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TacticalNotifications
