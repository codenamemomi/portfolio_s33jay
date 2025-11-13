import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Cpu, Database, Cloud, Code2, Server, Shield } from 'lucide-react'

const SkillBar = ({ skill, color }) => {
  const barStyle = {
    height: '6px',
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: '3px',
    overflow: 'hidden',
    border: '1px solid rgba(99, 102, 241, 0.2)'
  }

  const fillStyle = {
    height: '100%',
    background: `linear-gradient(90deg, ${color}, ${color}dd)`,
    borderRadius: '3px',
    boxShadow: `0 0 8px ${color}40`
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ marginBottom: '1rem' }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <span style={{
          fontWeight: '600',
          color: 'white',
          fontSize: '0.9rem',
          fontFamily: 'Courier New, monospace'
        }}>
          {skill.name}
        </span>
        <span style={{
          color: color,
          fontWeight: '600',
          fontSize: '0.8rem',
          fontFamily: 'Courier New, monospace'
        }}>
          {skill.level}%
        </span>
      </div>
      <div style={barStyle}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2,
            ease: "easeOut"
          }}
          style={fillStyle}
        />
      </div>
    </motion.div>
  )
}

const TechnicalSpecs = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [hoveredTab, setHoveredTab] = useState(null)
  
  const skillCategories = useMemo(() => ({
    frontend: {
      name: 'FRONTEND SYSTEMS',
      icon: <Code2 style={{ width: '20px', height: '20px' }} />,
      color: '#3b82f6',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    backend: {
      name: 'BACKEND SYSTEMS',
      icon: <Server style={{ width: '20px', height: '20px' }} />,
      color: '#10b981',
      skills: [
        { name: 'Python', level: 88 },
        { name: 'Django', level: 65 },
        { name: 'FastAPI', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'Node.js', level: 35 }
      ]
    },
    devops: {
      name: 'DEV-OPS',
      icon: <Cloud style={{ width: '20px', height: '20px' }} />,
      color: '#f59e0b',
      skills: [
        { name: 'Docker', level: 78 },
        { name: 'GitHub Actions', level: 75 },
        { name: 'NGINX', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Render', level: 80 }
      ]
    },
    blockchain: {
      name: 'BLOCKCHAIN TECH',
      icon: <Shield style={{ width: '20px', height: '20px' }} />,
      color: '#8b5cf6',
      skills: [
        { name: 'Hedera SDK', level: 75 },
        { name: 'Smart Contracts', level: 70 },
        { name: 'Web3', level: 65 }
      ]
    }
  }), [])

  // Memoize the current category skills
  const currentSkills = useMemo(() => 
    skillCategories[activeCategory].skills,
    [activeCategory, skillCategories]
  )

  const handleTabClick = (key) => {
    setActiveCategory(key)
    setHoveredTab(null)
  }

  const getTabStyle = (key, category) => {
    const isActive = activeCategory === key
    const isHovered = hoveredTab === key
    
    let backgroundColor = 'rgba(30, 41, 59, 0.5)'
    let borderColor = 'rgba(245, 158, 11, 0.2)'
    let textColor = '#cbd5e1'

    if (isActive) {
      backgroundColor = category.color
      borderColor = category.color
      textColor = 'white'
    } else if (isHovered) {
      backgroundColor = 'rgba(245, 158, 11, 0.1)'
      borderColor = 'rgba(245, 158, 11, 0.4)'
    }

    return {
      padding: '1rem 0.75rem',
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '0.75rem',
      color: textColor,
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'Courier New, monospace',
      fontSize: '0.8rem'
    }
  }

  return (
    <div style={{ 
      height: '100%', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          flexShrink: 0
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '0.5rem'
        }}>
          <Cpu style={{ width: '24px', height: '24px', color: '#f59e0b' }} />
          <h1 style={{
            color: '#f59e0b',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            TECHNICAL SPECS // SYSTEMS ANALYSIS
          </h1>
        </div>
        
        <div style={{
          padding: '0.75rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: '0.75rem',
          color: '#fbbf24'
        }}>
          SYSTEM ANALYSIS: ACTIVE | TECHNICAL PROFICIENCY: LEVEL 3 | SPECS: UNCLASSIFIED
        </div>
      </motion.div>

      {/* Content Area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        overflowY: 'auto'
      }}>
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem'
          }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => handleTabClick(key)}
              onMouseEnter={() => setHoveredTab(key)}
              onMouseLeave={() => setHoveredTab(null)}
              style={getTabStyle(key, category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '1.5rem',
            background: 'rgba(15, 23, 42, 0.6)',
            border: `1px solid ${skillCategories[activeCategory].color}30`,
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            flex: 1
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '0.5rem',
              background: `rgba(${parseInt(skillCategories[activeCategory].color.slice(1, 3), 16)}, ${parseInt(skillCategories[activeCategory].color.slice(3, 5), 16)}, ${parseInt(skillCategories[activeCategory].color.slice(5, 7), 16)}, 0.2)`,
              borderRadius: '0.5rem',
              color: skillCategories[activeCategory].color
            }}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 style={{
              color: skillCategories[activeCategory].color,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              margin: 0,
              fontFamily: 'Courier New, monospace'
            }}>
              {skillCategories[activeCategory].name}
            </h3>
          </div>
          
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {currentSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                color={skillCategories[activeCategory].color}
              />
            ))}
          </div>

          {/* Proficiency Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: '2rem',
              padding: '1rem',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '0.5rem',
              fontFamily: 'Courier New, monospace',
              fontSize: '0.75rem',
              color: '#fbbf24'
            }}
          >
            <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>PROFICIENCY SCALE:</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
              <span>BASIC</span>
              <span>INTERMEDIATE</span>
              <span>ADVANCED</span>
              <span>EXPERT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechnicalSpecs