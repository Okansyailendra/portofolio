import { useRef, useEffect } from 'react'
import SpaceGame from './SpaceGame'

const SKILLS = [
  { name: 'JavaScript', icon: '/skill-icons--javascript.svg', color: '#eab308', desc: 'Web & Game Logic' },
  { name: 'HTML', icon: '/skill-icons--html.svg', color: '#e34f26', desc: 'Web Structure' },
  { name: 'React', icon: '/material-icon-theme--react.svg', color: '#61dafb', desc: 'Web Interfaces' },
  { name: 'Node.js', icon: '/material-icon-theme--nodejs.svg', color: '#10b981', desc: 'Backend Services' },
  { name: 'Tailwind CSS', icon: '/devicon--tailwindcss.svg', color: '#38bdf8', desc: 'Rapid Styling' },
  { name: 'Figma', icon: '/logos--figma.svg', color: '#a259ff', desc: 'UI/UX Design' },
  { name: 'GitHub', icon: '/mdi--github.svg', color: '#f1f5f9', desc: 'Code Repository' },
  { name: 'Python', icon: '/material-icon-theme--python.svg', color: '#3b82f6', desc: 'Data & Scripting' },
  { name: 'Laravel', icon: '/material-icon-theme--laravel.svg', color: '#ef4444', desc: 'PHP Framework' },
  { name: 'MySQL', icon: '/logos--mysql.svg', color: '#06b6d4', desc: 'Relational Database' },
  { name: 'PHP', icon: '/material-icon-theme--php.svg', color: '#7c3aed', desc: 'Web Backend' },
  { name: 'TypeScript', icon: '/devicon--typescript.svg', color: '#3178c6', desc: 'Type-safe Code' },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cardsRef.current.forEach((card, i) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = '1'
                  card.style.transform = 'translateY(0) scale(1)'
                }, i * 80)
              }
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
      {/* ═══════ UNIQUE SECTION BACKGROUND (MAGENTA/PINK) ═══════ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,26,0) 0%, rgba(190,24,93,0.03) 50%, rgba(5,5,26,0) 100%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      {/* ═══════ UNIQUE ANIMATED VORTEX BACKGROUND ═══════ */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '150vw',
        height: '150vw',
        marginTop: '-75vw',
        marginLeft: '-75vw',
        background: 'conic-gradient(from 0deg, transparent 0deg, rgba(236,72,153,0.08) 90deg, transparent 180deg, rgba(124,58,237,0.08) 270deg, transparent 360deg)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'vortexSpin 30s linear infinite',
        pointerEvents: 'none',
        zIndex: -1,
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vw',
        marginTop: '-50vw',
        marginLeft: '-50vw',
        background: 'conic-gradient(from 180deg, transparent 0deg, rgba(6,182,212,0.06) 120deg, transparent 240deg, rgba(236,72,153,0.05) 300deg, transparent 360deg)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'vortexSpin 20s linear infinite reverse',
        pointerEvents: 'none',
        zIndex: -1,
      }} />
      {/* Central mask to ensure readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 30%, #05051a 80%)',
        pointerEvents: 'none',
        zIndex: -1,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.75rem',
            color: '#ec4899',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            ◈ Tech Stack
          </span>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginTop: '0.75rem',
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}>
            Senjata di{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ec4899, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Arsenal Saya
            </span>
          </h2>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Setiap teknologi adalah bintang dalam konstelasi kemampuan saya — dipilih dengan cermat untuk membangun solusi yang bermakna.
          </p>
        </div>

        {/* Grid */}
        <style>{`
          .skill-card-wrapper {
            perspective: 1000px;
          }
          .skill-card-inner {
            border-radius: 16px;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.8rem;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          .skill-card-inner:hover {
            transform: translateY(-8px) scale(1.05) rotateX(5deg);
            background: rgba(255, 255, 255, 0.06);
            border-color: var(--skill-color);
            box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 0 20px var(--skill-color-light);
            z-index: 10;
          }
          .skill-card-inner:hover .skill-icon-wrap {
            transform: scale(1.15) translateY(-5px) rotate(5deg);
            filter: drop-shadow(0 0 15px var(--skill-color));
          }
          .skill-card-inner:hover .skill-title {
            color: var(--skill-color);
          }
          .skill-icon-wrap {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            filter: drop-shadow(0 0 8px var(--skill-color-light));
          }
          .float-container {
            animation: skillFloat var(--float-dur) ease-in-out var(--float-del) infinite;
          }
          @keyframes skillFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes vortexSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
        `}</style>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1.5rem',
        }}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              ref={el => { cardsRef.current[i] = el }}
              className="skill-card-wrapper"
              style={{
                opacity: 0,
                transform: 'translateY(30px) scale(0.9)',
                transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              <div 
                className="float-container" 
                style={{ 
                  '--float-dur': `${4 + (i % 3)}s`, 
                  '--float-del': `${i * 0.2}s` 
                } as React.CSSProperties}
              >
                <div 
                  className="skill-card-inner glass"
                  style={{
                    '--skill-color': skill.color,
                    '--skill-color-light': `${skill.color}66`,
                  } as React.CSSProperties}
                >
                  <div className="skill-icon-wrap">
                    <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  
                  <div className="skill-title" style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                    transition: 'color 0.3s ease',
                  }}>
                    {skill.name}
                  </div>
                  
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    textAlign: 'center',
                    fontWeight: 500,
                  }}>
                    {skill.desc}
                  </div>
                  
                  {/* Glowing Bottom Line */}
                  <div style={{
                    width: '60%',
                    height: '2px',
                    borderRadius: '2px',
                    background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                    marginTop: '0.2rem',
                    opacity: 0.8,
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SPACE MINI GAME */}
        <div style={{ maxWidth: '900px', margin: '8rem auto 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.75rem',
              color: '#38bdf8',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              ◈ Extra Mission
            </span>
            <h3 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}>
              Asteroid <span style={{ color: '#ec4899' }}>Defender</span>
            </h3>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#94a3b8', fontSize: '0.9rem' }}>
              Istirahat sejenak! Lindungi pesawat dari hantaman asteroid.
            </p>
          </div>
          <SpaceGame />
        </div>
      </div>
    </section>
  )
}
