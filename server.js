const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const multer = require('multer');
const compression = require('compression'); // GZIP optimization
const db = require('./database');

const app = express();
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const HTTP_PORT = process.env.HTTP_PORT || 80;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Performance Middleware (GZIP)
app.use(compression());

// Static files (with cache strategy)
const cacheOptions = { maxAge: '30d' }; // Cache assets for 30 days
app.use(express.static(path.join(__dirname, 'public'), cacheOptions));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), cacheOptions));

// Uploads klasörünü oluştur
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer konfigürasyonu
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|webp|gif/;
        const ext = allowed.test(path.extname(file.originalname).toLowerCase());
        const mime = allowed.test(file.mimetype);
        if (ext && mime) cb(null, true);
        else cb(new Error('Sadece resim dosyaları yüklenebilir!'));
    }
});

// ==================== AUTH ====================

const ADMIN_PASSWORD = 'aygulspot123';

app.post('/api/auth/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.json({ success: true, token: 'admin-token-' + Date.now() });
    } else {
        res.status(401).json({ success: false, message: 'Hatalı şifre!' });
    }
});

// ==================== PRODUCTS ====================

// Ürünleri listele (filtreleme destekli)
app.get('/api/products', (req, res) => {
    try {
        let query = 'SELECT * FROM products WHERE active = 1';
        const params = [];

        if (req.query.category) {
            query += ' AND category = ?';
            params.push(req.query.category);
        }
        if (req.query.region) {
            query += ' AND region = ?';
            params.push(req.query.region);
        }
        if (req.query.minPrice) {
            query += ' AND price >= ?';
            params.push(Number(req.query.minPrice));
        }
        if (req.query.maxPrice) {
            query += ' AND price <= ?';
            params.push(Number(req.query.maxPrice));
        }
        if (req.query.featured) {
            query += ' AND featured = 1';
        }
        if (req.query.search) {
            query += ' AND (title LIKE ? OR description LIKE ?)';
            const search = `%${req.query.search}%`;
            params.push(search, search);
        }

        query += ' ORDER BY created_at DESC';

        if (req.query.limit) {
            query += ' LIMIT ?';
            params.push(Number(req.query.limit));
        }

        const products = db.prepare(query).all(...params);
        
        // Parse images JSON
        const parsed = products.map(p => ({
            ...p,
            images: JSON.parse(p.images || '[]')
        }));

        res.json(parsed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Tek ürün
app.get('/api/products/:id', (req, res) => {
    try {
        const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        if (!product) return res.status(404).json({ error: 'Ürün bulunamadı' });
        product.images = JSON.parse(product.images || '[]');
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ürün ekle
app.post('/api/products', (req, res) => {
    try {
        const { title, category, price, description, condition, region, images, featured } = req.body;
        const result = db.prepare(`
            INSERT INTO products (title, category, price, description, condition, region, images, featured)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `).run(title, category, price || null, description || '', condition || 'temiz', region || '', JSON.stringify(images || []), featured ? 1 : 0);

        res.json({ success: true, id: result.lastInsertRowid });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ürün güncelle
app.put('/api/products/:id', (req, res) => {
    try {
        const { title, category, price, description, condition, region, images, featured, active } = req.body;
        db.prepare(`
            UPDATE products SET title=?, category=?, price=?, description=?, condition=?, region=?, images=?, featured=?, active=?, updated_at=CURRENT_TIMESTAMP
            WHERE id=?
        `).run(title, category, price || null, description || '', condition || 'temiz', region || '', JSON.stringify(images || []), featured ? 1 : 0, active !== undefined ? (active ? 1 : 0) : 1, req.params.id);

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ürün sil
app.delete('/api/products/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM products WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== UPLOAD ====================

app.post('/api/upload', upload.array('images', 10), (req, res) => {
    try {
        const paths = req.files.map(f => '/uploads/' + f.filename);
        res.json({ success: true, paths });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== GALLERY ====================

app.get('/api/gallery', (req, res) => {
    try {
        let query = 'SELECT * FROM gallery';
        const params = [];
        if (req.query.category) {
            query += ' WHERE category = ?';
            params.push(req.query.category);
        }
        query += ' ORDER BY created_at DESC';
        const items = db.prepare(query).all(...params);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/gallery', (req, res) => {
    try {
        const { image_path, caption, category } = req.body;
        const result = db.prepare('INSERT INTO gallery (image_path, caption, category) VALUES (?, ?, ?)').run(image_path, caption || '', category || '');
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/gallery/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM gallery WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== MESSAGES ====================

app.get('/api/messages', (req, res) => {
    try {
        const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/messages', (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        if (!name || !message) return res.status(400).json({ error: 'İsim ve mesaj zorunludur.' });
        db.prepare('INSERT INTO messages (name, phone, email, message) VALUES (?, ?, ?, ?)').run(name, phone || '', email || '', message);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/messages/:id/read', (req, res) => {
    try {
        db.prepare('UPDATE messages SET read = 1 WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== STATS ====================

app.get('/api/stats', (req, res) => {
    try {
        const products = db.prepare('SELECT COUNT(*) as count FROM products WHERE active = 1').get();
        const messages = db.prepare('SELECT COUNT(*) as count FROM messages WHERE read = 0').get();
        const gallery = db.prepare('SELECT COUNT(*) as count FROM gallery').get();
        res.json({
            products: products.count,
            unreadMessages: messages.count,
            gallery: gallery.count
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ==================== ALL PRODUCTS (Admin) ====================
app.get('/api/admin/products', (req, res) => {
    try {
        const products = db.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
        const parsed = products.map(p => ({
            ...p,
            images: JSON.parse(p.images || '[]')
        }));
        res.json(parsed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// SPA fallback — ana sayfaya yönlendir
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// SSL Seçenekleri
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
};

// HTTPS Sunucusu Başlat
https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
    console.log(`\n🔒 Aygül Spot HTTPS sunucusu çalışıyor: https://localhost:${HTTPS_PORT}\n`);
});
