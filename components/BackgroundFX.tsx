'use client'

import { useEffect, useRef } from 'react'

/**
 * Lightweight animated starfield + gradient glow.
 * No external libs. Runs only on client.
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame = 0
    let w = 0
    let h = 0

    type Star = { x: number; y: number; z: number; r: number; tw: number }
    let stars: Star[] = []

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      w = Math.floor(canvas.clientWidth * dpr)
      h = Math.floor(canvas.clientHeight * dpr)
      canvas.width = w
      canvas.height = h

      // scale star count with area (capped)
      const count = Math.max(120, Math.min(380, Math.floor((w * h) / 18000)))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.2 + Math.random() * 0.8,
        r: 0.6 + Math.random() * 1.6,
        tw: Math.random() * 10,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)

      // subtle base
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, w, h)

      // stars
      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin((t / 600) * s.z + s.tw)
        const alpha = 0.25 + 0.55 * twinkle
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2)
        ctx.fill()

        // slow drift
        s.y += 0.08 * s.z
        if (s.y > h + 8) {
          s.y = -8
          s.x = Math.random() * w
        }
      }

      animationFrame = requestAnimationFrame((tt) => draw(tt))
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas)
    resize()
    animationFrame = requestAnimationFrame((tt) => draw(tt))

    return () => {
      cancelAnimationFrame(animationFrame)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* gradient glows */}
      <div className="absolute -top-56 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-fuchsia-500/18 blur-[120px]" />
      <div className="absolute -bottom-56 right-0 h-[660px] w-[660px] rounded-full bg-cyan-400/12 blur-[140px]" />
      <div className="absolute -bottom-64 left-0 h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-220px,rgba(217,70,239,0.24),transparent_56%),radial-gradient(900px_circle_at_92%_18%,rgba(34,211,238,0.16),transparent_56%),radial-gradient(850px_circle_at_10%_90%,rgba(16,185,129,0.10),transparent_60%)]" />

      {/* starfield */}
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />

      {/* subtle grid */}
      <div className="absolute inset-0 grid-anim bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)] opacity-25" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  )
}
