// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .skill-card, .project-card, .education-card, .experience-card, .cv-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle
const typingElements = document.querySelectorAll('.typing-text');
let currentIndex = 0;

function rotateTyping() {
    typingElements.forEach((el, index) => {
        if (index === currentIndex) {
            el.style.opacity = '1';
        } else {
            el.style.opacity = '0.3';
        }
    });
    currentIndex = (currentIndex + 1) % typingElements.length;
}

// Start typing rotation
setInterval(rotateTyping, 2000);
rotateTyping(); // Initial call

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Update footer year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Image Slideshow Functionality
const slideshowImages = document.querySelectorAll('.slideshow-image');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {
    // Remove active class from all images and indicators
    slideshowImages.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Add active class to current slide
    if (slideshowImages[index]) {
        slideshowImages[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Initialize slideshow
if (slideshowImages.length > 0) {
    showSlide(0);
    startSlideshow();
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
}

// CV Viewer Modal Functionality
const cvModal = document.getElementById('cv-modal');
const cvModalTitle = document.getElementById('cv-modal-title');
const cvIframe = document.getElementById('cv-iframe');
const cvViewButtons = document.querySelectorAll('.cv-view-btn');
const cvModalClose = document.querySelector('.cv-modal-close');

function openCVModal(cvFileName) {
    const cvNames = {
        '履歴書_KHATRI_HEMANT.pdf': '履歴書 (Resume)',
        '職務経歴書_KHATRI_HEMANT.pdf': '職務経歴書 (Career History)'
    };
    
    cvModalTitle.textContent = cvNames[cvFileName] || 'CV Viewer';
    cvIframe.src = cvFileName;
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCVModal() {
    cvModal.classList.remove('active');
    cvIframe.src = '';
    document.body.style.overflow = '';
}

// Open CV modal when view button is clicked
cvViewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cvFile = btn.getAttribute('data-cv');
        openCVModal(cvFile);
    });
});

// Close modal
if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCVModal);
}

// Close modal when clicking outside
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        closeCVModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.classList.contains('active')) {
        closeCVModal();
    }
});