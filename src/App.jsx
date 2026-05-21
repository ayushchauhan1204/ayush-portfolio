import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function RevealWrapper({ children, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${delay ? `reveal-delay-${delay}` : ''}`}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealWrapper><About /></RevealWrapper>
        <RevealWrapper><Experience /></RevealWrapper>
        <RevealWrapper><Projects /></RevealWrapper>
        <RevealWrapper><Skills /></RevealWrapper>
        <RevealWrapper><Footer /></RevealWrapper>
      </main>
    </>
  )
}

export default App