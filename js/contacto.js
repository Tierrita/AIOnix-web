// 📮 CONTACTO FORM HANDLING

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Formspree manejará el envío, pero podemos añadir validación personalizada
    console.log('Formulario enviado:', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
    });

    // Mostrar mensaje de éxito después del envío (opcional)
    // Esto se mostrar después de que Formspree procese
  });
}

// Event tracking para Google Analytics (si se añade)
function trackFormSubmit() {
  if (window.gtag) {
    gtag('event', 'form_submit', {
      'event_category': 'contact',
      'event_label': 'contact_form'
    });
  }
}

// Validación simple antes de enviar
function validateForm(event) {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  
  if (!name || !email) {
    alert('Por favor, completa todos los campos requeridos.');
    event.preventDefault();
    return false;
  }
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un email válido.');
    event.preventDefault();
    return false;
  }
  
  trackFormSubmit();
  return true;
}

if (contactForm) {
  contactForm.addEventListener('submit', validateForm);
}
