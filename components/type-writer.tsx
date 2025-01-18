'use client'

import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

interface TypeWriterProps {
  text: string
  className?: string
}

export function TypeWriter({ text, className }: TypeWriterProps) {
  const [scope, animate] = useAnimate()
  
  useEffect(() => {
    animate(
      scope.current,
      { opacity: 1 },
      { duration: 0, delay: 0 }
    )
    
    Array.from(text).forEach((_, index) => {
      animate(
        scope.current,
        { width: `${(index + 1) * 100 / text.length}%` },
        { duration: 0.1, delay: index * 0.05 }
      )
    })
  }, [text, animate, scope])

  return (
    <div className="relative">
      <motion.div
        ref={scope}
        className={className}
        initial={{ width: "0%", opacity: 0 }}
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-0 top-0 h-full w-[2px] bg-white"
      />
    </div>
  )
}

