// 📮 CONTACTO FORM HANDLING CON EMAILJS

// Inicializar EmailJS con tu Public Key
emailjs.init('AHdO7dF2oJENBtqoX');

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject || !message) {
      alert('Por favor, completa todos los campos requeridos.');
      return false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return false;
    }
    
    // Deshabilitar botón y mostrar estado de envío
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '📤 Enviando...';
    }
    
    // Preparar parámetros para EmailJS
    const templateParams = {
      from_name: name,
      reply_to: email,
      phone: phone || 'No proporcionado',
      subject: subject,
      message: message
    };
    
    // Enviar email usando EmailJS
    emailjs.send('service_xxht5qp', 'fedbbag', templateParams)
      .then(function(response) {
        console.log('✅ Email enviado exitosamente!', response.status, response.text);
        
        // Mostrar mensaje de éxito
        if (formSuccess) {
          formSuccess.style.display = 'block';
          contactForm.style.display = 'none';
        }
        
        // Event tracking para Google Analytics
        trackFormSubmit();
        
        // Resetear formulario
        contactForm.reset();
      }, function(error) {
        console.error('❌ Error al enviar email:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente a aionix498@gmail.com');
        
        // Rehabilitar botón
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = '📤 Enviar Mensaje';
        }
      });
  });
}

// Event tracking para Google Analytics (si se añade)
function trackFormSubmit() {
  if (window.gtag) {
    gtag('event', 'form_submit', {
      'event_category': 'contact',
      'event_label': 'contact_form_emailjs'
    });
  }
}
