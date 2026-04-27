import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/setup', label: 'Setup' },
]

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-site-bg/90 backdrop-blur-xl border-b border-site-blue/30">
      <div className="font-orbitron font-bold text-lg tracking-[3px] bg-gradient-to-r from-site-blue to-site-deep bg-clip-text text-transparent">
        TATSUYOSHI
      </div>
      <ul className="flex gap-8 list-none">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {({ isActive }) => (
                <span className={`relative pb-1 text-sm tracking-widest transition-colors duration-200 ${isActive ? 'text-site-blue' : 'text-site-muted hover:text-site-sky'}`}>
                  {label}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-site-blue to-site-sky"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
