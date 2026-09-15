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
      
      // Replace Button 1 -> a tag
      content = content.replace(
        /<button className="([^"]*)bg-\[\#004bb4\]([^"]*?)">([\s\S]*?)<\/button>/g,
        (match, prefix, suffix, innerHTML) => {
           if (innerHTML.includes('Register Requirement')) {
               return `<a href="#registration-form" className="${prefix}bg-[#004bb4]${suffix}">${innerHTML}</a>`;
           }
           return match;
        }
      );
      
      // Replace Button 2 -> a tag
      content = content.replace(
        /<button className="([^"]*)bg-white([^"]*?)">([\s\S]*?)<\/button>/g,
        (match, prefix, suffix, innerHTML) => {
           if (innerHTML.includes('View Salary Guide')) {
               return `<a href="#salary-guide" className="${prefix}bg-white${suffix}">${innerHTML}</a>`;
           }
           return match;
        }
      );

      // Add id="registration-form"
      content = content.replace(
        /{\/\* ================= REGISTER REQUIREMENT FORM ================= \*\/}[\s\n]*<section className="py-20/g,
        '{/* ================= REGISTER REQUIREMENT FORM ================= */}\n      <section id="registration-form" className="py-20'
      );
      
      // Add id="salary-guide"
      content = content.replace(
        /{\/\* ================= SALARY GUIDE ================= \*\/}[\s\n]*<section className="py-20/g,
        '{/* ================= SALARY GUIDE ================= */}\n      <section id="salary-guide" className="py-20'
      );

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

walkDir('src/app/services');
console.log('Replaced all service buttons successfully.');
