import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          {/* Logo */}
          <a 
            href="#hero" 
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Omomijolaoluwa
          </a>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                cursor: 'pointer',
                color: '#60a5fa'
              }}
            >
              {isMenuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            padding: '1rem 0',
            borderTop: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontWeight: '500',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                  onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation