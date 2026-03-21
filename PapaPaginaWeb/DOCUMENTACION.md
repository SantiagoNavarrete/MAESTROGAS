# JUAN DOMINGO NAVARRETE - Página Web Profesional

Una página web moderna y responsiva para servicios de plomería, gas y cloacas. Diseñada para generar confianza y convertir visitantes en clientes a través de WhatsApp.

## 🎨 Características

- ✅ **Diseño Responsive**: Optimizado para móviles, tablets y computadoras
- ✅ **Colores Profesionales**: Azul, gris y blanco que transmiten confianza
- ✅ **Animaciones Suaves**: Efectos modernos y transiciones elegantes
- ✅ **Componentes React Organizados**: Código limpio y modular
- ✅ **Botón Flotante WhatsApp**: Siempre visible para consultar disponibilidad
- ✅ **Secciones Completas**: Hero, Servicios, Trabajos, Testimonios, Contacto
- ✅ **Aviso Importante**: Aclaramiento de que NO hay servicio 24/7

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Encabezado con navegación
│   ├── Header.css
│   ├── Hero.jsx            # Sección principal
│   ├── Hero.css
│   ├── Servicios.jsx       # Servicios ofrecidos
│   ├── Servicios.css
│   ├── Trabajos.jsx        # Galería de trabajos
│   ├── Trabajos.css
│   ├── PorQueElegirnos.jsx # Razones para contratar
│   ├── PorQueElegirnos.css
│   ├── Testimonios.jsx     # Opiniones de clientes
│   ├── Testimonios.css
│   ├── Contacto.jsx        # Sección de contacto
│   ├── Contacto.css
│   ├── Footer.jsx          # Pie de página
│   ├── Footer.css
│   ├── FloatingWhatsApp.jsx # Botón flotante
│   └── FloatingWhatsApp.css
├── styles/
│   └── globals.css         # Estilos globales y variables CSS
├── App.jsx                 # Componente principal
├── App.css                 # Estilos de la app
├── main.jsx                # Punto de entrada
└── index.css               # Estilos base

```

## 🚀 Cómo Ejecutar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar servidor de desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5174`

### 3. Construir para producción

```bash
npm run build
```

## 🎯 Secciones de la Página

### Header
- Logo de la empresa con icono animado
- Menú de navegación con desplazamiento suave
- Botón WhatsApp destacado
- Sticky nav que se adapta al scroll

### Hero
- Título impactante sobre servicios
- Subtítulo con propuesta de valor
- Botón CTA principal para WhatsApp
- Ilustración con animación de flotación

### Servicios
- 6 tarjetas de servicios principales:
  - Reparación de pérdidas de agua
  - Instalación de grifería
  - Destapaciones de cloacas
  - Instalaciones de gas
  - Reparación de cañerías
  - Calefones y termotanques

### Trabajos Realizados
- Galería responsiva con grid
- Efecto hover en imágenes
- Placeholder profesional

### Por Qué Elegirnos
- 4 razones principales con iconos numerados
- Tarjetas con gradientes
- Información sobre experiencia y garantías

### Testimonios
- 3 testimonios de clientes satisfechos
- Calificación con estrellas
- Nombres de clientes

### Contacto
- Información de WhatsApp, zona de cobertura y horarios
- **Aviso importante**: Destaca que NO hay servicio 24/7
- Botón para contactar directamente

### Footer
- Información de contacto
- Horarios de atención
- Enlaces a redes sociales
- Zona de cobertura

### Botón Flotante
- Botón WhatsApp que flota en la esquina
- Accesible en cualquier parte de la página
- Animación de entrada suave

## 🎨 Paleta de Colores

- **Azul Principal**: `#0066cc`
- **Azul Oscuro**: `#004499`
- **Azul Claro**: `#3399ff`
- **Verde WhatsApp**: `#25a86d`
- **Gris Claro**: `#f5f5f5`
- **Gris Oscuro**: `#666666`
- **Texto**: `#333333`
- **Blanco**: `#ffffff`

## 📱 Responsividad

El proyecto está optimizado para:
- 📱 **Móviles**: 320px - 480px
- 📱 **Tablets**: 481px - 768px
- 💻 **Desktop**: 769px+

## ✨ Características Técnicas

- **React 19**: Para componentes funcionales
- **Vite 8**: Herramienta de build ultra rápido
- **CSS Modular**: Cada componente tiene sus estilos
- **CSS Variables**: Para temas y colores consistentes
- **Animaciones CSS**: Sin dependencias externas
- **Mobile First**: Diseño pensado para móviles primero

## 📞 Configuración del WhatsApp

El número de WhatsApp está configurado en:
- `Header.jsx`
- `Hero.jsx`
- `Contacto.jsx`
- `FloatingWhatsApp.jsx`

Puedes cambiar el número modificando:
```javascript
window.open('https://wa.me/5492604638499', '_blank')
```

## 🔧 Customización

### Cambiar nombre de la empresa
Busca "JUAN DOMINGO NAVARRETE" en los siguientes archivos:
- `Header.jsx`
- `Footer.jsx`

### Cambiar servicios
Edita el Array `servicios` en `Servicios.jsx`

### Cambiar testimonios
Edita el Array `testimonios` en `Testimonios.jsx`

### Cambiar colores
Modifica las variables CSS en `styles/globals.css`:
```css
--primary-color: #0066cc;
--primary-dark: #004499;
```

## 📧 Información de Contacto

- **WhatsApp**: +54 9 2604 63-8499
- **Email**: consultas@maestrogaspro.com
- **Zona de Cobertura**: Norte y alrededores
- **Horarios**: Lunes-Viernes 8-18hs, Sábado 9-14hs

## ⚠️ Importante

**Este servicio NO ofrece atención 24/7**. Los clientes deben consultar disponibilidad antes de contratar.

## 📝 Licencia

Proyecto desarrollado con React + Vite. Libre para uso comercial.

---

**Última actualización**: Marzo 2024  
**Versión**: 1.0.0
