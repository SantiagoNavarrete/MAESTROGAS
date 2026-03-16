import './FloatingWhatsApp.css'

function FloatingWhatsApp() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5492604638499', '_blank')
  }

  return (
    <button 
      className="whatsapp-float" 
      onClick={openWhatsApp} 
      title="Contactar por WhatsApp"
      aria-label="Botón flotante de WhatsApp"
    >
      <span>💬</span>
    </button>
  )
}

export default FloatingWhatsApp
