import agua1 from '../assets/papa trabajos/agua1.jpeg'
import agua2 from '../assets/papa trabajos/agua2.jpeg'
import agua3 from '../assets/papa trabajos/agua3.jpeg'
import agua4 from '../assets/papa trabajos/agua4.jpeg'
import gas from '../assets/papa trabajos/gas.jpeg'
import gas2 from '../assets/papa trabajos/gas2.jpeg'
import tanque2 from '../assets/papa trabajos/tanquedeagua1.jpeg'
import tanque from '../assets/papa trabajos/tanqueagua 2.jpeg'
import calefactor from '../assets/papa trabajos/calefactor2.jpeg'
import calefactor2 from '../assets/papa trabajos/calefactor.jpeg'
import casilla from '../assets/papa trabajos/casilla gass.jpeg'
import casilla2 from '../assets/papa trabajos/casilla gass2.jpeg'
import './Trabajos.css'

function Trabajos() {
  const trabajos = [
    {
      id: 1,
      title: 'Instalación de Grifería',
      before: agua4,
      after: agua3
    },
    {
      id: 2,
      title: 'Reparación Urgente',
      before: agua2,
      after: agua1
    },
    {
      id: 3,
      title: 'Colocacion de Tanque de Agua',
      before: tanque,
      after: tanque2
    },
    {
      id: 4,
      title: 'Instalación de Gas',
      before: gas2,
      after: gas
    },
    {
      id: 5,
      title: 'Calefactor Nuevo',
      before: calefactor2,
      after: calefactor
    },
    {
      id: 6,
      title: 'Instalación de Casilla de gas',
      before: casilla,
      after: casilla2
    }
  ]

  return (
    <section id="trabajos" className="trabajos">
      <div className="container">
        <h2>Trabajos Realizados</h2>
        <p className="section-subtitle">Galería de proyectos completados con éxito</p>
        <div className="galeria-grid">
          {trabajos.map((trabajo) => (
            <div key={trabajo.id} className="galeria-item">
              <div className="trabajo-card">
                <div
                  className="trabajo-image trabajo-image--before"
                  style={{ backgroundImage: `url(${trabajo.before})` }}
                  aria-hidden="true"
                />
                <div
                  className="trabajo-image trabajo-image--after"
                  style={{ backgroundImage: `url(${trabajo.after})` }}
                  aria-hidden="true"
                />
                <div className="trabajo-info">
                  <h3>{trabajo.title}</h3>
                  <p>Desliza para ver antes y después</p>
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
