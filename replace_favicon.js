const fs = require('fs');
const path = require('path');

function replaceFavicon(dir) {
    const list = fs.readdirSync(dir);
    for (let file of list) {
        if (file === 'node_modules' || file === '.git' || file === 'ssl') continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            replaceFavicon(filePath);
        } else if (file.endsWith('.html') || file.endsWith('.js')) {
            if (file === 'replace_favicon.js') continue;
            let content = fs.readFileSync(filePath, 'utf8');
            let matched = false;
            
            // Regex for matching any SVG favicon string like:
            // <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg ...</svg>">
            const regex = /<link\s+rel="icon"\s+type="image\/svg\+xml"\s+href="data:image\/svg\+xml,<svg[^>]*>.*?<\/svg>"\s*\/?>/g;
            
            if (regex.test(content)) {
                content = content.replace(regex, '<link rel="icon" type="image/x-icon" href="/favicon.ico">');
                matched = true;
            }
            if (matched) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Updated: ' + filePath);
            }
        }
    }
}

replaceFavicon(__dirname);
console.log('Favicon replacement complete!');
