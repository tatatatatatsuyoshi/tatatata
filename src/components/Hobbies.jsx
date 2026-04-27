import { motion } from 'framer-motion'

const hobbies = [
  {
    icon: '🎯',
    title: 'VALORANT',
    desc: '戦略性もくそもない。エイムで破壊。',
    tag: 'FPS',
    tagStyle: 'bg-site-deep/20 border-site-sky/50 text-site-sky',
  },
  {
    icon: '🔥',
    title: 'Apex Legends',
    desc: 'キャラコンしても敵は死なないが、俺も死ぬことはない。',
    tag: 'FPS',
    tagStyle: 'bg-site-deep/20 border-site-blue/60 text-site-blue',
  },
  {
    icon: '💻',
    title: 'プログラミング',
    desc: 'AIおもろい。久しぶりのコーディングは楽しいが、AIがあればもう人間がコードを書くことはない。',
    tag: 'Dev',
    tagStyle: 'bg-site-deep/20 border-site-deep/70 text-site-sky',
  },
]

const card = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function Hobbies() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16" id="hobbies">
      <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// HOBBIES</div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">好きなこと</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {hobbies.map((h) => (
          <motion.div
            key={h.title}
            variants={card}
            className="group relative bg-site-card border border-white/[0.06] rounded-2xl p-6 overflow-hidden cursor-default
              transition-all duration-300 hover:-translate-y-1.5 hover:border-site-blue/70 hover:glow-site"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,51,255,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="text-3xl mb-4">{h.icon}</div>
            <div className="font-bold text-sm mb-2 text-site-text">{h.title}</div>
            <div className="text-site-muted text-xs leading-relaxed mb-4">{h.desc}</div>
            <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${h.tagStyle}`}>
              {h.tag}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
