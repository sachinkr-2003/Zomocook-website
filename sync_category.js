const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, 'src', 'app', 'services');
const MASTER_FILE = path.join(SERVICES_DIR, 'hire-north-indian-chef', 'page.tsx');

const targets = [
  {
    slug: 'hire-chinese-chef',
    heroTitle: 'Hire Verified Chinese Chefs Across India'
  },
  {
    slug: 'hire-tandoor-chef',
    heroTitle: 'Hire Verified Tandoor Chefs Across India'
  },
  {
    slug: 'hire-continental-chef',
    heroTitle: 'Hire Verified Continental Chefs Across India'
  },
  {
    slug: 'hire-south-indian-chef',
    heroTitle: 'Hire Verified South Indian Chefs Across India'
  }
];

if (!fs.existsSync(MASTER_FILE)) {
  console.error("Master file not found:", MASTER_FILE);
  process.exit(1);
}

const masterContent = fs.readFileSync(MASTER_FILE, 'utf-8');

targets.forEach(target => {
  const targetDir = path.join(SERVICES_DIR, target.slug);
  const targetFile = path.join(targetDir, 'page.tsx');
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let newContent = masterContent;

  // Replace Hero Title
  newContent = newContent.replace(
    /Hire Verified Hospitality Staff Across India/g,
    target.heroTitle
  );
  
  fs.writeFileSync(targetFile, newContent);
  console.log(`Synced: ${target.slug}`);
});

console.log("All Category Wise Cook pages synced successfully!");
