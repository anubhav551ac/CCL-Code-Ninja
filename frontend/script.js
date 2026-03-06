<<<<<<< HEAD
 
=======
/**
 * GreeNinja - Main JavaScript
 * Links all pages and adds interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initSmoothScroll();
    initAnimations();
    initContactButton();
    initHeroCTA();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    // Header scroll effect
    const header = document.getElementById('header-section');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(20, 60, 35, 0.2)';
            } else {
                header.style.boxShadow = '0 2px 16px rgba(20, 60, 35, 0.15)';
            }
        });
    }

    // Close dropdowns when clicking outside
    const dropdowns = document.querySelectorAll('.dropdown');
    document.addEventListener('click', function(e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    });
}

/**
 * Scroll-based effects
 */
function initScrollEffects() {
    // Parallax effect for hero sections
    const heroImage = document.querySelector('.hero-image-wrapper img, .hero-bg');
    
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Animation on scroll
 */
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .feature-card, .step-item');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Contact button handler
 */
function initContactButton() {
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Scroll to about page which has contact info
            window.location.href = 'About.html';
        });
    }
}

/**
 * Hero CTA button handler
 */
function initHeroCTA() {
    const heroCTA = document.querySelector('.hero-cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', function() {
            // Scroll to features section or navigate to signup
            const featuresSection = document.getElementById('features-section');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/**
 * Utility: Format numbers
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatNumber, debounce };
}
>>>>>>> 9b4e09b (alldone)
