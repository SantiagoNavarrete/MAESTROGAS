import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWhatsApp = () => {
    window.open('https://wa.me/5492604638499', '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">🔧</div>
          <h1>JUAN DOMINGO NAVARRETE</h1>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('servicios')}>Servicios</button>
          <button onClick={() => scrollToSection('trabajos')}>Trabajos</button>
          <button onClick={() => scrollToSection('porque')}>Por Qué Elegirnos</button>
          <button onClick={() => scrollToSection('testimonios')}>Testimonios</button>
          <button onClick={() => scrollToSection('contacto')}>Contacto</button>
        </nav>
        <button className="btn-secondary" onClick={openWhatsApp}>
          📱 WhatsApp
        </button>
      </div>
    </header>
  )
}

export default Header
