import { useRef } from 'react'
import { useParticles } from '../hooks/useParticles'

export default function Background({ bgOffset }) {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Ken Burns background image */}
      <div
        className="absolute inset-0 w-full h-full ken-burns"
        style={{
          transform: `scale(1.1) translate(${bgOffset.x * -1.5}%, ${bgOffset.y * -1.5}%)`,
          willChange: 'transform',
        }}
      >
        <img
          src="/bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Primary dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(5, 4, 2, 0.48)' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Warm sunbloom */}
      <div className="absolute inset-0 sunbloom" />

      {/* Bottom dark fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, rgba(5,4,2,0.6) 0%, transparent 100%)',
        }}
      />

      {/* Top subtle fade */}
      <div
        className="absolute inset-x-0 top-0 h-1/4"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,4,2,0.3) 0%, transparent 100%)',
        }}
      />

      {/* Ambient gold glow — center */}
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background:
            'radial-gradient(ellipse, rgba(201, 168, 76, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dust particles */}
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  )
}
