/**
 * Site Animations
 * Enhances the website with scrolling animations, hover effects, and transitions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initScrollAnimations();
    initParallaxEffects();
    initCardAnimations();
    
    // Initialize hover effects
    initHoverEffects();
    
    // Initialize page transitions
    initPageTransitions();
});

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Set initial state
    animatedElements.forEach(element => {
        // Get animation type from data attribute
        const animationType = element.getAttribute('data-animate');
        // Get animation delay if specified
        const delay = element.getAttribute('data-animate-delay') || 0;
        
        // Add base animation class
        element.classList.add('animated');
        
        // Set delay as a style
        element.style.animationDelay = `${delay}s`;
        
        // Make sure element starts invisible
        element.style.opacity = '0';
    });
    
    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-animate');
                
                // Add animation class to trigger animation
                element.classList.add(animationType);
                
                // Unobserve after animation starts
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1, // 10% of the element visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is in view
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize parallax scrolling effects
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return; // Skip parallax effects if reduced motion is preferred
    }
    
    // Add scroll event listener for parallax effect
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.5;
            const yPos = -(scrollPosition * speed);
            
            // Apply transform for smoother animation (better performance than background-position)
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

/**
 * Initialize card animations and hover effects
 */
function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Add stagger animation class for list items
        card.classList.add('stagger-item');
        
        // Add hover effect listeners for cards with 3D tilt effect
        card.addEventListener('mousemove', handleCardHover);
        card.addEventListener('mouseleave', resetCardPosition);
    });
}

/**
 * Handle card hover 3D effect
 * @param {Event} e - Mouse event
 */
function handleCardHover(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card
    
    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    // Apply the 3D rotation effect
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

/**
 * Reset card position when mouse leaves
 * @param {Event} e - Mouse event
 */
function resetCardPosition(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

/**
 * Add animated typing effect to an element
 * @param {HTMLElement} element - The element to apply typing effect to
 * @param {string[]} textArray - Array of texts to type
 * @param {number} typingSpeed - Speed of typing in milliseconds
 * @param {number} deleteSpeed - Speed of deleting in milliseconds
 * @param {number} delayBetween - Delay between typing cycles in milliseconds
 */
function createTypingAnimation(element, textArray, typingSpeed = 100, deleteSpeed = 50, delayBetween = 2000) {
    if (!element || !textArray.length) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;
    
    element.classList.add('typing-animation');
    
    function type() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            // Deleting text
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                timeoutId = setTimeout(type, delayBetween);
                return;
            }
            
            timeoutId = setTimeout(type, deleteSpeed);
        } else {
            // Typing text
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                timeoutId = setTimeout(type, delayBetween);
                return;
            }
            
            timeoutId = setTimeout(type, typingSpeed);
        }
    }
    
    // Start typing animation
    type();
    
    // Return cleanup function
    return function cleanup() {
        clearTimeout(timeoutId);
    };
}

/**
 * Initialize hover effects
 * Adds hover effects to various elements
 */
function initHoverEffects() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.event-card, .project-card, .presentation-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('btn-hover');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('btn-hover');
        });
    });
}

/**
 * Initialize page transitions
 * Adds smooth transitions between pages
 */
function initPageTransitions() {
    // Add event listener to all internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], a[href^="index"], a[href^="projects"], a[href^="presentations"], a[href^="events"], a[href^="biography"], a[href^="contact"]');
    
    internalLinks.forEach(link => {
        // Skip links that open in new tab
        if (link.getAttribute('target') === '_blank') return;
        
        link.addEventListener('click', function(e) {
            // Get the href attribute
            const href = this.getAttribute('href');
            
            // If href is # or current page, do nothing
            if (href === '#' || href === window.location.pathname) return;
            
            // Prevent default action
            e.preventDefault();
            
            // Add page exit animation
            document.body.classList.add('page-exit');
            
            // Navigate to new page after animation completes
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Add page enter animation
    document.body.classList.add('page-enter');
    
    // Remove the animation class after it completes
    setTimeout(() => {
        document.body.classList.remove('page-enter');
    }, 500);
}

// Export functions for external use
window.portfolioAnimations = {
    createTypingAnimation,
    initScrollAnimations,
    initParallaxEffects
}; 