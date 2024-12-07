const sliderTrack = document.querySelector('.slider-track');
let cloneInterval;

// Clonar dinámicamente las tarjetas al inicio y al final
function cloneCards() {
  const cards = [...sliderTrack.children];
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    sliderTrack.appendChild(clone);
  });
}

// Animar el desplazamiento continuo
function animateSlider() {
  let scrollAmount = 0;
  const speed = 2; // Velocidad de desplazamiento

  cloneInterval = setInterval(() => {
    scrollAmount += speed;
    sliderTrack.style.transform = `translateX(-${scrollAmount}px)`;

    // Reinicia cuando se desplaza más allá del contenido original
    const maxScroll = sliderTrack.scrollWidth / 2;
    if (scrollAmount >= maxScroll) {
      scrollAmount = 0;
    }
  }, 16); // Aproximadamente 60 FPS
}

// Configurar cinta
function initSlider() {
  cloneCards(); // Duplica tarjetas dinámicamente
  animateSlider(); // Inicia la animación
}

initSlider();