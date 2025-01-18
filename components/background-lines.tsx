'use client'

export function BackgroundLines() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] h-full w-full">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute h-full w-[1px] left-[20%] top-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute h-full w-[1px] left-[40%] top-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute h-full w-[1px] left-[60%] top-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute h-full w-[1px] left-[80%] top-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute h-[1px] w-full top-[20%] left-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute h-[1px] w-full top-[40%] left-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute h-[1px] w-full top-[60%] left-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute h-[1px] w-full top-[80%] left-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  )
}

