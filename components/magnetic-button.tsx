'use client'

import { useState, useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring smoothing
  const springConfig = { damping: 15, stiffness: 150 }
  const translateX = useSpring(mouseX, springConfig)
  const translateY = useSpring(mouseY, springConfig)

  // Rotation
  const rotateX = useTransform(translateY, [-10, 10], [5, -5])
  const rotateY = useTransform(translateX, [-10, 10], [-5, 5])

  function onMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = clientX - left - width / 2
    const y = clientY - top - height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg bg-white px-8 py-3 text-lg font-medium text-black transition-colors hover:bg-white/90",
        className
      )}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        translateX,
        translateY,
        rotateX,
        rotateY,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white to-white/80"
        style={{
          opacity: useTransform(
            translateX,
            [-10, 0, 10],
            [0.8, 1, 0.8]
          )
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 100%)",
          opacity: useTransform(
            translateX,
            [-10, 0, 10],
            [0.2, 0, 0.2]
          )
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
