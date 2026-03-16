import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MaestroGas</h3>
            <p>Servicio profesional de plomería, gas y cloacas</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📱 WhatsApp: +54 9 2604 63-8499</p>
            <p>📧 Email: consultas@maestrogaspro.com</p>
            <p>Consulta disponibilidad antes de contratar</p>
          </div>
          <div className="footer-section">
            <h4>Horarios</h4>
            <p>Lunes a Viernes: 8:00 - 18:00<br/>Sábado: 9:00 - 14:00<br/>Domingo: Cerrado</p>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; MAESTROGAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
