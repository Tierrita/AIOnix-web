// ====================================================
// ⚡ SISTEMA DE FONDO AIONIX — Red + Energía + Núcleo
// ====================================================

// 🌐 FONDO VANTA.NET MEJORADO ⚡
let vantaEffect;

// 🎯 Respetar preferencia de movimiento reducido
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

window.addEventListener("load", () => {
  if (!vantaEffect && !prefersReducedMotion) {
    vantaEffect = VANTA.NET({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.8,
      color: 0x00ffff,
      backgroundColor: 0x000010,
      points: 12.0,
      maxDistance: 22.0,
      spacing: 16.0,
      showDots: true,
    });

    // 🎨 Efecto respirante de color (más lento para performance)
    let hue = 180;
    setInterval(() => {
      hue = (hue + 0.5) % 360;
      vantaEffect.setOptions({ color: `hsl(${hue}, 100%, 60%)` });
    }, 150);

    // 🌌 Reacción al movimiento del mouse
    window.addEventListener("mousemove", (e) => {
      const intensity = (e.clientX / window.innerWidth - 0.5) * 2;
      vantaEffect.setOptions({ maxDistance: 22 + intensity * 3 });
    });

    // 🧩 Cleanup al cerrar
    window.addEventListener("beforeunload", () => {
      if (vantaEffect) vantaEffect.destroy();
    });
  }
});

// 💨 CAPA DE ENERGÍA DIFUSA (Con verificación de reducedMotion)
const energyCanvas = document.getElementById("energy-layer");
if (energyCanvas && !prefersReducedMotion) {
  const eCtx = energyCanvas.getContext("2d");
  energyCanvas.width = innerWidth;
  energyCanvas.height = innerHeight;

  let t = 0;

  function drawEnergy() {
    const w = energyCanvas.width;
    const h = energyCanvas.height;
    const imageData = eCtx.createImageData(w, h);
    const data = imageData.data;

    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {
        const i = (y * w + x) * 4;
        const n = Math.sin(x * 0.004 + t) + Math.cos(y * 0.004 + t * 0.7);
        const intensity = Math.max(0, n * 60);
        const colorShift = Math.sin(t * 0.3) * 50 + 205;

        data[i] = 0;
        data[i + 1] = colorShift;
        data[i + 2] = 255;
        data[i + 3] = intensity;
      }
    }
    eCtx.putImageData(imageData, 0, 0);
    t += 0.02;
    requestAnimationFrame(drawEnergy);
  }
  drawEnergy();

  window.addEventListener("resize", () => {
    energyCanvas.width = innerWidth;
    energyCanvas.height = innerHeight;
  });
}

// 🔵 NÚCLEO AIONIX (Con verificación de reducedMotion)
const canvas = document.getElementById("ai-core");
if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext("2d");
  canvas.width = 900;
  canvas.height = 400;

  let pulse = 0;
  let growing = true;
  const rings = [];

  function drawCore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const radius = 35 + pulse;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 2);
    gradient.addColorStop(0, "rgba(0,255,255,1)");
    gradient.addColorStop(0.5, "rgba(0,255,255,0.5)");
    gradient.addColorStop(1, "rgba(0,255,255,0)");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    if (Math.random() < 0.08) rings.push({ r: radius, alpha: 1 });

    for (let i = rings.length - 1; i >= 0; i--) {
      const ring = rings[i];
      ctx.beginPath();
      ctx.arc(centerX, centerY, ring.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,255,255,${ring.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "cyan";
      ctx.stroke();

      ring.r += 2;
      ring.alpha -= 0.015;
      if (ring.alpha <= 0) rings.splice(i, 1);
    }

    if (growing) pulse += 0.5;
    else pulse -= 0.5;
    if (pulse > 10) growing = false;
    if (pulse < 0) growing = true;

    requestAnimationFrame(drawCore);
  }
  drawCore();
}

// 📊 GOOGLE ANALYTICS (Opcional - descomentar si se usa)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Reemplaza con tu ID de GA4
*/

// 🎯 EVENT TRACKING PARA CONVERSIÓN
function trackEvent(eventName, eventData = {}) {
  if (window.gtag) {
    gtag('event', eventName, eventData);
  }
  console.log('Event tracked:', eventName, eventData);
}

// Tracking de CTAs
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('cta_click', {
      'button_text': btn.textContent,
      'button_href': btn.href,
      'event_category': 'engagement'
    });
  });
});

// 🍔 MENÚ HAMBURGUESA
const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    
    // Toggle estado
    hamburger.setAttribute('aria-expanded', !isExpanded);
    sidebar.classList.toggle('mobile-visible');
    
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });
  
  // Cerrar menú al hacer clic en un link
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      sidebar.classList.remove('mobile-visible');
      document.body.style.overflow = '';
    });
  });
  
  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      if (sidebar.classList.contains('mobile-visible')) {
        hamburger.setAttribute('aria-expanded', 'false');
        sidebar.classList.remove('mobile-visible');
        document.body.style.overflow = '';
      }
    }
  });
}

