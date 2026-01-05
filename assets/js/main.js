/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Auto Theme Detection - System Preference
   * Detects and applies theme based on system preferences
   */
  function initTheme() {
    // Check if user has manually set a theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      // User has manually set a theme
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Use system preference (auto mode)
      document.documentElement.setAttribute('data-theme', 'auto');
    }
    
    // Listen for system theme changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    function handleThemeChange() {
      // Only update if in auto mode
      if (document.documentElement.getAttribute('data-theme') === 'auto') {
        // Force a repaint to ensure smooth transition
        const body = document.body;
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Trigger a reflow to ensure CSS updates
        void body.offsetHeight;
      }
    }
    
    // Listen for changes (modern API)
    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', handleThemeChange);
      lightModeQuery.addEventListener('change', handleThemeChange);
    } else {
      // Fallback for older browsers
      darkModeQuery.addListener(handleThemeChange);
      lightModeQuery.addListener(handleThemeChange);
    }
    
    // Add smooth transition for theme changes
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }
  
  // Initialize theme immediately (before DOM is fully loaded for better UX)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  /**
   * Theme Toggle Button Handler
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    if (!themeToggle) return;
    
    // Update button appearance based on current theme
    function updateThemeButton() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const isDark = currentTheme === 'dark' || 
                    (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        themeIcon.className = 'bi bi-moon-fill theme-icon';
        themeText.setAttribute('data-i18n', 'theme.dark');
      } else {
        themeIcon.className = 'bi bi-sun-fill theme-icon';
        themeText.setAttribute('data-i18n', 'theme.light');
      }
      
      // Update text using i18n if available
      if (typeof translatePage === 'function') {
        translatePage();
      } else {
        // Fallback if i18n not loaded yet
        const currentLang = localStorage.getItem('language') || 'fr';
        if (isDark) {
          themeText.textContent = currentLang === 'fr' ? 'Sombre' : 'Dark';
        } else {
          themeText.textContent = currentLang === 'fr' ? 'Clair' : 'Light';
        }
      }
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const isDark = currentTheme === 'dark' || 
                    (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // Determine new theme
      let newTheme;
      if (currentTheme === 'auto') {
        // If in auto mode, switch to opposite of system preference
        newTheme = isDark ? 'light' : 'dark';
      } else {
        // If manual mode, switch to opposite
        newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      }
      
      // Apply new theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update button
      updateThemeButton();
      
      // Trigger transition
      document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    
      // Initial button update
      updateThemeButton();
      
      // Update button when system theme changes (if in auto mode)
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeQuery.addEventListener) {
        darkModeQuery.addEventListener('change', function() {
          if (document.documentElement.getAttribute('data-theme') === 'auto') {
            updateThemeButton();
          }
        });
      } else {
        darkModeQuery.addListener(function() {
          if (document.documentElement.getAttribute('data-theme') === 'auto') {
            updateThemeButton();
          }
        });
      }
      
      // Update button when language changes
      const originalSetLanguage = window.setLanguage;
      if (originalSetLanguage) {
        window.setLanguage = function(lang) {
          originalSetLanguage(lang);
          // Small delay to ensure i18n is updated
          setTimeout(updateThemeButton, 100);
        };
      }
    }
  
  // Initialize theme toggle when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    let scrollPosition = window.scrollY + 200;
    let currentActive = null;
    let currentOffset = -Infinity;

    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      
      let sectionTop = section.offsetTop;
      let sectionBottom = sectionTop + section.offsetHeight;
      
      // Check if scroll position is within the section bounds
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Find the section that is closest to the top of the viewport
        if (sectionTop > currentOffset) {
          currentOffset = sectionTop;
          currentActive = navmenulink;
        }
      }
    });

    // Remove active class from all links
    document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
    
    // Add active class to the current section
    if (currentActive) {
      currentActive.classList.add('active');
    } else {
      // Fallback: find the section that is currently in view
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        
        let rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentActive = navmenulink;
        }
      });
      
      if (currentActive) {
        currentActive.classList.add('active');
      }
    }
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();