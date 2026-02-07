import { useEffect, useRef } from 'react'

function ShootingStarCursor() {
  const canvasRef = useRef(null)
  const starRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const starEl = starRef.current
    if (!canvas || !starEl) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 }
    const star = { x: pointer.x, y: pointer.y }
    const trail = []
    const particles = []
    let rafId = 0
    let dpr = 1
    let w = 0
    let h = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }

    const onClick = (e) => {
      for (let i = 0; i < 18; i += 1) {
        const angle = Math.random() * Math.PI * 2
        const speed = 1 + Math.random() * 3
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 1 + Math.random() * 2.2,
        })
      }
    }

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      star.x += (pointer.x - star.x) * 0.16
      star.y += (pointer.y - star.y) * 0.16
      trail.push({ x: star.x, y: star.y, life: 1 })
      if (trail.length > 34) trail.shift()

      const px = (star.x - w * 0.5) / (w * 0.5)
      const py = (star.y - h * 0.5) / (h * 0.5)
      starEl.style.transform = `translate3d(${star.x + px * 5}px, ${star.y + py * 5}px, 0) translate(-50%, -50%)`

      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < trail.length; i += 1) {
        const p = trail[i]
        p.life *= 0.965
        const t = i / trail.length
        const r = 1.2 + t * 4.2
        const alpha = p.life * t * 0.72
        ctx.beginPath()
        ctx.fillStyle = `rgba(124,216,255,${alpha})`
        ctx.shadowBlur = 14
        ctx.shadowColor = 'rgba(124,216,255,0.6)'
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 10
      ctx.shadowColor = 'rgba(160,230,255,0.6)'
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.985
        p.vy *= 0.985
        p.life -= 0.028
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.fillStyle = `rgba(185,236,255,${p.life})`
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)
    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="cursor-fx-canvas" />
      <div ref={starRef} className="star-cursor" />
    </>
  )
}

export default ShootingStarCursor
