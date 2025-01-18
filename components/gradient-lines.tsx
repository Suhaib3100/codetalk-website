'use client'

import { useEffect, useRef } from 'react'

export function GradientLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient lines
      for (let i = 0; i < 10; i++) {
        const y = canvas.height / 2 + Math.sin(time + i) * 50
        
        ctx.beginPath()
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-50"
    />
  )
}

