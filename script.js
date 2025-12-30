// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle between hamburger and X icon using CSS
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navLinks.contains(event.target) || mobileMenuBtn.contains(event.target);
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Tab functionality for services page
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the selected tab content
        const tabId = button.dataset.tab;
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        const headerContainer = header.querySelector('.header-container');
        if (headerContainer) {
            if (window.scrollY > 100) {
                headerContainer.style.padding = '6px 24px';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                headerContainer.style.padding = '12px 24px';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
            }
        }
    }
});

// Quick Enquiry Form Handler
const quickEnquiryForm = document.getElementById('quickEnquiryForm');
if (quickEnquiryForm) {
    quickEnquiryForm.addEventListener('submit', function(e) {
        // Allow form to submit naturally to FormSubmit.co
        // Form will POST to info@latonisi.co.za via FormSubmit service
    });
}

// Full Enquiry Form Handler
const fullEnquiryForm = document.getElementById('fullEnquiryForm');
if (fullEnquiryForm) {
    fullEnquiryForm.addEventListener('submit', function(e) {
        // Allow form to submit naturally to FormSubmit.co
        // Form will POST to info@latonisi.co.za via FormSubmit service
    });
}

// Check for form submission success and show message
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = 'position: fixed; top: 100px; left: 50%; transform: translateX(-50%); background: #4CAF50; color: white; padding: 20px 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 10000; text-align: center; max-width: 90%;';
        successMessage.innerHTML = '<strong>Thank you for your enquiry!</strong><br>We will get back to you within 24 hours.';
        document.body.appendChild(successMessage);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.transition = 'opacity 0.5s';
            successMessage.style.opacity = '0';
            setTimeout(() => successMessage.remove(), 500);
        }, 5000);
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});
