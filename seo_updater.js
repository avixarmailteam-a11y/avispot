const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const seoData = {
    "index.html": {
        title: "Aygül Spot — Kayseri İkinci El Eşya Alım Satım | En Yüksek Fiyat Garantisi",
        desc: "Kayseri'nin en güvenilir spot eşya mağazası! İkinci el mobilya, beyaz eşya, televizyon ve farklı eşyalar değerinde anında nakit alınır. Ücretsiz nakliyat fırsatını kaçırmayın."
    },
    "hizmetlerimiz.html": {
        title: "Hizmetlerimiz | Kayseri İkinci El Eşya Alım Satım ve Nakliyat",
        desc: "Kayseri içi ikinci el eşya, mobilya ve beyaz eşya alım satımı ile ücretsiz şehir içi nakliyat hizmetleri Aygül Spot kalitesiyle hizmetinizde."
    },
    "hakkimizda.html": {
        title: "Hakkımızda | Aygül Spot - Kayseri'nin En Köklü Spot Mağazası",
        desc: "Aygül Spot, yılların deneyimiyle Kayseri'de güvenilir ikinci el eşya hizmeti sunuyor. Nakit ödeme, ücretsiz taşıma ve müşteri memnuniyeti garantisi."
    },
    "iletisim.html": {
        title: "İletişim - Bize Ulaşın | Aygül Spot Kayseri",
        desc: "İkinci el eşyalarınızı satmak veya eşya satın almak için bizimle hemen iletişime geçin. Melikgazi/Kayseri mağazamız ve WhatsApp hattımız 7/24 hizmetinizde."
    },
    "urun-listesi.html": {
        title: "Satılık İkinci El Eşyalar - Uygun Fiyatlar | Aygül Spot",
        desc: "Kayseri ikinci el mobilya, buzdolabı, televizyon ve spot ürünlerimizde en uygun fiyat garantisi. Sürekli güncel stok, uygun fiyatlı ürün listemiz."
    },
    "galeri.html": {
        title: "Fotoğraflar - Mağazamız ve Ürünlerimiz | Aygül Spot",
        desc: "Aygül Spot Kayseri ikinci el eşya mağazamızdan kareler, güncel satılık eşyalarımızdan görüntüler."
    }
};

function formatTitle(filename) {
    if (seoData[filename]) return seoData[filename].title;
    let name = filename.replace('.html', '').replace(/-/g, ' ');
    name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    if(filename.includes('ikinci-el-esya') && !filename.includes('ikinci-el-esya.html')){
       return `${name} | Kayseri Spot Eşya Alanlar`;
    }
    
    return `${name} Alım Satım | Aygül Spot Kayseri (Nakit Ödeme)`;
}

function formatDesc(filename) {
    if (seoData[filename]) return seoData[filename].desc;
    let name = filename.replace('.html', '').replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    if (filename.includes('ikinci-el-esya')) {
        let region = filename.split('-')[0];
        region = region.charAt(0).toUpperCase() + region.slice(1);
        return `Kayseri ${region} bölgesinde ikinci el eşya, mobilya ve beyaz eşyalarınızı en iyi fiyata, kapınızdan nakit olarak satın alıyoruz. Hemen Aygül Spot'a ulaşın.`;
    }
    
    return `Kayseri'de ${name} arayanlar veya satmak isteyenler için adres Aygül Spot. Değerinde nakit ödeme ve aynı gün ücretsiz teslimat fırsatından yararlanın.`;
}

function getFAQSchema(filename) {
    return `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "İkinci el eşyalarımı nasıl satabilirim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eşyalarınızın fotoğraflarını WhatsApp hattımıza (0539 319 09 59) göndererek anında ücretsiz fiyat teklifi alabilirsiniz."
        }
      }, {
        "@type": "Question",
        "name": "Eşya taşıma (nakliye) ücretli mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır, Kayseri il sınırları içerisindeki tüm alım ve satımlarımızda nakliye hizmetimiz tamamen ücretsizdir."
        }
      }]
    }`;
}

const localBusinessSchema = `
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Aygül Spot",
        "description": "Kayseri'de değerinde nakit ikinci el eşya, mobilya ve beyaz eşya alım satımı yapan güvenilir spot mağazası.",
        "url": "https://aygulspot.com",
        "telephone": "+905393190959",
        "priceRange": "₺₺",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tacettin Veli Mah. Deliklitaş Cd. No:29/C",
            "addressLocality": "Melikgazi",
            "addressRegion": "Kayseri",
            "postalCode": "38030",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.7312,
            "longitude": 35.4784
        },
        "openingHours": "Mo-Sa 09:00-19:00",
        "image": "https://aygulspot.com/img/logo.png"
    }`;


function processFile(filePath, filename) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Update Title
    const newTitle = formatTitle(filename);
    content = content.replace(/<title>.*?<\/title>/s, `<title>${newTitle}</title>`);

    // 2. Update Description
    const newDesc = formatDesc(filename);
    if (content.includes('<meta name="description"')) {
        content = content.replace(/<meta name="description" content=".*?">/s, `<meta name="description" content="${newDesc}">`);
    } else {
        content = content.replace('</head>', `    <meta name="description" content="${newDesc}">\n</head>`);
    }
    
    // Inject Schema.org JSON-LD if not completely present
    if (!content.includes('"@type": "FAQPage"')) {
        let schemas = [];
        
        // Add LocalBusiness to all if not present in head script
        if (!content.includes('LocalBusiness')) {
            schemas.push(localBusinessSchema);
        }
        
        // Add Product schema for category files
        if (filename.includes('ikinci-el-') && !filename.includes('esya.html')) {
            let catName = filename.replace('.html', '').replace(/-/g, ' ').toUpperCase();
            schemas.push(`
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "${catName}",
                "description": "Kayseri'de ${catName} alım ve satımı en iyi fiyatlarla Aygül Spot'ta.",
                "brand": {
                    "@type": "Brand",
                    "name": "Aygül Spot"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://aygulspot.com/${filename}",
                    "priceCurrency": "TRY",
                    "price": "500",
                    "availability": "https://schema.org/InStock"
                }
            }`);
        }
        
        // Add FAQ schema
        schemas.push(getFAQSchema(filename));

        let schemaScripts = schemas.map(s => `\n    <script type="application/ld+json">${s}</script>`).join('');
        
        content = content.replace('</head>', `${schemaScripts}\n</head>`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filename}`);
}


// Parse HTML files
const files = fs.readdirSync(publicDir);
for (const file of files) {
    if (file.endsWith('.html') && file !== 'admin.html' && file !== 'index.html') {
        const filePath = path.join(publicDir, file);
        processFile(filePath, file);
    }
    if(file === 'index.html') {
        const filePath = path.join(publicDir, file);
        processFile(filePath, file);
    }
}

// Generate sitemap.xml dynamically from current files
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

let dateStr = new Date().toISOString().split('T')[0];

const priorities = {
    'index.html': '1.0',
    'hizmetlerimiz.html': '0.9',
    'urun-listesi.html': '0.9',
    'iletisim.html': '0.8',
    'hakkimizda.html': '0.8'
}

for (const file of files) {
    if (file.endsWith('.html') && !file.includes('admin')) {
        let locUrl = file === 'index.html' ? 'https://aygulspot.com/' : `https://aygulspot.com/${file}`;
        let prio = priorities[file] || '0.7';
        sitemapContent += `    <url>
        <loc>${locUrl}</loc>
        <lastmod>${dateStr}</lastmod>
        <priority>${prio}</priority>
    </url>\n`;
    }
}
sitemapContent += '</urlset>';
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('Sitemap updated.');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://aygulspot.com/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('robots.txt updated.');
