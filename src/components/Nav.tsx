import { useState, useEffect } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5, 5, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124, 58, 237, 0.15)' : 'none',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        <a href="#hero" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#a78bfa', textDecoration: 'none', letterSpacing: '0.1em' }}>
          Kannz<span style={{ color: '#06b6d4' }}>Dev</span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {links.map(({ href, label }) => {
            const id = href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: active === id ? '#a78bfa' : '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = active === id ? '#a78bfa' : '#94a3b8')}
                >
                  {label}
                  {active === id && (
                    <span style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                      borderRadius: '1px',
                    }} />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: '#a78bfa', marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: '#a78bfa', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: 22, height: 2, background: '#a78bfa', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu (Premium Full-Screen HUD) */}
      {open && (
        <div style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 26, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          borderTop: '1px solid rgba(124, 58, 237, 0.2)',
          overflowY: 'auto'
        }}>
          {/* Decorative glowing orb inside menu */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          {links.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1.4rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#06b6d4' : '#e2e8f0',
                  textDecoration: 'none',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                  textShadow: isActive ? '0 0 20px rgba(6, 182, 212, 0.6)' : 'none',
                }}
              >
                {label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '20%',
                    right: '20%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
                    boxShadow: '0 0 15px #06b6d4',
                  }} />
                )}
              </a>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
