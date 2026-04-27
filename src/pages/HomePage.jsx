import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import Status from '../components/Status.jsx'
import Hobbies from '../components/Hobbies.jsx'
import Skills from '../components/Skills.jsx'
import WeatherCard from '../components/WeatherCard.jsx'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Status />
      <Hobbies />
      <Skills />
      <WeatherCard />
    </PageTransition>
  )
}
