'use client'

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Terminal, FileCode, Book, Github, Package } from 'lucide-react'
import { toast } from 'sonner'

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                runCommand(() => {
                  navigator.clipboard.writeText("npm i codetalk")
                  toast.success("Copied installation command")
                })
              }}
            >
              <Terminal className="mr-2 h-4 w-4" />
              <span>Copy Install Command</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("https://github.com/Suhaib3100/codetalk", "_blank"))
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>View Source Code</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("https://www.npmjs.com/package/codetalk", "_blank"))
              }}
            >
              <Package className="mr-2 h-4 w-4" />
              <span>View on npm</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("/docs", "_blank"))
              }}
            >
              <Book className="mr-2 h-4 w-4" />
              <span>Read Documentation</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("/examples", "_blank"))
              }}
            >
              <FileCode className="mr-2 h-4 w-4" />
              <span>View Examples</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

