import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import SetupPage from './pages/SetupPage.jsx'

export default function App() {
  const location = useLocation()
  return (
    <>
      <div className="grid-bg" />
      <div className="blob blob1" />
      <div className="blob blob2" />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
