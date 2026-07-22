import './index.css'
import { useParallax } from './hooks/useParallax'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import Logo from './components/Logo'
import HeroText from './components/HeroText'
import CountdownTimer from './components/CountdownTimer'
import NotifyButton from './components/NotifyButton'
import Footer from './components/Footer'

export default function App() {
  const parallax = useParallax()

  const bgOffset = parallax
  const contentOffset = {
    x: parallax.x * -1,
    y: parallax.y * -1,
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ userSelect: 'none' }}
    >
      {/* Custom cursor */}
      <CustomCursor />

      {/* Cinematic background */}
      <Background bgOffset={bgOffset} />

      {/*
        Layout: 3-row grid that fills 100vh
        Top    → Logo (flex-none, pinned top-center)
        Middle → PORTFOLIO + text + Timer + Button (flex-1, perfectly centered)
        Bottom → Footer (flex-none, pinned bottom)
      */}
      <div
        className="relative z-10 w-full h-full flex flex-col"
        style={{ padding: 'clamp(24px, 5vh, 52px) 0 clamp(18px, 3vh, 36px)' }}
      >

        {/* ── TOP: Logo ── */}
        <div className="flex justify-center">
          <Logo contentOffset={contentOffset} />
        </div>

        {/* ── MIDDLE: Hero content — takes all remaining space, truly centered ── */}
        <div className="flex-1 flex flex-col items-center justify-center"
          style={{ gap: 'clamp(14px, 2.8vh, 28px)' }}
        >
          <HeroText contentOffset={contentOffset} />
          <CountdownTimer contentOffset={contentOffset} />
          <NotifyButton contentOffset={contentOffset} />
        </div>

        {/* ── BOTTOM: Footer ── */}
        <Footer />
      </div>
    </div>
  )
}
