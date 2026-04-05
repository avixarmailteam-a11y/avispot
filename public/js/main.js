/* ============================================
   AYGÜL SPOT — main.js
   Ortak header, footer, WhatsApp butonu, scroll animasyonları
   ============================================ */

const PHONE = '05393190959';
const PHONE_DISPLAY = '0539 319 09 59';
const WHATSAPP_MESSAGE = 'Merhaba, Aygül Spot\'tan bilgi almak istiyorum.';
const ADDRESS = 'Tacettin Veli Mah. Deliklitaş Cd. No:29/C Melikgazi / Kayseri';

const CATEGORIES = [
    { slug: 'mobilya', name: 'İkinci El Mobilya', icon: '🪑' },
    { slug: 'buzdolabi', name: 'İkinci El Buzdolabı', icon: '🧊' },
    { slug: 'beyaz-esya', name: 'İkinci El Beyaz Eşya', icon: '🏠' },
    { slug: 'televizyon', name: 'İkinci El Televizyon', icon: '📺' },
    { slug: 'yatak-odasi', name: 'İkinci El Yatak Odası', icon: '🛏️' },
    { slug: 'salon-takimi', name: 'İkinci El Salon Takımı', icon: '🛋️' },
    { slug: 'spot-esya', name: 'Spot Eşya', icon: '📦' },
    { slug: 'nakliyat', name: 'Şehir İçi Nakliyat', icon: '🚛' }
];

const REGIONS = [
    'Talas', 'İldem', 'Erkilet', 'Melikgazi', 'Hacılar',
    'Develi', 'Belsin', 'Altınoluk', 'Mimsin'
];

// Hangi sayfa aktif?
function getActivePage() {
    const path = window.location.pathname;
    if (path === '/' || path.endsWith('index.html') && !path.includes('admin')) return 'home';
    if (path.includes('hizmetlerimiz')) return 'hizmetlerimiz';
    if (path.includes('urun-listesi')) return 'urunler';
    if (path.includes('galeri')) return 'galeri';
    if (path.includes('hakkimizda')) return 'hakkimizda';
    if (path.includes('iletisim')) return 'iletisim';
    return '';
}

// Header oluştur
function injectHeader() {
    const active = getActivePage();
    const header = document.createElement('header');
    header.className = 'site-header';
    header.id = 'site-header';
    header.innerHTML = `
        <div class="header-inner">
            <a href="/" class="logo" aria-label="Aygül Spot Ana Sayfa">
                <div class="logo-icon">A</div>
                <span>Aygül Spot</span>
            </a>
            <nav>
                <ul class="nav-links" id="nav-links">
                    <li><a href="/" class="${active === 'home' ? 'active' : ''}">Ana Sayfa</a></li>
                    <li><a href="/hizmetlerimiz.html" class="${active === 'hizmetlerimiz' ? 'active' : ''}">Hizmetlerimiz</a></li>
                    <li><a href="/urun-listesi.html" class="${active === 'urunler' ? 'active' : ''}">Satılık Eşyalar</a></li>
                    <li><a href="/galeri.html" class="${active === 'galeri' ? 'active' : ''}">Fotoğraflar</a></li>
                    <li><a href="/hakkimizda.html" class="${active === 'hakkimizda' ? 'active' : ''}">Kurumsal</a></li>
                    <li><a href="/iletisim.html" class="${active === 'iletisim' ? 'active' : ''}">İletişim</a></li>
                </ul>
            </nav>

            <button class="hamburger" id="hamburger" aria-label="Menü">
                <span></span><span></span><span></span>
            </button>
        </div>
        <div class="nav-overlay" id="nav-overlay"></div>
    `;
    document.body.prepend(header);

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Sticky header scroll effect (optimized to avoid forced reflows)
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// Footer oluştur
function injectFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="/" class="logo" style="color:white;margin-bottom:0.5rem;display:inline-flex">
                    <div class="logo-icon">A</div>
                    <span>Aygül Spot</span>
                </a>
                <p>Kayseri'nin en güvenilir ikinci el eşya mağazası. Mobilya, beyaz eşya, televizyon ve daha fazlasında en uygun fiyatlarla hizmetinizdeyiz. Nakit ödeme, ücretsiz nakliyat.</p>
                <div class="footer-social">
                    <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://wa.me/90${PHONE}" target="_blank" rel="noopener" aria-label="WhatsApp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h2 class="footer-heading">Hızlı Linkler</h2>
                <ul class="footer-links">
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/urun-listesi.html">Satılık Eşyalar</a></li>
                    <li><a href="/hizmetlerimiz.html">Hizmetlerimiz</a></li>
                    <li><a href="/hakkimizda.html">Kurumsal</a></li>
                    <li><a href="/galeri.html">Fotoğraflar</a></li>
                    <li><a href="/iletisim.html">İletişim</a></li>
                </ul>
            </div>
            <div>
                <h2 class="footer-heading">Bölgelerimiz</h2>
                <ul class="footer-links">
                    ${REGIONS.map(r => {
                        const slug = r.toLowerCase().replace(/ı/g,'i').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ç/g,'c');
                        return `<li><a href="/${slug}-ikinci-el-esya.html">${r} İkinci El Eşya</a></li>`;
                    }).join('')}
                </ul>
            </div>
            <div>
                <h2 class="footer-heading">İletişim</h2>
                <div class="footer-contact-item">
                    <span>📍</span>
                    <span>${ADDRESS}</span>
                </div>
                <div class="footer-contact-item">
                    <span>📞</span>
                    <a href="tel:+90${PHONE}" style="color:rgba(255,255,255,0.75);text-decoration:none">${PHONE_DISPLAY}</a>
                </div>
                <div class="footer-contact-item">
                    <span>💬</span>
                    <a href="https://wa.me/90${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}" target="_blank" style="color:rgba(255,255,255,0.75);text-decoration:none">WhatsApp ile Yazın</a>
                </div>
                <div class="footer-contact-item">
                    <span>🕒</span>
                    <span>Pazartesi - Cumartesi: 09:00 - 19:00</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Aygül Spot — Kayseri İkinci El Eşya. Tüm hakları saklıdır.</p>
            <p style="margin-top: 0.5rem; font-size: 0.8rem; color: rgba(255,255,255,0.5);">Aygül Spot & Avixar Software İş Birliği ile Hazırlanmıştır.</p>
        </div>
    `;
    document.body.appendChild(footer);
}

// WhatsApp floating buton
function injectWhatsApp() {
    const btn = document.createElement('a');
    btn.href = `https://wa.me/90${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.className = 'whatsapp-float';
    btn.setAttribute('aria-label', 'WhatsApp ile iletişim');
    btn.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
    document.body.appendChild(btn);
}

// Scroll animasyonları
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.fade-in, .stagger').forEach(el => observer.observe(el));
}

// Toast mesaj göster
function showToast(message, type = '') {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast ' + type;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Para formatı
function formatPrice(price) {
    if (!price) return 'Fiyat Sorunuz';
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Kategori adı
function getCategoryName(slug) {
    const cat = CATEGORIES.find(c => c.slug === slug);
    return cat ? cat.name : slug;
}

// Kategori ikonu
function getCategoryIcon(slug) {
    const cat = CATEGORIES.find(c => c.slug === slug);
    return cat ? cat.icon : '📦';
}

// WhatsApp link oluştur
function getWhatsAppLink(productTitle) {
    const msg = productTitle
        ? `Merhaba, "${productTitle}" ürünü hakkında bilgi almak istiyorum.`
        : WHATSAPP_MESSAGE;
    return `https://wa.me/90${PHONE}?text=${encodeURIComponent(msg)}`;
}

// Ürün kartı HTML oluştur
function createProductCardHTML(product) {
    const img = product.images && product.images.length > 0
        ? `<img src="${product.images[0]}" alt="${product.title}" loading="lazy">`
        : `<div class="product-placeholder">${getCategoryIcon(product.category)}</div>`;

    return `
        <article class="product-card">
            <div class="product-image">
                ${img}
                <span class="product-badge">${getCategoryName(product.category)}</span>
                ${product.condition ? `<span class="product-badge condition">${product.condition}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="desc">${product.description || ''}</p>
                <div class="product-meta">
                    ${product.region ? `<span>📍 ${product.region}</span>` : ''}
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <a href="${getWhatsAppLink(product.title)}" target="_blank" class="btn-whatsapp-sm">💬 WhatsApp</a>
                    <a href="tel:+90${PHONE}" class="btn-detail">📞 Ara</a>
                </div>
            </div>
        </article>
    `;
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Admin sayfasında header/footer inject etme
    if (!window.location.pathname.includes('admin')) {
        injectHeader();
        injectFooter();
        injectWhatsApp();
    }
    
    // Scroll animasyonlarını başlat
    setTimeout(initScrollAnimations, 100);
});
