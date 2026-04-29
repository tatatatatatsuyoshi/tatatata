import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'Git', 'CSS / Tailwind', 'REST API', 'Java', 'DB2', 'KornShell',
]

const pill = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16" id="skills">
      <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// SKILLS</div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">使える(経験済みの)技術</h2>
      <motion.div
        className="flex flex-wrap gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.07 }}
      >
        {skills.map((s) => (
          <motion.div
            key={s}
            variants={pill}
            className="px-4 py-2 rounded-full text-sm font-bold bg-site-card2 border border-white/[0.07] text-site-text
              transition-all duration-200 cursor-default
              hover:border-site-blue/70 hover:text-site-blue hover:bg-site-deep/20 hover:glow-site"
          >
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
