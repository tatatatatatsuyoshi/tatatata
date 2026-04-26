const hobbies = [
  {
    icon: '🎯',
    title: 'VALORANT',
    desc: '戦略性もくそもない。エイムで破壊。',
    tag: 'FPS',
    tagClass: 'tag-pink',
  },
  {
    icon: '🔥',
    title: 'Apex Legends',
    desc: 'キャラコンしても敵は死なないが、俺も死ぬことはない。',
    tag: 'FPS',
    tagClass: 'tag-orange',
  },
  {
    icon: '💻',
    title: 'プログラミング',
    desc: 'AIおもろい。久しぶりのコーディングは楽しいが、AIがあればもう人間がコードを書くことはない。',
    tag: 'Dev',
    tagClass: 'tag-cyan',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="section-label">// HOBBIES</div>
      <div className="section-title">好きなこと</div>
      <div className="cards">
        {hobbies.map((h) => (
          <div className="card" key={h.title}>
            <div className="card-icon">{h.icon}</div>
            <div className="card-title">{h.title}</div>
            <div className="card-desc">{h.desc}</div>
            <span className={`card-tag ${h.tagClass}`}>{h.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
