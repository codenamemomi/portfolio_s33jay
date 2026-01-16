import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import { Twitter, Instagram, Music, ArrowDown } from 'lucide-react'

const AgentIdentity = () => {
    const { personal } = portfolioData

    const socialIcons = {
        Twitter: <Twitter size={24} />,
        Instagram: <Instagram size={24} />,
        TikTok: <Music size={24} />, // Lucide doesn't have a TikTok icon, using Music as a close match for the style
    }

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 20,
            textAlign: 'center',
            padding: '2rem',
            background: 'transparent'
        }}>
            {/* High-Impact Identity Text */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.span
                    initial={{ opacity: 0, letterSpacing: '1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.4em' }}
                    transition={{ duration: 1.5 }}
                    style={{
                        color: '#3b82f6',
                        fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        display: 'block'
                    }}
                >
                    PROTOCOL_INITIATED
                </motion.span>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 12vw, 7rem)',
                    fontWeight: '950',
                    color: '#f8fafc',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '-0.02em'
                }}>
                    HELLO_I_AM<br />
                    <motion.span
                        animate={{ color: ['#f8fafc', '#3b82f6', '#f8fafc'] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        {personal.name.split(' ')[0]}
                    </motion.span>
                </h1>

                <div style={{
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                    color: '#94a3b8',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    I_AM_A_DEVELOPER.
                    <br />
                    <span style={{ color: '#3b82f6' }}>{personal.motto}</span>
                </div>
            </motion.div>

            {/* Social Link Cluster */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    display: 'flex',
                    gap: '1rem', // Reduced gap for mobile efficiency
                    marginTop: 'clamp(2rem, 8vh, 4rem)',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '0 1rem'
                }}
            >
                {personal.socials.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: '#3b82f6' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            color: '#64748b',
                            textDecoration: 'none',
                            fontSize: '0.75rem', // Slightly smaller font for mobile
                            fontWeight: '900',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            padding: '0.6rem 1.2rem', // Reduced padding
                            background: 'rgba(15, 23, 42, 0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '4px'
                        }}
                    >
                        {socialIcons[social.platform]}
                        <span style={{ letterSpacing: '0.1em' }}>{social.name}</span>
                    </motion.a>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: 'clamp(2rem, 5vh, 4rem)', // Dynamic bottom spacing
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#3b82f6',
                    opacity: 0.6
                }}
            >
                <span style={{ fontSize: '0.6rem', fontWeight: '900', letterSpacing: '0.2em' }}>ACCESS_COMMAND_CENTER</span>
                <ArrowDown size={16} />
            </motion.div>
        </section>
    )
}

export default AgentIdentity
