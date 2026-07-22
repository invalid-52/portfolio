import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.8 }}
      className="flex flex-col items-center gap-2"
    >
      {/* Thin gold rule */}
      <div
        style={{
          width: '40px',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(201,168,76,0.45), transparent)',
          marginBottom: '6px',
        }}
      />

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.25em',
          color: 'rgba(232, 213, 163, 0.55)',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        &copy; 2026 PRHS
      </p>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.55rem',
          fontWeight: 300,
          letterSpacing: '0.15em',
          color: 'rgba(176, 168, 152, 0.3)',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        All Rights Reserved
      </p>
    </motion.footer>
  )
}
