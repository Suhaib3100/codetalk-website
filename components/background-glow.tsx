'use client'

export function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent" />
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  )
}

