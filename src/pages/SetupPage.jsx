import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const pcSpecs = [
  { label: 'CPU',     value: 'Intel Core i7-14700F',    icon: '⚡' },
  { label: 'GPU',     value: 'NVIDIA GeForce RTX 4070', icon: '🎮' },
  { label: 'RAM',     value: '32 GB (16GB×2)',           icon: '💾' },
  { label: 'Storage', value: '2 TB NVMe SSD',           icon: '💿' },
  { label: 'Mother',  value: 'Intel B760M',             icon: '🔧' },
  { label: 'Cooler',  value: '簡易水冷 AIO',             icon: '❄️' },
  { label: 'PSU',     value: '750W ATX',                icon: '⚡' },
  { label: 'OS',      value: 'Windows 11 Home',         icon: '🖥️' },
  { label: 'NIC',     value: '2.5 GbE (オンボード)',     icon: '🔌' },
]

const peripherals = [
  { icon: '🖥️', title: 'BenQ EX2510S',   desc: '24.5" FHD IPS 165Hz / 1ms\nAMD FreeSync Premium・HDRi搭載',  tag: 'DISPLAY'  },
  { icon: '⌨️', title: 'Halo96 V2',       desc: '96%レイアウト ホットスワップ対応\nブルーカラー',               tag: 'KEYBOARD' },
  { icon: '🖱️', title: 'Lamzu MAYA X 8K', desc: 'FNATIC SPECIAL EDITION\n8000Hz 超軽量ゲーミングマウス',       tag: 'MOUSE'    },
  { icon: '🎵', title: 'Shure SE215',      desc: 'ブルー / ダイナミック型カナル\n着脱式ケーブル採用',           tag: 'AUDIO'    },
]

const cardV = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}
const containerV = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
})

export default function SetupPage() {
  return (
    <PageTransition>

      {/* ── NETWORK ── */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// NETWORK</div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">ネットワーク環境</h2>

        <motion.div
          className="relative bg-site-card border border-site-deep/50 rounded-2xl p-8 md:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.1 }}
        >
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle,rgba(0,51,255,0.35),transparent_70%)]" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="font-orbitron font-black text-7xl sm:text-8xl bg-gradient-to-br from-site-blue to-site-sky bg-clip-text text-transparent leading-none">
                2.5
              </div>
              <div className="font-orbitron font-bold text-2xl text-site-blue mt-1">Gbps</div>
              <div className="font-orbitron text-[9px] tracking-[3px] text-site-muted mt-2">MAX THROUGHPUT</div>
            </div>

            <div className="flex-1 w-full space-y-4">
              {[
                ['TYPE',     '光回線 (フレッツ光ネクスト)'],
                ['STANDARD', 'IEEE 802.3bz (2.5GBASE-T)'],
                ['LATENCY',  '< 5 ms（国内サーバー平均）'],
                ['SWITCH',   '2.5GbE 対応スイッチ'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4 pb-4 border-b border-white/[0.05] last:border-0 last:pb-0">
                  <span className="font-orbitron text-[9px] tracking-[2px] text-site-blue w-20 flex-shrink-0">{k}</span>
                  <span className="text-sm text-site-text">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── PC SPECS ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// PC</div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">PCスペック</h2>

        <motion.div
          className="bg-site-card border border-white/[0.06] rounded-2xl overflow-hidden"
          variants={containerV(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pcSpecs.map((s, i) => (
            <motion.div
              key={s.label}
              variants={cardV}
              className={`flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-site-blue/[0.07] ${i !== pcSpecs.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
            >
              <span className="text-xl w-8 text-center flex-shrink-0">{s.icon}</span>
              <span className="font-orbitron text-[10px] tracking-[1.5px] text-site-muted w-20 flex-shrink-0">{s.label}</span>
              <span className="text-sm text-site-text">{s.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PERIPHERALS ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// PERIPHERALS</div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">周辺機器</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerV(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {peripherals.map((p) => (
            <motion.div
              key={p.title}
              variants={cardV}
              className="group relative bg-site-card border border-white/[0.06] rounded-2xl p-6 overflow-hidden cursor-default
                transition-all duration-300 hover:-translate-y-1.5 hover:border-site-blue/70 hover:glow-site"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,51,255,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="text-3xl mb-4">{p.icon}</div>
              <div className="font-bold text-sm mb-2 text-site-text">{p.title}</div>
              <div className="text-site-muted text-xs leading-relaxed mb-4 whitespace-pre-line">{p.desc}</div>
              <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide border border-site-blue/50 bg-site-deep/20 text-site-blue">
                {p.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </PageTransition>
  )
}
