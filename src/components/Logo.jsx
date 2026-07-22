import { motion } from 'framer-motion'

export default function Logo({ contentOffset }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      style={{
        transform: `translate(${contentOffset.x * 4}px, ${contentOffset.y * 4}px)`,
        willChange: 'transform',
      }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Soft ambient glow behind logo */}
        <div
          className="absolute"
          style={{
            width: '420px',
            height: '180px',
            background:
              'radial-gradient(ellipse, rgba(201, 168, 76, 0.13) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* PRHS Logo — large & crisp */}
        <img
          src="/logo.png"
          alt="PRHS"
          className="relative z-10"
          style={{
            height: 'clamp(110px, 18vw, 180px)',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 28px rgba(201, 168, 76, 0.22)) drop-shadow(0 4px 16px rgba(0,0,0,0.5))',
            mixBlendMode: 'screen',
          }}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}
