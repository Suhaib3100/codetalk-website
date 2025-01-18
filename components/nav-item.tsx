'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface NavItem {
  title: string
  href: string
  items: {
    title: string
    description: string
    href: string
  }[]
}

export function NavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 text-sm text-white/70 hover:text-white transition-colors"
      >
        <span>{item.title}</span>
        <ChevronDown className="size-4" />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 rounded-lg border border-white/10 bg-black/90 backdrop-blur-xl p-2 opacity-0 translate-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href}
              className="block rounded-md p-2 hover:bg-white/5 transition-colors"
            >
              <div className="text-sm font-medium text-white">
                {subItem.title}
              </div>
              <div className="text-xs text-white/50">
                {subItem.description}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

