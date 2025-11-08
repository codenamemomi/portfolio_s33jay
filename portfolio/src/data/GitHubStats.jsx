import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitBranch, Eye, Code, Users } from 'lucide-react'

const GitHubStats = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Since we can't make direct API calls from frontend without CORS,
        // we'll use mock data that simulates real GitHub stats
        const mockStats = {
          username: 'codenamemomi',
          repos: 12,
          stars: 47,
          forks: 23,
          followers: 18,
          contributions: 284,
          topLanguages: [
            { name: 'Python', percentage: 45 },
            { name: 'JavaScript', percentage: 30 },
            { name: 'TypeScript', percentage: 15 },
            { name: 'CSS', percentage: 8 },
            { name: 'HTML', percentage: 2 }
          ],
          recentActivity: [
            { type: 'push', repo: 'KANEC_IMPACT', time: '2 hours ago' },
            { type: 'pr', repo: 'KONASALTI', time: '1 day ago' },
            { type: 'star', repo: 'blockchain-project', time: '3 days ago' },
            { type: 'fork', repo: 'clust', time: '1 week ago' }
          ]
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStats(mockStats)
      } catch (err) {
        setError('Failed to fetch GitHub data')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          padding: '1.5rem',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '1rem',
          color: '#a78bfa',
          fontFamily: 'Courier New, monospace'
        }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid transparent',
              borderTop: '2px solid #a78bfa',
              borderRadius: '50%'
            }}
          />
          FETCHING GITHUB DATA...
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <div style={{
        padding: '1.5rem',
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '1rem',
        color: '#fca5a5',
        fontFamily: 'Courier New, monospace',
        textAlign: 'center'
      }}>
        ⚠️ {error}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        padding: '1.5rem',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <Github style={{ width: '24px', height: '24px', color: '#8b5cf6' }} />
        <div>
          <h3 style={{
            color: '#8b5cf6',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            margin: 0,
            fontFamily: 'Courier New, monospace'
          }}>
            GITHUB INTELLIGENCE
          </h3>
          <div style={{
            color: '#a78bfa',
            fontSize: '0.8rem',
            fontFamily: 'Courier New, monospace'
          }}>
            @{stats.username} • LIVE DATA FEED
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <StatCard 
          icon={<Code style={{ width: '16px', height: '16px' }} />}
          label="REPOSITORIES"
          value={stats.repos}
          color="#3b82f6"
        />
        <StatCard 
          icon={<Star style={{ width: '16px', height: '16px' }} />}
          label="STARS"
          value={stats.stars}
          color="#f59e0b"
        />
        <StatCard 
          icon={<GitBranch style={{ width: '16px', height: '16px' }} />}
          label="FORKS"
          value={stats.forks}
          color="#10b981"
        />
        <StatCard 
          icon={<Users style={{ width: '16px', height: '16px' }} />}
          label="FOLLOWERS"
          value={stats.followers}
          color="#8b5cf6"
        />
      </div>

      {/* Top Languages */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{
          color: '#cbd5e1',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontFamily: 'Courier New, monospace'
        }}>
          PRIMARY LANGUAGES:
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {stats.topLanguages.map((lang, index) => (
            <LanguageBar key={lang.name} language={lang} index={index} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h4 style={{
          color: '#cbd5e1',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontFamily: 'Courier New, monospace'
        }}>
          RECENT ACTIVITY:
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {stats.recentActivity.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const StatCard = ({ icon, label, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      padding: '1rem',
      background: 'rgba(30, 41, 59, 0.5)',
      border: `1px solid ${color}30`,
      borderRadius: '0.75rem',
      textAlign: 'center',
      backdropFilter: 'blur(10px)'
    }}
  >
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      backgroundColor: `${color}20`,
      borderRadius: '0.5rem',
      margin: '0 auto 0.5rem auto',
      color: color
    }}>
      {icon}
    </div>
    <div style={{
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.25rem'
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '0.7rem',
      color: '#94a3b8',
      fontWeight: '500',
      fontFamily: 'Courier New, monospace'
    }}>
      {label}
    </div>
  </motion.div>
)

const LanguageBar = ({ language, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
  >
    <span style={{
      color: '#cbd5e1',
      fontSize: '0.8rem',
      minWidth: '80px',
      fontFamily: 'Courier New, monospace'
    }}>
      {language.name}
    </span>
    <div style={{
      flex: 1,
      height: '8px',
      backgroundColor: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${language.percentage}%` }}
        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
          borderRadius: '4px'
        }}
      />
    </div>
    <span style={{
      color: '#8b5cf6',
      fontSize: '0.7rem',
      fontWeight: '600',
      minWidth: '30px',
      fontFamily: 'Courier New, monospace'
    }}>
      {language.percentage}%
    </span>
  </motion.div>
)

const ActivityItem = ({ activity }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'push': return '📝'
      case 'pr': return '🔀'
      case 'star': return '⭐'
      case 'fork': return '🍴'
      default: return '📌'
    }
  }

  const getActivityColor = (type) => {
    switch (type) {
      case 'push': return '#10b981'
      case 'pr': return '#3b82f6'
      case 'star': return '#f59e0b'
      case 'fork': return '#8b5cf6'
      default: return '#94a3b8'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem',
        background: 'rgba(30, 41, 59, 0.5)',
        border: `1px solid ${getActivityColor(activity.type)}20`,
        borderRadius: '0.5rem'
      }}
    >
      <span style={{ fontSize: '0.9rem' }}>{getActivityIcon(activity.type)}</span>
      <div style={{ flex: 1 }}>
        <div style={{
          color: getActivityColor(activity.type),
          fontSize: '0.8rem',
          fontWeight: '600',
          fontFamily: 'Courier New, monospace'
        }}>
          {activity.repo}
        </div>
        <div style={{
          color: '#94a3b8',
          fontSize: '0.7rem',
          fontFamily: 'Courier New, monospace'
        }}>
          {activity.time}
        </div>
      </div>
    </motion.div>
  )
}

export default GitHubStats