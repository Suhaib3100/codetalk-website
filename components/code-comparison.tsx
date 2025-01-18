'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

const beforeCode = `function calculateTotal(items) {
// Loop through items array
for (let i = 0; i < items.length; i++) {
  total += items[i].price * items[i].quantity
}
return total
}`

const afterCode = `/**
 * Calculates the total price of all items in the shopping cart
 * @param {Array} items - Array of items with price and quantity properties
 * @returns {number} The total price of all items
 */
function calculateTotal(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array')
  }

  // Calculate total using reduce for better readability
  const total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)

  return total
}`

export function CodeComparison() {
  const [isAfter, setIsAfter] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(isAfter ? afterCode : beforeCode)
    setCopied(true)
    toast.success('Code copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute -inset-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl blur-lg opacity-50" />
      
      {/* Main container */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAfter(false)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                !isAfter 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setIsAfter(true)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                isAfter 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              After
            </button>
          </div>
          <button
            onClick={copyCode}
            className="p-2 rounded-lg text-white/60 hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Code container */}
        <div className="relative overflow-hidden rounded-b-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={isAfter ? 'after' : 'before'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="p-4 bg-black/50 backdrop-blur-sm"
            >
              <pre className="text-sm font-mono">
                <code className="text-white/90">
                  {isAfter ? afterCode : beforeCode}
                </code>
              </pre>
            </motion.div>
          </AnimatePresence>

          {/* AI Enhancement indicator */}
          {isAfter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-white/70" />
              <span className="text-xs text-white/70">AI Enhanced</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

