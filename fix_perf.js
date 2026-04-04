const fs = require('fs');
const path = require('path');

// 1. Remove @import from style.css
const cssPath = path.join(__dirname, 'public/css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');
const importRegex = /@import url\('https:\/\/fonts\.googleapis\.com.*?display=swap'\);\n/g;
css = css.replace(importRegex, '');
fs.writeFileSync(cssPath, css);
console.log('Removed @import from style.css');

const fontsLink = `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">`;

function optimizeHtmlFiles(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        if (file === 'node_modules' || file === '.git' || file === 'ssl') continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            optimizeHtmlFiles(filePath);
        } else if (file.endsWith('.html') || file.endsWith('.js')) {
            if (file === 'fix_perf.js' || file === 'server.js' || file === 'replace_favicon.js' || file === 'fix_a11y.js') continue;
            if (filePath.includes('public\\js')) continue;

            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // 1. Replace <link rel="stylesheet" href="/css/style.css"> with the full fonts definition
            if (content.includes('<link rel="stylesheet" href="/css/style.css">') && !content.includes('fonts.googleapis.com')) {
                content = content.replace(/<link rel="stylesheet" href="\/css\/style\.css">/g, fontsLink);
                modified = true;
            }

            // 2. Add defer to main.js
            if (content.match(/<script src="\/js\/main\.js"><\/script>/)) {
                content = content.replace(/<script src="\/js\/main\.js"><\/script>/g, '<script src="/js/main.js" defer></script>');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log('Optimized: ' + filePath);
            }
        }
    }
}

optimizeHtmlFiles(__dirname);
console.log('Performance optimization complete!');
