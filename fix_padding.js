const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let replaced = false;
      content = content.replace(/(<section[^>]*className="[^"]*)(pt-\d+|pt-\[\d+px\])([^"]*")/, (match, p1, p2, p3) => {
          if (!replaced) {
              replaced = true;
              let cleanedP3 = p3.replace(/sm:pt-\d+/g, '').replace(/md:pt-\[\d+px\]/g, '').replace(/lg:pt-\d+/g, '').replace(/md:pt-\d+/g, '');
              cleanedP3 = cleanedP3.replace(/\s+/g, ' ');
              return p1 + 'pt-[140px] md:pt-[160px]' + cleanedP3;
          }
          return match;
      });

      if (replaced) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated padding in:', fullPath.substring(fullPath.indexOf('src')));
      }
    }
  }
}

const root = process.cwd();
processDir(path.join(root, 'src/app/services'));
processDir(path.join(root, 'src/app/packages'));
console.log('Done padding update');
