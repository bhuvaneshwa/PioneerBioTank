// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button if it doesn't exist
  const header = document.querySelector('header .nav-row');
  const nav = document.querySelector('nav');
  
  if (header && nav && !document.querySelector('.mobile-menu-toggle')) {
    // Create hamburger button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '☰';
    mobileToggle.setAttribute('aria-label', 'Toggle menu');
    
    // Insert before nav
    header.insertBefore(mobileToggle, nav);
    
    // Toggle menu on button click
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking the X (::before pseudo element)
    nav.addEventListener('click', function(e) {
      const rect = nav.getBoundingClientRect();
      // Check if click is in top-right corner (close button area)
      if (e.clientX > rect.right - 50 && e.clientY < rect.top + 50) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('active') && !nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Mobile dropdown toggle
  const dropdownButtons = document.querySelectorAll('.dropdown > button');
  dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.parentElement;
      
      // On mobile, toggle the dropdown
      if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
      document.body.style.overflow = '';
      
      // Remove active state from dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
      });
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#contact') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});