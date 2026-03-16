import './Hero.css'

function Hero() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5492604638499', '_blank')
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Servicios Profesionales de Plomería, Gas y Cloacas
          </h1>
          <p className="hero-subtitle">
            Más de 15 años de experiencia en instalaciones y reparaciones. 
            Trabajo responsable, garantizado y con atención personalizada.
          </p>
          <button className="btn-primary" onClick={openWhatsApp}>
            📞 Consultar disponibilidad por WhatsApp
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="icon-large">🔧</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
