/**
 * DEEPIKA T - PORTFOLIO JAVASCRIPT
 * Features: Dynamic Typing Effect, Dark/Light Theme Persistence,
 * Smooth Scrolling & Active Spy, Project Filtering, Interactive Modals,
 * Contact Form Handling & Toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('deepika_portfolio_theme');
  
  // Set initial theme
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);
  } else if (!prefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('deepika_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = '🌙';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeToggleBtn.innerHTML = '☀️';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  // 2. Typing Role Animation
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Mobile App Developer (Flutter)',
    'UI/UX & Figma Designer',
    'AI & Machine Learning Explorer',
    'B.Tech IT Graduate (2026)'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    if (!typingElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(typeRole, typingSpeed);
  }
  typeRole();

  // 3. Navbar Scroll Effect & Active Navigation Link Spy
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
      const isOpen = navLinksContainer.classList.contains('mobile-open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 5. Skills Category Filtering
  const skillFilterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Project Modal Logic
  const projectDetails = {
    'offline-chatbot': {
      title: 'Offline AI Context ChatBot',
      category: 'AI & Machine Learning / Python',
      icon: '💬',
      desc: 'An intelligent offline chatbot engineered with advanced natural language understanding capabilities. Paired with a streamlined Streamlit interface, it delivers conversational responses with zero cloud latency and complete offline privacy.',
      highlights: [
        'Advanced contextual understanding pipeline operating completely locally without internet dependency.',
        'Interactive Streamlit UI designed for fast query inputs and markdown conversation rendering.',
        'High privacy and zero API token costs — ideal for offline and edge deployments.',
        'Optimized response caching and prompt processing.'
      ],
      tech: ['Python', 'Streamlit', 'NLP', 'Machine Learning', 'Local Context Models']
    },
    'hand-gesture': {
      title: 'Hand Gesture Recognition System',
      category: 'Computer Vision & Deep Learning',
      icon: '✋',
      desc: 'A real-time vision-based interaction system leveraging MediaPipe and OpenCV to detect and classify complex hand gestures with high precision for gesture-driven UI controls.',
      highlights: [
        'Built real-time 21-landmark hand tracking using Google MediaPipe and OpenCV.',
        'Trained a custom deep learning classifier to distinguish various hand gestures with high accuracy.',
        'Implemented live interactive visual feedback and coordinate overlays directly on the video stream.',
        'Engineered for low latency and smooth frame rates on standard consumer webcams.'
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Deep Learning', 'Computer Vision']
    },
    'mobile-app': {
      title: 'Cross-Platform Real-Time Mobile Application',
      category: 'Mobile App Development & UI/UX',
      icon: '📱',
      desc: 'A complete end-to-end mobile application developed during an industry internship at Aslaniya Tech. Features responsive Flutter UI, Firebase real-time database, and user authentication.',
      highlights: [
        'Architected clean, scalable Flutter UI with responsive layouts across diverse screen sizes.',
        'Designed interactive wireframes, user journeys, and component design systems in Figma.',
        'Integrated Firebase backend for instant real-time synchronization, user authentication, and data persistence.',
        'Practiced collaborative Git/GitHub version control workflows and mobile lifecycle development.'
      ],
      tech: ['Flutter', 'Dart', 'Firebase', 'Figma', 'Git', 'Mobile UI/UX']
    },
    'portfolio-website': {
      title: 'Modern Developer Portfolio Website',
      category: 'Frontend & UI/UX Design',
      icon: '✨',
      desc: 'A high-performance, responsive personal portfolio built with modern vanilla web technologies, featuring glassmorphism aesthetics, dynamic dark/light theme switching, and interactive modals.',
      highlights: [
        'Lightning-fast zero-build static architecture with 100% GitHub Pages compatibility.',
        'Curated color palettes, dark/light theme persistence, and smooth CSS micro-interactions.',
        'Built-in resume viewer modal and direct PDF download integration.',
        'Fully responsive across smartphones, tablets, and desktop displays.'
      ],
      tech: ['HTML5', 'CSS3 (Vanilla)', 'JavaScript (ES6+)', 'Glassmorphism', 'Responsive Design']
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetails[projectId];
      if (!data) return;

      projectModalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">${data.icon}</div>
          <span class="project-category-badge" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${data.category}</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${data.title}</h2>
        </div>
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; color: var(--text-secondary);">${data.desc}</p>
        
        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Highlights & Capabilities:</h4>
        <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
          ${data.highlights.map(h => `<li style="position: relative; padding-left: 1.4rem; color: var(--text-secondary); font-size: 0.95rem;"><span style="position: absolute; left: 0; color: var(--accent-tertiary);">▹</span> ${h}</li>`).join('')}
        </ul>

        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Technologies Used:</h4>
        <div class="tech-tags" style="margin-top: 0; margin-bottom: 2rem;">
          ${data.tech.map(t => `<span class="tech-tag" style="background: rgba(99, 102, 241, 0.1); border-color: rgba(99, 102, 241, 0.3); color: var(--text-primary); font-weight: 600;">${t}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <button class="btn btn-outline btn-sm modal-close-action">Close</button>
          <a href="#contact" class="btn btn-primary btn-sm modal-close-action">Inquire About This Project</a>
        </div>
      `;

      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Attach close handler to inner buttons
      projectModalBody.querySelectorAll('.modal-close-action').forEach(b => {
        b.addEventListener('click', closeModal);
      });
    });
  });

  // 7. Resume Modal Logic
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.open-resume-modal');

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModal) {
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modals
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Generate mailto link
      const mailtoLink = `mailto:deepikat2004@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Copy message to clipboard for convenience
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`From: ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`);
      }

      showToast('Opening your email client... (Message copied to clipboard!)');
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 600);

      contactForm.reset();
    });
  }

  // 9. Toast Notification Helper
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') {
      toast.style.borderLeftColor = '#ef4444';
    }
    toast.innerHTML = `
      <span>${type === 'error' ? '⚠️' : '✅'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }
});
