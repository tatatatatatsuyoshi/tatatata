import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const R = '#ff1a4b'
const C = '#00f0ff'

function buildFrame(n) {
  return {
    x: [0, -n, n - 1, -(n + 1), n, -1, 0],
    skewX: [0, -1.5, 1, -1, 1.5, 0],
    textShadow: [
      `0px 0px 0px rgba(0,0,0,0)`,
      `-${n}px 0px 0px ${R}, ${n}px 0px 0px ${C}`,
      `${n - 1}px 0px 0px ${R}, -${n - 1}px 0px 0px ${C}`,
      `-${n + 1}px 0px 0px ${R}, ${n + 1}px 0px 0px ${C}`,
      `${n - 2}px 0px 0px ${R}, -${n - 2}px 0px 0px ${C}`,
      `-2px 0px 0px ${R}, 2px 0px 0px ${C}`,
      `0px 0px 0px rgba(0,0,0,0)`,
    ],
    transition: {
      duration: 0.28,
      times: [0, 0.12, 0.3, 0.48, 0.66, 0.82, 1],
      ease: 'linear',
    },
  }
}

export default function GlitchText({ children }) {
  const controls = useAnimation()

  useEffect(() => {
    let tid

    const fire = async () => {
      await controls.start(buildFrame(5))

      if (Math.random() < 0.4) {
        await new Promise(r => setTimeout(r, 50 + Math.random() * 100))
        await controls.start(buildFrame(3))
      }

      schedule()
    }

    const schedule = () => {
      tid = setTimeout(fire, 2500 + Math.random() * 5000)
    }

    schedule()
    return () => clearTimeout(tid)
  }, [controls])

  return (
    <motion.span animate={controls} style={{ display: 'block' }}>
      {children}
    </motion.span>
  )
}
