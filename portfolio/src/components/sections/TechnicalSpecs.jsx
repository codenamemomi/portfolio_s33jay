import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Cpu, Database, Cloud, Code2, Server, Shield, Activity } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'

const SkillBar = ({ skill, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ marginBottom: '1.25rem' }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '0.4rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity style={{ width: 10, height: 10, color: color }} />
          <span style={{
            fontWeight: '800',
            color: '#f8fafc',
            fontSize: '0.75rem',
            letterSpacing: '0.02em'
          }}>
            {skill.name.toUpperCase()}
          </span>
        </div>
        <span style={{
          color: color,
          fontWeight: '900',
          fontSize: '0.7rem',
          fontFamily: 'inherit'
        }}>
          {skill.level}%
        </span>
      </div>
      <div style={{
        height: '4px',
        backgroundColor: 'rgba(2, 6, 23, 0.8)',
        borderRadius: '1px',
        overflow: 'hidden',
        border: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{
            height: '100%',
            background: color,
            boxShadow: `0 0 10px ${color}66`
          }}
        />
      </div>
    </motion.div>
  )
}

const TechnicalSpecs = () => {
  const [activeCategory, setActiveCategory] = useState('backend')

  const skillCategories = useMemo(() => {
    const { skills } = portfolioData
    return {
      backend: {
        name: 'BACKEND_CORE',
        icon: <Server style={{ width: 18, height: 18 }} />,
        color: '#10b981',
        updated: '2025.Q1',
        skills: skills.backend
      },
      frontend: {
        name: 'FRONTEND_SYSTEMS',
        icon: <Code2 style={{ width: 18, height: 18 }} />,
        color: '#3b82f6',
        updated: '2025.Q1',
        skills: skills.frontend
      },
      devops: {
        name: 'CLOUD_DEPLOYMENT',
        icon: <Cloud style={{ width: 18, height: 18 }} />,
        color: '#f59e0b',
        updated: '2025.Q1',
        skills: skills.devops
      },
      security: {
        name: 'CYBER_DEFENSE',
        icon: <Shield style={{ width: 18, height: 18 }} />,
        color: '#8b5cf6',
        updated: '2025.Q1',
        skills: skills.security
      }
    }
  }, [])

  return (
    <div style={{
      height: '100%',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      fontFamily: "'JetBrains Mono', monospace"
    }}>
      {/* Schematic Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ flexShrink: 0 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Cpu style={{ width: 20, height: 20, color: '#f59e0b' }} />
          <h1 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#f8fafc', margin: 0 }}>TECH_SPECIFICATIONS_V3.0</h1>
        </div>
        <div style={{ height: '1px', width: '100%', background: 'rgba(245, 158, 11, 0.2)', marginBottom: '1rem' }} />
      </motion.div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: '2rem',
        overflow: 'hidden'
      }}>
        {/* Navigation Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {Object.entries(skillCategories).map(([key, cat]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              style={{
                padding: '0.75rem 1rem',
                background: activeCategory === key ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                border: `1px solid ${activeCategory === key ? '#f59e0b' : 'rgba(148, 163, 184, 0.1)'}`,
                color: activeCategory === key ? '#f59e0b' : '#94a3b8',
                fontSize: '0.65rem',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '2px',
                transition: 'all 0.2s ease'
              }}
              whileHover={{ borderColor: '#f59e0b66' }}
            >
              {cat.icon}
              {cat.name}
            </motion.button>
          ))}

          <div style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <div style={{ fontSize: '0.5rem', color: '#64748b', marginBottom: '0.2rem' }}>SYSTEM_TIME</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{new Date().toLocaleTimeString()}</div>
          </div>
        </div>

        {/* Diagnostic Panel */}
        <div style={{
          background: 'rgba(2, 6, 23, 0.4)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            padding: '0.5rem',
            fontSize: '0.55rem',
            color: '#64748b',
            letterSpacing: '0.1em'
          }}>
            LAST_UPDT: {skillCategories[activeCategory].updated}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              style={{ flex: 1 }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '800', color: skillCategories[activeCategory].color, marginBottom: '2rem' }}>
                {'>'} ANALYZING {skillCategories[activeCategory].name}...
              </div>

              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {skillCategories[activeCategory].skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={skillCategories[activeCategory].color}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Grid Overlay */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(148, 163, 184, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ height: '2px', background: 'rgba(148, 163, 184, 0.1)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSpecs