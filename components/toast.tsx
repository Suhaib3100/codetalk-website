'use client'

import { Toaster } from 'sonner'

export function Toast() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'black',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white',
        },
        className: 'font-medium',
      }}
    />
  )
}

