(() => {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero-model');
  const ready = Promise.allSettled([
    document.fonts.load('400 32px Anton'),
    document.fonts.load('900 32px Roboto'),
    document.fonts.load('400 16px Roboto'),
    hero?.decode?.() || Promise.resolve(),
    new Promise(resolve => setTimeout(resolve, 1650))
  ]);
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    loader.classList.add('is-ready');
    document.dispatchEvent(new Event('site-ready'));
    setTimeout(() => loader.remove(), reduced ? 0 : 1100);
  };
  ready.then(dismiss);
  setTimeout(dismiss, 3000);
  addEventListener('pagehide', dismiss, { once: true });
})();
