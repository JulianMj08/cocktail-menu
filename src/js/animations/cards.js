const animatedElements = document.querySelectorAll(
  '.cocktail-card, .card-grid-reverse'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // opcional, pero PRO
      }
    });
  },
  {
    threshold: 0.2
  }
);

animatedElements.forEach(el => observer.observe(el));

