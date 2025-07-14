// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
});

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.section');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            const originalText = heroDescription.textContent;
            typeWriter(heroDescription, originalText, 50);
        }
    }, 1500);
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.bg-animation');
    
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
});

// Skills animation on scroll
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        }, index * 100);
    });
}

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating animation to profile image
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    let floatDirection = 1;
    
    setInterval(() => {
        const currentTransform = profileImage.style.transform || 'translateY(0px)';
        const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)\)/)?.[1] || 0);
        
        if (currentY >= 10) floatDirection = -1;
        if (currentY <= -10) floatDirection = 1;
        
        const newY = currentY + (floatDirection * 0.5);
        profileImage.style.transform = `translateY(${newY}px)`;
    }, 50);
}

// Add glitch effect to name on hover
const nameElement = document.querySelector('.name');
if (nameElement) {
    nameElement.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    nameElement.addEventListener('animationend', function() {
        this.style.animation = '';
    });
}

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);

// Cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trailElements = [];

function createTrailElement() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(trail);
    return trail;
}

// Create trail elements
for (let i = 0; i < 10; i++) {
    trailElements.push(createTrailElement());
}

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    let x = mouseX;
    let y = mouseY;
    
    trailElements.forEach((trail, index) => {
        const nextTrail = trailElements[index + 1] || trailElements[0];
        
        trail.style.left = x - 2 + 'px';
        trail.style.top = y - 2 + 'px';
        trail.style.opacity = (10 - index) / 10;
        trail.style.transform = `scale(${(10 - index) / 10})`;
        
        x += (parseFloat(nextTrail.style.left) - x) * 0.3;
        y += (parseFloat(nextTrail.style.top) - y) * 0.3;
    });
    
    requestAnimationFrame(animateTrail);
}

animateTrail();

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.5;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.appendChild(particle);
        
        // Animate particle
        const duration = Math.random() * 3000 + 2000;
        const deltaX = (Math.random() - 0.5) * 200;
        const deltaY = (Math.random() - 0.5) * 200;
        
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 0.5 },
            { transform: `translate(${deltaX}px, ${deltaY}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// Create particles periodically
setInterval(createParticle, 300);

// Add intersection observer for counting animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observe stat numbers for counting animation
const statObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// Add theme toggle functionality (bonus feature)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        background: var(--bg-tertiary);
        border: 1px solid var(--border-color);
        border-radius: 50%;
        color: var(--text-primary);
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        display: none;
    `;
    
    document.body.appendChild(themeToggle);
    
    // Show theme toggle on desktop
    if (window.innerWidth > 768) {
        themeToggle.style.display = 'block';
    }
}

createThemeToggle();

console.log('🚀 Portfolio website loaded successfully!');
console.log('💼 Aman Singh Rajput - Data Scientist Portfolio');
console.log('📧 Contact: amanrajput746332@gmail.com');