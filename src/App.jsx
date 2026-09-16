import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollTop from './components/ScrollTop'

const RIBBON = [
  'Sisfor Angkatan 26',
  'Universitas Hasanuddin',
  'Beda Cara Satu Tujuan',
]

function RibbonGroup({ prefix }) {
  return (
    <div className="ribbon-group" aria-hidden="true">
      {RIBBON.flatMap((text, i) => [
        <span key={`${prefix}-t${i}`} className="ribbon-text">
          {text}
        </span>,
        <span key={`${prefix}-s${i}`} className="ribbon-star">
          ✦
        </span>,
      ])}
    </div>
  )
}

function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track ribbon-track--ltr">
        {['a', 'b'].map((prefix) => (
          <RibbonGroup key={prefix} prefix={prefix} />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <About />
        <Gallery />
        <Timeline />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App