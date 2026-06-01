// Vector Labs AI - Main Script File

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('hidden')) {
          icon.className = 'fas fa-bars text-xl';
        } else {
          icon.className = 'fas fa-times text-xl';
        }
      }
    });

    // Close menu when clicking navigation link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars text-xl';
        }
      });
    });
  }

  // 2. Navigation Blur Header on Scroll
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('glass-panel', 'shadow-lg');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('glass-panel', 'shadow-lg');
        header.classList.add('bg-transparent');
      }
    });
  }

  // 3. Reveal on Scroll Animation (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% visible
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, no need to watch it again
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(elem => {
      observer.observe(elem);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(elem => {
      elem.classList.add('active');
    });
  }

  // 4. Custom Contact Form Handling with Toast notification
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get fields
      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const company = document.getElementById('form-company')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      // Basic Validation
      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate API submit
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner animate-spin mr-2"></i>Processing...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        // Success response
        showToast(`Thank you, ${name}! Your request has been transmitted. Our team will contact you shortly.`, 'success');
        contactForm.reset();
        
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
      }, 1500);
    });
  }

  // Toast Functionality
  function showToast(message, type = 'success') {
    if (!toast) return;

    const toastText = toast.querySelector('#toast-text');
    const toastIcon = toast.querySelector('#toast-icon');

    if (toastText) toastText.textContent = message;

    if (toastIcon) {
      if (type === 'success') {
        toastIcon.className = 'fas fa-check-circle text-emerald-400 text-xl mr-3';
      } else {
        toastIcon.className = 'fas fa-exclamation-triangle text-rose-500 text-xl mr-3';
      }
    }

    // Slide in toast
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  // 5. Hero Dynamic Typewriter Effect for Brand headline
  const headlineElement = document.getElementById('typewriter-headline');
  if (headlineElement) {
    const text = headlineElement.textContent;
    headlineElement.textContent = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        headlineElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
      }
    }
    
    // Start typing after a short delay
    setTimeout(type, 800);
  }
});
