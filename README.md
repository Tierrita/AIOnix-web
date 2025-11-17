# ⚡ AIOnix Web - Sitio Oficial

<div align="center">

![AIOnix](https://img.shields.io/badge/AIOnix-Inteligencia%20Aplicada-00ffff?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Sitio web oficial de AIOnix - Soluciones inteligentes en programación e IA**

[🌐 Ver Demo](https://aionix.tech) • [📧 Contacto](mailto:aionix498@gmail.com) • [📚 Docs](./docs/)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación](#-instalación)
- [🛠️ Tecnologías](#️-tecnologías)
- [📱 Responsive Design](#-responsive-design)
- [🎨 Diseño](#-diseño)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

AIOnix es una agencia de desarrollo web especializada en crear soluciones inteligentes con IA. Este es nuestro sitio web oficial, diseñado con un estilo futurista y cyberpunk que refleja nuestra filosofía de innovación tecnológica.

### 🌟 Highlights

- ⚡ Diseño futurista con animaciones fluidas
- 🎨 Efectos visuales con Vanta.js
- 📱 Completamente responsive (mobile-first)
- 🚀 Optimizado para SEO
- ✉️ Formulario de contacto con EmailJS
- 🌐 Multi-página con navegación suave

---

## ✨ Características

### 🎨 Diseño Visual

- **Sidebar colapsable** con efectos hover y glow
- **Menú hamburguesa** animado para mobile
- **Canvas animado** con efectos de energía
- **Glassmorphism** en tarjetas y contenedores
- **Gradientes cian/azul** con tema cyberpunk

### 🔧 Funcionalidades

- ✅ Navegación fluida entre páginas
- ✅ Formulario de contacto funcional (EmailJS)
- ✅ Tech stack interactivo con badges animados
- ✅ Sección de equipo con fotos
- ✅ Proyectos destacados
- ✅ Roadmap y visión de la empresa

### 📱 Mobile Optimized

- ✅ Sidebar fuera de pantalla en mobile
- ✅ Hero responsive con grid adaptable
- ✅ Sin overflow horizontal
- ✅ Touch-friendly con gestos optimizados

---

## 📁 Estructura del Proyecto

```
AIOnix-web/
│
├── 📄 index.html              # Página principal
├── 📄 about.html              # Sobre nosotros
├── 📄 servicios.html          # Nuestros servicios
├── 📄 proyectos.html          # Portfolio de proyectos
├── 📄 vision.html             # Visión y roadmap
├── 📄 equipo.html             # Equipo fundador
├── 📄 contacto.html           # Formulario de contacto
│
├── 📄 robots.txt              # SEO - Crawlers
├── 📄 sitemap.xml             # SEO - Mapa del sitio
├── 📄 .htaccess               # Configuración Apache
├── 📄 .gitignore              # Git ignore rules
│
├── 📂 assets/                 # Recursos estáticos
│   ├── 📂 icons/              # Iconos y favicons
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   └── og-image.png
│   │
│   └── 📂 img/                # Imágenes del sitio
│       ├── Cuenca_perfil.jpeg
│       └── Silva_perfil.jpg
│
├── 📂 css/                    # Estilos
│   ├── style.css              # Estilos globales
│   ├── about.css
│   ├── contacto.css
│   ├── equipo.css
│   ├── proyectos.css
│   ├── servicios.css
│   └── vision.css
│
├── 📂 js/                     # JavaScript
│   ├── main.js                # Script principal (Vanta, sidebar)
│   └── contacto.js            # EmailJS para formulario
│
├── 📂 docs/                   # Documentación interna
│   ├── README.md
│   ├── CAMBIOS_RESPONSIVE_COMPLETOS.md
│   ├── INFORME_LIMPIEZA_PROYECTO.md
│   └── ...
│
└── 📂 test/                   # Archivos de prueba
    ├── test-email.html
    └── test-gmail.html
```

---

## 🚀 Instalación

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Tierrita/AIOnix-web.git
cd AIOnix-web
```

### 2️⃣ Abrir en navegador

**Opción A: Servidor local simple**

```bash
# Python 3
python -m http.server 8000

# Node.js (si tienes http-server)
npx http-server

# PHP
php -S localhost:8000
```

**Opción B: Live Server (VS Code)**

1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

### 3️⃣ Configurar EmailJS (opcional)

Si quieres usar el formulario de contacto:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar un servicio de email
3. Crear una plantilla
4. Actualizar credenciales en `js/contacto.js`:

```javascript
emailjs.init("TU_PUBLIC_KEY");
emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams);
```

---

## 🛠️ Tecnologías

### Frontend

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos (Grid, Flexbox, Variables CSS)
- **JavaScript** (Vanilla) - Interactividad

### Librerías

- **[Vanta.js](https://www.vantajs.com/)** - Efectos de fondo animados
- **[EmailJS](https://www.emailjs.com/)** - Envío de formularios sin backend
- **[Google Fonts](https://fonts.google.com/)** - Orbitron + Rajdhani

### Herramientas

- **Git** - Control de versiones
- **VS Code** - Editor de código

---

## 📱 Responsive Design

El sitio está optimizado para todos los dispositivos:

| Breakpoint          | Rango           | Layout       |
| ------------------- | --------------- | ------------ |
| 📱 Mobile Small     | 320px - 375px   | 1 columna    |
| 📱 Mobile Medium    | 376px - 480px   | 1 columna    |
| 📱 Mobile Large     | 481px - 767px   | 1 columna    |
| 📱 Tablet Portrait  | 768px - 1023px  | 1-2 columnas |
| 💻 Tablet Landscape | 1024px - 1365px | 2 columnas   |
| 💻 Laptop/Desktop   | 1366px - 1919px | 2-3 columnas |
| 🖥️ Desktop XL       | 1920px+         | 3+ columnas  |

### 🎯 Características Responsive

✅ **Mobile-first approach**  
✅ **Sin overflow horizontal**  
✅ **Touch-friendly (44px mínimo)**  
✅ **Sidebar colapsable**  
✅ **Imágenes optimizadas con lazy loading**  
✅ **Tipografía fluida con `clamp()`**

---

## 🎨 Diseño

### Paleta de Colores

```css
--color-bg: #000000; /* Fondo negro profundo */
--color-text: #e0e0e0; /* Texto gris claro */
--color-accent: #00ffff; /* Cian brillante */
--color-accent-dim: rgba(0, 255, 255, 0.5);
--color-border: rgba(0, 255, 255, 0.2);
```

### Tipografía

- **Títulos:** Orbitron (Futurista, cyberpunk)
- **Cuerpo:** Rajdhani (Legible, moderna)

### Efectos Visuales

- 🌌 **Fondo animado** con red de partículas (Vanta.js)
- ✨ **Glow effects** en hover y focus
- 💨 **Canvas de energía** con gradientes animados
- 🔷 **Glassmorphism** en tarjetas
- 🎭 **Transiciones suaves** (cubic-bezier)

---

## 🔧 Mantenimiento

### Agregar una nueva página

1. Crear archivo HTML en la raíz
2. Copiar estructura de `index.html`
3. Actualizar navegación en sidebar
4. Crear CSS específico en `/css`
5. Actualizar `sitemap.xml`

### Optimizar imágenes

```bash
# Convertir a WebP (mejor compresión)
cwebp -q 80 assets/img/original.jpg -o assets/img/original.webp

# Redimensionar imágenes
convert assets/img/original.jpg -resize 1200x assets/img/original-optimized.jpg
```

### Minificar CSS/JS (producción)

```bash
# CSS
npx clean-css-cli -o css/style.min.css css/style.css

# JavaScript
npx terser js/main.js -o js/main.min.js
```

---

## 📊 Performance

### Lighthouse Score (Target)

- 🟢 **Performance:** 90+
- 🟢 **Accessibility:** 95+
- 🟢 **Best Practices:** 95+
- 🟢 **SEO:** 100

### Optimizaciones Implementadas

✅ Lazy loading en imágenes  
✅ Async/defer en scripts  
✅ Minificación de recursos  
✅ Caché con `.htaccess`  
✅ Preconnect a Google Fonts  
✅ Meta tags optimizados para SEO

---

## 📞 Contacto

**AIOnix - Inteligencia aplicada al rendimiento**

- 🌐 **Web:** [aionix.tech](https://aionix.tech)
- 📧 **Email:** aionix498@gmail.com
- 📍 **Ubicación:** Buenos Aires, Argentina
- 💼 **LinkedIn:**
  - [Franco Cuenca](https://www.linkedin.com/in/franco-cuenca-5ab69a348)
  - [Gabriel Silva](https://www.linkedin.com/in/gabriel-silva-75341a219/)
- 🐙 **GitHub:** [Tierrita](https://github.com/Tierrita)

---

## 📄 Licencia

Este proyecto es propiedad de **AIOnix**. Todos los derechos reservados © 2025.

---

## 🙏 Agradecimientos

- **[Vanta.js](https://www.vantajs.com/)** por los efectos de fondo
- **[EmailJS](https://www.emailjs.com/)** por el servicio de formularios
- **[Google Fonts](https://fonts.google.com/)** por las tipografías

---

<div align="center">

**Hecho con ⚡ por el equipo de AIOnix**

[⬆ Volver arriba](#-aionix-web---sitio-oficial)

</div>
