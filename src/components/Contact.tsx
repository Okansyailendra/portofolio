import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Planet, FloatingIcon } from './SpaceDecorations'

type Status = 'idle' | 'launching' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState({ name: false, email: false, message: false })
  const [errorMsg, setErrorMsg] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      message: !form.message.trim()
    }
    setErrors(newErrors)

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrorMsg('Peringatan: Koordinat transmisi tidak lengkap! Harap isi semua kolom.')
      return
    }

    setErrorMsg('')
    setStatus('launching')
    
    try {
      await fetch('https://formsubmit.co/ajax/otansyailendra123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nama: form.name,
          Email: form.email,
          Pesan: form.message,
          _subject: "Pesan Baru dari Portfolio Website Anda!"
        })
      })
      
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm({ name: '', email: '', message: '' })
      }, 4000)
    } catch (error) {
      console.error(error)
      setStatus('idle')
      alert('Gagal mengirim pesan, silakan coba lagi nanti.')
    }
  }

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
      {/* ═══════ UNIQUE SECTION BACKGROUND (AMBER/RED) ═══════ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,26,0) 0%, rgba(245,158,11,0.03) 50%, rgba(5,5,26,0) 100%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '20%',
        width: 700,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        animation: 'glowPulse 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'nebulaPulse 14s ease-in-out 4s infinite',
      }} />

      {/* SPACE DECORATIONS */}
      <Planet top="5%" right="-10%" color="#f59e0b" size="180px" delay="3s" />
      <FloatingIcon icon="☄️" top="80%" left="10%" size="4rem" animDur="9" rotation="45" opacity="0.4" />
      <FloatingIcon icon="👽" top="15%" left="5%" size="2.5rem" animDur="16" rotation="-20" opacity="0.7" />

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref1} className="fade-in-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.75rem',
            color: '#06b6d4',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            ◈ Komunikasi
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
            Kirim{' '}
            <span style={{
              background: 'linear-gradient(135deg, #06b6d4, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sinyal Transmisi
            </span>
          </h2>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#94a3b8', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Ada proyek menarik? Ide yang ingin dieksplorasi? Atau sekadar ingin berkolaborasi? Pesan Anda akan tiba di stasiun luar angkasa saya dalam hitungan orbit.
          </p>
        </div>

        {/* Form */}
        <div ref={ref2} className="fade-in-up" style={{ transitionDelay: '0.15s' }}>
          <div className="contact-container">
            {/* Holographic grid overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.5,
              pointerEvents: 'none',
            }} />
            
            {/* Top scanning laser */}
            <div style={{
              position: 'absolute',
              top: 0, left: '-100%', right: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #06b6d4, #a78bfa, transparent)',
              animation: 'laserScan 4s linear infinite',
            }} />

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.25rem', animation: 'starsAppear 0.6s ease' }}>🚀✨</div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#a78bfa',
                  fontSize: '1.3rem',
                  marginBottom: '0.75rem',
                  textShadow: '0 0 15px rgba(167, 139, 250, 0.5)'
                }}>
                  Transmisi Berhasil!
                </h3>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#94a3b8', fontSize: '0.9rem' }}>
                  Sinyal Anda sedang melintasi galaksi. Saya akan membalas secepatnya!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div className="input-group">
                    <label className={`contact-label ${errors.name ? 'error-text' : ''}`}>Identitas / Nama</label>
                    <input
                      type="text"
                      placeholder="Astronot Doe"
                      value={form.name}
                      onChange={e => {
                        setForm(f => ({ ...f, name: e.target.value }))
                        if (errors.name) setErrors(err => ({ ...err, name: false }))
                      }}
                      className={`contact-input ${errors.name ? 'error-input' : ''}`}
                    />
                  </div>
                  <div className="input-group">
                    <label className={`contact-label ${errors.email ? 'error-text' : ''}`}>Koordinat Email</label>
                    <input
                      type="email"
                      placeholder="orbit@galaksi.com"
                      value={form.email}
                      onChange={e => {
                        setForm(f => ({ ...f, email: e.target.value }))
                        if (errors.email) setErrors(err => ({ ...err, email: false }))
                      }}
                      className={`contact-input ${errors.email ? 'error-input' : ''}`}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className={`contact-label ${errors.message ? 'error-text' : ''}`}>Pesan Transmisi</label>
                  <textarea
                    placeholder="Laporkan temuan baru atau ajakan misi bersama di sini..."
                    value={form.message}
                    onChange={e => {
                      setForm(f => ({ ...f, message: e.target.value }))
                      if (errors.message) setErrors(err => ({ ...err, message: false }))
                    }}
                    rows={5}
                    className={`contact-input ${errors.message ? 'error-input' : ''}`}
                    style={{ resize: 'vertical', minHeight: '130px' }}
                  />
                </div>

                {errorMsg && (
                  <div className="error-alert">
                    <span>⚠️</span> {errorMsg}
                  </div>
                )}

                <button
                  ref={btnRef}
                  type="submit"
                  disabled={status === 'launching'}
                  className={`contact-btn ${status === 'launching' ? 'launching' : ''}`}
                >
                  {status === 'idle' && (
                    <>
                      <span className="btn-icon">🚀</span>
                      <span>Luncurkan Pesan</span>
                    </>
                  )}
                  {status === 'launching' && (
                    <>
                      <span style={{ animation: 'rocketLaunch 1.8s ease forwards', display: 'inline-block' }}>🚀</span>
                      <span>Mengirim...</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', icon: '/mdi--github.svg', href: 'https://github.com/Okansyailendra' },
              { label: 'Instagram', icon: '/skill-icons--instagram.svg', href: 'https://www.instagram.com/okan_syailendra0/' },
              { label: 'Email', icon: '/ic--baseline-email.svg', href: 'mailto:otansyailendra123@gmail.com' },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#64748b',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#a78bfa'
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'
                  e.currentTarget.style.background = 'rgba(124,58,237,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#64748b'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <img src={icon} alt={label} style={{ width: '18px', height: '18px', filter: label === 'GitHub' || label === 'Email' ? 'invert(1) opacity(0.8)' : 'none' }} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-container {
          border-radius: 24px;
          padding: clamp(1.5rem, 4vw, 2.5rem);
          position: relative;
          overflow: hidden;
          background: rgba(10, 10, 35, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 40px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(124, 58, 237, 0.05);
          backdrop-filter: blur(12px);
          animation: floatForm 6s ease-in-out infinite;
        }

        @keyframes floatForm {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes laserScan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .contact-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #f8fafc;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-input:focus {
          background: rgba(6, 182, 212, 0.05);
          border-color: rgba(6, 182, 212, 0.4);
          border-bottom: 2px solid #06b6d4;
          box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.3);
          transform: translateY(-2px);
        }

        .contact-input.error-input {
          border-color: rgba(239, 68, 68, 0.5);
          border-bottom: 2px solid #ef4444;
          background: rgba(239, 68, 68, 0.05);
          box-shadow: 0 5px 20px -10px rgba(239, 68, 68, 0.3);
          animation: shake 0.4s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }

        .contact-label {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.75rem;
          color: #38bdf8;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
          transition: color 0.3s;
        }

        .contact-label.error-text {
          color: #f87171;
        }

        .error-alert {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 12px 16px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeAlert 0.3s ease;
        }

        @keyframes fadeAlert {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .input-group:focus-within .contact-label:not(.error-text) {
          color: #06b6d4;
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .contact-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 16px 36px;
          border-radius: 12px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(124, 58, 237, 0.2));
          color: #ffffff;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          align-self: flex-start;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
        }

        .contact-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s;
        }

        .contact-btn:hover:not(:disabled)::before {
          left: 150%;
        }

        .contact-btn:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.02);
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(124, 58, 237, 0.4));
          border-color: rgba(6, 182, 212, 0.8);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(124, 58, 237, 0.3);
          text-shadow: 0 0 8px rgba(255,255,255,0.5);
        }

        .contact-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }

        .contact-btn.launching {
          cursor: not-allowed;
          background: rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.4);
          box-shadow: none;
        }

        .btn-icon {
          transition: transform 0.3s;
        }

        .contact-btn:hover:not(:disabled) .btn-icon {
          transform: translateY(-20px);
          opacity: 0;
          animation: flyRocket 0.6s ease forwards;
        }

        @keyframes flyRocket {
          0% { transform: translateY(20px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
