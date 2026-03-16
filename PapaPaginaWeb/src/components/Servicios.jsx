import './Servicios.css'

function Servicios() {
  const servicios = [
    {
      id: 1,
      icon: '💧',
      title: 'Reparación de Pérdidas',
      description: 'Detectamos y reparamos fugas de agua en San Rafael. Servicio urgente disponible'
    },
    {
      id: 2,
      icon: '🚰',
      title: 'Instalación de Grifería',
      description: 'Grifos modernos de calidad en San Rafael. Instalación profesional con garantía'
    },
    {
      id: 3,
      icon: '🌊',
      title: 'Destapaciones de Cloacas',
      description: 'Destapación rápida de cloacas en San Rafael. Equipamiento profesional'
    },
    {
      id: 4,
      icon: '🔥',
      title: 'Instalaciones de Gas',
      description: 'Instalación y mantenimiento seguro de gas en San Rafael. Certificado'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Reparación de Cañerías',
      description: 'Mantenimiento y reparación de cañerías en San Rafael. Trabajo garantizado'
    },
    {
      id: 6,
      icon: '♨️',
      title: 'Calefones y Termotanques',
      description: 'Instalación y reparación de sistemas de agua caliente en San Rafael'
    }
  ]

  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-icon">{servicio.icon}</div>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
