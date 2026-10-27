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
  const experience = hero.closest('#experience');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const constrained = navigator.connection?.saveData ||
    (navigator.deviceMemory && navigator.deviceMemory < 2);
  let dispose;
  let cancelled = false;
  let sceneFrame;
  let frameHandler;
  let finishIntroTimer;
  let hideIntroTimer;
  let introDismissed = false;
  // Reserve the final layout while the lightweight poster is visible.
  experience.classList.toggle('experience-live', !motion.matches && !constrained);
  const cancelScheduledScene = () => cancelAnimationFrame(sceneFrame);
  const intro = hero.querySelector('.scene-intro');
  const initialize = async () => {
    if (cancelled) return;
    if (motion.matches || constrained) {
      experience.classList.remove('experience-live');
      hero.classList.remove('scene-loading', 'scene-intro-live');
      intro.hidden = true;
      return;
    }
    experience.classList.add('experience-live');
    intro.hidden = false;
    hero.classList.add('scene-loading', 'scene-intro-live');
    hideIntroTimer = undefined;
    introDismissed = false;
    const dismissIntro = () => {
      if (introDismissed) return;
      introDismissed = true;
      hero.classList.remove('scene-loading', 'scene-intro-live');
      hideIntroTimer = setTimeout(() => { intro.hidden = true; }, 400);
    };
    finishIntroTimer = setTimeout(dismissIntro, 2000);
    try {
      const { createScene } = await import('./scene.mjs');
      if (motion.matches || cancelled) return;
      frameHandler = () => {
        clearTimeout(finishIntroTimer);
        clearTimeout(hideIntroTimer);
        dismissIntro();
        hero.removeEventListener('scene:firstframe', frameHandler);
      };
      hero.addEventListener('scene:firstframe', frameHandler);
      dispose = createScene(hero);
    } catch {
      clearTimeout(finishIntroTimer);
      clearTimeout(hideIntroTimer);
      hero.classList.remove('scene-ready');
      hero.querySelector('.scene-controls').hidden = true;
      intro.hidden = true;
      hero.classList.remove('scene-loading', 'scene-intro-live');
      if (frameHandler) hero.removeEventListener('scene:firstframe', frameHandler);
      experience.classList.remove('experience-live');
    }
  };
  // Begin as soon as the browser has painted the poster and hero content.
  const scheduleScene = () => {
    cancelScheduledScene();
    if (motion.matches || constrained || cancelled) return;
    sceneFrame = requestAnimationFrame(() => {
      sceneFrame = requestAnimationFrame(initialize);
    });
  };
  scheduleScene();
  motion.addEventListener('change', event => {
    if (event.matches) {
      cancelScheduledScene();
      dispose?.();
      dispose = undefined;
      clearTimeout(finishIntroTimer);
      clearTimeout(hideIntroTimer);
      if (frameHandler) hero.removeEventListener('scene:firstframe', frameHandler);
      hero.classList.remove('scene-ready', 'scene-loading', 'scene-intro-live');
      intro.hidden = true;
      hero.querySelector('.scene-controls').hidden = true;
      experience.classList.remove('experience-live');
    } else {
      experience.classList.toggle('experience-live', !constrained);
      scheduleScene();
    }
  });
  window.addEventListener('pagehide', () => {
    cancelled = true; cancelScheduledScene(); clearTimeout(finishIntroTimer); clearTimeout(hideIntroTimer);
    dispose?.(); dispose = undefined;
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted) { cancelled = false; scheduleScene(); }
  });
}

// Smooth, seamless review loop. Hovering the review area pauses it.
const reviewTrack = document.querySelector('.review-track');
if (reviewTrack) {
  const originals = [...reviewTrack.querySelectorAll('[data-review-original]')];
  const controls = document.querySelector('.review-controls');
  const status = controls.querySelector('.review-status');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let cycleWidth = 0;
  let previousTime = 0;
  let frame;
  const clones = originals.map(card => {
    const clone = card.cloneNode(true);
    clone.removeAttribute('data-review-original');
    clone.setAttribute('aria-hidden', 'true');
    clone.inert = true;
    return clone;
  });
  clones.forEach(clone => reviewTrack.append(clone));
  const measure = () => { cycleWidth = clones[0].offsetLeft - originals[0].offsetLeft; };
  const update = () => {
    const left = reviewTrack.getBoundingClientRect().left;
    const index = originals.reduce((nearest, card, i) => Math.abs(card.getBoundingClientRect().left - left) < Math.abs(originals[nearest].getBoundingClientRect().left - left) ? i : nearest, 0);
    status.textContent = `Review ${index + 1} of ${originals.length}`;
  };
  const animate = time => {
    if (previousTime) reviewTrack.scrollLeft += Math.min(time - previousTime, 50) * 0.035;
    previousTime = time;
    if (cycleWidth && reviewTrack.scrollLeft >= cycleWidth) reviewTrack.scrollLeft -= cycleWidth;
    frame = requestAnimationFrame(animate);
  };
  const start = () => { if (!frame && !reducedMotion.matches && originals.length > 1) frame = requestAnimationFrame(animate); };
  const stop = () => { cancelAnimationFrame(frame); frame = undefined; previousTime = 0; };
  controls.hidden = originals.length < 2;
  controls.querySelectorAll('[data-review-direction]').forEach(button => button.addEventListener('click', () => {
    const step = originals[0].getBoundingClientRect().width + parseFloat(getComputedStyle(reviewTrack).columnGap || 0);
    reviewTrack.scrollBy({ left: Number(button.dataset.reviewDirection) * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }));
  reviewTrack.addEventListener('mouseenter', stop);
  reviewTrack.addEventListener('mouseleave', start);
  reviewTrack.addEventListener('scroll', update, { passive: true });
  reducedMotion.addEventListener('change', event => event.matches ? stop() : start());
  new ResizeObserver(measure).observe(reviewTrack);
  measure();
  update();
  start();
}
