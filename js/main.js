/* ===================================
   JULIANA MIRANDA ESTÉTICA - JAVASCRIPT OTIMIZADO
   Versão otimizada para melhor performance em mobile
   =================================== */

// ===================================
// 1. DETECÇÃO E CONFIGURAÇÕES
// ===================================

const CONFIG = {
    whatsappNumber: '5554991390263',
    companyName: 'Juliana Miranda Estética',
    email: 'julianapaiva533@gmail.com',
    phone: '(54) 99139-0263',
    address: 'Rua Rui Barbosa, 247, Centro - Farroupilha/RS',
    
    // Detecção de dispositivo
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isLowEnd: navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    
    // Animações adaptativas
    get animationDuration() {
        if (this.prefersReducedMotion) return 0;
        if (this.isMobile && this.isLowEnd) return 200;
        if (this.isMobile) return 300;
        return 600;
    },
    
    get scrollOffset() {
        return this.isMobile ? 70 : 100;
    },
    
    // Debounce/throttle adaptativo
    get debounceDelay() {
        return this.isMobile ? 200 : 100;
    },
    
    messages: {
        success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
        validation: 'Por favor, preencha todos os campos obrigatórios.',
        whatsapp: 'Olá! Vim através do site e gostaria de agendar uma avaliação.'
    }
};

// ===================================
// 2. UTILITÁRIOS OTIMIZADOS
// ===================================

const Utils = {
    // Cache de elementos
    _elementCache: new Map(),
    
    // Query otimizado com cache
    getElement(selector, useCache = true) {
        if (!useCache) return document.querySelector(selector);
        
        if (!this._elementCache.has(selector)) {
            this._elementCache.set(selector, document.querySelector(selector));
        }
        return this._elementCache.get(selector);
    },
    
    // Throttle (limita execuções)
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Debounce otimizado
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },
    
    // Formatar telefone (simplificado)
    formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 11) {
            return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        return phone;
    },
    
    // Validar email (simples e rápido)
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // Notificação otimizada
    showNotification(message, type = 'success') {
        // Remover notificação existente
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Fechar">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Forçar reflow antes de animar
        notification.offsetHeight;
        notification.classList.add('show');
        
        // Auto remover
        const timer = setTimeout(() => notification.remove(), 5000);
        
        // Botão fechar
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(timer);
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, { once: true });
    },
    
    // Scroll suave nativo (muito mais performático)
    smoothScroll(target) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return;
        
        const top = element.getBoundingClientRect().top + window.pageYOffset - CONFIG.scrollOffset;
        
        window.scrollTo({
            top,
            behavior: CONFIG.prefersReducedMotion ? 'auto' : 'smooth'
        });
    }
};

// ===================================
// 3. HEADER E NAVEGAÇÃO OTIMIZADO
// ===================================

class Navigation {
    constructor() {
        this.header = Utils.getElement('#header');
        this.navMenu = Utils.getElement('#nav-menu');
        this.navToggle = Utils.getElement('#nav-toggle');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.isMenuOpen = false;
        this.lastScroll = 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Toggle do menu
        this.navToggle?.addEventListener('click', () => this.toggleMenu());
        
        // Links de navegação
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                Utils.smoothScroll(target);
                if (this.isMenuOpen) this.closeMenu();
            });
        });
        
        // Scroll otimizado com throttle
        if (!CONFIG.isMobile || !CONFIG.isLowEnd) {
            window.addEventListener('scroll', 
                Utils.throttle(() => this.handleScroll(), 100), 
                { passive: true }
            );
        }
        
        // Resize apenas em desktop
        if (!CONFIG.isMobile) {
            window.addEventListener('resize', 
                Utils.debounce(() => this.handleResize(), 250)
            );
        }
        
        // Fechar menu ao clicar fora (só mobile)
        if (CONFIG.isMobile) {
            document.addEventListener('click', (e) => {
                if (this.isMenuOpen && 
                    !this.navMenu.contains(e.target) && 
                    !this.navToggle.contains(e.target)) {
                    this.closeMenu();
                }
            }, { passive: true });
        }
    }
    
    toggleMenu() {
        this.isMenuOpen ? this.closeMenu() : this.openMenu();
    }
    
    openMenu() {
        this.navMenu.classList.add('active');
        this.navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isMenuOpen = true;
    }
    
    closeMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
        this.isMenuOpen = false;
    }
    
    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Apenas adiciona classe se scrollou mais de 50px
        if (currentScroll > 50 && currentScroll > this.lastScroll) {
            this.header.classList.add('scrolled');
        } else if (currentScroll < 50) {
            this.header.classList.remove('scrolled');
        }
        
        this.lastScroll = currentScroll;
    }
    
    handleResize() {
        if (window.innerWidth > 768 && this.isMenuOpen) {
            this.closeMenu();
        }
    }
}

// ===================================
// 4. ANIMAÇÕES AO SCROLL (INTERSECTION OBSERVER)
// ===================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        if (this.elements.length === 0 || CONFIG.prefersReducedMotion) return;
        
        this.init();
    }
    
    init() {
        const options = {
            root: null,
            rootMargin: CONFIG.isMobile ? '0px' : '50px',
            threshold: CONFIG.isMobile ? 0.1 : 0.2
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
        
        this.elements.forEach(el => this.observer.observe(el));
    }
    
    animateElement(element) {
        const delay = element.getAttribute('data-delay') || 0;
        
        if (CONFIG.prefersReducedMotion || delay === 0) {
            element.classList.add('animated');
        } else {
            setTimeout(() => element.classList.add('animated'), delay);
        }
    }
}

// ===================================
// 5. FORMULÁRIO OTIMIZADO
// ===================================

class ContactForm {
    constructor() {
        this.form = Utils.getElement('#contactForm');
        if (!this.form) return;
        
        this.isSubmitting = false;
        this.init();
    }
    
    init() {
        // Submit
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Formatar telefone com debounce
        const phoneInput = this.form.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', 
                Utils.debounce((e) => {
                    e.target.value = Utils.formatPhone(e.target.value);
                }, 300)
            );
        }
        
        // Validação apenas no blur (não em tempo real)
        const inputs = this.form.querySelectorAll('input[required], select[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input), { once: false });
            input.addEventListener('focus', () => this.clearError(input), { once: false });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        } else if (field.type === 'email' && value && !Utils.validateEmail(value)) {
            isValid = false;
        } else if (field.type === 'tel' && value && value.replace(/\D/g, '').length < 10) {
            isValid = false;
        }
        
        field.closest('.form-group')?.classList.toggle('error', !isValid);
        return isValid;
    }
    
    clearError(field) {
        field.closest('.form-group')?.classList.remove('error');
    }
    
    validateForm() {
        const fields = this.form.querySelectorAll('[required]');
        return Array.from(fields).every(field => this.validateField(field));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (this.isSubmitting) return;
        
        if (!this.validateForm()) {
            Utils.showNotification(CONFIG.messages.validation, 'error');
            return;
        }
        
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        this.isSubmitting = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());
            
            await this.sendForm(data);
            
            Utils.showNotification(CONFIG.messages.success, 'success');
            this.form.reset();
            
            if (data.service) {
                setTimeout(() => this.sendToWhatsApp(data), 500);
            }
            
        } catch (error) {
            Utils.showNotification(CONFIG.messages.error, 'error');
            console.error('Erro:', error);
        } finally {
            this.isSubmitting = false;
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }
    
    async sendForm(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Dados:', data);
                resolve();
            }, 1500);
        });
    }
    
    sendToWhatsApp(data) {
        const services = {
            'design-sobrancelhas': 'Design de Sobrancelhas',
            'lash-lifting': 'Lash Lifting',
            'brow-lamination': 'Brow Lamination',
            'epilacao-egipcia': 'Epilação Egípcia',
            'outro': 'Outro serviço'
        };
        
        const message = `Olá! Meu nome é ${data.name}. Gostaria de agendar um horário para ${services[data.service] || 'serviço'}.\n\nTelefone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ''}${data.message ? `\n\nMensagem: ${data.message}` : ''}`;
        
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ===================================
// 6. WHATSAPP INTEGRATION
// ===================================

class WhatsAppIntegration {
    constructor() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Delegação de eventos (mais performático)
        document.addEventListener('click', (e) => {
            const button = e.target.closest('[href*="wa.me"], .btn-whatsapp, [data-whatsapp-text]');
            if (!button) return;
            
            if (button.classList.contains('btn-whatsapp') || button.classList.contains('whatsapp-float')) {
                e.preventDefault();
                const text = button.getAttribute('data-whatsapp-text') || CONFIG.messages.whatsapp;
                this.openWhatsApp(text);
            }
        });
    }
    
    openWhatsApp(text = CONFIG.messages.whatsapp) {
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }
}

// ===================================
// 7. GALERIA (LAZY INITIALIZATION)
// ===================================

class BeforeAfterGallery {
    constructor() {
        this.gallery = Utils.getElement('.before-after-grid');
        if (!this.gallery) return;
        
        this.lightbox = null;
        this.bindEvents();
    }
    
    bindEvents() {
        // Delegação de eventos
        this.gallery.addEventListener('click', (e) => {
            const img = e.target.closest('.image-container img');
            if (img) this.openLightbox(img);
        });
    }
    
    createLightbox() {
        if (this.lightbox) return;
        
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Fechar">&times;</button>
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(this.lightbox);
        
        // Eventos do lightbox
        this.lightbox.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox') || 
                e.target.classList.contains('lightbox-close')) {
                this.closeLightbox();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
                this.closeLightbox();
            }
        });
    }
    
    openLightbox(img) {
        this.createLightbox();
        
        const lightboxImg = this.lightbox.querySelector('.lightbox-image');
        const lightboxCaption = this.lightbox.querySelector('.lightbox-caption');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        const description = img.closest('.before-after-item')?.querySelector('.before-after-description h4');
        if (description) {
            lightboxCaption.textContent = description.textContent;
        }
        
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// 8. PERFORMANCE OPTIMIZER
// ===================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        
        // Outras otimizações apenas se necessário
        if (CONFIG.prefersReducedMotion) {
            this.disableAnimations();
        }
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        if (images.length === 0) return;
        
        if ('loading' in HTMLImageElement.prototype) {
            // Usa loading nativo se disponível
            images.forEach(img => {
                img.src = img.dataset.src;
                img.loading = 'lazy';
                img.classList.remove('lazy');
            });
        } else if ('IntersectionObserver' in window) {
            // Fallback para IntersectionObserver
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback total
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }
    
    disableAnimations() {
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-normal', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
}

// ===================================
// 9. INICIALIZAÇÃO OTIMIZADA
// ===================================

function initApp() {
    // Componentes essenciais primeiro
    new Navigation();
    new WhatsAppIntegration();
    
    // Componentes secundários depois
    requestIdleCallback(() => {
        new ScrollAnimations();
        new ContactForm();
        new BeforeAfterGallery();
        new PerformanceOptimizer();
    }, { timeout: 2000 });
    
    // Marcar como carregado
    document.body.classList.add('loaded');
    
    // Remover preloader
    const preloader = Utils.getElement('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 300);
        }, 300);
    }
}

// Usar DOMContentLoaded ou imediato
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Fallback para requestIdleCallback
window.requestIdleCallback = window.requestIdleCallback || function(cb) {
    const start = Date.now();
    return setTimeout(() => {
        cb({
            didTimeout: false,
            timeRemaining() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
