import './Contacto.css'

function Contacto() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5492604638499', '_blank')
  }

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contacto-content">
          <div className="contacto-info">
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>WhatsApp</h3>
                <p>+54 9 2604 63-8499</p>
                <button className="btn-link" onClick={openWhatsApp}>
                  Enviar mensaje
                </button>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Zona de Cobertura</h3>
                <p>Trabajamos en toda la zona norte y alrededores</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 8:00 - 18:00<br/>Sábado: 9:00 - 14:00<br/>Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          <div className="contacto-aviso">
            <div className="aviso-box">
              <h3>📌 Importante</h3>
              <p>
                <strong>No contamos con servicio 24 horas.</strong> Por favor, consulta disponibilidad 
                antes de contratar. Respondemos en horario de atención. Si tu caso es una emergencia, 
                comunícate por WhatsApp y te asesoraremos sobre opciones disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
