import { useScrollReveal } from '../hooks/useScrollReveal'
import { Planet, Sun, ShootingStar, FloatingIcon } from './SpaceDecorations'

/* ── Astronaut Suit SVG — Dynamic Zero-Gravity Floating Pose ── */
const AstronautPhoto = () => (
  <div style={{
    position: 'relative',
    width: 450,
    height: 550,
  }}>
    {/* Outer glow */}
    <div style={{
      position: 'absolute',
      top: '5%',
      left: '5%',
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.08) 50%, transparent 80%)',
      filter: 'blur(35px)',
      animation: 'nebulaPulse 5s ease-in-out infinite',
      pointerEvents: 'none',
    }} />

    {/* The whole astronaut floats + tilts */}
    <div style={{
      animation: 'astronautFloat 8s ease-in-out infinite',
      transformOrigin: 'center center',
      position: 'relative',
      zIndex: 2,
    }}>
      <svg width="450" height="550" viewBox="0 0 380 460" style={{ overflow: 'visible' }}>
        <defs>
          <clipPath id="visorClip">
            <ellipse cx="190" cy="108" rx="58" ry="62" />
          </clipPath>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="visorGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
            <stop offset="50%" stopColor="rgba(124,58,237,0.15)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
          </linearGradient>
          <linearGradient id="backpackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          <filter id="helmetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="visorReflect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="shadow" />
            <feOffset dx="2" dy="4" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Entire body group — tilted for dynamic pose */}
        <g transform="rotate(-8 190 230)">

          {/* ═══ BACKPACK (behind body) ═══ */}
          <g transform="translate(190, 240)">
            <rect x="-55" y="-60" width="42" height="100" rx="12" fill="url(#backpackGrad)" opacity="0.8" />
            <rect x="13" y="-60" width="42" height="100" rx="12" fill="url(#backpackGrad)" opacity="0.8" />
            {/* Backpack details */}
            <rect x="-50" y="-30" width="10" height="3" rx="1.5" fill="rgba(6,182,212,0.6)" />
            <rect x="-50" y="-22" width="7" height="3" rx="1.5" fill="rgba(236,72,153,0.5)" />
            <rect x="42" y="-30" width="10" height="3" rx="1.5" fill="rgba(6,182,212,0.6)" />
            <rect x="42" y="-22" width="7" height="3" rx="1.5" fill="rgba(236,72,153,0.5)" />
            {/* Antenna */}
            <line x1="35" y1="-60" x2="45" y2="-85" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="45" cy="-88" r="4" fill="#ec4899" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* ═══ BODY / TORSO ═══ */}
          <path d="M145,185 Q142,168 158,162 L222,162 Q238,168 235,185 L240,305 Q242,330 220,338 L160,338 Q138,330 140,305 Z"
            fill="url(#suitGrad)" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />

          {/* Chest panel */}
          <rect x="165" y="178" width="50" height="60" rx="8" fill="rgba(15,23,42,0.6)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
          <circle cx="177" cy="193" r="3" fill="#4ade80" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="190" cy="193" r="3" fill="#06b6d4" opacity="0.8">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="203" cy="193" r="3" fill="#ec4899" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line x1="170" y1="205" x2="210" y2="205" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
          <line x1="170" y1="213" x2="205" y2="213" stroke="rgba(6,182,212,0.2)" strokeWidth="0.8" />
          <line x1="170" y1="221" x2="200" y2="221" stroke="rgba(6,182,212,0.15)" strokeWidth="0.8" />
          <rect x="170" y="228" width="40" height="6" rx="2" fill="rgba(124,58,237,0.2)" stroke="rgba(124,58,237,0.3)" strokeWidth="0.5" />

          {/* Belt — slightly curved */}
          <path d="M142,282 Q190,276 238,282" fill="none" stroke="#64748b" strokeWidth="12" strokeLinecap="round" />
          <rect x="178" y="275" width="24" height="14" rx="3" fill="#475569" stroke="rgba(167,139,250,0.4)" strokeWidth="0.8" />

          {/* ═══ LEFT ARM — Raised up waving ═══ */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-3,145,185;5,145,185;-3,145,185" dur="5s" repeatCount="indefinite" />
            <path d="M148,188 Q115,175 90,140 Q72,112 55,90"
              fill="none" stroke="#cbd5e1" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M148,188 Q115,175 90,140 Q72,112 55,90"
              fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
            {/* Glove */}
            <ellipse cx="52" cy="82" rx="17" ry="15" fill="#94a3b8" stroke="rgba(100,116,139,0.4)" strokeWidth="1" transform="rotate(-30 52 82)" />
            {/* Arm stripe */}
            <rect x="82" y="128" width="22" height="5" rx="2" fill="rgba(236,72,153,0.4)" transform="rotate(-50 93 130)" />
            {/* Shoulder patch */}
            <circle cx="135" cy="182" r="11" fill="rgba(15,23,42,0.8)" stroke="rgba(124,58,237,0.5)" strokeWidth="0.8" />
            <text x="135" y="185" textAnchor="middle" fontSize="5.5" fill="#a78bfa" fontFamily="Orbitron, sans-serif" fontWeight="700">KD</text>
          </g>

          {/* ═══ RIGHT ARM — Relaxed outward ═══ */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="2,235,185;-4,235,185;2,235,185" dur="6s" repeatCount="indefinite" />
            <path d="M232,188 Q262,200 280,235 Q292,265 298,295 Q300,315 290,330"
              fill="none" stroke="#cbd5e1" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M232,188 Q262,200 280,235 Q292,265 298,295 Q300,315 290,330"
              fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
            {/* Glove */}
            <ellipse cx="287" cy="335" rx="17" ry="14" fill="#94a3b8" stroke="rgba(100,116,139,0.4)" strokeWidth="1" transform="rotate(15 287 335)" />
            {/* Arm stripe */}
            <rect x="275" y="252" width="22" height="5" rx="2" fill="rgba(6,182,212,0.4)" transform="rotate(20 286 255)" />
          </g>

          {/* ═══ LEFT LEG — Bent & floating ═══ */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="2,160,335;-3,160,335;2,160,335" dur="7s" repeatCount="indefinite" />
            <path d="M160,335 Q148,365 135,395 Q128,415 138,430"
              fill="none" stroke="#cbd5e1" strokeWidth="28" strokeLinecap="round" />
            <path d="M160,335 Q148,365 135,395 Q128,415 138,430"
              fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="29" strokeLinecap="round" />
            {/* Boot */}
            <ellipse cx="140" cy="435" rx="20" ry="12" fill="#64748b" stroke="rgba(100,116,139,0.4)" strokeWidth="0.8" transform="rotate(-10 140 435)" />
          </g>

          {/* ═══ RIGHT LEG — Extended outward ═══ */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-2,220,335;4,220,335;-2,220,335" dur="6.5s" repeatCount="indefinite" />
            <path d="M220,335 Q235,370 250,400 Q262,425 272,440"
              fill="none" stroke="#cbd5e1" strokeWidth="28" strokeLinecap="round" />
            <path d="M220,335 Q235,370 250,400 Q262,425 272,440"
              fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="29" strokeLinecap="round" />
            {/* Boot */}
            <ellipse cx="275" cy="445" rx="20" ry="12" fill="#64748b" stroke="rgba(100,116,139,0.4)" strokeWidth="0.8" transform="rotate(20 275 445)" />
          </g>

          {/* ═══ HELMET ═══ */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-2,190,100;3,190,100;-2,190,100" dur="4s" repeatCount="indefinite" />
            {/* Helmet outer shell */}
            <ellipse cx="190" cy="100" rx="78" ry="82" fill="url(#helmetGrad)" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" />
            {/* Helmet inner dark */}
            <ellipse cx="190" cy="103" rx="68" ry="72" fill="#0f172a" />
            {/* Visor opening */}
            <ellipse cx="190" cy="108" rx="60" ry="64" fill="#0a0a1a" />
            {/* Photo face */}
            <image
              href="/foto.png"
              x="75"
              y="-7"
              width="230"
              height="230"
              clipPath="url(#visorClip)"
              preserveAspectRatio="xMidYMid slice"
            />
            {/* Visor glass overlay */}
            <ellipse cx="190" cy="108" rx="60" ry="64" fill="url(#visorGlass)" opacity="0.25" />
            {/* Visor reflections */}
            <ellipse cx="168" cy="82" rx="18" ry="26" fill="rgba(255,255,255,0.07)" transform="rotate(-15 168 82)" filter="url(#visorReflect)" />
            <ellipse cx="215" cy="125" rx="10" ry="16" fill="rgba(6,182,212,0.05)" transform="rotate(10 215 125)" filter="url(#visorReflect)" />
            {/* Visor rim */}
            <ellipse cx="190" cy="108" rx="60" ry="64" fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="2" />
            <ellipse cx="190" cy="108" rx="63" ry="67" fill="none" stroke="rgba(124,58,237,0.15)" strokeWidth="1" />
            {/* Helmet top accent */}
            <path d="M140,42 Q190,18 240,42" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
            {/* Ear pieces */}
            <ellipse cx="115" cy="103" rx="11" ry="16" fill="#94a3b8" stroke="rgba(100,116,139,0.4)" strokeWidth="0.8" />
            <ellipse cx="265" cy="103" rx="11" ry="16" fill="#94a3b8" stroke="rgba(100,116,139,0.4)" strokeWidth="0.8" />
            <circle cx="115" cy="101" r="3.5" fill="rgba(6,182,212,0.4)" />
            <circle cx="265" cy="101" r="3.5" fill="rgba(124,58,237,0.4)" />
            {/* Helmet glow */}
            <ellipse cx="190" cy="100" rx="82" ry="86" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1" filter="url(#helmetGlow)">
              <animate attributeName="stroke-opacity" values="0.08;0.25;0.08" dur="3s" repeatCount="indefinite" />
            </ellipse>
          </g>

          {/* Neck connector */}
          <path d="M155,175 Q190,168 225,175" fill="none" stroke="#94a3b8" strokeWidth="14" strokeLinecap="round" />

        </g>

        {/* ═══ TETHER CABLE — floating behind ═══ */}
        <path d="M145,260 Q110,290 90,310 Q60,345 80,370 Q100,395 70,420" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,4">
          <animate attributeName="d" values="M145,260 Q110,290 90,310 Q60,345 80,370 Q100,395 70,420;M145,265 Q115,295 95,320 Q65,350 85,380 Q105,400 75,430;M145,260 Q110,290 90,310 Q60,345 80,370 Q100,395 70,420" dur="6s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>

    {/* Floating particles around astronaut */}
    {[
      { top: '3%', left: '-2%', size: 4, color: '#a78bfa', dur: '4s' },
      { top: '20%', left: '95%', size: 3, color: '#06b6d4', dur: '5s' },
      { top: '55%', left: '-6%', size: 5, color: '#ec4899', dur: '6s' },
      { top: '78%', left: '90%', size: 3, color: '#a78bfa', dur: '4.5s' },
      { top: '12%', left: '88%', size: 4, color: '#4ade80', dur: '5.5s' },
      { top: '42%', left: '-1%', size: 3, color: '#06b6d4', dur: '3.5s' },
      { top: '88%', left: '50%', size: 4, color: '#fbbf24', dur: '4s' },
    ].map((p, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: p.top,
        left: p.left,
        width: p.size,
        height: p.size,
        borderRadius: '50%',
        background: p.color,
        boxShadow: `0 0 10px ${p.color}`,
        animation: `twinkle ${p.dur} ease-in-out ${i * 0.5}s infinite`,
        pointerEvents: 'none',
        zIndex: 3,
      }} />
    ))}

    {/* Star bursts */}
    {[
      { top: '0%', left: '15%', size: 11 },
      { top: '65%', left: '96%', size: 9 },
      { top: '90%', left: '8%', size: 7 },
    ].map((s, i) => (
      <svg key={i} width={s.size} height={s.size} viewBox="0 0 12 12" style={{
        position: 'absolute',
        top: s.top,
        left: s.left,
        animation: `twinkle ${3 + i}s ease-in-out ${i}s infinite`,
        pointerEvents: 'none',
        zIndex: 3,
      }}>
        <line x1="6" y1="0" x2="6" y2="12" stroke="#a78bfa" strokeWidth="0.8" />
        <line x1="0" y1="6" x2="12" y2="6" stroke="#a78bfa" strokeWidth="0.8" />
      </svg>
    ))}
  </div>
)

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  /* Paragraph data with space icons & themed colors */
  const paragraphs = [
    {
      icon: '🚀',
      iconLabel: 'MISSION',
      color: '#a78bfa',
      borderColor: 'rgba(167,139,250,0.25)',
      bgGradient: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.03) 100%)',
      content: (
        <>
          Saya adalah seorang <strong style={{ color: '#e2e8f0', textShadow: '0 0 12px rgba(226,232,240,0.3)' }}>Frontend & Game Developer</strong> yang bersemangat dalam menciptakan antarmuka yang dinamis dan dunia virtual yang imersif.
          Perjalanan saya didorong oleh antusiasme untuk merancang permainan yang dapat dinikmati oleh banyak orang, serta membangun aplikasi interaktif yang benar-benar mempermudah penggunanya.
        </>
      ),
    },
    {
      icon: '🛸',
      iconLabel: 'EXPERTISE',
      color: '#06b6d4',
      borderColor: 'rgba(6,182,212,0.25)',
      bgGradient: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(124,58,237,0.03) 100%)',
      content: (
        <>
          Dengan fokus pada <strong style={{ color: '#a78bfa', textShadow: '0 0 12px rgba(167,139,250,0.3)' }}>pengembangan antarmuka web, interaksi UI/UX, dan mekanika game</strong>.
          Saya percaya bahwa kode yang baik bukan hanya tentang logika, melainkan seni visual.
          Setiap baris ditulis dengan niat untuk menghadirkan pengalaman digital yang mulus, responsif, dan menyenangkan.
        </>
      ),
    },
    {
      icon: '🛡️',
      iconLabel: 'SECURITY',
      color: '#ec4899',
      borderColor: 'rgba(236,72,153,0.25)',
      bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(124,58,237,0.03) 100%)',
      content: (
        <>
          Selain pengembangan perangkat lunak, saya sangat antusias di bidang keamanan siber. Saya menjabat sebagai <strong style={{ color: '#06b6d4', textShadow: '0 0 12px rgba(6,182,212,0.3)' }}>Co-External Affairs di Komunitas Koalisi</strong>—sebuah wadah bagi para mahasiswa yang memiliki <em style={{ color: '#ec4899', fontStyle: 'normal', textShadow: '0 0 10px rgba(236,72,153,0.4)' }}>passion</em> di dunia <em style={{ color: '#ec4899', fontStyle: 'normal', textShadow: '0 0 10px rgba(236,72,153,0.4)' }}>Cyber Security</em> untuk saling belajar dan berkembang bersama.
        </>
      ),
    },
  ]

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
      {/* ═══════ UNIQUE SECTION BACKGROUND (CYAN/BLUE) ═══════ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,26,0) 0%, rgba(6,182,212,0.03) 50%, rgba(5,5,26,0) 100%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'nebulaPulse 14s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        animation: 'nebulaPulse 16s ease-in-out 5s infinite',
      }} />

      {/* SPACE DECORATIONS */}
      <Sun top="5%" left="8%" size="250px" />
      <Planet top="70%" left="-5%" color="#ec4899" size="120px" delay="2s" />
      <ShootingStar top="15%" delay="0s" />
      <ShootingStar top="40%" delay="4s" />
      <FloatingIcon icon="🛰️" top="25%" right="10%" size="4rem" animDur="14" rotation="15" opacity="0.6" />


      {/* ═══════ MAIN CONTENT ═══════ */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* ──── Text side ──── */}
        <div>
          <div ref={ref1} className="fade-in-up" style={{ marginBottom: '2rem' }}>
            {/* Section badge */}
            <span className="space-badge" style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06b6d4',
              marginBottom: '0.75rem',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="5" fill="none" stroke="#06b6d4" strokeWidth="1" />
                <circle cx="7" cy="7" r="2" fill="#06b6d4" />
                <ellipse cx="7" cy="7" rx="7" ry="3" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="0.5" />
              </svg>
              Tentang Saya
            </span>

            {/* Heading with aurora effect */}
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
              <span className="aurora-text" style={{
                fontFamily: 'Orbitron, sans-serif',
                filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.4))',
              }}>
                Teknologi
              </span>
            </h2>
          </div>

          {/* ──── Paragraph Cards — Space Mission Logs ──── */}
          <div ref={ref2} className="fade-in-up" style={{ transitionDelay: '0.15s', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {paragraphs.map(({ icon, iconLabel, color, borderColor, bgGradient, content }, i) => (
              <div key={i} style={{
                position: 'relative',
                background: bgGradient,
                border: `1px solid ${borderColor}`,
                borderRadius: '16px',
                padding: '1.25rem 1.25rem 1.25rem 1rem',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                overflow: 'hidden',
                animation: `cosmicFadeIn 0.8s ease ${0.2 + i * 0.15}s both`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.transform = 'translateX(8px)'
                e.currentTarget.style.boxShadow = `0 0 25px ${color}20, 0 8px 25px rgba(0,0,0,0.3)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = borderColor
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                {/* Scanline overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124,58,237,0.02) 2px, rgba(124,58,237,0.02) 4px)',
                  pointerEvents: 'none',
                  borderRadius: '16px',
                }} />

                {/* Top left accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: `linear-gradient(180deg, ${color}, transparent)`,
                  borderRadius: '16px 0 0 16px',
                  opacity: 0.6,
                }} />

                {/* Header row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '0.7rem',
                  paddingLeft: '0.5rem',
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    animation: `float ${4 + i}s ease-in-out infinite`,
                  }}>
                    {icon}
                  </span>
                  <span style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: color,
                    textShadow: `0 0 8px ${color}60`,
                  }}>
                    {iconLabel}
                  </span>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: `linear-gradient(90deg, ${color}40, transparent)`,
                  }} />
                  {/* Status dot */}
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 6px #4ade80',
                    animation: 'scalePulse 2s ease-in-out infinite',
                  }} />
                </div>

                {/* Content */}
                <p style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  color: '#cbd5e1',
                  lineHeight: 1.8,
                  margin: 0,
                  paddingLeft: '0.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {content}
                </p>
              </div>
            ))}

            {/* ──── Stats Cards — Hologram Spaceship Panel ──── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { label: '2', symbol: '+', title: 'TAHUN', subtitle: 'Pengalaman', color: '#a78bfa', icon: '🪐', delay: '0s' },
                { label: '10', symbol: '+', title: 'PROYEK', subtitle: 'Selesai', color: '#06b6d4', icon: '🛸', delay: '0.15s' },
                { label: '7', symbol: '+', title: 'TECH', subtitle: 'Stack', color: '#ec4899', icon: '☄️', delay: '0.3s' },
              ].map(({ label, symbol, title, subtitle, color, icon, delay }) => (
                <div key={title} className="hologram-card" style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  animation: `cosmicFadeIn 0.8s ease ${delay} both`,
                  cursor: 'default',
                }}>
                  {/* Planet/space icon */}
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: delay,
                  }}>
                    {icon}
                  </div>

                  {/* Number display — digital counter style */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '2px',
                    marginBottom: '0.4rem',
                  }}>
                    <span style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.05em',
                      textShadow: `0 0 20px ${color}60, 0 0 40px ${color}30`,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: color,
                      filter: `drop-shadow(0 0 8px ${color})`,
                    }}>
                      {symbol}
                    </span>
                  </div>

                  {/* Labels */}
                  <div style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    color: '#64748b',
                    marginBottom: '0.15rem',
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                  }}>
                    {subtitle}
                  </div>

                  {/* Bottom accent line */}
                  <div style={{
                    width: '40px',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    margin: '0.75rem auto 0',
                    borderRadius: '2px',
                    boxShadow: `0 0 8px ${color}50`,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ──── Visual side — Astronaut Suit with Photo Face ──── */}
        <div ref={ref3} className="fade-in-up" style={{ transitionDelay: '0.25s', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AstronautPhoto />
        </div>
      </div>
    </section>
  )
}
