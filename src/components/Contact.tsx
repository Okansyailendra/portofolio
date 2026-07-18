import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type Status = 'idle' | 'launching' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const btnRef = useRef<HTMLButtonElement>(null)
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '13px 16px',
    color: '#e2e8f0',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.8rem',
    color: '#64748b',
    fontWeight: 500,
    letterSpacing: '0.04em',
    display: 'block',
    marginBottom: '6px',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(124,58,237,0.6)'
    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
    e.target.style.boxShadow = 'none'
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
            ◈ Kontak
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
              Sinyal ke Saya
            </span>
          </h2>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Ada proyek menarik? Ide yang ingin dieksplorasi? Atau sekadar ingin berkolaborasi? Pesan Anda akan tiba di stasiun luar angkasa saya dalam hitungan orbit.
          </p>
        </div>

        {/* Form */}
        <div ref={ref2} className="fade-in-up" style={{ transitionDelay: '0.15s' }}>
          <div className="glass" style={{
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top accent */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899)',
            }} />

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.25rem', animation: 'starsAppear 0.6s ease' }}>🚀✨</div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#a78bfa',
                  fontSize: '1.3rem',
                  marginBottom: '0.75rem',
                }}>
                  Pesan Diluncurkan!
                </h3>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#64748b', fontSize: '0.9rem' }}>
                  Sinyal Anda sedang melintasi galaksi. Saya akan membalas secepatnya!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Nama Anda</label>
                    <input
                      type="text"
                      placeholder="Okan Syailendra Wahyudi"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Alamat Email</label>
                    <input
                      type="email"
                      placeholder="Kannz@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Pesan</label>
                  <textarea
                    placeholder="Halo! Saya tertarik untuk berkolaborasi dalam proyek..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={onFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                    onBlur={onBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                    required
                  />
                </div>

                <button
                  ref={btnRef}
                  type="submit"
                  disabled={status === 'launching'}
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    padding: '15px 32px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: status === 'launching' ? 'not-allowed' : 'pointer',
                    background: status === 'launching'
                      ? 'rgba(124,58,237,0.3)'
                      : 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    color: '#ffffff',
                    boxShadow: status === 'launching' ? 'none' : '0 0 30px rgba(124,58,237,0.4)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    alignSelf: 'flex-start',
                    minWidth: '180px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    if (status === 'idle') {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 0 50px rgba(124,58,237,0.6)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = status === 'idle' ? '0 0 30px rgba(124,58,237,0.4)' : 'none'
                  }}
                >
                  {status === 'idle' && (
                    <>
                      <span>🚀</span>
                      <span>Luncurkan Pesan</span>
                    </>
                  )}
                  {status === 'launching' && (
                    <>
                      <span style={{ animation: 'rocketLaunch 1.8s ease forwards', display: 'inline-block' }}>🚀</span>
                      <span>Meluncur...</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', icon: '⌨️', href: 'https://github.com/Okansyailendra' },
              { label: 'Instagram', icon: '📷', href: 'https://www.instagram.com/okan_syailendra0/' },
              { label: 'Email', icon: '📡', href: 'mailto:otansyailendra123@gmail.com' },
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
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
