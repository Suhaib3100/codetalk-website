'use client'

import { motion } from 'framer-motion'
import { TypeWriter } from './type-writer'

const code = `import { generateDocs } from 'codetalk'

// Generate documentation for your code
const docs = await generateDocs({
  file: 'app.js',
  style: 'jsdoc',
  model: 'gpt-4'
})

// AI-powered documentation
console.log(docs)`

export function CodePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative group rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="size-3 rounded-full bg-white/20" />
          <div className="size-3 rounded-full bg-white/20" />
          <div className="size-3 rounded-full bg-white/20" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-sm text-white/40">
          app.js
        </div>
      </div>
      
      {/* Code */}
      <div className="p-4 font-mono text-sm">
        <TypeWriter text={code} className="text-white whitespace-pre" />
      </div>
    </motion.div>
  )
}

