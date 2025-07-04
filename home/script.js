document.addEventListener("DOMContentLoaded", () => {
  fetch('/components/navbar/index.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading navbar:', error);
    });

  // Hero page button interaction
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      heroBtn.classList.add('clicked');
      setTimeout(() => {
        window.location.href = '/contact/';
      }, 500);
    });
  }

  // Animate floating hero shapes
  const shapes = document.querySelectorAll('.hero-shape');
  shapes.forEach((shape, i) => {
    // Give each shape a unique floating pattern
    const float = () => {
      const x = Math.sin(Date.now() / (2200 + i * 800)) * (10 + i * 4);
      const y = Math.cos(Date.now() / (1800 + i * 900)) * (12 + i * 6);
      shape.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(float);
    };
    float();
  });

  // Animate hero button, title, and text with a gentle floating effect
  function floatElement(el, xMag, yMag, speed, phase = 0) {
    if (!el) return;
    const animate = () => {
      const t = Date.now() / speed + phase;
      el.style.transform = `translateY(${Math.sin(t) * yMag}px) scale(1)`;
      requestAnimationFrame(animate);
    };
    animate();
  }
  floatElement(document.querySelector('.hero-btn'), 0, 8, 1800);
  floatElement(document.querySelector('.hero h1'), 0, 6, 2600, 1);
  floatElement(document.querySelector('.hero p'), 0, 5, 2100, 2);
});
