import Typewriter from './Typewriter.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" />
            AVAILABLE FOR CHAT
          </div>
          <h1>
            <span className="jp">龍由</span>
            <Typewriter text="Tatsuyoshi" speed={90} />
          </h1>
          <p className="hero-sub" id="about">
            育休中パパエンジニア。<br />
            FPSとプログラムを愛するプログラマー。<br />
            もうそろ生まれます！楽しみ
          </p>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring">
              <div className="avatar-ring-inner" />
            </div>
            <div className="avatar-circle">
              <img src={`${import.meta.env.BASE_URL}dragon.png`} alt="龍由" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
