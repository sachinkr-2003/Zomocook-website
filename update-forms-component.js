const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;

      // 1. Add import statement if it doesn't exist
      if (!content.includes("import ServiceLeadForm")) {
         // Insert it after the last import statement or at the top
         content = content.replace(/(import .*;\n)+/, (match) => {
           return match + "import ServiceLeadForm from '@/components/forms/ServiceLeadForm';\n";
         });
         modified = true;
      }

      // 2. Locate the dummy form block and replace it with <ServiceLeadForm />
      // The old script injected exactly: <form className="space-y-5"> ... </form>
      // We will match that block. Because regex across multiple lines can be tricky if we don't know exact spacing,
      // we'll match `<form className="space-y-5">` up to the closing `</form>` using [\s\S]*?
      const formRegex = /<form className="space-y-5">[\s\S]*?<\/form>/g;
      
      if (formRegex.test(content)) {
          content = content.replace(formRegex, '<ServiceLeadForm />');
          modified = true;
      }

      if (modified) {
         fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

walkDir('src/app/services');
console.log('Replaced all service forms with <ServiceLeadForm /> component.');
