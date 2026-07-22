import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
})

export default function HeroText({ contentOffset }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      style={{
        transform: `translate(${contentOffset.x * 6}px, ${contentOffset.y * 6}px)`,
        willChange: 'transform',
        gap: '0',
      }}
    >
      {/* Radial glow behind PORTFOLIO */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute"
          style={{
            width: '700px',
            height: '180px',
            background:
              'radial-gradient(ellipse, rgba(201, 168, 76, 0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        {/* PORTFOLIO heading */}
        <motion.h1
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
          className="relative z-10 gold-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2.8rem, 8.5vw, 8rem)',
            fontWeight: 400,
            letterSpacing: '0.25em',
            lineHeight: 1,
            textShadow: '0 0 80px rgba(201,168,76,0.12)',
          }}
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Line 1 — italic headline */}
      <motion.p
        variants={fadeUp(1.0)}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'rgba(232, 213, 163, 0.85)',
          letterSpacing: '0.05em',
          marginTop: 'clamp(8px, 1.5vh, 16px)',
          maxWidth: '500px',
        }}
      >
        Something exceptional is on the horizon.
      </motion.p>

      {/* Line 2 — golden teaser */}
      <motion.p
        variants={fadeUp(1.2)}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(0.65rem, 1.1vw, 0.78rem)',
          fontWeight: 300,
          color: 'rgba(201, 168, 76, 0.5)',
          letterSpacing: '0.12em',
          marginTop: 'clamp(5px, 0.8vh, 10px)',
          textTransform: 'uppercase',
        }}
      >
        An entirely new digital identity is almost here.
      </motion.p>
    </motion.div>
  )
}
