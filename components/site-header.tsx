'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Terminal, Search, Command, ChevronDown, Menu, X } from 'lucide-react'

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

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

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
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-white/20 to-white/10 blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Terminal className="size-5 text-white" />
              </div>
            </motion.div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              CodeTalk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>{item.title}</span>
                  <ChevronDown className="size-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-lg border border-white/10 bg-black/90 backdrop-blur-xl p-2"
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Search Button */}
            <button
              className="group px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center space-x-2 text-sm text-white/70 hover:text-white"
              onClick={() => {}}
            >
              <Search className="size-4" />
              <span className="hidden lg:inline">Search docs</span>
              <div className="hidden lg:flex items-center space-x-1 px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10">
                <Command className="size-3" />
                <span className="text-xs">K</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="size-5 text-white" />
            ) : (
              <Menu className="size-5 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 py-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

