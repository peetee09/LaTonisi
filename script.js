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
        if (window.scrollY > 100) {
            header.style.padding = '6px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '12px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }
    }
});

// Quick Enquiry Form Handler
const quickEnquiryForm = document.getElementById('quickEnquiryForm');
if (quickEnquiryForm) {
    quickEnquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quickEnquiryForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Quick Enquiry Form Data:', data);
        
        // Show success message
        alert('Thank you for your enquiry! We will get back to you within 24 hours.');
        
        // Reset form
        quickEnquiryForm.reset();
    });
}

// Full Enquiry Form Handler
const fullEnquiryForm = document.getElementById('fullEnquiryForm');
if (fullEnquiryForm) {
    fullEnquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(fullEnquiryForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Full Enquiry Form Data:', data);
        
        // Show success message
        alert('Thank you for your detailed enquiry! Our team will review your information and contact you within 24 hours using your preferred method.');
        
        // Reset form
        fullEnquiryForm.reset();
    });
}
