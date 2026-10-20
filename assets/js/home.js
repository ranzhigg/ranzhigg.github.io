(() => {
  const root = document.documentElement;
  const stage = document.querySelector('.orbit-stage');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    root.style.setProperty('--mx', `${x}px`);
    root.style.setProperty('--my', `${y}px`);
    stage.style.setProperty('--orbit-x', `${x * 0.45}px`);
    stage.style.setProperty('--orbit-y', `${y * 0.45}px`);
  }, { passive: true });
})();
