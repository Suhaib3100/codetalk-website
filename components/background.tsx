'use client'

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Gradient lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          {/* Vertical lines */}
          <div className="absolute inset-0 flex justify-around [&>div]:w-px [&>div]:h-full [&>div]:bg-gradient-to-b">
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
          </div>
          {/* Horizontal lines */}
          <div className="absolute inset-0 flex flex-col justify-around [&>div]:h-px [&>div]:w-full [&>div]:bg-gradient-to-r">
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
            <div className="from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

