(() => {
  const targets = document.querySelectorAll('nav a, .bag, .text-link, .back-top, .footer-links > a, .footer-links > button');

  targets.forEach(target => {
    const nodes = [...target.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    const length = nodes.reduce((total, node) => total + [...node.textContent].length, 0);
    const step = Math.min(24, 220 / Math.max(1, length - 1));
    let index = 0;

    nodes.forEach(node => {
      const word = document.createElement('span');
      word.className = 'word-motion';

      // Keep one intact accessible label; decorative copies are hidden from AT.
      const label = document.createElement('span');
      label.className = 'word-motion-label';
      label.textContent = node.textContent;
      const visual = document.createElement('span');
      visual.className = 'word-motion-visual';
      visual.setAttribute('aria-hidden', 'true');

      for (const character of node.textContent) {
        const letter = document.createElement('span');
        letter.className = 'word-motion-letter';
        letter.textContent = character;
        letter.dataset.letter = character;
        letter.style.setProperty('--letter-delay', `${Math.round(index++ * step)}ms`);
        visual.append(letter);
      }

      word.append(label, visual);
      node.replaceWith(word);
    });

    if (nodes.length) target.classList.add('word-motion-target');
  });
})();
