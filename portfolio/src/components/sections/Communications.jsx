import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Shield, Satellite, AlertCircle, Wifi } from 'lucide-react'

const Communications = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isEncrypting, setIsEncrypting] = useState(false)
  const [transmissionLog, setTransmissionLog] = useState([])
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')
  const logEndRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [transmissionLog])

  const contactMethods = [
    {
      icon: <Mail style={{ width: 18, height: 18 }} />,
      label: 'ENCRYPTED EMAIL',
      value: 'akinrogundecodenamemomi@gmail.com',
      href: 'mailto:akinrogundecodenamemomi@gmail.com',
      color: '#06b6d4'
    },
    {
      icon: <Phone style={{ width: 18, height: 18 }} />,
      label: 'SECURE LINE',
      value: '+2349011123434',
      href: 'tel:+2349011123434',
      color: '#10b981'
    }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const addLog = (msg) => {
    setTransmissionLog(prev => [...prev, { id: Date.now(), msg, time: new Date().toLocaleTimeString() }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsEncrypting(true)
    setError('')
    setTransmissionLog([])

    addLog('INITIALIZING SECURE CHANNEL...')
    await new Promise(r => setTimeout(r, 600))
    addLog('HANDSHAKE WITH SATELLITE... SUCCESS')
    await new Promise(r => setTimeout(r, 400))
    addLog('APPLYING AES-256 ENCRYPTION...')

    try {
      const response = await fetch('https://form-forums.vercel.app/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('TRANSMISSION INTERRUPTED')

      addLog('TRANSMITTING DATA PACKETS...')
      await new Promise(r => setTimeout(r, 800))
      addLog('SIGNAL STRENGTH: 98%')
      addLog('ACKNOWLEDGMENT RECEIVED.')

      setIsSent(true)
      setTimeout(() => {
        setIsSent(false)
        setIsEncrypting(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)

    } catch (err) {
      addLog('ERROR: SECURE CHANNEL COMPROMISED')
      setIsEncrypting(false)
      setError(err.message || 'Transmission failed.')
    }
  }

  return (
    <div style={{
      height: '100%',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      fontFamily: "'JetBrains Mono', monospace",
      color: '#60a5fa'
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ flexShrink: 0 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Satellite style={{ width: 20, height: 20, color: '#06b6d4' }} />
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>SECURE COMMS</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', opacity: 0.8 }}>
            <Wifi style={{ width: 14, height: 14 }} />
            SIGNAL: STRONG [98%]
          </div>
        </div>
        <div style={{
          height: '2px',
          width: '100%',
          background: 'linear-gradient(90deg, #06b6d4 0%, transparent 100%)',
          marginBottom: '0.5rem'
        }} />
      </motion.div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
        gap: '2rem',
        overflowY: 'auto',
        paddingRight: '0.5rem'
      }}>
        {/* Left Col: Contact Info & Terminal Logs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                style={{
                  padding: '1rem',
                  background: 'rgba(2, 6, 23, 0.4)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                whileHover={{ background: 'rgba(6, 182, 212, 0.05)', borderColor: '#06b6d444' }}
              >
                <div style={{ fontSize: '0.65rem', color: method.color, fontWeight: '700', marginBottom: '0.25rem' }}>{method.label}</div>
                <div style={{ fontSize: '0.85rem' }}>{method.value}</div>
              </motion.a>
            ))}
          </div>

          {/* Social Terminal */}
          <div style={{
            flex: 1,
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            padding: '1rem',
            position: 'relative',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: '700', borderBottom: '1px solid rgba(148, 163, 184, 0.1)', pb: '0.5rem', mb: '1rem' }}>
              TRANSMISSION_LOG.TXT
            </div>
            <div style={{ flex: 1, overflowY: 'auto', fontSize: '0.7rem', lineHeight: '1.5' }}>
              {transmissionLog.length === 0 && (
                <div style={{ opacity: 0.4 }}>READY FOR UPLINK...</div>
              )}
              {transmissionLog.map((log) => (
                <div key={log.id} style={{ marginBottom: '0.25rem' }}>
                  <span style={{ opacity: 0.5 }}>[{log.time}]</span> {log.msg}
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
            {/* Blinking Cursor */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ width: '8px', height: '14px', background: '#06b6d4', position: 'absolute', bottom: '1rem', left: '1rem' }}
            />
          </div>
        </div>

        {/* Right Col: Terminal Form */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {isSent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px dashed #22c55e44',
                  borderRadius: '0.5rem',
                  padding: '2rem'
                }}
              >
                <Shield style={{ width: 48, height: 48, color: '#22c55e', mb: 16 }} />
                <h2 style={{ fontSize: '1.25rem', color: '#22c55e', fontWeight: '800' }}>UPLINK SUCCESSFUL</h2>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Message has been encrypted and sent to HQ.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6, mb: '0.4rem' }}>&gt; INPUT AGENT_NAME</div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    style={{
                      width: '100%',
                      background: 'rgba(15, 23, 42, 0.3)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      padding: '0.75rem',
                      color: '#f8fafc',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6, mb: '0.4rem' }}>&gt; INPUT UPLINK_CHANNEL</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(15, 23, 42, 0.3)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      padding: '0.75rem',
                      color: '#f8fafc',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6, mb: '0.4rem' }}>&gt; MISSION_OBJECTIVE</div>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(15, 23, 42, 0.3)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      padding: '0.75rem',
                      color: '#f8fafc',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6, mb: '0.4rem' }}>&gt; ENCRYPTED_MESSAGE_BODY</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      background: 'rgba(15, 23, 42, 0.3)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      padding: '0.75rem',
                      color: '#f8fafc',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ background: '#06b6d4', color: '#020617' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isEncrypting}
                  style={{
                    padding: '1rem',
                    background: 'transparent',
                    border: '1px solid #06b6d4',
                    color: '#06b6d4',
                    fontWeight: '800',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isEncrypting ? 'TRANSMITTING...' : 'INITIATE UPLINK'}
                  <Send style={{ width: 16, height: 16 }} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Communications