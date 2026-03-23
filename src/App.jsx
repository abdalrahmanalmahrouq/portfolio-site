import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import JourneySection from './components/JourneySection'
import theme from './theme'

function App() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <main className={`relative overflow-x-hidden scroll-smooth ${theme.pageBg}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-28 left-1/4 h-72 w-72 rounded-full ${theme.orb2} blur-3xl`} />
        <div className={`absolute top-60 right-1/4 h-72 w-72 rounded-full ${theme.orb1} blur-3xl`} />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
    </main>
  )
}

export default App
