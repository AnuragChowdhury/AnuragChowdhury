/* ============================================
   Anurag Chowdhury — Portfolio Interactivity
   ============================================ */

/* ---------- ROTATING TAGLINE WORD (standalone, runs immediately) ---------- */
(function () {
  if (window.__taglineStarted) return; // inline fallback already handling it
  window.__taglineStarted = true;
  const words = window.__taglineWords || ["Data", "Patterns", "Models", "Insights", "Algorithms"];
  let wordIndex = 0;

  function lockWidth(el) {
    const probe = document.createElement('span');
    const cs = window.getComputedStyle(el);
    probe.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font-family:${cs.fontFamily};font-size:${cs.fontSize};font-weight:${cs.fontWeight};letter-spacing:${cs.letterSpacing};`;
    document.body.appendChild(probe);
    let maxWidth = 0;
    words.forEach(w => {
      probe.textContent = w;
      maxWidth = Math.max(maxWidth, probe.getBoundingClientRect().width);
    });
    document.body.removeChild(probe);
    el.style.minWidth = Math.ceil(maxWidth) + 'px';
  }

  function startRotation() {
    const rotateEl = document.getElementById('rotate-word');
    if (!rotateEl) return; // element not found, nothing to animate

    rotateEl.style.display = 'inline-block';
    rotateEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    rotateEl.textContent = words[0];
    lockWidth(rotateEl);

    setInterval(() => {
      rotateEl.style.opacity = '0';
      rotateEl.style.transform = 'translateY(8px)';
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        rotateEl.textContent = words[wordIndex];
        rotateEl.style.opacity = '1';
        rotateEl.style.transform = 'translateY(0)';
      }, 350);
    }, 2200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startRotation);
  } else {
    startRotation();
  }
})();

/* LOADER & PAGE INITIALIZATION */
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
  }
}

// Hide loader when page fully loads
window.addEventListener('load', () => {
  setTimeout(hideLoader, 400);
});

// Backup: hide loader after 3 seconds max
setTimeout(hideLoader, 3000);

// Hide immediately if DOM is already ready
if (document.readyState === 'complete') {
  hideLoader();
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 0.5 (Loader text now uses pure CSS cursor blink, no JS needed) ---------- */

  /* ---------- 1. (Rotating tagline handled standalone below) ---------- */

  /* ---------- 2. SCROLL-REVEAL ANIMATIONS ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* Stagger children with .reveal-stagger automatically */
  document.querySelectorAll('.reveal-stagger').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
      child.classList.add('reveal');
      child.style.transitionDelay = `${i * 80}ms`;
      revealObserver.observe(child);
    });
  });

  /* ---------- 3. CURSOR-FOLLOW GLOW (desktop only) ---------- */
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  if (!isTouch) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = '1';
    });
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  } else {
    glow.style.display = 'none';
  }

  /* ---------- 4. TILT EFFECT ON COLLAGE / GALLERY PHOTOS ---------- */
  const tiltEls = document.querySelectorAll('.tilt');
  tiltEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  /* ---------- 5. MAGNETIC BUTTONS ---------- */
  const magneticEls = document.querySelectorAll('.magnetic');
  magneticEls.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });

  /* ---------- 6. SCROLL PROGRESS BAR ---------- */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  });

  /* ---------- 7. ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5, rootMargin: '-80px 0px -50% 0px' });
  sections.forEach(sec => navObserver.observe(sec));

  /* ---------- 8. FAQ ACCORDION ---------- */
  window.toggleFaq = function (el) {
    const item = el.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  };

  /* ---------- 9. NAV MOBILE TOGGLE ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  /* ---------- 10. LIGHTBOX FOR GALLERY IMAGES ---------- */
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<img src="" alt="Gallery preview"/><div class="lightbox-caption"></div><button class="lightbox-close" aria-label="Close">&times;</button>`;
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');

  document.querySelectorAll('.gallery-box img, .collage img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      const captionEl = img.parentElement.querySelector('.gb-caption');
      lightboxCaption.textContent = captionEl ? captionEl.textContent : (img.alt || '');
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });

  /* ---------- 11. COUNTER ANIMATION FOR STAT NUMBERS ---------- */
  function animateCounter(el) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';
    const target = el.getAttribute('data-count');
    if (!target) return;
    const isPercent = target.includes('%');
    const isPlus = target.includes('+');
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numeric)) return;
    let current = 0;
    const duration = 1200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = numeric / steps;
    const isDecimal = target.includes('.');
    const counterInterval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        current = numeric;
        clearInterval(counterInterval);
      }
      let display = isDecimal ? current.toFixed(2) : Math.floor(current).toString();
      el.textContent = display + (isPercent ? '%' : '') + (isPlus ? '+' : '');
    }, stepTime);
  }
  const counterEls = document.querySelectorAll('[data-count]');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Immediately animate any counters already visible on load (e.g. hero badges)
  counterEls.forEach(el => {
    if (isInViewport(el)) {
      animateCounter(el);
    }
  });

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  /* ---------- 12. SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
