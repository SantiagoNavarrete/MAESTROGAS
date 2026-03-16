import './PorQueElegirnos.css'

function PorQueElegirnos() {
  const razones = [
    {
      id: 1,
      number: '1',
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años en el rubro atendiendo a familias y empresas con profesionalismo'
    },
    {
      id: 2,
      number: '2',
      title: 'Trabajo Responsable',
      description: 'Cumplimos fechas, respetamos presupuestos y garantizamos nuestros trabajos'
    },
    {
      id: 3,
      number: '3',
      title: 'Atención al Cliente',
      description: 'Escuchamos tus necesidades y ofrecemos soluciones personalizadas y eficaces'
    },
    {
      id: 4,
      number: '4',
      title: 'Presupuestos Claros',
      description: 'Evaluamos el trabajo y te ofrecemos presupuestos detallados sin sorpresas'
    }
  ]

  return (
    <section id="porque" className="porque">
      <div className="container">
        <h2>¿Por Qué Elegirnos?</h2>
        <div className="porque-grid">
          {razones.map((razon) => (
            <div key={razon.id} className="porque-card">
              <div className="porque-number">{razon.number}</div>
              <h3>{razon.title}</h3>
              <p>{razon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PorQueElegirnos
