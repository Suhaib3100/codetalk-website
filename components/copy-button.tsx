'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success('Copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={copy}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Check className="w-4 h-4 text-green-500" />
      </motion.span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: copied ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Copy className="w-4 h-4" />
      </motion.span>
    </motion.button>
  )
}

