import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  speed: number
  color: string
}

const STAR_COLORS = ['#ffffff', '#a78bfa', '#06b6d4', '#ec4899', '#e2e8f0']

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = 220
    const stars: Star[] = []
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random(),
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.12 + 0.02,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      })
    }
    starsRef.current = stars

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x / canvas.width - 0.5
      const my = mouseRef.current.y / canvas.height - 0.5

      for (const star of starsRef.current) {
        const parallaxX = mx * star.z * 18
        const parallaxY = my * star.z * 18
        const px = star.x + parallaxX
        const py = star.y + parallaxY

        // twinkle
        const twinkle = Math.sin(Date.now() * 0.001 * star.speed * 3 + star.x) * 0.3 + 0.7

        ctx.beginPath()
        ctx.arc(px, py, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity * twinkle
        ctx.fill()

        // glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath()
          ctx.arc(px, py, star.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = star.color
          ctx.globalAlpha = star.opacity * twinkle * 0.15
          ctx.fill()
        }

        ctx.globalAlpha = 1
        star.y += star.speed * 0.15
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
