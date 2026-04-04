/* ============================================
   AYGÜL SPOT — gallery.js
   Galeri Listeleme ve Lightbox mantığı
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const noPhotosState = document.getElementById('no-photos');
    const loadingSpinner = document.getElementById('loading');
    
    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    async function fetchGallery() {
        try {
            galleryGrid.style.display = 'none';
            noPhotosState.style.display = 'none';
            loadingSpinner.style.display = 'block';

            const res = await fetch('/api/gallery');
            if (!res.ok) throw new Error('API Hatası: ' + res.status);
            const items = await res.json();

            loadingSpinner.style.display = 'none';

            if (items.length === 0) {
                noPhotosState.style.display = 'block';
            } else {
                galleryGrid.style.display = 'grid';
                galleryGrid.innerHTML = items.map(item => `
                    <div class="gallery-item" onclick="openLightbox('${item.image_path}')">
                        <img src="${item.image_path}" alt="${item.caption || 'Aygül Spot Galeri'}" loading="lazy">
                        ${item.caption ? `
                            <div class="gallery-overlay">
                                <span>${item.caption}</span>
                            </div>
                        ` : ''}
                    </div>
                `).join('');
                galleryGrid.classList.add('visible');
            }
        } catch (error) {
            console.error('Galeri yükleme hatası:', error);
            loadingSpinner.style.display = 'none';
            showToast('Fotoğraflar yüklenirken bir hata oluştu.', 'error');
        }
    }

    // Lightbox functions
    window.openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    fetchGallery();
});
