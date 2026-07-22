import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

const pad = (n) => String(n).padStart(2, '0')

function TimerCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 1,
        delay: 1.9 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="timer-card glass-dark flex flex-col items-center justify-center"
      style={{
        width: 'clamp(70px, 12vw, 108px)',
        height: 'clamp(78px, 13vw, 118px)',
        borderRadius: '12px',
        boxShadow: `
          0 8px 32px rgba(0,0,0,0.4),
          0 0 0 1px rgba(201,168,76,0.18),
          inset 0 1px 0 rgba(201,168,76,0.12),
          inset 0 -1px 0 rgba(0,0,0,0.25)
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Inner glow top */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '45%',
          background: 'linear-gradient(to bottom, rgba(201,168,76,0.06), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Number — animates per tick */}
      <motion.span
        key={value}
        initial={{ opacity: 0.5, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.75rem, 4.8vw, 3rem)',
          fontWeight: 400,
          lineHeight: 1,
          background: 'linear-gradient(180deg, #F5E8C0 0%, #C9A84C 55%, #9A7228 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.05em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {pad(value)}
      </motion.span>

      {/* Label */}
      <span
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(0.5rem, 0.85vw, 0.62rem)',
          fontWeight: 500,
          letterSpacing: '0.22em',
          color: 'rgba(201,168,76,0.52)',
          textTransform: 'uppercase',
          marginTop: '7px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownTimer({ contentOffset }) {
  const { days, hours, minutes, seconds } = useCountdown()

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <motion.div
      className="flex flex-col items-center"
      style={{
        transform: `translate(${contentOffset.x * 5}px, ${contentOffset.y * 5}px)`,
        willChange: 'transform',
        gap: 'clamp(12px, 2vh, 20px)',
      }}
    >
      {/* COMING SOON pill */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass flex items-center gap-2"
        style={{
          padding: '7px 24px',
          borderRadius: '100px',
          border: '1px solid rgba(201,168,76,0.32)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.08)',
        }}
      >
        {/* Pulsing dot */}
        <span className="coming-soon-dot" />
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.58rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: 'rgba(232,213,163,0.82)',
            textTransform: 'uppercase',
          }}
        >
          Coming Soon
        </span>
      </motion.div>

      {/* Timer cards row */}
      <div className="flex items-center" style={{ gap: 'clamp(6px, 1.5vw, 14px)' }}>
        {units.map(({ value, label }, i) => (
          <div key={label} className="flex items-center" style={{ gap: 'clamp(6px, 1.5vw, 14px)' }}>
            <TimerCard value={value} label={label} index={i} />
            {i < units.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 + i * 0.1, duration: 0.6 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.1rem, 2.8vw, 2rem)',
                  fontWeight: 300,
                  color: 'rgba(201,168,76,0.28)',
                  lineHeight: 1,
                  marginBottom: '14px',
                  userSelect: 'none',
                }}
              >
                :
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
