import { useState, useEffect } from 'react'

// Target: 23 August 2026 at 06:00 AM (UTC+5:30 → stored as local)
const TARGET = new Date('2026-08-23T00:30:00Z') // 06:00 AM IST = 00:30 UTC

function getRemaining() {
  const now = new Date()
  const diff = TARGET - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function useCountdown() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
