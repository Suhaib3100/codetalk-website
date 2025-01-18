'use client'

import { CodeComparison } from './code-comparison'
import { AnimatedText } from './animated-text'
import { motion } from 'framer-motion'

export function CodeShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedText 
              text="See the Difference"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-white/70 text-lg">
              Transform your code documentation in seconds with AI-powered insights
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
            
            {/* Code comparison component */}
            <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden">
              <CodeComparison />
            </div>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            {
              title: 'Intelligent Analysis',
              description: 'AI understands your code context and generates meaningful comments'
            },
            {
              title: 'Clean Documentation',
              description: 'Get properly formatted JSDoc comments with type information'
            },
            {
              title: 'Better Readability',
              description: 'Improve code maintainability with clear and concise documentation'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

