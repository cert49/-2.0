// GSAP animations
window.addEventListener('DOMContentLoaded', () => {
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    });
  });

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      answer.classList.toggle('hidden');
    });
  });

  // Yandex map
  if (typeof ymaps !== 'undefined') {
    ymaps.ready(() => {
      const map = new ymaps.Map('map-yandex', {
        center: [45.039267, 38.987221],
        zoom: 12
      });
      map.geoObjects.add(new ymaps.Placemark([45.039267, 38.987221]));
    });
  }
});
