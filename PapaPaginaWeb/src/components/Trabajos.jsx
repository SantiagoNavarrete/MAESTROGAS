import './Trabajos.css'

function Trabajos() {
  const trabajos = [
    { id: 1, title: 'Instalación de Grifería' },
    { id: 2, title: 'Reparación Urgente' },
    { id: 3, title: 'Destapación de Cloacas' },
    { id: 4, title: 'Instalación de Gas' },
    { id: 5, title: 'Calefón Nuevo' },
    { id: 6, title: 'Reparación de Cañería' }
  ]

  return (
    <section id="trabajos" className="trabajos">
      <div className="container">
        <h2>Trabajos Realizados</h2>
        <p className="section-subtitle">Galería de proyectos completados con éxito</p>
        <div className="galeria-grid">
          {trabajos.map((trabajo) => (
            <div key={trabajo.id} className="galeria-item">
              <div className="galeria-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-text">{trabajo.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trabajos
