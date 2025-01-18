'use client'

import * as React from 'react'
import Link from 'next/link'
import { Terminal, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavItem } from './nav-item'
import { SearchButton } from './search-button'

const navItems = [
  {
    title: 'Features',
    href: '#features',
    items: [
      { title: 'AI Documentation', description: 'Automated code commenting with AI', href: '#ai-docs' },
      { title: 'Multiple Languages', description: 'Support for various programming languages', href: '#languages' },
      { title: 'CLI Integration', description: 'Command-line interface tools', href: '#cli' },
    ]
  },
  {
    title: 'Documentation',
    href: '/docs',
    items: [
      { title: 'Getting Started', description: 'Quick start guide', href: '/docs/getting-started' },
      { title: 'API Reference', description: 'Detailed API documentation', href: '/docs/api' },
      { title: 'Examples', description: 'Code examples and use cases', href: '/docs/examples' },
    ]
  },
]

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative group-hover:scale-105 transition-transform">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-white/20 to-white/10 blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Terminal className="size-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              CodeTalk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
            <SearchButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5 text-white" />
            ) : (
              <Menu className="size-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <div className="px-2 py-1 text-sm font-medium text-white">
                  {item.title}
                </div>
                <div className="mt-1 space-y-1">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

