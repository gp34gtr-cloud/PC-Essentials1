// PC Essentials - Premium Effects
// Adds scroll animations, particles, and interactive effects

(function() {
    'use strict';

    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Optional: unobserve after reveal for performance
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add reveal class to elements - only cards, not sections or buttons
        const revealElements = document.querySelectorAll(
            '.software-card, .category-card, .maint-card, .game-card, ' +
            '.tip-card, .upgrade-card, .solution-card, .tool-card, .path-card'
        );

        revealElements.forEach((el, index) => {
            // Don't hide nav elements, headers, buttons, or filter elements
            if (el.closest('nav') || el.closest('.nav-links') || el.closest('header') ||
                el.closest('.category-nav') || el.closest('.filter-tabs')) return;

            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = `opacity 0.4s ease ${index % 4 * 0.05}s, transform 0.4s ease ${index % 4 * 0.05}s`;
            observer.observe(el);

            // Fallback: make visible after 500ms if observer fails
            setTimeout(() => {
                if (!el.classList.contains('revealed')) {
                    el.classList.add('revealed');
                }
            }, 500);
        });
    }

    // Add revealed styles
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* Floating Particles Container */
        #particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle linear infinite;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(720deg);
                opacity: 0;
            }
        }

        /* Glow effect on hover for cards */
        .card:hover, .software-card:hover, .maint-card:hover,
        .game-card:hover, .tip-card:hover, .upgrade-card:hover,
        .solution-card:hover, .tool-card:hover, .path-card:hover {
            box-shadow: 0 0 40px var(--accent-glow, rgba(139, 92, 246, 0.3));
        }

        /* Smooth link underline animation */
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: currentColor;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-links a {
            position: relative;
        }

        /* Page load animation */
        body {
            animation: pageLoad 0.5s ease-out;
        }

        @keyframes pageLoad {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Button pulse effect */
        .check-btn:not(:disabled):hover,
        .run-checkup-btn:hover,
        .load-specs-btn:hover {
            animation: btnPulse 1s ease-in-out infinite;
        }

        @keyframes btnPulse {
            0%, 100% {
                box-shadow: 0 0 20px var(--accent-glow, rgba(139, 92, 246, 0.4));
            }
            50% {
                box-shadow: 0 0 35px var(--accent-glow, rgba(139, 92, 246, 0.6));
            }
        }

        /* Cursor glow effect - Subtle and professional */
        #cursor-glow {
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.5s ease;
            transform: translate(-50%, -50%);
            filter: blur(80px);
            left: -500px;
            top: -500px;
        }

        /* Inner core - subtle */
        #cursor-glow-core {
            position: fixed;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease;
            transform: translate(-50%, -50%);
            filter: blur(25px);
            left: -500px;
            top: -500px;
        }

        /* Center dot - hidden for cleaner look */
        #cursor-glow-dot {
            display: none;
        }

        /* Trail particles - disabled for cleaner look */
        .cursor-trail {
            display: none;
        }

        /* Glow breathing animation - subtle */
        @keyframes glowBreath {
            0%, 100% {
                filter: blur(80px) brightness(1);
            }
            50% {
                filter: blur(85px) brightness(1.05);
            }
        }

        #cursor-glow.active {
            animation: glowBreath 4s ease-in-out infinite;
        }

        /* Typing effect for headers */
        .typing-effect {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(30, end);
        }

        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // FLOATING PARTICLES
    // ==========================================
    function initParticles() {
        // Skip on touch/mobile — saves battery, avoids visual clutter on small screens
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        const container = document.createElement('div');
        container.id = 'particles-container';
        document.body.appendChild(container);

        // Get accent color from CSS or use default
        const computedStyle = getComputedStyle(document.documentElement);
        const accentColor = computedStyle.getPropertyValue('--accent').trim() || '#8b5cf6';

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 20 + 15;
            const startX = Math.random() * 100;

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${startX}%;
                background: ${accentColor};
                box-shadow: 0 0 ${size * 2}px ${accentColor};
                animation-duration: ${duration}s;
                animation-delay: ${Math.random() * 5}s;
            `;

            container.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, (duration + 5) * 1000);
        }

        // Create initial particles
        for (let i = 0; i < 15; i++) {
            setTimeout(createParticle, i * 300);
        }

        // Continue creating particles, pause when tab is hidden
        let particleInterval = setInterval(createParticle, 2000);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(particleInterval);
            } else {
                particleInterval = setInterval(createParticle, 2000);
            }
        });
    }

    // ==========================================
    // CURSOR GLOW EFFECT - Super Realistic Multi-Layer
    // ==========================================
    function initCursorGlow() {
        // Skip on mobile/touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            return;
        }

        // Create outer glow layer
        const glow = document.createElement('div');
        glow.id = 'cursor-glow';

        // Create inner core layer
        const core = document.createElement('div');
        core.id = 'cursor-glow-core';

        // Create center dot
        const dot = document.createElement('div');
        dot.id = 'cursor-glow-dot';

        const computedStyle = getComputedStyle(document.documentElement);
        const accentColor = computedStyle.getPropertyValue('--accent').trim() || '#8b5cf6';

        // Parse color for gradient variations
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 139, g: 92, b: 246 };
        }

        const rgb = hexToRgb(accentColor);
        const lighterColor = `rgba(${Math.min(255, rgb.r + 60)}, ${Math.min(255, rgb.g + 60)}, ${Math.min(255, rgb.b + 60)}, 0.8)`;
        const brightColor = `rgba(255, 255, 255, 0.9)`;

        // Outer glow - diffuse, colorful
        glow.style.background = `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`;
        glow.style.left = '-500px';
        glow.style.top = '-500px';
        glow.style.opacity = '0';

        // Inner core - brighter, more focused
        core.style.background = `radial-gradient(circle, ${lighterColor} 0%, ${accentColor} 50%, transparent 70%)`;
        core.style.left = '-500px';
        core.style.top = '-500px';
        core.style.opacity = '0';

        // Center dot - white hot center
        dot.style.background = brightColor;
        dot.style.color = accentColor;
        dot.style.left = '-500px';
        dot.style.top = '-500px';
        dot.style.opacity = '0';

        document.body.appendChild(glow);
        document.body.appendChild(core);
        document.body.appendChild(dot);

        let mouseX = -500, mouseY = -500;
        let glowX = -500, glowY = -500;
        let coreX = -500, coreY = -500;
        let dotX = -500, dotY = -500;
        let hasMouseMoved = false;
        let lastTrailTime = 0;
        let velocity = { x: 0, y: 0 };
        let lastMouseX = -500, lastMouseY = -500;

        // Create trail particle
        function createTrail(x, y, speed) {
            if (speed < 5) return; // Only create trails when moving fast

            const trail = document.createElement('div');
            trail.className = 'cursor-trail';

            const size = Math.min(20, 5 + speed * 0.5);
            trail.style.width = size + 'px';
            trail.style.height = size + 'px';
            trail.style.left = x + 'px';
            trail.style.top = y + 'px';
            trail.style.background = accentColor;
            trail.style.filter = `blur(${size / 3}px)`;

            document.body.appendChild(trail);

            setTimeout(() => trail.remove(), 800);
        }

        document.addEventListener('mousemove', (e) => {
            // Calculate velocity
            velocity.x = e.clientX - lastMouseX;
            velocity.y = e.clientY - lastMouseY;
            const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

            lastMouseX = mouseX;
            lastMouseY = mouseY;
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!hasMouseMoved) {
                hasMouseMoved = true;
                glow.style.opacity = '0.06';
                glow.classList.add('active');
                core.style.opacity = '0.08';
            }
        });

        // Smooth follow animation with different speeds for each layer
        function animateGlow() {
            // Outer glow follows slowest (creates drag effect)
            glowX += (mouseX - glowX) * 0.06;
            glowY += (mouseY - glowY) * 0.06;

            // Core follows medium speed
            coreX += (mouseX - coreX) * 0.12;
            coreY += (mouseY - coreY) * 0.12;

            // Dot follows fastest (most responsive)
            dotX += (mouseX - dotX) * 0.25;
            dotY += (mouseY - dotY) * 0.25;

            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';

            core.style.left = coreX + 'px';
            core.style.top = coreY + 'px';

            dot.style.left = dotX + 'px';
            dot.style.top = dotY + 'px';

            requestAnimationFrame(animateGlow);
        }
        animateGlow();

        // Hide glow when mouse leaves window
        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
            glow.classList.remove('active');
            core.style.opacity = '0';
            dot.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            if (hasMouseMoved) {
                glow.style.opacity = '0.06';
                glow.classList.add('active');
                core.style.opacity = '0.08';
            }
        });

        // Subtle pulse effect on click
        document.addEventListener('mousedown', () => {
            glow.style.transition = 'transform 0.1s ease, opacity 0.5s ease';
            glow.style.transform = 'translate(-50%, -50%) scale(1.1)';
            core.style.transform = 'translate(-50%, -50%) scale(1.15)';
        });

        document.addEventListener('mouseup', () => {
            glow.style.transition = 'transform 0.3s ease, opacity 0.5s ease';
            glow.style.transform = 'translate(-50%, -50%) scale(1)';
            core.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    // ==========================================
    // SMOOTH NUMBER COUNTER
    // ==========================================
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(interval);
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                    }, 16);
                    observer.unobserve(counter);
                }
            });

            observer.observe(counter);
        });
    }

    // ==========================================
    // TILT EFFECT ON CARDS
    // ==========================================
    function initTiltEffect() {
        // Touch devices have no mouse — skip entirely
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        const cards = document.querySelectorAll(
            '.software-card, .maint-card, .game-card, .upgrade-card, .tool-card'
        );

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ==========================================
    // INITIALIZE ALL EFFECTS
    // ==========================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initEffects);
        } else {
            initEffects();
        }
    }

    function initEffects() {
        initScrollReveal();
        initParticles();
        initCursorGlow();
        initCounters();
        initTiltEffect();

        console.log('PC Essentials effects loaded');
    }

    init();
})();
