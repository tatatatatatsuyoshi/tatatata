import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CITIES = [
  { id: 'tokyo',     name: '東京', label: 'TOKYO',     lat: 35.6895, lon: 139.6917, grad: 'from-site-blue to-site-deep' },
  { id: 'hiroshima', name: '広島', label: 'HIROSHIMA', lat: 34.3853, lon: 132.4553, grad: 'from-site-sky to-site-blue'  },
]

function toWeatherIcon(code) {
  if (code === 0)  return '☀️'
  if (code <= 3)   return '⛅'
  if (code <= 48)  return '🌫️'
  if (code <= 67)  return '🌧️'
  if (code <= 77)  return '🌨️'
  if (code <= 82)  return '🌦️'
  if (code <= 86)  return '🌨️'
  return '⛈️'
}

async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code` +
    `&timezone=Asia%2FTokyo`
  )
  const json = await res.json()
  return {
    temp: json.current.temperature_2m,
    code: json.current.weather_code,
    time: json.current.time.slice(11, 16),
  }
}

export default function WeatherCard() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

  useEffect(() => {
    Promise.all(CITIES.map(c => fetchWeather(c.lat, c.lon)))
      .then(results => { setData(results); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="font-orbitron text-[10px] tracking-[4px] text-site-blue mb-3">// WEATHER</div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">リアルタイム気温</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {CITIES.map((city, i) => (
          <motion.div
            key={city.id}
            className="relative bg-site-card border border-white/[0.06] rounded-2xl p-7 overflow-hidden min-h-44
              transition-all duration-300 hover:border-site-blue/70 hover:glow-site"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.12 }}
          >
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full blur-2xl pointer-events-none bg-[radial-gradient(circle,rgba(0,51,255,0.3),transparent_70%)]" />

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="block w-8 h-8 rounded-full border-2 border-site-blue"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            )}
            {error && !loading && (
              <div className="absolute inset-0 flex items-center justify-center text-site-muted text-sm">
                データ取得失敗
              </div>
            )}
            {data && !loading && (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{toWeatherIcon(data[i].code)}</span>
                  <div>
                    <div className="font-orbitron text-[9px] tracking-[3px] mb-1 text-site-blue">{city.label}</div>
                    <div className="text-sm font-bold text-site-text">{city.name}</div>
                  </div>
                </div>
                <motion.div
                  className={`font-orbitron font-black text-5xl sm:text-6xl leading-none bg-gradient-to-br bg-clip-text text-transparent mb-3 ${city.grad}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.15 + i * 0.1 }}
                >
                  {data[i].temp.toFixed(1)}
                  <span className="text-2xl ml-1">°C</span>
                </motion.div>
                <div className="font-orbitron text-[9px] tracking-[2px] text-site-muted">
                  UPDATED {data[i].time}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
