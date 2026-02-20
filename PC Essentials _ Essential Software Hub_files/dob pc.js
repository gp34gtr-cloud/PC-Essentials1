
// PC Essentials - PageTheme System
// Per-route theme configuration with CSS custom properties

const PAGE_THEMES = {
    // Home - Apple-style dark (minimal, premium, clean)
    home: {
        name: 'Apple Dark',
        page: 'home',
        colors: {
            bgPrimary: '#000000',
            bgSecondary: '#1c1c1e',
            bgTertiary: '#2c2c2e',
            bgCard: '#1c1c1e',
            textPrimary: '#f5f5f7',
            textSecondary: '#a1a1a6',
            textTertiary: '#6e6e73',
            accent: '#0071e3',
            accentHover: '#0077ed',
            accentGlow: 'rgba(0, 113, 227, 0.15)',
            border: 'rgba(255, 255, 255, 0.1)'
        },
        cardStyle: {
            borderRadius: '20px',
            padding: '32px',
            shadow: 'none',
            hoverTransform: 'translateY(-4px)',
            hoverBorder: 'rgba(255, 255, 255, 0.2)'
        },
        animation: {
            speed: '0.3s',
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            hoverScale: '1.02'
        }
    },

    // Peripherals - Tech Lab (grid-heavy, high-contrast, neon accent)
    peripherals: {
        name: 'Tech Lab',
        page: 'peripherals',
        colors: {
            bgPrimary: '#0a0a0f',
            bgSecondary: '#12121a',
            bgTertiary: '#1a1a25',
            bgCard: '#0f0f18',
            textPrimary: '#ffffff',
            textSecondary: '#8888aa',
            textTertiary: '#5555777',
            accent: '#00ff88',
            accentHover: '#00ffaa',
            accentGlow: 'rgba(0, 255, 136, 0.2)',
            border: 'rgba(0, 255, 136, 0.15)'
        },
        cardStyle: {
            borderRadius: '8px',
            padding: '24px',
            shadow: '0 0 30px rgba(0, 255, 136, 0.05)',
            hoverTransform: 'translateY(-2px)',
            hoverBorder: 'rgba(0, 255, 136, 0.4)'
        },
        animation: {
            speed: '0.15s',
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            hoverScale: '1.01'
        }
    },

    // AI Tools - Friendly Modern (softer cards, gradients, warm)
    aiTools: {
        name: 'Friendly Modern',
        page: 'ai-tools',
        colors: {
            bgPrimary: '#0f0f1a',
            bgSecondary: '#1a1a2e',
            bgTertiary: '#252540',
            bgCard: '#1e1e35',
            textPrimary: '#f8f8fc',
            textSecondary: '#a0a0c0',
            textTertiary: '#7070a0',
            accent: '#8b5cf6',
            accentHover: '#a78bfa',
            accentGlow: 'rgba(139, 92, 246, 0.2)',
            border: 'rgba(139, 92, 246, 0.15)'
        },
        cardStyle: {
            borderRadius: '24px',
            padding: '32px',
            shadow: '0 8px 32px rgba(139, 92, 246, 0.1)',
            hoverTransform: 'translateY(-6px) scale(1.01)',
            hoverBorder: 'rgba(139, 92, 246, 0.3)'
        },
        animation: {
            speed: '0.4s',
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            hoverScale: '1.02'
        }
    },

    // Software - Checklist (readable, step-by-step, clean)
    software: {
        name: 'Checklist',
        page: 'software',
        colors: {
            bgPrimary: '#050508',
            bgSecondary: '#0d0d12',
            bgTertiary: '#15151d',
            bgCard: '#0a0a10',
            textPrimary: '#e8e8ec',
            textSecondary: '#9898a8',
            textTertiary: '#686878',
            accent: '#3b82f6',
            accentHover: '#60a5fa',
            accentGlow: 'rgba(59, 130, 246, 0.15)',
            border: 'rgba(59, 130, 246, 0.12)'
        },
        cardStyle: {
            borderRadius: '12px',
            padding: '20px',
            shadow: 'none',
            hoverTransform: 'translateX(4px)',
            hoverBorder: 'rgba(59, 130, 246, 0.3)'
        },
        animation: {
            speed: '0.2s',
            easing: 'ease-out',
            hoverScale: '1'
        }
    }
};

// Theme state
let uniqueThemesEnabled = true;
const THEME_STORAGE_KEY = 'pc-essentials-unique-themes';

// Initialize theme state from localStorage
function initThemeState() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored !== null) {
        uniqueThemesEnabled = stored === 'true';
    }
    return uniqueThemesEnabled;
}

// Apply theme to document
function applyTheme(themeName) {
    const theme = PAGE_THEMES[themeName] || PAGE_THEMES.home;
    const root = document.documentElement;

    // Apply color variables
    root.style.setProperty('--bg-primary', theme.colors.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.colors.bgSecondary);
    root.style.setProperty('--bg-tertiary', theme.colors.bgTertiary);
    root.style.setProperty('--bg-card', theme.colors.bgCard);
    root.style.setProperty('--text-primary', theme.colors.textPrimary);
    root.style.setProperty('--text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--text-tertiary', theme.colors.textTertiary);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--accent-hover', theme.colors.accentHover);
    root.style.setProperty('--accent-glow', theme.colors.accentGlow);
    root.style.setProperty('--border', theme.colors.border);

    // Apply card style variables
    root.style.setProperty('--card-radius', theme.cardStyle.borderRadius);
    root.style.setProperty('--card-padding', theme.cardStyle.padding);
    root.style.setProperty('--card-shadow', theme.cardStyle.shadow);
    root.style.setProperty('--card-hover-transform', theme.cardStyle.hoverTransform);
    root.style.setProperty('--card-hover-border', theme.cardStyle.hoverBorder);

    // Apply animation variables
    root.style.setProperty('--anim-speed', theme.animation.speed);
    root.style.setProperty('--anim-easing', theme.animation.easing);
    root.style.setProperty('--hover-scale', theme.animation.hoverScale);

    // Set data attribute for CSS hooks
    document.body.setAttribute('data-page', theme.page);
}

// Apply default (home) theme
function applyDefaultTheme() {
    applyTheme('home');
}

// Toggle unique themes on/off
function toggleUniqueThemes(enabled) {
    uniqueThemesEnabled = enabled;
    localStorage.setItem(THEME_STORAGE_KEY, String(enabled));

    // Get current page and apply appropriate theme
    const currentPage = document.body.getAttribute('data-page') || 'home';
    if (enabled) {
        applyTheme(currentPage === 'ai-tools' ? 'aiTools' : currentPage);
    } else {
        applyDefaultTheme();
    }

    return uniqueThemesEnabled;
}

// Get current theme state
function getThemeState() {
    return uniqueThemesEnabled;
}

// Auto-apply theme based on page
function autoApplyPageTheme(pageName) {
    initThemeState();
    if (uniqueThemesEnabled) {
        applyTheme(pageName);
    } else {
        applyDefaultTheme();
    }
}

// ===== Cart Celebration System =====
function celebrateAddToCart(itemName = 'Item') {
    // Create celebration overlay
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    document.body.appendChild(overlay);

    // Create confetti particles
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#a8d8ea'];
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = 1.5 + Math.random() * 1;
        const size = 8 + Math.random() * 8;

        confetti.style.left = `${left}%`;
        confetti.style.top = '-20px';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.background = color;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animation = `confettiFall ${duration}s ease-out ${delay}s forwards`;

        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.background = 'transparent';
            confetti.style.borderLeft = `${size/2}px solid transparent`;
            confetti.style.borderRight = `${size/2}px solid transparent`;
            confetti.style.borderBottom = `${size}px solid ${color}`;
        }

        overlay.appendChild(confetti);
    }

    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.textContent = `Added to Cart!`;
    document.body.appendChild(toast);

    // Play a subtle sound effect (optional - uses Web Audio API)
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.4);
    } catch (e) {
        // Audio not supported, continue without sound
    }

    // Remove toast after animation
    setTimeout(() => {
        toast.style.animation = 'toastFade 0.4s ease forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 1500);

    // Clean up overlay after confetti falls
    setTimeout(() => {
        overlay.remove();
    }, 3000);
}

// Add to cart button handler
function addToCart(itemName) {
    celebrateAddToCart(itemName);
    // Add your cart logic here
    console.log(`${itemName} added to cart!`);
}
