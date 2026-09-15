const fs = require('fs');
const path = require('path');

function replaceForm(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Add import if missing
  if (!content.includes("import ServiceLeadForm")) {
     content = content.replace(/(import .*;\n)+/, (match) => {
       return match + "import ServiceLeadForm from '@/components/forms/ServiceLeadForm';\n";
     });
     modified = true;
  }

  // Replace form
  const formRegex = /<form className="space-y-7 sm:space-y-10">[\s\S]*?<\/form>/g;
  if (formRegex.test(content)) {
      content = content.replace(formRegex, '<ServiceLeadForm />');
      modified = true;
  }

  if (modified) {
     fs.writeFileSync(filePath, content, 'utf8');
  }
}

replaceForm('src/app/packages/book-a-trial/page.tsx');
replaceForm('src/app/packages/pay-registration-charge/page.tsx');
console.log('Replaced custom forms in packages with ServiceLeadForm.');
