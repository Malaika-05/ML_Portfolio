// Nav background intensifies on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(11,15,20,0.92)';
  } else {
    nav.style.background = 'rgba(11,15,20,0.75)';
  }
});

// Scroll-reveal for sections and cards
const revealTargets = document.querySelectorAll(
  '.stat, .stack-col, .project, .more-item, .timeline-item, .contact-inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
