import './Testimonios.css'

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Excelente atención y trabajo profesional. Vinieron rápido, conocían el tema y solucionaron el problema sin inconvenientes.',
      autor: 'Juan García'
    },
    {
      id: 2,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Muy recomendables. Presupuesto justo, trabajo limpio y dejan todo en orden. Definitivamente volvería a contratarlos.',
      autor: 'María Rodríguez'
    },
    {
      id: 3,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Profesionales, responsables y muy atentos. Realizaron un trabajo completo en tiempo record. Totalmente satisfecho.',
      autor: 'Carlos López'
    }
  ]

  return (
    <section id="testimonios" className="testimonios">
      <div className="container">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <div className="testimonios-grid">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="testimonio-card">
              <div className="stars">{testimonio.stars}</div>
              <p className="testimonio-text">"{testimonio.text}"</p>
              <p className="testimonio-autor">- {testimonio.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonios
