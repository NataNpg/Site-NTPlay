// NataNpg Portfolio - Projects Data & Logic

const allProjects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Plataforma completa de e-commerce com carrinho de compras, integração Stripe, painel administrativo, gestão de estoque em tempo real, sistema de cupons e relatórios de vendas.',
        longDescription: 'Desenvolvida do zero utilizando arquitetura microserviços. Inclui autenticação JWT, carrinho persistente, checkout otimizado, webhooks para confirmação de pagamento, emails transacionais e dashboard administrativo com gráficos de vendas em tempo real.',
        category: 'fullstack',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Redis', 'Docker'],
        techStack: {
            frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
            backend: ['Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'Redis'],
            devops: ['Docker', 'GitHub Actions', 'AWS ECS', 'CloudFront']
        },
        image: 'ecommerce',
        icon: 'fas fa-shopping-cart',
        links: {
            demo: 'https://demo-ecommerce.natanpg.dev',
            code: 'https://github.com/NataNpg/ecommerce-platform',
            docs: 'https://docs.natanpg.dev/ecommerce'
        },
        featured: true,
        year: 2024,
        status: 'production'
    },
    {
        id: 2,
        title: 'TaskFlow - Gestão de Projetos',
        description: 'Aplicativo de produtividade estilo Trello/Jira com quadros Kanban, colaboração em tempo real via WebSockets, comentários, anexos, notificações push e relatórios de burndown.',
        longDescription: 'SaaS completo para equipes ágeis. Suporte a múltiplos workspaces, roles personalizados, automações (regras tipo "quando card movido para Done, notificar time"), integração com Slack/GitHub, calendar view e exportação de relatórios PDF/Excel.',
        category: 'fullstack',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'PostgreSQL', 'Tailwind'],
        techStack: {
            frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod'],
            backend: ['Next.js API Routes', 'Prisma', 'PostgreSQL', 'Socket.io', 'NextAuth.js'],
            devops: ['Vercel', 'PlanetScale', 'Upstash Redis', 'Sentry']
        },
        image: 'taskflow',
        icon: 'fas fa-tasks',
        links: {
            demo: 'https://taskflow.natanpg.dev',
            code: 'https://github.com/NataNpg/taskflow',
            docs: 'https://docs.natanpg.dev/taskflow'
        },
        featured: true,
        year: 2024,
        status: 'production'
    },
    {
        id: 3,
        title: 'Payment Gateway API',
        description: 'API RESTful robusta para processamento de pagamentos multi-gateway (Stripe, Mercado Pago, PayPal) com webhooks, retry logic exponencial, idempotência e documentação OpenAPI completa.',
        longDescription: 'Middleware de pagamentos enterprise-grade. Suporte a assinaturas recorrentes, split payments, reembolsos parciais/totais, conciliação bancária automática, antifraude integrado, logs de auditoria imutáveis e compliance PCI-DSS.',
        category: 'backend',
        tags: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Swagger', 'TypeScript'],
        techStack: {
            backend: ['NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ'],
            integrations: ['Stripe', 'Mercado Pago', 'PayPal', 'AWS SNS/SQS'],
            devops: ['Docker', 'Kubernetes', 'GitLab CI', 'Prometheus', 'Grafana']
        },
        image: 'payment-api',
        icon: 'fas fa-credit-card',
        links: {
            demo: null,
            code: 'https://github.com/NataNpg/payment-gateway-api',
            docs: 'https://api-docs.natanpg.dev/payments'
        },
        featured: true,
        year: 2023,
        status: 'production'
    },
    {
        id: 4,
        title: 'React UI Component Library',
        description: 'Biblioteca de componentes React acessíveis, tipados e customizáveis. 40+ componentes incluindo DataTable virtualizado, DatePicker, Select multi-select, Modal, Toast, Tooltip e formulários.',
        longDescription: 'Design system interno open source. Baseado em Radix UI + Tailwind CSS. Suporte a dark mode nativo, theming via CSS variables, tree-shaking otimizado, Storybook documentado, testes visuais com Chromatic e bundle size < 50kb gzipped.',
        category: 'frontend',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Vite'],
        techStack: {
            core: ['React 18', 'TypeScript', 'Tailwind CSS', 'Radix Primitives'],
            tooling: ['Vite', 'Vitest', 'Storybook', 'Chromatic', 'Changesets'],
            quality: ['ESLint', 'Prettier', 'Husky', 'lint-staged']
        },
        image: 'ui-lib',
        icon: 'fas fa-palette',
        links: {
            demo: 'https://ui.natanpg.dev',
            code: 'https://github.com/NataNpg/react-ui-library',
            docs: 'https://ui.natanpg.dev/docs'
        },
        featured: false,
        year: 2024,
        status: 'beta'
    },
    {
        id: 5,
        title: 'DevTools CLI',
        description: 'Ferramenta de linha de comando para desenvolvedores: scaffolding de projetos, geradores de código, validação de commits, análise de bundle, deploy automático e utilitários de produtividade.',
        longDescription: 'CLI inspirada em create-react-app e Angular CLI. Templates para React, Next.js, Node.js APIs, React Native. Integração com GitHub Actions, Vercel, Netlify, Railway. Plugin system para extensibilidade.',
        category: 'opensource',
        tags: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer', 'Chalk', 'ESBuild'],
        techStack: {
            core: ['Node.js 20', 'TypeScript', 'Commander.js', 'ESBuild'],
            ux: ['Inquirer', 'Chalk', 'Ora', 'Listr2'],
            quality: ['ESLint', 'Prettier', 'Vitest', 'tsup']
        },
        image: 'cli-tool',
        icon: 'fas fa-terminal',
        links: {
            demo: null,
            code: 'https://github.com/NataNpg/devtools-cli',
            docs: 'https://cli.natanpg.dev'
        },
        featured: false,
        year: 2023,
        status: 'active'
    },
    {
        id: 6,
        title: 'Mobile App - Habit Tracker',
        description: 'App mobile nativo (React Native) para rastreamento de hábitos com streak counting, lembretes inteligentes, estatísticas visuais, exportação de dados e sincronização cloud opcional.',
        longDescription: 'Desenvolvido com Expo + TypeScript. Arquitetura offline-first com SQLite local (WatermelonDB), sync bidirecional com backend quando online. Push notifications nativas, widgets iOS/Android, suporte a Apple Health/Google Fit.',
        category: 'mobile',
        tags: ['React Native', 'Expo', 'TypeScript', 'WatermelonDB', 'SQLite', 'Expo Notifications'],
        techStack: {
            mobile: ['React Native 0.73', 'Expo SDK 50', 'TypeScript', 'React Navigation'],
            storage: ['WatermelonDB', 'SQLite', 'AsyncStorage'],
            backend: ['Node.js', 'Fastify', 'PostgreSQL', 'Firebase Messaging']
        },
        image: 'habit-tracker',
        icon: 'fas fa-mobile-alt',
        links: {
            demo: 'https://expo.dev/@natanpg/habit-tracker',
            code: 'https://github.com/NataNpg/habit-tracker-mobile',
            docs: null
        },
        featured: false,
        year: 2023,
        status: 'store'
    },
    {
        id: 7,
        title: 'Real-time Chat SDK',
        description: 'SDK JavaScript/TypeScript para chat em tempo real com salas, mensagens diretas, indicadores de digitação, read receipts, anexos, reactions e moderação. Funciona com qualquer backend WebSocket.',
        longDescription: 'Library agnóstica de backend. Adapters para Socket.io, native WebSockets, Server-Sent Events, Firebase Realtime Database. Otimizada para bundle size (< 15kb). React hooks incluídos. TypeScript first-class support.',
        category: 'opensource',
        tags: ['TypeScript', 'WebSockets', 'Socket.io', 'RxJS', 'Rollup', 'Jest'],
        techStack: {
            core: ['TypeScript', 'RxJS 7', 'EventEmitter3'],
            adapters: ['Socket.io Client', 'Native WebSocket', 'SSE', 'Firebase'],
            react: ['React 18', 'SWR', 'Zustand'],
            testing: ['Jest', 'Testing Library', 'MSW']
        },
        image: 'chat-sdk',
        icon: 'fas fa-comments',
        links: {
            demo: 'https://chat-sdk.natanpg.dev',
            code: 'https://github.com/NataNpg/realtime-chat-sdk',
            docs: 'https://chat-sdk.natanpg.dev/docs'
        },
        featured: false,
        year: 2024,
        status: 'beta'
    },
    {
        id: 8,
        title: 'Analytics Dashboard',
        description: 'Dashboard de analytics em tempo real para SaaS: métricas de usuários, funis de conversão, retenção de cohort, revenue tracking, alertas automáticos e relatórios agendados por email.',
        longDescription: 'Built para product teams. Ingestão de eventos via API/segment/CDP. Query engine custom (ClickHouse) para agregações sub-segundo. Visualizações com Recharts/D3. Multi-tenant com row-level security. Embeddable via iframe.',
        category: 'fullstack',
        tags: ['React', 'Node.js', 'ClickHouse', 'Redis', 'D3.js', 'Recharts', 'TypeScript'],
        techStack: {
            frontend: ['React 18', 'TypeScript', 'D3.js', 'Recharts', 'Tailwind CSS'],
            backend: ['Node.js', 'Fastify', 'ClickHouse', 'Redis', 'BullMQ'],
            data: ['Segment API', 'RudderStack', 'Custom Event Collector'],
            devops: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
        },
        image: 'analytics',
        icon: 'fas fa-chart-line',
        links: {
            demo: 'https://analytics.natanpg.dev',
            code: 'https://github.com/NataNpg/analytics-dashboard',
            docs: 'https://analytics.natanpg.dev/docs'
        },
        featured: false,
        year: 2022,
        status: 'production'
    },
    {
        id: 9,
        title: 'GraphQL Federation Gateway',
        description: 'API Gateway GraphQL com Apollo Federation v2 para arquitetura de microfrontends. Schema stitching, query planning otimizado, caching distribuído, rate limiting por operação e observabilidade completa.',
        longDescription: 'Implementação enterprise de GraphQL Federation. Subgraphs independentes (Users, Products, Orders, Payments). Entity resolution, @key/@external/@requires directives. Managed federation com Apollo Studio. Persisted queries para performance.',
        category: 'backend',
        tags: ['Apollo Federation', 'Node.js', 'TypeScript', 'Redis', 'Prometheus', 'Docker'],
        techStack: {
            gateway: ['@apollo/gateway', '@apollo/subgraph', 'Node.js', 'TypeScript'],
            subgraphs: ['NestJS', 'TypeGraphQL', 'PostgreSQL', 'Prisma'],
            observability: ['Apollo Studio', 'Prometheus', 'Grafana', 'Jaeger'],
            devops: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
        },
        image: 'graphql-gateway',
        icon: 'fas fa-sitemap',
        links: {
            demo: null,
            code: 'https://github.com/NataNpg/graphql-federation-gateway',
            docs: 'https://graphql.natanpg.dev/docs'
        },
        featured: false,
        year: 2022,
        status: 'production'
    }
];

// State
let currentFilter = 'all';
let displayedCount = 6;
const projectsPerPage = 6;

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterTabs = document.querySelectorAll('.filter-tab');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreContainer = document.getElementById('load-more-container');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initFilterTabs();
    initLoadMore();
    fetchGitHubStats();
});

// Render Projects
function renderProjects() {
    if (!projectsGrid) return;

    const filtered = allProjects.filter(p => currentFilter === 'all' || p.category === currentFilter);
    const toShow = filtered.slice(0, displayedCount);

    projectsGrid.innerHTML = toShow.map((project, index) => createProjectCard(project, index)).join('');

    // Show/hide load more
    if (filtered.length > displayedCount) {
        loadMoreContainer.style.display = 'block';
    } else {
        loadMoreContainer.style.display = 'none';
    }

    // Animate in
    requestAnimationFrame(() => {
        const cards = projectsGrid.querySelectorAll('.project-card-full');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 80);
        });
    });
}

function createProjectCard(project, index) {
    const statusBadges = {
        production: { text: 'Produção', class: 'status-production' },
        beta: { text: 'Beta', class: 'status-beta' },
        active: { text: 'Ativo', class: 'status-active' },
        store: { text: 'Na Store', class: 'status-store' }
    };

    const status = statusBadges[project.status] || { text: project.status, class: '' };

    return `
        <article class="project-card-full animate-in" style="opacity: 0; transform: translateY(20px); transition-delay: ${index * 0.05}s;" data-category="${project.category}">
            <div class="project-card-header">
                <div class="project-icon-wrapper">
                    <i class="${project.icon}"></i>
                </div>
                <span class="project-status ${status.class}">${status.text}</span>
            </div>
            <div class="project-card-body">
                <span class="project-category-tag">${getCategoryLabel(project.category)}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech-full">
                    ${project.tags.slice(0, 6).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    ${project.tags.length > 6 ? `<span class="tech-tag more">+${project.tags.length - 6}</span>` : ''}
                </div>
            </div>
            <div class="project-card-footer">
                <div class="project-year">
                    <i class="fas fa-calendar"></i> ${project.year}
                </div>
                <div class="project-links-full">
                    ${project.links.demo ? `
                        <a href="${project.links.demo}" class="project-link-full" target="_blank" rel="noopener" title="Demo ao vivo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                    ${project.links.code ? `
                        <a href="${project.links.code}" class="project-link-full" target="_blank" rel="noopener" title="Código no GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                    ${project.links.docs ? `
                        <a href="${project.links.docs}" class="project-link-full" target="_blank" rel="noopener" title="Documentação">
                            <i class="fas fa-book"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        </article>
    `;
}

function getCategoryLabel(category) {
    const labels = {
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        backend: 'Backend',
        opensource: 'Open Source',
        mobile: 'Mobile'
    };
    return labels[category] || category;
}

// Filter Tabs
function initFilterTabs() {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active state
            filterTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Apply filter
            currentFilter = filter;
            displayedCount = projectsPerPage;
            renderProjects();

            // Scroll to projects
            projectsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Load More
function initLoadMore() {
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function() {
        const filtered = allProjects.filter(p => currentFilter === 'all' || p.category === currentFilter);
        const remaining = filtered.length - displayedCount;
        const toLoad = Math.min(projectsPerPage, remaining);

        displayedCount += toLoad;
        renderProjects();

        if (displayedCount >= filtered.length) {
            loadMoreContainer.style.display = 'none';
        }
    });
}

// GitHub Stats
async function fetchGitHubStats() {
    try {
        const username = 'NataNpg';
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('GitHub API error');

        const user = await response.json();

        // Fetch repos for stars/forks count
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        const repos = await reposResponse.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

        // Update DOM
        document.getElementById('github-repos').textContent = user.public_repos;
        document.getElementById('github-stars').textContent = formatNumber(totalStars);
        document.getElementById('github-forks').textContent = formatNumber(totalForks);

        // Contributions (approximation - would need GraphQL for exact)
        document.getElementById('github-contributions').textContent = '300+';

    } catch (error) {
        console.warn('Could not fetch GitHub stats:', error);
        // Fallback values
        document.getElementById('github-repos').textContent = '50+';
        document.getElementById('github-stars').textContent = '200+';
        document.getElementById('github-forks').textContent = '50+';
        document.getElementById('github-contributions').textContent = '300+';
    }
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return num.toString();
}

// Add dynamic styles for projects page
const style = document.createElement('style');
style.textContent = `
    /* Page Hero */
    .page-hero {
        padding: 160px 0 80px;
        text-align: center;
        background: rgba(0, 0, 0, 0.15);
    }

    .page-badge {
        display: inline-block;
        padding: 8px 20px;
        background: var(--cyan-dim);
        border: 1px solid rgba(0, 229, 255, 0.3);
        border-radius: 30px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--cyan);
        margin-bottom: 20px;
    }

    .page-hero-content h1 {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 16px;
        background: linear-gradient(135deg, var(--text-white), #ccc);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .page-hero-content p {
        font-size: 1.2rem;
        color: var(--text-muted);
        max-width: 700px;
        margin: 0 auto;
    }

    /* Filter Section */
    .filter-section {
        padding: 40px 0;
        position: sticky;
        top: 80px;
        z-index: 100;
        background: rgba(5, 2, 16, 0.9);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--card-border);
    }

    .filter-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    .filter-tab {
        padding: 10px 22px;
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 30px;
        color: var(--text-muted);
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: var(--transition-fast);
        white-space: nowrap;
    }

    .filter-tab:hover {
        border-color: var(--cyan);
        color: var(--cyan);
    }

    .filter-tab.active {
        background: linear-gradient(135deg, var(--cyan), var(--purple));
        border-color: transparent;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
    }

    /* Projects Full Section */
    .projects-full-section {
        padding: 60px 0 80px;
    }

    .projects-grid-full {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        gap: 28px;
    }

    .project-card-full {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
    }

    .project-card-full:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
        border-color: var(--cyan);
    }

    .project-card-header {
        position: relative;
        aspect-ratio: 16/10;
        background: linear-gradient(135deg, var(--cyan-dim), var(--purple-dim));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .project-icon-wrapper {
        width: 80px;
        height: 80px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    }

    .project-icon-wrapper i {
        font-size: 2rem;
        color: var(--cyan);
    }

    .project-status {
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .status-production { background: rgba(40, 202, 66, 0.2); color: #28ca42; border: 1px solid rgba(40, 202, 66, 0.3); }
    .status-beta { background: rgba(254, 188, 46, 0.2); color: #febc2e; border: 1px solid rgba(254, 188, 46, 0.3); }
    .status-active { background: rgba(0, 229, 255, 0.2); color: var(--cyan); border: 1px solid rgba(0, 229, 255, 0.3); }
    .status-store { background: rgba(176, 38, 255, 0.2); color: var(--purple); border: 1px solid rgba(176, 38, 255, 0.3); }

    .project-card-body {
        padding: 24px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .project-category-tag {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--cyan);
        background: var(--cyan-dim);
        padding: 4px 10px;
        border-radius: 20px;
        width: fit-content;
        margin-bottom: 12px;
    }

    .project-card-body h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .project-card-body p {
        color: var(--text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 16px;
        flex: 1;
    }

    .project-tech-full {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .project-card-footer {
        padding: 20px 24px;
        border-top: 1px solid var(--card-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .project-year {
        font-size: 0.8rem;
        color: var(--text-dim);
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .project-links-full {
        display: flex;
        gap: 8px;
    }

    .project-link-full {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: var(--dark-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-sm);
        color: var(--text-muted);
        text-decoration: none;
        transition: var(--transition-fast);
    }

    .project-link-full:hover {
        background: var(--cyan);
        border-color: var(--cyan);
        color: var(--dark-bg);
        transform: translateY(-2px);
    }

    /* Load More */
    .load-more-container {
        text-align: center;
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid var(--card-border);
    }

    /* GitHub Stats */
    .github-stats-section {
        padding: 80px 0;
        background: rgba(0, 0, 0, 0.15);
    }

    .github-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 24px;
        margin-bottom: 40px;
    }

    .stat-card {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-lg);
        padding: 32px;
        display: flex;
        align-items: center;
        gap: 20px;
        transition: var(--transition);
    }

    .stat-card:hover {
        border-color: var(--cyan);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
    }

    .stat-icon {
        width: 56px;
        height: 56px;
        background: linear-gradient(135deg, var(--cyan-dim), var(--purple-dim));
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--cyan);
        flex-shrink: 0;
    }

    .stat-value {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        background: linear-gradient(135deg, var(--cyan), var(--purple));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        line-height: 1;
    }

    .stat-label {
        display: block;
        font-size: 0.85rem;
        color: var(--text-dim);
        margin-top: 4px;
    }

    .github-profile-link {
        text-align: center;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .projects-grid-full {
            grid-template-columns: 1fr;
        }

        .filter-tabs {
            gap: 8px;
        }

        .filter-tab {
            padding: 8px 16px;
            font-size: 0.8rem;
        }

        .github-stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .stat-card {
            padding: 24px;
            flex-direction: column;
            text-align: center;
            gap: 16px;
        }

        .stat-value {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 480px) {
        .github-stats-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);