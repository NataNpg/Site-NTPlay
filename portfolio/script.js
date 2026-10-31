// NataNpg Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initCounterAnimation();
    initFeaturedProjects();
    initParallaxEffect();
});

// Navigation
function initNavigation() {
    const nav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Scroll effect on nav
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu on link click
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Active link highlighting based on scroll
    window.addEventListener('scroll', debounce(function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current || item.getAttribute('href') === current + '.html') {
                item.classList.add('active');
            }
        });
    }, 100));
}

// Scroll Animations (Intersection Observer)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-header, .project-card, .skill-category, .stat, .hero-content > *, .hero-visual > *'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = (index * 0.05) + 's';
        observer.observe(el);
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + (target >= 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target >= 100 ? '%' : '+');
        }
    }, 16);
}

// Featured Projects Data & Rendering
function initFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    if (!container) return;

    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'Plataforma completa de e-commerce com carrinho, pagamentos Stripe, painel admin e gestão de estoque em tempo real.',
            category: 'Full Stack',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
            links: [
                { text: 'Demo', url: '#', icon: 'fas fa-external-link-alt' },
                { text: 'Código', url: 'https://github.com/NataNpg', icon: 'fab fa-github' }
            ],
            icon: 'fas fa-shopping-cart'
        },
        {
            title: 'Task Management App',
            description: 'Aplicativo de produtividade com quadros Kanban, colaboração em tempo real, notificações e relatórios avançados.',
            category: 'SaaS',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Vercel'],
            links: [
                { text: 'Demo', url: '#', icon: 'fas fa-external-link-alt' },
                { text: 'Código', url: 'https://github.com/NataNpg', icon: 'fab fa-github' }
            ],
            icon: 'fas fa-tasks'
        },
        {
            title: 'API de Pagamentos',
            description: 'API RESTful robusta para processamento de pagamentos multi-gateway com webhooks, retry logic e documentação OpenAPI.',
            category: 'Backend',
            tech: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
            links: [
                { text: 'Docs', url: '#', icon: 'fas fa-book' },
                { text: 'Código', url: 'https://github.com/NataNpg', icon: 'fab fa-github' }
            ],
            icon: 'fas fa-credit-card'
        }
    ];

    container.innerHTML = projects.map((project, index) => `
        <article class="project-card animate-in delay-${index + 1}" style="opacity: 0;">
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="project-link" target="_blank" rel="noopener">
                            <i class="${link.icon}"></i> ${link.text}
                        </a>
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');

    // Re-observe new elements for animation
    const newCards = container.querySelectorAll('.project-card');
    newCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Parallax Effect on Hero
function initParallaxEffect() {
    const heroVisual = document.querySelector('.hero-visual');
    const codeWindow = document.querySelector('.code-window');

    if (!heroVisual || !codeWindow) return;

    window.addEventListener('mousemove', function(e) {
        if (window.innerWidth < 768) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        codeWindow.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;
    });

    window.addEventListener('mouseleave', function() {
        codeWindow.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
}

// Utility: Debounce
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-content > *, .hero-visual > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = (index * 0.1) + 's';
        el.classList.add('animate-in');
    });
});

// Console Easter Egg
console.log(`
%cNataNpg Portfolio
%cDesenvolvido com ❤️ e muito café ☕
%cGitHub: https://github.com/NataNpg
`, 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #00e5ff, #b026ff); -webkit-background-clip: text; background-clip: text; color: transparent;', 'font-size: 14px; color: #888;', 'font-size: 12px; color: #555;');