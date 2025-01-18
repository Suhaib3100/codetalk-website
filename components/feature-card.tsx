'use client'

import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  iconName: string
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ iconName, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative mb-4 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        <span className="text-2xl">{getIconEmoji(iconName)}</span>
      </div>
      <div className="relative">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="mt-2 text-white/70 transition-colors group-hover:text-white/90">
          {description}
        </p>
      </div>
    </div>
  )
}

function getIconEmoji(iconName: string): string {
  const iconMap: Record<string, string> = {
    'brain': '🧠',
    'zap': '⚡',
    'code': '💻',
    'terminal': '📟',
    'cpu': '🔧',
    'git-fork': '🔄'
  }
  return iconMap[iconName] || '📋'
}
