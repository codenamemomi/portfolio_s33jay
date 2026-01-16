import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo } from 'react'

const SpaceVoid = () => {
    const { scrollYProgress } = useScroll()

    // High-impact parallax transforms
    const starY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const auroraY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
    const blackHoleY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
    const blackHoleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.4])
    const auroraRotation = useTransform(scrollYProgress, [0, 1], [0, 60])

    // Denser Starfield
    const stars = useMemo(() => {
        return Array.from({ length: 300 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.9 + 0.1,
            duration: Math.random() * 5 + 2,
            color: Math.random() > 0.8 ? '#93c5fd' : Math.random() > 0.9 ? '#fca5a5' : '#ffffff'
        }))
    }, [])

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#020617', // Base void
            overflow: 'hidden',
            zIndex: 1, // Changed to 1 to ensure it's above body background
            pointerEvents: 'none'
        }}>
            {/* Deep Space Parallax */}
            <motion.div style={{
                position: 'absolute',
                top: '-20%',
                left: 0,
                width: '100%',
                height: '140%',
                y: starY
            }}>
                {stars.map(star => (
                    <motion.div
                        key={star.id}
                        animate={{
                            opacity: [star.opacity, 0.2, star.opacity],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            background: star.color,
                            borderRadius: '50%',
                            boxShadow: `0 0 5px ${star.color}`
                        }}
                    />
                ))}
            </motion.div>

            {/* Massive Aurora Plasma - Distant Perspective */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-40%',
                    left: '-40%',
                    width: '180%',
                    height: '180%',
                    y: auroraY,
                    rotate: auroraRotation,
                    background: `
            radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 40%)
          `,
                    filter: 'blur(120px)',
                    opacity: 0.3
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Hero Black Hole - Central Singularity */}
            <motion.div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                translateY: blackHoleY,
                scale: blackHoleScale,
                width: '800px', // Massive scale
                height: '800px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Swirling Accretion Disk */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.2), transparent)`,
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        opacity: 0.2
                    }}
                />

                {/* Primary Event Horizon Glow */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        width: '350px',
                        height: '350px',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 150px rgba(59, 130, 246, 0.7)'
                    }}
                />

                {/* The Absolute Void Core */}
                <div style={{
                    width: '200px',
                    height: '200px',
                    background: '#000',
                    borderRadius: '50%',
                    boxShadow: `
            0 0 60px #000,
            0 0 120px rgba(59, 130, 246, 0.8),
            inset 0 0 60px #000
          `,
                    position: 'relative',
                    zIndex: 2,
                    border: '2px solid rgba(59, 130, 246, 0.3)'
                }}>
                    {/* Gravitational Lensing (Photon Ring) */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: '-5px',
                            left: '-5px',
                            width: 'calc(100% + 10px)',
                            height: 'calc(100% + 10px)',
                            border: '3px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: '50%',
                            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)'
                        }}
                    />
                </div>
            </motion.div>

            {/* Technical Grid for depth calibration */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15,
                backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: '150px 150px',
                pointerEvents: 'none'
            }} />
        </div>
    )
}

export default SpaceVoid
