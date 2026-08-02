document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Set Lucide icons for elements
  const iconMap = {
    'previewIcon1': 'scissors',
    'previewIcon2': 'heart',
    'previewIcon3': 'phone',
    'aboutIcon1': 'user',
    'aboutIcon2': 'sparkles',
    'aboutIcon3': 'armchair',
    'contactIcon1': 'phone',
    'contactIcon2': 'mail',
    'contactIcon3': 'map-pin',
    'contactIcon4': 'instagram'
  };

  Object.entries(iconMap).forEach(([id, icon]) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `<i data-lucide="${icon}"></i>`;
    }
  });

  lucide.createIcons();

  // Scroll animations
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    const overlay = document.querySelector('.nav__overlay');

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('is-open');
      links.classList.toggle('is-open');
      toggle.classList.toggle('is-active');
      if (overlay) overlay.classList.toggle('is-active');

      if (!isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      });
    }

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        if (overlay) overlay.classList.remove('is-active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      });
    });
  }

  // Header scroll effect
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
