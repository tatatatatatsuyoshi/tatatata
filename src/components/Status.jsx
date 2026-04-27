export default function Status() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// CURRENT STATUS</div>
      <div className="relative bg-site-card border border-site-deep/50 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle,rgba(0,51,255,0.35),transparent_70%)]" />

        <div className="text-5xl flex-shrink-0">👶</div>
        <div>
          <div className="text-xl font-bold mb-2 flex flex-wrap items-center gap-3 text-site-text">
            育休中
            <span className="px-3 py-0.5 rounded-full text-xs font-orbitron bg-site-deep/25 border border-site-blue/60 text-site-blue">
              2026
            </span>
          </div>
          <p className="text-site-muted text-sm leading-loose">
            現在は育児休業中。もうそろ生まれます。<br />
            新しい技術のキャッチアップもゆるゆる継続中。AI楽しいね。
          </p>
        </div>
      </div>
    </section>
  )
}
