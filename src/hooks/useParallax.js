import { useEffect, useRef, useState } from 'react'

export function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const raf = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      target.current.x = (e.clientX - cx) / cx
      target.current.y = (e.clientY - cy) / cy
    }

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.04
      current.current.y += (target.current.y - current.current.y) * 0.04
      setOffset({ x: current.current.x, y: current.current.y })
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return offset
}
