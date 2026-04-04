/* ============================================
   AYGÜL SPOT — admin.js
   Yönetim Paneli Mantığı
   ============================================ */

const TOKEN_KEY = 'aygul_spot_admin_token';
let productImagesTemp = []; // Geçici resim yollarını tutar

document.addEventListener('DOMContentLoaded', () => {
    // 1. Auth Kontrolü
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('admin-container').style.display = 'none';
    } else {
        showDashboard();
    }

    // Login Form
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const pwd = document.getElementById('password').value;
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ password: pwd })
            });
            const data = await res.json();
            if (data.success) {
                sessionStorage.setItem(TOKEN_KEY, data.token);
                showToast('Giriş başarılı!', 'success');
                showDashboard();
            } else {
                showToast('Şifre hatalı.', 'error');
            }
        } catch (error) {
            showToast('Sunucu hatası.', 'error');
        }
    });

    // Logout
    document.getElementById('btn-logout').addEventListener('click', () => {
        sessionStorage.removeItem(TOKEN_KEY);
        window.location.reload();
    });

    // Sekmeler arası geçiş
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-panel-section').forEach(s => s.classList.remove('active'));
            
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.target).classList.add('active');
        });
    });

    // Ürün Resmi Yükleme Dinleyicisi
    document.getElementById('p-image-upload').addEventListener('change', async (e) => {
        const files = e.target.files;
        if (!files.length) return;
        
        showToast('Resimler yükleniyor...', '');
        const currentPaths = await uploadFiles(files);
        if (currentPaths.length) {
            productImagesTemp = [...productImagesTemp, ...currentPaths];
            renderImagePreviews();
            showToast('Resimler yüklendi.', 'success');
        }
    });
});

// Admin Paneli Göster & Verileri Yükle
async function showDashboard() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-container').style.display = 'block';

    await loadStats();
    await loadProducts();
    await loadGallery();
    await loadMessages();
}

// Stats
async function loadStats() {
    try {
        const res = await fetch('/api/stats');
        const stats = await res.json();
        document.getElementById('stat-products').innerText = stats.products;
        document.getElementById('stat-messages').innerText = stats.unreadMessages;
        document.getElementById('stat-gallery').innerText = stats.gallery;
    } catch (e) {
        console.error(e);
    }
}

// Ortak Upload Fonksiyonu
async function uploadFiles(files) {
    const formData = new FormData();
    for(let f of files) formData.append('images', f);
    
    try {
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if(data.success) return data.paths;
        return [];
    } catch(e) {
        showToast('Yükleme hatası', 'error');
        return [];
    }
}

// ==========================================
// ÜRÜNLER
// ==========================================
async function loadProducts() {
    try {
        const res = await fetch('/api/admin/products');
        const prods = await res.json();
        const tbody = document.getElementById('admin-products-table');
        
        tbody.innerHTML = prods.map(p => `
            <tr>
                <td>${p.id}</td>
                <td><img src="${p.images?.[0] || '/img/placeholder.jpg'}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;"></td>
                <td style="font-weight:600;">${p.title}</td>
                <td>${p.category}</td>
                <td>${p.price ? p.price+' ₺' : '-'}</td>
                <td>${p.region || '-'}</td>
                <td>
                    ${p.active ? '<span style="color:var(--success);font-weight:bold;">Aktif</span>' : '<span style="color:var(--text-gray);">Pasif</span>'}
                    ${p.featured ? '<span style="font-size:0.8rem;background:var(--warning);color:white;padding:2px 6px;border-radius:10px;">Öne Çıkan</span>' : ''}
                </td>
                <td>
                    <div class="table-actions">
                        <button class="btn-edit" onclick='editProduct(${JSON.stringify(p).replace(/'/g, "&apos;")})'>Düzenle</button>
                        <button class="btn-delete" onclick="deleteProduct(${p.id})">Sil</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (e) { console.error(e); }
}

function openProductModal() {
    document.getElementById('product-form').reset();
    document.getElementById('p-id').value = '';
    document.getElementById('product-modal-title').innerText = 'Yeni Ürün Ekle';
    
    // Checkboxların varsayılan değeri ürün eklerken aktiftir. 
    // HTML'de id="p-active", ancak active 1 ise checked olmalı.
    // HTML formunda label "Aktif Değil (Satıldı)" olmamalı, "Aktif" olmalı. Düzelttik: "Aktif (Sitede görünür)"
    // Ancak tasarıma göre "Aktif (Sitede görünür)" demek daha net. Biz js'den p-active.checked = true yapacağız.
    document.getElementById('p-active').checked = true;
    
    productImagesTemp = [];
    renderImagePreviews();
    document.getElementById('product-modal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

function renderImagePreviews() {
    const container = document.getElementById('p-image-previews');
    container.innerHTML = productImagesTemp.map((path, idx) => `
        <div class="preview-item">
            <img src="${path}">
            <button type="button" class="remove-btn" onclick="removeTempImage(${idx})">X</button>
        </div>
    `).join('');
}

window.removeTempImage = function(index) {
    productImagesTemp.splice(index, 1);
    renderImagePreviews();
}

function editProduct(p) {
    document.getElementById('p-id').value = p.id;
    document.getElementById('p-title').value = p.title;
    document.getElementById('p-category').value = p.category;
    document.getElementById('p-price').value = p.price || '';
    document.getElementById('p-condition').value = p.condition;
    document.getElementById('p-region').value = p.region;
    document.getElementById('p-description').value = p.description;
    
    document.getElementById('p-featured').checked = p.featured === 1;
    // Varsayılan id="p-active" : HTML de Aktif Değil yazmışım ama genelde "Aktif" checkbox id midir?
    // let's assume p-active checking means active = 1
    document.getElementById('p-active').checked = p.active === 1;
    
    productImagesTemp = p.images || [];
    renderImagePreviews();

    document.getElementById('product-modal-title').innerText = 'Ürünü Düzenle';
    document.getElementById('product-modal').classList.add('active');
}

document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('p-id').value;
    const isEdit = !!id;
    
    const payload = {
        title: document.getElementById('p-title').value,
        category: document.getElementById('p-category').value,
        price: document.getElementById('p-price').value,
        condition: document.getElementById('p-condition').value,
        region: document.getElementById('p-region').value,
        description: document.getElementById('p-description').value,
        featured: document.getElementById('p-featured').checked,
        active: document.getElementById('p-active').checked,
        images: productImagesTemp
    };

    try {
        const url = isEdit ? `/api/products/${id}` : `/api/products`;
        const method = isEdit ? 'PUT' : 'POST';

        const res = await fetch(url, {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        
        if (res.ok) {
            showToast('Ürün kaydedildi!', 'success');
            closeProductModal();
            loadProducts();
            loadStats();
        } else {
            showToast('Hata oluştu.', 'error');
        }
    } catch (e) {
        showToast('Sunucu hatası.', 'error');
    }
});

window.deleteProduct = async function(id) {
    if(!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
    try {
        const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
        if (res.ok) {
            showToast('Silindi.', 'success');
            loadProducts();
            loadStats();
        }
    } catch (e) {
        showToast('Silinemedi.', 'error');
    }
}

// ==========================================
// GALERİ
// ==========================================
async function loadGallery() {
    try {
        const res = await fetch('/api/gallery');
        const items = await res.json();
        const tbody = document.getElementById('admin-gallery-table');
        
        tbody.innerHTML = items.map(g => `
            <tr>
                <td>${g.id}</td>
                <td><img src="${g.image_path}" style="width:60px;height:40px;object-fit:cover;border-radius:4px;"></td>
                <td>${g.caption || '-'}</td>
                <td>${new Date(g.created_at).toLocaleDateString('tr-TR')}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn-delete" onclick="deleteGallery(${g.id})">Sil</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (e) {}
}

function openGalleryModal() {
    document.getElementById('gallery-form').reset();
    document.getElementById('gallery-modal').classList.add('active');
}

function closeGalleryModal() {
    document.getElementById('gallery-modal').classList.remove('active');
}

document.getElementById('gallery-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('g-image-upload');
    if (!fileInput.files.length) return;

    showToast('Yükleniyor...', '');
    const paths = await uploadFiles(fileInput.files);
    
    if (paths.length) {
        const caption = document.getElementById('g-caption').value;
        try {
            const res = await fetch('/api/gallery', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ image_path: paths[0], caption, category: '' })
            });
            if (res.ok) {
                showToast('Galeriye eklendi.', 'success');
                closeGalleryModal();
                loadGallery();
                loadStats();
            }
        } catch (e) {
            showToast('Hata!', 'error');
        }
    }
});

window.deleteGallery = async function(id) {
    if(!confirm('Fotoğrafı galeriden silmek istiyor musunuz?')) return;
    try {
        const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
        if (res.ok) {
            showToast('Silindi.', 'success');
            loadGallery();
            loadStats();
        }
    } catch (e) { }
}

// ==========================================
// MESAJLAR
// ==========================================
async function loadMessages() {
    try {
        const res = await fetch('/api/messages');
        const msgs = await res.json();
        const tbody = document.getElementById('admin-messages-table');
        
        tbody.innerHTML = msgs.map(m => `
            <tr style="${m.read ? 'opacity:0.6;' : 'font-weight:600; background:rgba(76,175,80,0.05);'}">
                <td>${m.read ? 'Okundu' : '<span style="color:var(--danger)">YENİ</span>'}</td>
                <td>${new Date(m.created_at).toLocaleString('tr-TR')}</td>
                <td>${m.name}</td>
                <td>${m.phone || '-'}<br><small>${m.email || ''}</small></td>
                <td><div style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.message}</div></td>
                <td>
                    <div class="table-actions">
                        <button class="btn-edit" onclick='viewMessage(${JSON.stringify(m).replace(/'/g, "&apos;")})'>Göster</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (e) {}
}

window.viewMessage = async function(msg) {
    document.getElementById('m-name').innerText = msg.name;
    document.getElementById('m-phone').innerText = msg.phone || '-';
    document.getElementById('m-email').innerText = msg.email || '-';
    document.getElementById('m-content').innerText = msg.message;
    
    document.getElementById('message-modal').classList.add('active');

    // Eğer okunmadıysa okundu yap
    if (!msg.read) {
        try {
            await fetch(`/api/messages/${msg.id}/read`, { method: 'PUT' });
            loadMessages();
            loadStats();
        } catch (e) {}
    }
};
