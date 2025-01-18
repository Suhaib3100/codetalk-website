'use client'

import { motion } from 'framer-motion'
import { CopyButton } from './copy-button'

export function AnimatedTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group w-full"
    >
      <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500" />
      <div className="relative rounded-lg border border-white/10 bg-black backdrop-blur-sm overflow-hidden">
        <div className="flex items-center gap-1.5 p-3 border-b border-white/10 bg-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="p-4 flex items-center justify-between">
          <code className="text-sm sm:text-base font-mono text-white">npm i codetalk</code>
          <CopyButton text="npm i codetalk" className="text-white/60 hover:text-white" />
        </div>
      </div>
    </motion.div>
  )
}

