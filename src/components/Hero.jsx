import { motion } from 'framer-motion'
import Typewriter from './Typewriter.jsx'
import GlitchText from './GlitchText.jsx'

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 180, damping: 18, delay },
})

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-16">
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ── Text ── */}
        <div className="space-y-7 md:order-1 order-2">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-site-blue/60 bg-site-deep/20 text-site-blue text-[10px] tracking-[2px]"
            {...rise(0.1)}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-site-deep opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-site-deep" />
            </span>
            AVAILABLE FOR CHAT
          </motion.div>

          {/* Title */}
          <motion.h1 className="font-orbitron font-black leading-none" {...rise(0.25)}>
            <GlitchText>
              <span className="block font-noto font-light text-sm text-site-muted tracking-[6px] mb-3">
                龍由
              </span>
              <span className="block text-5xl sm:text-6xl bg-gradient-to-r from-site-blue via-site-deep to-site-sky bg-clip-text text-transparent tracking-tight">
                <Typewriter text="Tatsuyoshi" speed={90} />
              </span>
            </GlitchText>
          </motion.h1>

          {/* Sub */}
          <motion.p className="text-site-muted text-sm leading-loose max-w-sm" id="about" {...rise(0.4)}>
            育休中パパ(予定)エンジニア。<br />
            FPSとプログラムを愛するプログラマー。<br />
            もうそろ生まれます！楽しみです！
          </motion.p>
        </div>

        {/* ── Avatar ── */}
        <motion.div
          className="flex justify-center md:order-2 order-1"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20, delay: 0.35 }}
        >
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64">
            <div className="avatar-ring">
              <div className="avatar-ring-inner" />
            </div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-site-card2 to-site-card flex items-center justify-center z-10 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}dragon.png`}
                alt="龍由"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(0,119,255,0.35),transparent_60%)] pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
