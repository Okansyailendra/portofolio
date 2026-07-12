import { useEffect, useState } from 'react'

const ROLES = ['Software Developer', 'Web Developer', 'UI UX Designer', 'Game Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(cursor)
  }, [])

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Nebula glow orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: 350,
        height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(124, 58, 237, 0.12)',
        border: '1px solid rgba(124, 58, 237, 0.3)',
        borderRadius: '100px',
        padding: '6px 18px',
        marginBottom: '2rem',
        backdropFilter: 'blur(8px)',
        animation: 'fadeInUp 0.8s ease both',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.8rem', color: '#a78bfa', letterSpacing: '0.08em', fontWeight: 500 }}>
          Available for new opportunities
        </span>
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
        lineHeight: 1.05,
        margin: '0 0 1.2rem',
        letterSpacing: '-0.02em',
        animation: 'fadeInUp 0.9s ease 0.1s both',
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Halo, Saya
        </span>
        <br />
        <span style={{
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(167,139,250,0.9)',
          textShadow: '0 0 40px rgba(124,58,237,0.4)',
        }}>
          Okan Syailendra Wahyudi
        </span>
      </h1>

      {/* Role typewriter */}
      <div style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: 'clamp(1rem, 3vw, 1.6rem)',
        fontWeight: 500,
        color: '#06b6d4',
        letterSpacing: '0.05em',
        marginBottom: '1.8rem',
        minHeight: '2.2rem',
        animation: 'fadeInUp 0.9s ease 0.2s both',
      }}>
        {displayed}
        <span style={{ opacity: showCursor ? 1 : 0, color: '#ec4899' }}>|</span>
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        fontWeight: 400,
        maxWidth: 680,
        lineHeight: 1.8,
        letterSpacing: '0.02em',
        marginBottom: '2.5rem',
        textWrap: 'balance',
        animation: 'fadeInUp 0.9s ease 0.3s both',
        background: 'linear-gradient(135deg, #f8fafc 0%, #a78bfa 60%, #06b6d4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Menciptakan antarmuka yang elegan dan dunia digital yang imersif. 
        Dari merancang interaksi UI yang mulus hingga membangun mekanika permainan yang memikat — saya menghidupkan imajinasi menjadi realitas yang dapat dimainkan.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeInUp 0.9s ease 0.4s both' }}>
        <a
          href="#projects"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.04em',
            padding: '14px 32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            color: '#ffffff',
            textDecoration: 'none',
            boxShadow: '0 0 30px rgba(124,58,237,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 50px rgba(124,58,237,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.4)'
          }}
        >
          Lihat Proyek ✦
        </a>
        <a
          href="#contact"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.04em',
            padding: '14px 32px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(167,139,250,0.3)',
            color: '#a78bfa',
            textDecoration: 'none',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(124,58,237,0.15)'
            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'
          }}
        >
          Hubungi Saya
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        opacity: 0.5,
        animation: 'fadeInUp 1s ease 1s both',
      }}>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 20,
          height: 34,
          border: '1px solid rgba(167,139,250,0.4)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '5px',
        }}>
          <div style={{
            width: 3,
            height: 8,
            background: '#a78bfa',
            borderRadius: '2px',
            animation: 'float 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
