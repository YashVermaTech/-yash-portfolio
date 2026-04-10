import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechTicker from './components/TechTicker'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dot-bg min-h-screen">
      <Navbar />
      <Hero />
      <TechTicker />
      <About />
      <Experience />
      <Skills />
      <Publications />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
