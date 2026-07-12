import StarField from './components/StarField'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#05051a' }}>
      <StarField />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8" style={{ color: '#475569', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <p>© 2026 · Okan Syailendra Wahyudi</p>
      </footer>
    </div>
  )
}
