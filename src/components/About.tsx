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

      {/* Meteors */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="meteor" style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Text side */}
        <div>
          <div ref={ref1} className="fade-in-up" style={{ marginBottom: '2rem' }}>
            <span className="animate-glow-pulse" style={{
              display: 'inline-block',
              padding: '0.25rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(6,182,212,0.3)',
              background: 'rgba(6,182,212,0.05)',
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
              <span className="shimmer-text" style={{
                fontFamily: 'Orbitron, sans-serif',
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
            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.05rem',
              color: '#94a3b8',
              lineHeight: 1.85,
              marginBottom: '2.5rem',
            }}>
              Selain pengembangan perangkat lunak, saya sangat antusias di bidang keamanan siber. Saya menjabat sebagai <strong style={{ color: '#06b6d4' }}>Co-External Affairs di Komunitas Koalisi</strong>—sebuah wadah bagi para mahasiswa yang memiliki *passion* di dunia <em style={{ color: '#ec4899', fontStyle: 'normal' }}>Cyber Security</em> untuk saling belajar dan berkembang bersama.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
              {[
                { label: '2', symbol: '+', title: 'Tahun', subtitle: 'Pengalaman', color: '#a78bfa', delay: '0s' },
                { label: '10', symbol: '+', title: 'Proyek', subtitle: 'Selesai', color: '#06b6d4', delay: '0.2s' },
                { label: '7', symbol: '+', title: 'Tech', subtitle: 'Stack', color: '#ec4899', delay: '0.4s' },
              ].map(({ label, symbol, title, subtitle, color, delay }) => (
                <div key={title} className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]" style={{ animation: `fadeInUp 0.8s ease ${delay} both` }}>
                  
                  {/* Glowing hover accent */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle at 50% 0%, ${color}25 0%, transparent 70%)` }} />
                  
                  {/* Top colored accent line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: color, boxShadow: `0 0 15px ${color}` }} />

                  <div className="p-6 sm:p-8 relative z-10 flex flex-col h-full justify-between min-h-[160px]">
                    
                    {/* Text content */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-['Orbitron'] text-4xl font-bold text-white tracking-wider">{label}</span>
                        <span className="font-['Orbitron'] text-3xl font-bold" style={{ color, filter: `drop-shadow(0 0 10px ${color}80)` }}>{symbol}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-300 transition-colors">
                          {title}
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Watermark Number */}
                    <div className="absolute bottom-[-10%] right-[-5%] font-['Orbitron'] text-8xl sm:text-9xl font-black italic opacity-[0.03] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700 pointer-events-none" style={{ WebkitTextStroke: `2px ${color}`, color: 'transparent' }}>
                      {label}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual side — floating astronaut */}
        <div ref={ref3} className="fade-in-up" style={{ transitionDelay: '0.25s', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="group" style={{
            position: 'relative',
            width: 300,
            height: 300,
            perspective: '1000px',
            cursor: 'pointer'
          }}>
            {/* 3D Interactive Container */}
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d'
            }}
            className="group-hover:scale-110 group-hover:rotate-x-12 group-hover:-rotate-y-12"
            >
              {/* Pulsing Orbit ring behind */}
              <div style={{
                position: 'absolute',
                inset: -30,
                border: '2px solid rgba(124,58,237,0.3)',
                borderRadius: '50%',
                animation: 'glowPulse 3s ease-in-out infinite, float 8s ease-in-out infinite',
                boxShadow: '0 0 40px rgba(124,58,237,0.2)',
                transform: 'translateZ(-20px)'
              }} />
              <div style={{
                position: 'absolute',
                inset: -15,
                border: '1px dashed rgba(6,182,212,0.4)',
                borderRadius: '50%',
                animation: 'orbitSpin 20s linear infinite',
                transform: 'translateZ(-10px)'
              }} />

              {/* Center glass card with photo */}
              <div className="animate-float" style={{
                position: 'absolute',
                inset: 10,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(167,139,250,0.6)',
                boxShadow: '0 0 60px rgba(124,58,237,0.5), inset 0 0 40px rgba(124,58,237,0.3)',
                overflow: 'hidden', // Ensures the image respects the circular shape
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateZ(20px)',
                transition: 'all 0.5s ease'
              }}>
                <img 
                  src="/foto.png" 
                  alt="Okan Syailendra Wahyudi" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="group-hover:scale-110" 
                />
              </div>

              {/* Orbiting glowing planets (instead of dots) */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(160px) translateY(-50%) translateZ(30px)`,
                  }}
                >
                  <div 
                    style={{
                      width: i % 2 === 0 ? 12 : 8,
                      height: i % 2 === 0 ? 12 : 8,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
                      boxShadow: `0 0 20px 4px ${i % 2 === 0 ? '#7c3aed' : '#06b6d4'}`,
                      animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
