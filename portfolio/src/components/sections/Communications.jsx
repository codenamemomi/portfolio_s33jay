import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Shield, Satellite, AlertCircle } from 'lucide-react'

const Communications = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isEncrypting, setIsEncrypting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const contactMethods = [
    {
      icon: <Mail style={{ width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} />,
      label: 'ENCRYPTED EMAIL',
      value: 'akinrogundecodenamemomi@gmail.com',
      href: 'mailto:akinrogundecodenamemomi@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: <Phone style={{ width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} />,
      label: 'SECURE LINE',
      value: '+2349011123434',
      href: 'tel:+2349011123434',
      color: '#10b981'
    },
    {
      icon: <MapPin style={{ width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} />,
      label: 'LOCATION',
      value: 'Nigeria',
      href: '#',
      color: '#8b5cf6'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsEncrypting(true)
    setError('')
    
    try {
      const API_URL = 'https://form-forums.vercel.app/api/v1/contact'
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Transmission failed. Please try again.')
      }

      const result = await response.json()
      
      setIsEncrypting(false)
      setIsSent(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSent(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
      
    } catch (err) {
      setIsEncrypting(false)
      setError(err.message || 'Transmission failed. Please try again.')
    }
  }

  return (
    <div style={{ 
      height: '100%', 
      padding: isMobile ? '0.75rem' : '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '0.75rem' : '1rem',
      overflow: 'hidden'
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
          gap: isMobile ? '0.5rem' : '1rem',
          marginBottom: isMobile ? '0.25rem' : '0.5rem',
          flexWrap: 'wrap'
        }}>
          <Satellite style={{ 
            width: isMobile ? '20px' : '24px', 
            height: isMobile ? '20px' : '24px', 
            color: '#06b6d4' 
          }} />
          <h1 style={{
            color: '#06b6d4',
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            margin: 0
          }}>
            COMMUNICATIONS // SECURE CHANNEL
          </h1>
        </div>
        
        <div style={{
          padding: isMobile ? '0.5rem' : '0.75rem',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '0.5rem',
          fontFamily: 'Courier New, monospace',
          fontSize: isMobile ? '0.65rem' : '0.75rem',
          color: '#22d3ee',
          wordBreak: 'break-word'
        }}>
          CHANNEL STATUS: SECURE | ENCRYPTION: ENABLED | CLEARANCE: LEVEL 2
        </div>
      </motion.div>

      {/* Content Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '1rem' : '1.5rem',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            padding: isMobile ? '1rem' : '1.5rem',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            minHeight: isMobile ? 'auto' : '400px'
          }}
        >
          <h2 style={{
            color: '#06b6d4',
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: 'bold',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            fontFamily: 'Courier New, monospace'
          }}>
            SECURE CONTACT CHANNELS
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '0.75rem' : '1rem'
          }}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.75rem' : '1rem',
                  padding: isMobile ? '0.75rem' : '1rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: `1px solid ${method.color}30`,
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  minHeight: '60px'
                }}
                whileHover={{ 
                  borderColor: `${method.color}60`,
                  background: `rgba(${parseInt(method.color.slice(1, 3), 16)}, ${parseInt(method.color.slice(3, 5), 16)}, ${parseInt(method.color.slice(5, 7), 16)}, 0.1)`,
                  transform: isMobile ? 'none' : 'translateX(5px)'
                }}
              >
                <div style={{
                  padding: isMobile ? '0.4rem' : '0.5rem',
                  background: `rgba(${parseInt(method.color.slice(1, 3), 16)}, ${parseInt(method.color.slice(3, 5), 16)}, ${parseInt(method.color.slice(5, 7), 16)}, 0.2)`,
                  borderRadius: '0.5rem',
                  color: method.color,
                  flexShrink: 0
                }}>
                  {method.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    color: method.color,
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    fontWeight: '600',
                    fontFamily: 'Courier New, monospace',
                    marginBottom: '0.25rem',
                    wordBreak: 'break-word'
                  }}>
                    {method.label}
                  </div>
                  <div style={{
                    color: '#cbd5e1',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontFamily: 'Courier New, monospace',
                    wordBreak: 'break-word'
                  }}>
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '0.75rem' : '1rem',
            marginTop: isMobile ? '1rem' : '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: <Github style={{ width: 'clamp(16px, 3vw, 18px)', height: 'clamp(16px, 3vw, 18px)' }} />, href: 'https://github.com/codenamemomi', color: '#8b5cf6' },
              { icon: <Linkedin style={{ width: 'clamp(16px, 3vw, 18px)', height: 'clamp(16px, 3vw, 18px)' }} />, href: '#', color: '#3b82f6' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                style={{
                  padding: isMobile ? '0.5rem' : '0.75rem',
                  background: `rgba(${parseInt(social.color.slice(1, 3), 16)}, ${parseInt(social.color.slice(3, 5), 16)}, ${parseInt(social.color.slice(5, 7), 16)}, 0.1)`,
                  border: `1px solid ${social.color}30`,
                  borderRadius: '0.75rem',
                  color: social.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
                whileHover={{ 
                  scale: 1.1,
                  background: `rgba(${parseInt(social.color.slice(1, 3), 16)}, ${parseInt(social.color.slice(3, 5), 16)}, ${parseInt(social.color.slice(5, 7), 16)}, 0.2)`
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Secure Message Form */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            padding: isMobile ? '1rem' : '1.5rem',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            minHeight: isMobile ? 'auto' : '400px'
          }}
        >
          <h2 style={{
            color: '#06b6d4',
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: 'bold',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            fontFamily: 'Courier New, monospace'
          }}>
            ENCRYPTED MESSAGE TRANSMISSION
          </h2>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '1rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <AlertCircle style={{ width: '16px', height: '16px', color: '#ef4444', flexShrink: 0 }} />
              <div style={{
                color: '#fca5a5',
                fontSize: '0.8rem',
                fontFamily: 'Courier New, monospace'
              }}>
                {error}
              </div>
            </motion.div>
          )}

          {isSent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: isMobile ? '1.5rem' : '2rem',
                textAlign: 'center',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '1rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Shield style={{ 
                width: isMobile ? '36px' : '48px', 
                height: isMobile ? '36px' : '48px', 
                color: '#22c55e', 
                margin: '0 auto 1rem' 
              }} />
              <div style={{
                color: '#22c55e',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 'bold',
                fontFamily: 'Courier New, monospace',
                marginBottom: '0.5rem'
              }}>
                TRANSMISSION SUCCESSFUL
              </div>
              <div style={{
                color: '#86efac',
                fontSize: isMobile ? '0.7rem' : '0.8rem',
                fontFamily: 'Courier New, monospace',
                lineHeight: '1.4'
              }}>
                Message encrypted and transmitted securely.<br/>
                Awaiting response from command...
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '0.75rem' : '1rem' 
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: isMobile ? '0.75rem' : '1rem' 
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#06b6d4',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontFamily: 'Courier New, monospace'
                  }}>
                    AGENT IDENTITY
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: isMobile ? '0.6rem' : '0.75rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: '0.5rem',
                      color: '#e2e8f0',
                      fontFamily: 'Courier New, monospace',
                      fontSize: isMobile ? '0.75rem' : '0.8rem'
                    }}
                    placeholder="Enter your identity..."
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#06b6d4',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontFamily: 'Courier New, monospace'
                  }}>
                    ENCRYPTED CHANNEL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: isMobile ? '0.6rem' : '0.75rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: '0.5rem',
                      color: '#e2e8f0',
                      fontFamily: 'Courier New, monospace',
                      fontSize: isMobile ? '0.75rem' : '0.8rem'
                    }}
                    placeholder="secure@channel.com"
                  />
                </div>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#06b6d4',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontFamily: 'Courier New, monospace'
                }}>
                  MISSION CLASSIFICATION
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.6rem' : '0.75rem',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '0.5rem',
                    color: '#e2e8f0',
                    fontFamily: 'Courier New, monospace',
                    fontSize: isMobile ? '0.75rem' : '0.8rem'
                  }}
                  placeholder="Mission objective..."
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#06b6d4',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontFamily: 'Courier New, monospace'
                }}>
                  ENCRYPTED MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={isMobile ? 4 : 6}
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.6rem' : '0.75rem',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '0.5rem',
                    color: '#e2e8f0',
                    fontFamily: 'Courier New, monospace',
                    fontSize: isMobile ? '0.75rem' : '0.8rem',
                    resize: 'vertical',
                    minHeight: isMobile ? '100px' : '120px'
                  }}
                  placeholder="Transmit encrypted message..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isEncrypting}
                style={{
                  padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
                  background: isEncrypting 
                    ? 'rgba(245, 158, 11, 0.2)' 
                    : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  border: '1px solid rgba(6, 182, 212, 0.5)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  fontWeight: '600',
                  cursor: isEncrypting ? 'not-allowed' : 'pointer',
                  fontFamily: 'Courier New, monospace',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  minHeight: '50px'
                }}
                whileHover={isEncrypting ? {} : { scale: 1.05 }}
                whileTap={isEncrypting ? {} : { scale: 0.95 }}
              >
                {isEncrypting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid transparent',
                        borderTop: '2px solid white',
                        borderRadius: '50%'
                      }}
                    />
                    ENCRYPTING TRANSMISSION...
                  </>
                ) : (
                  <>
                    <Send style={{ width: '16px', height: '16px' }} />
                    INITIATE SECURE TRANSMISSION
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Communications