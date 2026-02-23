/**
 * 207 KUSTOMZ - ANIMATIONS & EFFECTS
 * Particle effects, scroll reveals, and visual enhancements
 */

(function() {
  'use strict';

  // ========== PARTICLES ANIMATION ==========
  const initParticles = () => {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particleContainer.appendChild(particle);
    }
  };

  // ========== STARLIGHT DEMO ANIMATION ==========
  const initStarlightDemo = () => {
    const starlightDemo = document.getElementById('starlightDemo');
    if (!starlightDemo) return;

    const starCount = 80;
    const colors = ['#ffffff', '#1da1f2', '#4dc3ff', '#0d7cc4', '#e0e0e0'];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (1 + Math.random() * 3) + 's';
      star.style.background = colors[Math.floor(Math.random() * colors.length)];
      const size = 1 + Math.random() * 2;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      starlightDemo.appendChild(star);
    }
  };

  // ========== SCROLL REVEAL ANIMATIONS ==========
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Unobserve after revealing for performance
            // revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  };

  // ========== GALLERY LIGHTBOX (PREMIUM FEATURE) ==========
  const initGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 10, 0.95);
      z-index: 10000;
      display: none;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border: 1px solid var(--border);
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: transparent;
      border: none;
      color: var(--white);
      font-size: 3rem;
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.3s;
    `;
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.color = 'var(--accent)';
    });
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.color = 'var(--white)';
    });

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    const openLightbox = (imgSrc) => {
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'flex';
      setTimeout(() => {
        lightbox.style.opacity = '1';
      }, 10);
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
      }
    });

    // Add click handlers to gallery items
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const bg = item.querySelector('.gallery-item-bg');
        
        if (img && img.src) {
          openLightbox(img.src);
        } else if (bg && bg.style.backgroundImage) {
          // Extract image URL from background-image
          const bgImage = bg.style.backgroundImage;
          const urlMatch = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (urlMatch && urlMatch[1]) {
            openLightbox(urlMatch[1]);
          }
        }
      });
    });
  };

  // ========== PARALLAX EFFECT (PREMIUM FEATURE) ==========
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.hero-bg, .hero-grid');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach(el => {
        if (el) {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    });
  };

  // ========== COUNTER ANIMATION ==========
  const initCounterAnimation = () => {
    const counters = document.querySelectorAll('.hero-stat-num, .rating-big');
    
    const animateCounter = (element) => {
      const target = element.textContent.trim();
      const isNumber = /^\d+\.?\d*/.test(target);
      
      if (!isNumber) return;
      
      const finalValue = parseFloat(target.replace(/[^0-9.]/g, ''));
      const suffix = target.replace(/[0-9.]/g, '');
      const duration = 2000;
      const increment = finalValue / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < finalValue) {
          element.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      };
      
      updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  };

  // ========== INITIALIZE ALL ANIMATIONS ==========
  const init = () => {
    initParticles();
    initStarlightDemo();
    initScrollReveal();
    initGalleryLightbox();
    initParallax();
    initCounterAnimation();
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
