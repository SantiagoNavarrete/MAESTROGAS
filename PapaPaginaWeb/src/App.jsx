import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Trabajos from './components/Trabajos'
import PorQueElegirnos from './components/PorQueElegirnos'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Servicios />
      <Trabajos />
      <PorQueElegirnos />
      <Testimonios />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
