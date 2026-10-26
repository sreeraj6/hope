import { composeMessage, whatsappUrl } from './enquiry.mjs';

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menu.focus();
  }
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}));


nav?.addEventListener('keydown', event => {
  if (event.key !== 'Tab' || menu.getAttribute('aria-expanded') !== 'true') return;
  const links = [...nav.querySelectorAll('a')];
  if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menu.focus(); }
});
menu?.addEventListener('keydown', event => {
  if (event.key === 'Tab' && event.shiftKey && menu.getAttribute('aria-expanded') === 'true') {
    event.preventDefault(); nav.querySelector('a:last-child')?.focus();
  }
});

const form = document.querySelector('#enquiry-form');
if (form) {
  const review = document.querySelector('#enquiry-review');
  const preview = document.querySelector('#message-preview');
  const error = document.querySelector('#form-error');
  const status = document.querySelector('#copy-status');
  const send = document.querySelector('#send-whatsapp');
  let message = '';
  const chosenService = new URLSearchParams(location.search).get('service');
  if (chosenService && [...form.elements.service.options].some(o => o.value === chosenService)) {
    form.elements.service.value = chosenService;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    error.textContent = '';
    if (!form.reportValidity()) return;
    try {
      message = composeMessage(Object.fromEntries(new FormData(form)));
      preview.textContent = message;
      send.disabled = !document.body.dataset.whatsapp;
      form.hidden = true;
      review.hidden = false;
      review.focus({ preventScroll: true });
      review.scrollIntoView({ block: 'nearest', behavior: 'auto' });
    } catch (err) { error.textContent = err.message; }
  });
  send.addEventListener('click', () => {
    try {
      // Only create the handoff URL after the user's explicit action.
      window.open(whatsappUrl(document.body.dataset.whatsapp, message), '_blank', 'noopener,noreferrer');
      status.textContent = 'WhatsApp opens separately. Press Send there, or copy the message below.';
    } catch (err) { status.textContent = err.message; }
  });
  document.querySelector('#edit-enquiry').addEventListener('click', () => {
    review.hidden = true;
    form.hidden = false;
    message = '';
    preview.textContent = '';
    status.textContent = '';
    form.elements.name.focus({ preventScroll: true });
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = 'Message copied. Paste it into your conversation with Hope Networking.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(preview);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select Copy from your browser menu to copy the highlighted message.';
    }
  });
  const clear = () => {
    message = '';
    preview.textContent = '';
    status.textContent = '';
    form.reset();
    review.hidden = true;
    form.hidden = false;
  };
  document.querySelector('#clear-enquiry').addEventListener('click', () => {
    clear();
    form.elements.name.focus();
  });
  // Clear sensitive values on departure, including back/forward cache restores.
  window.addEventListener('pagehide', clear);
}

// The immersive scene is pinned within the home tour; service content follows normally.
const hero = document.querySelector('#hero-visual');
if (hero) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const constrained = navigator.connection?.saveData ||
    (navigator.deviceMemory && navigator.deviceMemory < 2);
  let dispose;
  let cancelled = false;
  const intro = hero.querySelector('.scene-intro');
  const initialize = async () => {
    if (motion.matches || constrained || cancelled) return;
    intro.hidden = true;
    try {
      const { createScene } = await import('./scene.mjs');
      if (motion.matches || cancelled) return;
      dispose = createScene(hero);
    } catch {
      hero.classList.remove('scene-ready');
      hero.querySelector('.scene-controls').hidden = true;
      intro.hidden = true;
    }
  };
  // Give the initial document and poster a paint before initializing WebGL.
  requestAnimationFrame(() => requestAnimationFrame(initialize));
  motion.addEventListener('change', event => {
    if (event.matches) {
      dispose?.();
      dispose = undefined;
      hero.classList.remove('scene-ready');
      intro.hidden = true;
      hero.querySelector('.scene-controls').hidden = true;
    } else initialize();
  });
  window.addEventListener('pagehide', () => { cancelled = true; dispose?.(); dispose = undefined; });
  window.addEventListener('pageshow', event => {
    if (event.persisted) { cancelled = false; initialize(); }
  });
}
