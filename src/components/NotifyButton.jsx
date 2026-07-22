import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NotifyButton({ contentOffset }) {
  const [status, setStatus] = useState('idle') // idle | success

  const handleClick = () => {
    if (status !== 'idle') return
    setStatus('success')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
      style={{
        transform: `translate(${contentOffset.x * 4}px, ${contentOffset.y * 4}px)`,
        willChange: 'transform',
      }}
    >
      <button
        onClick={handleClick}
        id="notify-btn"
        aria-label="Stay Updated"
        className="notify-btn glass-dark"
        style={{
          padding: '14px 52px',
          borderRadius: '100px',
          border: '1px solid rgba(201,168,76,0.35)',
          background: 'rgba(10, 8, 6, 0.25)',
          cursor: 'none',
          outline: 'none',
          boxShadow: `
            0 4px 24px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(201,168,76,0.1)
          `,
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            background:
              'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {status === 'idle' ? 'Stay Updated' : 'Noted — We will reach out'}
        </span>
      </button>

      {/* Subtle helper text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.8 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 300,
          letterSpacing: '0.12em',
          color: 'rgba(176, 168, 152, 0.35)',
          marginTop: '10px',
          textTransform: 'uppercase',
        }}
      >
        Be the first to know
      </motion.p>
    </motion.div>
  )
}
