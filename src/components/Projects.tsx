import { useRef, useEffect } from 'react'

import { GitHubCalendar } from 'react-github-calendar'
import { Moon, FloatingIcon } from './SpaceDecorations'

const PROJECTS = [
  {
    title: 'TabungGadget',
    subtitle: 'Aplikasi Perencana Tabungan Gadget Impian',
    desc: 'Platform web untuk merencanakan dan menghitung target tabungan pembelian gadget impian. Dilengkapi fitur analisis cerdas untuk memprediksi apakah gadget tersebut masih layak beli (worth it) saat target waktu tabungan tercapai di masa depan.',
    tags: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    color: '#10b981',
    accent: 'rgba(16,185,129,0.15)',
    icon: '📱',
    status: 'Production',
    year: '2025',
    github: 'https://github.com/Okansyailendra/TabungGadget',
  },
  {
    title: 'IC Plus',
    subtitle: 'Sistem Manajemen Layanan Kesehatan Desa',
    desc: 'Platform digital terpadu untuk fasilitas kesehatan desa. Mengelola siklus layanan penuh mulai dari rekam medis pasien, jadwal dokter, hingga inventaris obat. Dilengkapi fitur mandiri bagi pasien untuk mendaftar antrean berobat online dan mengatur jadwal kontrol.',
    tags: ['React', 'MySQL', 'Node.js', 'Tailwind'],
    color: '#0ea5e9',
    accent: 'rgba(14,165,233,0.15)',
    icon: '🏥',
    status: 'Production',
    year: '2026',
    github: 'https://github.com',
  },
  {
    title: 'Nexora',
    subtitle: 'Platform Pemesanan Hotel Terpadu',
    desc: 'Layanan reservasi hotel online interaktif. Pengguna dapat mengeksplorasi detail hotel, mengecek fasilitas kamar, dan melakukan pemesanan. Sistem ini juga dilengkapi dashboard admin yang tangguh untuk manajemen inventaris hotel, pembuatan pesanan manual, serta pengelolaan reservasi pelanggan.',
    tags: ['PHP', 'JavaScript', 'CSS', 'MySQL'],
    color: '#8b5cf6',
    accent: 'rgba(139,92,246,0.15)',
    icon: '🏨',
    status: 'Production',
    year: '2025',
    github: 'https://github.com',
  },
  {
    title: 'ConstructERP',
    subtitle: 'Sistem ERP Administrasi Konstruksi',
    desc: 'Platform ERP komprehensif untuk mengelola proyek konstruksi dari hulu ke hilir. Menyediakan dashboard khusus untuk 5 peran (Owner, Finance, Purchasing, PM, Mandor). Dilengkapi fitur unggulan Smart RAB Generator berformat spreadsheet, pemantauan arus kas, inventaris material, hingga laporan profitabilitas proyek.',
    tags: ['React', 'MySQL', 'Node.js', 'Tailwind'],
    color: '#2563eb',
    accent: 'rgba(37,99,235,0.15)',
    icon: '🏗️',
    status: 'Production',
    year: '2026',
    github: 'https://github.com/Okansyailendra/ERPConstruction',
  },
]

export default function Projects() {
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
                  card.style.transform = 'translateY(0)'
                }, i * 150)
              }
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
      {/* ═══════ UNIQUE SECTION BACKGROUND (EMERALD/TEAL) ═══════ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,26,0) 0%, rgba(16,185,129,0.03) 50%, rgba(5,5,26,0) 100%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'nebulaPulse 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'nebulaPulse 13s ease-in-out 3s infinite',
      }} />

      {/* SPACE DECORATIONS */}
      <Moon top="10%" left="2%" size="180px" delay="2s" />
      <FloatingIcon icon="👨‍🚀" top="45%" right="5%" size="3.5rem" animDur="12" rotation="25" opacity="0.6" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.75rem',
            color: '#a78bfa',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            ◈ Portfolio
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
            Misi yang Telah{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Saya Jalankan
            </span>
          </h2>
        </div>

        {/* Project cards grid */}
        <div className="project-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              ref={el => { cardsRef.current[i] = el }}
              className="project-card glass"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Color accent top bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
              }} />

              {/* Glow orb */}
              <div style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${p.accent} 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: p.accent,
                    border: `1px solid ${p.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>{p.title}</div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{p.subtitle}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: `${p.color}22`,
                    border: `1px solid ${p.color}44`,
                    color: p.color,
                    letterSpacing: '0.05em',
                  }}>{p.status}</span>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: '#334155' }}>{p.year}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.9rem',
                color: '#94a3b8',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8',
                    letterSpacing: '0.03em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* View button */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: p.color,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GITHUB CONTRIBUTIONS */}
      <div style={{ maxWidth: '900px', margin: '6rem auto 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.75rem',
            color: '#10b981', // emerald color matching github
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            ◈ Open Source
          </span>
          <h3 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}>
            GitHub <span style={{ color: '#10b981' }}>Contributions</span>
          </h3>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#94a3b8', fontSize: '0.9rem' }}>
            Aktivitas pengkodean saya di GitHub selama satu tahun terakhir.
          </p>
        </div>
        
        <div style={{
          background: 'rgba(5,5,26,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
          overflowX: 'auto'
        }}>
          <GitHubCalendar 
            username="Okansyailendra" 
            colorScheme="dark"
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['rgba(255,255,255,0.05)', '#064e3b', '#047857', '#10b981', '#34d399']
            }}
          />
        </div>
      </div>



      <style>{`
        @media (max-width: 640px) {
          #projects .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
