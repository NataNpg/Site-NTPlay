// NataNpg Portfolio - Contact Form Logic

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate
        if (!validateForm(form)) return;

        // Show loading
        setLoading(true);

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // For demo: simulate API call
            // Replace with actual Formspree/Netlify Forms/EmailJS endpoint
            await simulateFormSubmit(data);

            // Success
            form.style.display = 'none';
            successMsg.style.display = 'flex';

            // Track conversion (if analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_form_submit', {
                    event_category: 'engagement',
                    event_label: data.subject
                });
            }

        } catch (error) {
            console.error('Form submit error:', error);
            form.style.display = 'none';
            errorMsg.style.display = 'flex';
        } finally {
            setLoading(false);
        }
    });

    function setLoading(loading) {
        submitBtn.disabled = loading;
        btnText.style.display = loading ? 'none' : 'inline-flex';
        btnLoading.style.display = loading ? 'inline-flex' : 'none';
    }

    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, 'Este campo é obrigatório');
                isValid = false;
            } else {
                clearFieldError(field);
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    showFieldError(field, 'Email inválido');
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    function showFieldError(field, message) {
        clearFieldError(field);
        field.style.borderColor = '#ff5f57';
        const error = document.createElement('span');
        error.className = 'field-error';
        error.style.cssText = 'color: #ff5f57; font-size: 0.75rem; margin-top: 4px; display: block;';
        error.textContent = message;
        field.parentNode.appendChild(error);
    }

    function clearFieldError(field) {
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) existingError.remove();
    }

    // Simulate form submission (replace with real endpoint)
    function simulateFormSubmit(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', data);
                resolve({ success: true });
            }, 1500);
        });
    }
}

// Reset form
function resetForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    if (form) {
        form.reset();
        form.style.display = 'block';
    }
    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';

    // Clear any field errors
    document.querySelectorAll('.field-error').forEach(e => e.remove());
    document.querySelectorAll('input, textarea, select').forEach(f => f.style.borderColor = '');
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', function(e) {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item && other.open) {
                    other.open = false;
                }
            });
        });

        // Keyboard support
        summary.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Add dynamic styles for contact page
const contactStyle = document.createElement('style');
contactStyle.textContent = `
    /* Contact Section */
    .contact-section {
        padding: 80px 0;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: start;
    }

    .contact-form-wrapper {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-lg);
        padding: 40px;
        position: sticky;
        top: 100px;
    }

    .form-header {
        margin-bottom: 32px;
    }

    .form-header h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    .form-header p {
        color: var(--text-muted);
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-group label {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-white);
    }

    .required {
        color: var(--cyan);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 14px 16px;
        background: var(--dark-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-sm);
        color: var(--text-white);
        font-size: 0.95rem;
        font-family: inherit;
        transition: var(--transition-fast);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--cyan);
        box-shadow: 0 0 0 3px var(--cyan-dim);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--text-dim);
    }

    .form-group select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 40px;
    }

    .btn-full {
        width: 100%;
        margin-top: 8px;
    }

    .form-note {
        font-size: 0.8rem;
        color: var(--text-dim);
        text-align: center;
        margin-top: 16px;
    }

    .form-note a {
        color: var(--cyan);
        text-decoration: none;
    }

    .form-note a:hover {
        text-decoration: underline;
    }

    /* Success/Error Messages */
    .form-success,
    .form-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px 20px;
    }

    .success-icon,
    .error-icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .success-icon {
        background: rgba(40, 202, 66, 0.2);
        color: #28ca42;
        border: 1px solid rgba(40, 202, 66, 0.3);
    }

    .error-icon {
        background: rgba(255, 95, 87, 0.2);
        color: #ff5f57;
        border: 1px solid rgba(255, 95, 87, 0.3);
    }

    .form-success h3,
    .form-error h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    .form-success p,
    .form-error p {
        color: var(--text-muted);
        margin-bottom: 24px;
    }

    /* Contact Info */
    .contact-info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .info-card {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-lg);
        padding: 32px;
        transition: var(--transition);
    }

    .info-card:hover {
        border-color: var(--cyan);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
    }

    .info-card h3 {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--cyan);
    }

    .info-card h3 i {
        font-size: 1.3rem;
    }

    .info-card p {
        color: var(--text-muted);
        margin-bottom: 12px;
    }

    .contact-link {
        display: inline-block;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text-white);
        text-decoration: none;
        transition: var(--transition-fast);
        margin-bottom: 8px;
    }

    .contact-link:hover {
        color: var(--cyan);
    }

    .info-note {
        font-size: 0.85rem;
        color: var(--text-dim);
        margin: 0;
    }

    .availability {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 8px;
    }

    .avail-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid var(--card-border);
    }

    .avail-item:last-child {
        border-bottom: none;
    }

    .avail-day {
        color: var(--text-muted);
    }

    .avail-time {
        font-weight: 500;
        color: var(--text-white);
    }

    /* Services Offered */
    .services-offered {
        background: linear-gradient(135deg, var(--cyan-dim), var(--purple-dim));
        border: 1px solid rgba(0, 229, 255, 0.2);
    }

    .services-offered h3 {
        color: var(--text-white);
    }

    .services-list {
        list-style: none;
        margin-top: 16px;
    }

    .services-list li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .services-list li:last-child {
        border-bottom: none;
    }

    .services-list i {
        color: var(--cyan);
        font-size: 0.9rem;
        margin-top: 2px;
        flex-shrink: 0;
    }

    .services-list strong {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 2px;
    }

    .services-list span {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    /* FAQ Section */
    .faq-section {
        padding: 80px 0;
        background: rgba(0, 0, 0, 0.15);
    }

    .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
    }

    .faq-item {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        transition: var(--transition);
    }

    .faq-item:hover {
        border-color: var(--cyan);
    }

    .faq-item summary {
        padding: 24px;
        cursor: pointer;
        font-weight: 600;
        font-size: 1rem;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: var(--transition-fast);
    }

    .faq-item summary::-webkit-details-marker {
        display: none;
    }

    .faq-item summary::after {
        content: '+';
        font-size: 1.5rem;
        color: var(--cyan);
        transition: var(--transition-fast);
        font-weight: 300;
    }

    .faq-item[open] summary::after {
        transform: rotate(45deg);
    }

    .faq-item[open] summary {
        border-bottom: 1px solid var(--card-border);
    }

    .faq-item summary:focus {
        outline: none;
    }

    .faq-item p {
        padding: 0 24px 24px;
        color: var(--text-muted);
        line-height: 1.7;
        font-size: 0.95rem;
    }

    /* Highlight text */
    .highlight {
        background: linear-gradient(135deg, var(--cyan), var(--purple));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }

        .contact-form-wrapper {
            position: static;
        }
    }

    @media (max-width: 768px) {
        .form-row {
            grid-template-columns: 1fr;
        }

        .faq-grid {
            grid-template-columns: 1fr;
        }

        .contact-form-wrapper {
            padding: 24px;
        }
    }
`;
document.head.appendChild(contactStyle);