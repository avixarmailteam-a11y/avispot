const fs = require('fs');
const path = require('path');

// 1. Fix CSS Contrast
const cssPath = path.join(__dirname, 'public/css/style.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    // Bump accent to extremely dark orange for AAA compliance
    css = css.replace(/--accent: #D84315;/g, '--accent: #9A2E00;');
    css = css.replace(/--accent-light: #FF5722;/g, '--accent-light: #D84315;');
    css = css.replace(/--accent-dark: #BF360C;/g, '--accent-dark: #681F00;');
    
    // Also whatsapp floating colors manually if needed
    css = css.replace(/background: #25D366;/g, 'background: #128C7E;'); // Darker whatsapp green
    fs.writeFileSync(cssPath, css);
    console.log('[OK] style.css updated for contrast.');
}

// 2. Fix Heading levels in main.js
const mainJsPath = path.join(__dirname, 'public/js/main.js');
if (fs.existsSync(mainJsPath)) {
    let js = fs.readFileSync(mainJsPath, 'utf8');
    // Change h4 to h2 in footer
    js = js.replace(/<h4 class="footer-heading">/g, '<h2 class="footer-heading">');
    js = js.replace(/<\/h4>/g, '</h2>');
    fs.writeFileSync(mainJsPath, js);
    console.log('[OK] main.js heading levels updated.');
}

// 3. Fix Landmark (main wrapper) in all HTML files
function wrapMain(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        if (file === 'node_modules' || file === '.git' || file === 'ssl') continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            wrapMain(filePath);
        } else if (file.endsWith('.html')) {
            let html = fs.readFileSync(filePath, 'utf8');
            
            // Check if <main> already exists
            if (!html.includes('<main id="main-content"')) {
                // Insert <main> right after <body> or <body class="...">
                html = html.replace(/(<body[^>]*>)/i, '$1\n    <main id="main-content">');
                
                // Insert </main> right before <script src="/js/main.js"></script>
                html = html.replace(/(<script src="\/js\/main\.js"><\/script>)/i, '    </main>\n    $1');
                
                fs.writeFileSync(filePath, html);
                console.log('[OK] Wrapped <main> in: ' + filePath);
            }
        }
    }
}
wrapMain(path.join(__dirname, 'public'));

// 4. Update generator scripts just in case
function updateGenerators() {
    ['gen_services.js', 'gen_regions.js'].forEach(gen => {
        const p = path.join(__dirname, gen);
        if (fs.existsSync(p)) {
            let content = fs.readFileSync(p, 'utf8');
            if (!content.includes('<main id="main-content"')) {
                content = content.replace(/(<body[^>]*>)/i, '$1\n    <main id="main-content">');
                content = content.replace(/(<script src="\/js\/main\.js"><\/script>)/i, '    </main>\n$1');
                fs.writeFileSync(p, content);
                console.log('[OK] Updated generator: ' + gen);
            }
        }
    });
}
updateGenerators();

console.log('All A11y fixes applied successfully!');
