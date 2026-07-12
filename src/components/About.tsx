import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
      {/* Nebula orb */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Text side */}
        <div>
          <div ref={ref1} className="fade-in-up" style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.75rem',
              color: '#06b6d4',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              ◈ Tentang Saya
            </span>
            <h2 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginTop: '0.75rem',
              marginBottom: 0,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}>
              Menjelajahi Batas{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Teknologi
              </span>
            </h2>
          </div>

          <div ref={ref2} className="fade-in-up" style={{ transitionDelay: '0.15s' }}>
            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.05rem',
              color: '#94a3b8',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Saya adalah seorang <strong style={{ color: '#e2e8f0' }}>Frontend & Game Developer</strong> yang bersemangat dalam menciptakan antarmuka yang dinamis dan dunia virtual yang imersif. 
              Perjalanan saya didorong oleh antusiasme untuk merancang permainan yang dapat dinikmati oleh banyak orang, serta membangun aplikasi interaktif yang benar-benar mempermudah penggunanya.
            </p>
            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.05rem',
              color: '#94a3b8',
              lineHeight: 1.85,
              marginBottom: '2rem',
            }}>
              Dengan fokus pada <strong style={{ color: '#a78bfa' }}>pengembangan antarmuka web, interaksi UI/UX, dan mekanika game</strong>. 
              Saya percaya bahwa kode yang baik bukan hanya tentang logika, melainkan seni visual. 
              Setiap baris ditulis dengan niat untuk menghadirkan pengalaman digital yang mulus, responsif, dan menyenangkan.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { label: '2+', desc: 'Tahun Pengalaman' },
                { label: '10+', desc: 'Proyek Selesai' },
                { label: '7+', desc: 'Tech Stack' },
              ].map(({ label, desc }) => (
                <div key={label} style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  backdropFilter: 'blur(8px)',
                  minWidth: '100px',
                }}>
                  <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#a78bfa' }}>{label}</div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual side — floating astronaut */}
        <div ref={ref3} className="fade-in-up" style={{ transitionDelay: '0.25s', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            width: 280,
            height: 280,
          }}>
            {/* Orbit ring */}
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: '50%',
              animation: 'float 8s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute',
              inset: -24,
              border: '1px dashed rgba(6,182,212,0.15)',
              borderRadius: '50%',
            }} />

            {/* Center glass card with photo */}
            <div className="animate-float" style={{
              position: 'absolute',
              inset: 20,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(167,139,250,0.4)',
              boxShadow: '0 0 60px rgba(124,58,237,0.3), inset 0 0 40px rgba(124,58,237,0.1)',
              overflow: 'hidden', // Ensures the image respects the circular shape
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src="/foto.png" 
                alt="Okan Syailendra Wahyudi" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                }} 
              />
            </div>

            {/* Orbiting dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                }}
              >
                <div 
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
                    boxShadow: `0 0 10px ${i % 2 === 0 ? '#7c3aed' : '#06b6d4'}`,
                    animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
