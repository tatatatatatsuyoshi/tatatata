import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Status from './components/Status.jsx'
import Hobbies from './components/Hobbies.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div className="blob blob1" />
      <div className="blob blob2" />
      <Nav />
      <Hero />
      <Status />
      <Hobbies />
      <Skills />
      <Footer />
    </>
  )
}
