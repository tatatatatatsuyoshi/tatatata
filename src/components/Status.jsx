export default function Status() {
  return (
    <section>
      <div className="section-label">// CURRENT STATUS</div>
      <div className="status-box">
        <div className="status-icon">👶</div>
        <div>
          <div className="status-title">
            育休中{' '}
            <span
              style={{
                display: 'inline-block',
                padding: '3px 12px',
                borderRadius: '100px',
                fontSize: '0.7rem',
                background: 'rgba(0,0,255,0.25)',
                border: '1px solid rgba(0,119,255,0.6)',
                color: '#0077ff',
                marginLeft: '10px',
                verticalAlign: 'middle',
              }}
            >
              2026
            </span>
          </div>
          <p className="status-desc">
            現在は育児休業中。もうそろ生まれます。
            新しい技術のキャッチアップもゆるゆる継続中。AI楽しいね。
          </p>
        </div>
      </div>
    </section>
  )
}
