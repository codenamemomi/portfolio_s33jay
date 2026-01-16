import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { portfolioData } from '../../data/portfolioData'
import { Rocket, Target, Zap, TrendingUp, ShieldCheck, Layers } from 'lucide-react'

const CapabilitiesPreview = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
    const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%'])

    const { vision, skills } = portfolioData

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: '200vh', // Reduced from 250vh
                background: 'transparent',
                position: 'relative',
                padding: 'clamp(5rem, 10vh, 15vh) 1rem', // Reduced side padding for mobile
                overflow: 'hidden',
                zIndex: 5
            }}
        >
            {/* Dynamic Grid Background - Subtler overlay */}
            <motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '110%',
                y: backgroundY,
                opacity: 0.05,
                pointerEvents: 'none',
                backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        `,
                backgroundSize: '80px 80px'
            }} />

            <motion.div style={{ opacity, maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

                {/* Mission Vision Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 15vh, 12rem)' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.4em', marginBottom: '1.5rem' }}>
                            PHASE_04: FUTURE_SPEC_REVEAL
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 8vw, 5rem)', // Reduced minimum and scale
                            fontWeight: '900',
                            color: '#f8fafc',
                            lineHeight: 1, // Slightly increased for readability
                            marginBottom: '2rem',
                            overflowWrap: 'break-word', // Ensure underscores break if needed
                            wordBreak: 'break-word'
                        }}>
                            POSSIBILITIES_OF<br />
                            <span style={{ color: '#3b82f6' }}>UNRESTRICTED_GROWTH</span>
                        </h2>
                        <p style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: '#94a3b8',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            fontFamily: 'inherit'
                        }}>
                            {vision.pitch}
                        </p>
                    </motion.div>
                </div>

                {/* Growth Vectors Section */}
                <div style={{ marginBottom: '15rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}>
                        <TrendingUp size={24} color="#f59e0b" />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.1em' }}>GROWTH_VECTORS</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 80vw, 450px), 1fr))', gap: '2rem' }}>
                        {vision.growthVectors.map((vector, index) => (
                            <GrowthCard key={vector.id} vector={vector} index={index} />
                        ))}
                    </div>
                </div>

                {/* Core Competencies Visualization */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}>
                        <Layers size={24} color="#10b981" />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10b981', letterSpacing: '0.1em' }}>CORE_COMPETENCIES</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <CapabilityBlock
                            title="SCALABLE_BACKEND"
                            skills={skills.backend.slice(0, 4)}
                            icon={<Zap size={20} />}
                            color="#10b981"
                        />
                        <CapabilityBlock
                            title="ELITE_FRONTEND"
                            skills={skills.frontend.slice(0, 4)}
                            icon={<Target size={20} />}
                            color="#3b82f6"
                        />
                        <CapabilityBlock
                            title="SECURE_INFRA"
                            skills={skills.devops.slice(0, 4)}
                            icon={<ShieldCheck size={20} />}
                            color="#f59e0b"
                        />
                    </div>
                </div>

            </motion.div>

            {/* Background Ambience */}
            <FloatingDataParticles />
        </section>
    )
}

const GrowthCard = ({ vector, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
                background: 'rgba(15, 23, 42, 0.4)',
                border: `1px solid ${vector.color}33`,
                borderLeft: `4px solid ${vector.color}`,
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                opacity: 0.1,
                color: vector.color
            }}>
                <Rocket size={40} />
            </div>

            <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '900',
                color: '#f8fafc',
                marginBottom: '1rem',
                letterSpacing: '0.05em'
            }}>
                {vector.title}
            </h4>
            <p style={{
                color: '#94a3b8',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
            }}>
                {vector.description}
            </p>

            <div style={{
                fontSize: '0.65rem',
                color: vector.color,
                fontWeight: '900',
                letterSpacing: '0.2em'
            }}>
                [ STATUS: READY_FOR_DEPLOYMENT ]
            </div>
        </motion.div>
    )
}

const CapabilityBlock = ({ title, skills, icon, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{
                padding: '2rem',
                border: '1px solid rgba(148, 163, 184, 0.05)',
                background: 'rgba(2, 6, 23, 0.8)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', color }}>
                {icon}
                <h4 style={{ fontSize: '1rem', fontWeight: '900', letterSpacing: '0.1em' }}>{title}</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {skills.map(skill => (
                    <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.7rem' }}>
                            <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>{skill.name}</span>
                            <span style={{ color, fontWeight: '900' }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '2px', background: 'rgba(59, 130, 246, 0.1)', position: 'relative' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                style={{ height: '100%', background: color, boxShadow: `0 0 10px ${color}44` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

const FloatingDataParticles = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -1000],
                        opacity: [0, 0.3, 0],
                        x: [Math.random() * 100 + "%", (Math.random() * 100 + (Math.random() > 0.5 ? 5 : -5)) + "%"]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        bottom: -50,
                        color: '#3b82f611',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {`0x${Math.random().toString(16).substring(2, 8).toUpperCase()}_GROWTH_NODE_CONNECTED`}
                </motion.div>
            ))}
        </div>
    )
}

export default CapabilitiesPreview
