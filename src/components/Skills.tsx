import { useRef, useEffect } from 'react'

const SKILLS = [
  { name: 'JavaScript', icon: '⚡', color: '#eab308', desc: 'Web & Game Logic' },
  { name: 'HTML', icon: '🌐', color: '#e34f26', desc: 'Web Structure' },
  { name: 'React', icon: '⚛️', color: '#61dafb', desc: 'Web Interfaces' },
  { name: 'Node.js', icon: '💚', color: '#10b981', desc: 'Backend Services' },
  { name: 'Tailwind CSS', icon: '💨', color: '#38bdf8', desc: 'Rapid Styling' },
  { name: 'Figma', icon: '🎨', color: '#a259ff', desc: 'UI/UX Design' },
  { name: 'Unity', icon: '🎮', color: '#e2e8f0', desc: 'Game Engine' },
  { name: 'C#', icon: '⚙️', color: '#7c3aed', desc: 'Game Scripting' },
  { name: 'Laravel', icon: '🔥', color: '#ef4444', desc: 'PHP Framework' },
  { name: 'MySQL', icon: '🗄️', color: '#06b6d4', desc: 'Relational Database' },
  { name: 'PHP', icon: '🐘', color: '#7c3aed', desc: 'Web Backend' },
  { name: 'Git', icon: '🔀', color: '#f97316', desc: 'Version Control' },
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
      {/* bg orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              ref={el => { cardsRef.current[i] = el }}
              className="skill-card glass"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'default',
                opacity: 0,
                transform: 'translateY(24px) scale(0.95)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              <div style={{
                fontSize: '2.2rem',
                filter: 'drop-shadow(0 0 8px ' + skill.color + '66)',
                lineHeight: 1,
              }}>
                {skill.icon}
              </div>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#e2e8f0',
                letterSpacing: '0.05em',
                textAlign: 'center',
              }}>
                {skill.name}
              </div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.68rem',
                color: '#475569',
                textAlign: 'center',
              }}>
                {skill.desc}
              </div>
              {/* Bottom accent line */}
              <div style={{
                width: '40%',
                height: '2px',
                borderRadius: '1px',
                background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                marginTop: '4px',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
