import { useState, useEffect } from 'react'

export default function Typewriter({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setDisplayed(text.slice(0, ++i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span>
      {displayed}
      <span
        style={{
          opacity: displayed.length < text.length ? 1 : 0,
          borderRight: '2px solid #0077ff',
          marginLeft: '2px',
        }}
      >
        &nbsp;
      </span>
    </span>
  )
}
