import './Servicios.css'

function Servicios() {
  const servicios = [
    {
      id: 1,
      icon: '💧',
      title: 'Reparación de Pérdidas',
      description: 'Detectamos y reparamos fugas de agua en cualquier parte de tu hogar'
    },
    {
      id: 2,
      icon: '🚰',
      title: 'Instalación de Grifería',
      description: 'Instalamos grifos modernos y de calidad con garantía'
    },
    {
      id: 3,
      icon: '🌊',
      title: 'Destapaciones de Cloacas',
      description: 'Limpieza y destapación de cañerías de cloacas de forma rápida y efectiva'
    },
    {
      id: 4,
      icon: '🔥',
      title: 'Instalaciones de Gas',
      description: 'Instalación, reparación y mantenimiento seguro de sistemas de gas'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Reparación de Cañerías',
      description: 'Reparación y mantenimiento completo de sistemas de cañerías'
    },
    {
      id: 6,
      icon: '♨️',
      title: 'Calefones y Termotanques',
      description: 'Instalación, reparación y mantenimiento de sistemas de agua caliente'
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
