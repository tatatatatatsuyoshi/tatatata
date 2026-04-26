const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'Git', 'CSS / Tailwind', 'REST API', 'Java',
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// SKILLS</div>
      <div className="section-title">使える(経験済みの)技術
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-pill" key={s}>{s}</div>
        ))}
      </div>
    </section>
  )
}
