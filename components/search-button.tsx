'use client'

import { Search, Command } from 'lucide-react'
import { handleSearch } from '@/lib/actions'

export function SearchButton() {
  return (
    <button
      className="group px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center space-x-2 text-sm text-white/70 hover:text-white"
      onClick={() => handleSearch('')}
    >
      <Search className="size-4" />
      <span className="hidden lg:inline">Search docs</span>
      <div className="hidden lg:flex items-center space-x-1 px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10">
        <Command className="size-3" />
        <span className="text-xs">K</span>
      </div>
    </button>
  )
}

