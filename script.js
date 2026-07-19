// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Hero growth-line draw-on animation
const growthPath = document.getElementById('growthPath');
if (growthPath && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const len = growthPath.getTotalLength();
  growthPath.style.strokeDasharray = len;
  growthPath.style.strokeDashoffset = len;
  growthPath.getBoundingClientRect(); // force reflow
  growthPath.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1) .2s';
  requestAnimationFrame(() => { growthPath.style.strokeDashoffset = '0'; });
}
