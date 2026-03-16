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
            Plomero y Gasista Profesional en San Rafael
          </h1>
          <p className="hero-subtitle">
            Más de 15 años de experiencia en reparaciones de tuberías, instalación de gas, 
            destapacion de cloacas y sistemas de agua caliente. Presupuestos sin cargo. 
            Trabajamos en San Rafael y zona norte. Consulta disponibilidad por WhatsApp.
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
