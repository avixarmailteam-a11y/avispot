const { DatabaseSync: Database } = require('node:sqlite');
const path = require('path');
const fs = require('fs');

// data klasörünü oluştur
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(path.join(dataDir, 'avispot.db'));

// WAL mode for better performance
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

// Tabloları oluştur
db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL,
        description TEXT,
        condition TEXT DEFAULT 'temiz',
        region TEXT,
        images TEXT DEFAULT '[]',
        featured INTEGER DEFAULT 0,
        active INTEGER DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image_path TEXT NOT NULL,
        caption TEXT,
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT,
        email TEXT,
        message TEXT,
        read INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

// Demo ürünler ekle (eğer boşsa)
const count = db.prepare('SELECT COUNT(*) as count FROM products').get();
if (count.count === 0) {
    const insertProduct = db.prepare(`
        INSERT INTO products (title, category, price, description, condition, region, images, featured)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const demoProducts = [
        {
            title: 'İkinci El L Koltuk Takımı',
            category: 'salon-takimi',
            price: 8500,
            description: 'Çok temiz durumda, 3+3+1 L koltuk takımı. Kumaş döşeme, leke ve yırtık yok. Kahverengi tonlarında.',
            condition: 'temiz',
            region: 'Melikgazi',
            images: '[]',
            featured: 1
        },
        {
            title: 'Arçelik Buzdolabı No Frost',
            category: 'buzdolabi',
            price: 5200,
            description: 'Arçelik marka, No Frost teknolojisi, 540 litre kapasite. 2 yıl kullanılmış, sorunsuz çalışıyor.',
            condition: 'az kullanılmış',
            region: 'Talas',
            images: '[]',
            featured: 1
        },
        {
            title: 'Samsung 55" Smart TV',
            category: 'televizyon',
            price: 7800,
            description: 'Samsung 55 inç 4K Ultra HD Smart TV. Wi-Fi destekli, Netflix ve YouTube uygulamaları mevcut.',
            condition: 'temiz',
            region: 'İldem',
            images: '[]',
            featured: 1
        },
        {
            title: 'Yatak Odası Takımı (6 Parça)',
            category: 'yatak-odasi',
            price: 12000,
            description: '6 parça yatak odası takımı: çift kişilik karyola, şifonyer, makyaj masası, 2 komodin, gardırop. Ceviz rengi.',
            condition: 'temiz',
            region: 'Erkilet',
            images: '[]',
            featured: 1
        },
        {
            title: 'Beko Çamaşır Makinesi 9 KG',
            category: 'beyaz-esya',
            price: 4300,
            description: 'Beko 9 KG çamaşır makinesi, 1200 devir, A+++ enerji sınıfı. Garantisi devam ediyor.',
            condition: 'az kullanılmış',
            region: 'Hacılar',
            images: '[]',
            featured: 1
        },
        {
            title: 'Yemek Odası Takımı',
            category: 'mobilya',
            price: 6500,
            description: 'Masa + 6 sandalye + konsol + ayna seti. Klasik model, masif ahşap, çok az çizik var.',
            condition: 'iyi',
            region: 'Melikgazi',
            images: '[]',
            featured: 1
        },
        {
            title: 'Vestel Bulaşık Makinesi',
            category: 'beyaz-esya',
            price: 3200,
            description: 'Vestel bulaşık makinesi, 5 programlı, sessiz çalışma. Beyaz renk.',
            condition: 'temiz',
            region: 'Belsin',
            images: '[]',
            featured: 0
        },
        {
            title: 'Ofis Çalışma Masası',
            category: 'mobilya',
            price: 1800,
            description: '140x60 cm çalışma masası, çekmeceli, beyaz renk. Home-office için ideal.',
            condition: 'temiz',
            region: 'Altınoluk',
            images: '[]',
            featured: 0
        },
        {
            title: 'LG 43" LED TV',
            category: 'televizyon',
            price: 4500,
            description: 'LG 43 inç Full HD LED TV. Kumanda dahil, duvar askı aparatı hediye.',
            condition: 'az kullanılmış',
            region: 'Talas',
            images: '[]',
            featured: 0
        },
        {
            title: 'Bosch Buzdolabı Kombi',
            category: 'buzdolabi',
            price: 6800,
            description: 'Bosch kombi tipi buzdolabı, 450 litre, gümüş renk. Çok temiz, 3 yıllık.',
            condition: 'temiz',
            region: 'Develi',
            images: '[]',
            featured: 0
        },
        {
            title: 'Chester Koltuk Takımı',
            category: 'salon-takimi',
            price: 15000,
            description: '3+2+1 Chester koltuk takımı, hakiki deri, yeşil renk. Lüks ve şık.',
            condition: 'temiz',
            region: 'Mimsin',
            images: '[]',
            featured: 0
        },
        {
            title: 'Genç Odası Takımı',
            category: 'yatak-odasi',
            price: 5500,
            description: 'Ranza, çalışma masası, gardırop ve komodin seti. Mavi-beyaz renk kombinasyonu.',
            condition: 'iyi',
            region: 'Melikgazi',
            images: '[]',
            featured: 0
        }
    ];

    db.exec('BEGIN TRANSACTION');
    try {
        for (const p of demoProducts) {
            insertProduct.run(p.title, p.category, p.price, p.description, p.condition, p.region, p.images, p.featured);
        }
        db.exec('COMMIT');
    } catch (err) {
        db.exec('ROLLBACK');
        console.error('Demo data insertion failed', err);
    }
    console.log('✅ Demo ürünler eklendi.');
}

module.exports = db;
