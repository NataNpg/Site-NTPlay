# NataNpg Portfolio

Portfólio pessoal moderno e responsivo para desenvolvedor Full Stack, hospedado gratuitamente no GitHub Pages.

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy Automático (Recomendado)

1. **Crie um repositório no GitHub** chamado `NataNpg.github.io` (ou qualquer nome)
2. **Faça push deste código** para o repositório
3. **Ative GitHub Pages**:
   - Vá em Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `master`, folder: `/ (root)`
   - Save
4. **O site estará disponível em**: `https://natanpg.github.io`

### Opção 2: GitHub Actions (Para builds customizados)

O workflow `.github/workflows/deploy.yml` já está configurado. Basta:
1. Push para branch `main`
2. O Action faz deploy automático
3. Verifique em Actions > Deploy to GitHub Pages

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Home page
├── projects.html       # Projetos com filtros
├── about.html          # Sobre mim
├── contact.html        # Contato com formulário
├── style.css           # Estilos principais
├── script.js           # JavaScript principal
├── projects.js         # Dados e lógica dos projetos
├── contact.js          # Lógica do formulário
├── _config.yml         # Config Jekyll (opcional)
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deploy
└── README.md           # Este arquivo
```

## ✨ Funcionalidades

- **Design Moderno**: Dark theme com acentos cyan/purple
- **Totalmente Responsivo**: Mobile-first, funciona em qualquer dispositivo
- **Performance Otimizada**: CSS/JS minificados, lazy loading, animações suaves
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Acessível**: Semantic HTML, ARIA labels, focus states, keyboard navigation
- **Animações**: IntersectionObserver, contadores animados, parallax suave
- **Formulário Funcional**: Pronto para Formspree, Netlify Forms ou EmailJS
- **GitHub Stats**: Busca stats reais da API do GitHub

## 🎨 Personalização

### Cores (em `style.css`):
```css
:root {
    --cyan: #00e5ff;      /* Cor principal */
    --purple: #b026ff;    /* Cor secundária */
    --dark-bg: #050210;   /* Background */
    --card-bg: rgba(10, 10, 31, 0.85);
}
```

### Conteúdo:
- Edite `index.html`, `about.html`, `contact.html` para seus textos
- Adicione projetos em `projects.js` no array `allProjects`
- Substitua links sociais no footer de todas as páginas

### Formulário de Contato:
Configure um endpoint real em `contact.html`:
```html
<!-- Formspree -->
<form action="https://formspree.io/f/SEU_ID" method="POST">

<!-- Netlify Forms -->
<form name="contact" method="POST" data-netlify="true">

<!-- EmailJS (client-side) -->
<!-- Adicione script EmailJS e chame emailjs.send() no contact.js -->
```

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** moderno (Custom Properties, Grid, Flexbox, Clamp)
- **Vanilla JS** (ES6+, IntersectionObserver, Fetch API)
- **Font Awesome 6** para ícones
- **Google Fonts** (Inter)
- **GitHub Pages** para hospedagem gratuita

## 📱 PWA Ready

Para transformar em PWA, adicione:
1. `manifest.json` na raiz
2. Service Worker para offline
3. Meta tags de theme-color

## 📄 Licença

MIT License - Sinta-se livre para usar como base para seu próprio portfólio.

## 🤝 Contribuição

Issues e PRs são bem-vindos! Especialmente para:
- Correções de acessibilidade
- Melhorias de performance
- Novas animações/transições
- Traduções

---

**Desenvolvido por [NataNpg](https://github.com/NataNpg)** ❤️