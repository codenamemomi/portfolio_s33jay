import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, ChevronRight } from 'lucide-react'

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', content: 'SECURE TERMINAL v2.1.4 - ACCESS GRANTED' },
    { type: 'system', content: 'Type "help" for available commands' }
  ])
  const terminalRef = useRef()
  const inputRef = useRef()

  const commands = {
    help: {
      execute: () => [
        'AVAILABLE COMMANDS:',
        'help     - Show this help message',
        'about    - Display agent profile',
        'skills   - Show technical specifications',
        'projects - List mission files',
        'experience - View operation log',
        'contact  - Open communications',
        'clear    - Clear terminal history',
        'status   - System status check'
      ]
    },
    about: {
      execute: () => {
        setTimeout(() => setIsOpen(false), 100)
        setTimeout(() => document.getElementById('profile')?.click(), 200)
        return ['Opening Agent Profile...']
      }
    },
    skills: {
      execute: () => {
        setTimeout(() => setIsOpen(false), 100)
        setTimeout(() => document.getElementById('specs')?.click(), 200)
        return ['Accessing Technical Specs...']
      }
    },
    projects: {
      execute: () => {
        setTimeout(() => setIsOpen(false), 100)
        setTimeout(() => document.getElementById('missions')?.click(), 200)
        return ['Loading Mission Files...']
      }
    },
    experience: {
      execute: () => {
        setTimeout(() => setIsOpen(false), 100)
        setTimeout(() => document.getElementById('operations')?.click(), 200)
        return ['Accessing Operation Log...']
      }
    },
    contact: {
      execute: () => {
        setTimeout(() => setIsOpen(false), 100)
        setTimeout(() => document.getElementById('comms')?.click(), 200)
        return ['Opening Secure Communications...']
      }
    },
    clear: {
      execute: () => {
        setHistory([
          { type: 'system', content: 'Terminal cleared' },
          { type: 'system', content: 'Type "help" for available commands' }
        ])
        return []
      }
    },
    status: {
      execute: () => [
        'SYSTEM STATUS:',
        '✓ Security: ACTIVE',
        '✓ Blockchain: ONLINE',
        '✓ AI Systems: OPERATIONAL',
        '✓ Database: SECURE',
        '✓ Satellite Link: STABLE',
        '✓ Encryption: ENABLED'
      ]
    }
  }

  const executeCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim()
    const response = commands[lowerCmd]?.execute() || [
      `Command not found: ${cmd}`,
      'Type "help" for available commands'
    ]

    setHistory(prev => [
      ...prev,
      { type: 'command', content: `> ${cmd}` },
      ...response.map(content => ({ type: 'system', content }))
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    executeCommand(input)
    setInput('')
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Keyboard shortcut to open terminal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '0.75rem',
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: '0.75rem',
          color: '#10b981',
          cursor: 'pointer',
          zIndex: 100,
          backdropFilter: 'blur(10px)'
        }}
        whileHover={{ scale: 1.1, background: 'rgba(16, 185, 129, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        title="Open Terminal (Ctrl+K)"
      >
        <TerminalIcon style={{ width: '20px', height: '20px' }} />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '800px',
              height: '60%',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '1rem',
              backdropFilter: 'blur(20px)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Terminal Header */}
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <TerminalIcon style={{ width: '18px', height: '18px', color: '#10b981' }} />
                <span style={{
                  color: '#10b981',
                  fontWeight: 'bold',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.9rem'
                }}>
                  SECURE TERMINAL
                </span>
              </div>
              
              <motion.button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '0.5rem',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  borderRadius: '0.5rem',
                  color: '#fca5a5',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X style={{ width: '16px', height: '16px' }} />
              </motion.button>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              style={{
                flex: 1,
                padding: '1.5rem',
                overflowY: 'auto',
                fontFamily: 'Courier New, monospace',
                fontSize: '0.9rem',
                color: '#10b981',
                lineHeight: '1.5'
              }}
            >
              {history.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '0.5rem',
                    color: item.type === 'command' ? '#fbbf24' : '#10b981'
                  }}
                >
                  {item.content}
                </div>
              ))}
              
              {/* Input Line */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#fbbf24' }}>$</span>
                <ChevronRight style={{ width: '16px', height: '16px', color: '#10b981' }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#e2e8f0',
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.9rem',
                    caretColor: '#10b981'
                  }}
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>

            {/* Terminal Footer */}
            <div style={{
              padding: '0.75rem 1.5rem',
              borderTop: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: '#94a3b8',
              fontSize: '0.75rem',
              fontFamily: 'Courier New, monospace',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem'
            }}>
              Press Ctrl+K to open/close • ESC to close • Type "help" for commands
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default InteractiveTerminal