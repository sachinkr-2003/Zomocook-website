const fs = require('fs');
const path = require('path');

const servicesDir = 'c:/Users/lOQ/Desktop/Zomocoock/src/app/services';
const dirs = fs.readdirSync(servicesDir);

dirs.forEach(dir => {
  const pagePath = path.join(servicesDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace "export default function WhateverPage() {" with "export default function ServicePage() {"
    content = content.replace(/export default function .+\(\) \{/g, 'export default function ServicePage() {');
    
    fs.writeFileSync(pagePath, content);
  }
});
console.log('Fixed export function names for all pages!');
