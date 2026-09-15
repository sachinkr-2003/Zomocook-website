const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, 'src', 'app', 'services');
const MASTER_FILE = path.join(SERVICES_DIR, 'book-chef-on-birthday-party', 'page.tsx');

const targets = [
  {
    slug: 'book-chef-on-birthday-party',
    heroTitle: 'Private Chef for Your Birthday Party',
    activePill: 'Birthday Parties'
  },
  {
    slug: 'book-chef-on-cultural-events',
    heroTitle: 'Private Chef for Your Cultural Events',
    activePill: 'Festival Celebrations'
  },
  {
    slug: 'book-chef-on-kitty-party',
    heroTitle: 'Private Chef for Your Kitty Party',
    activePill: 'Kitty Parties'
  },
  {
    slug: 'book-waiter-on-occasion',
    heroTitle: 'Professional Waiters for Your Special Occasion',
    activePill: 'Special Dinner Events'
  },
  {
    slug: 'book-chef-on-family-get-together',
    heroTitle: 'Private Chef for Your Family Get-Together',
    activePill: 'Family Get-Togethers'
  },
  {
    slug: 'book-chef-on-marriage-anniversary',
    heroTitle: 'Private Chef for Your Anniversary',
    activePill: 'Anniversary Celebrations'
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
  // Original is: Private Chef for Your Special Occasion
  newContent = newContent.replace(
    />\s*Private Chef for Your Special Occasion\s*<\/h1>/g,
    `>\n          ${target.heroTitle}\n        </h1>`
  );
  
  // Custom hacks for waiter (since it's not a chef)
  if (target.slug === 'book-waiter-on-occasion') {
    newContent = newContent.replace(/Chef On Demand Service/g, 'Waiter On Demand Service');
    newContent = newContent.replace(/Book a Chef Now/g, 'Book Waiters Now');
    newContent = newContent.replace(/Our chefs can prepare 500\+/g, 'Our waiters can serve seamlessly for');
    // Change emojis/docs if needed, but not critical
  }

  // Handle active pill logic in Perfect for Every Celebration grid
  // The original has: { icon: '💍', lbl: "Anniversary Celebrations", active: true },
  
  // First, strip all `active: true` from the master template string in that section.
  // Look for: { icon: 'something', lbl: "Something", active: true } and remove `, active: true`
  newContent = newContent.replace(/,\s*active:\s*true/g, '');

  // Then, find the target pill and inject `, active: true`
  // We look for `{ icon: '...', lbl: "TARGET_PILL" }`
  const activeRegex = new RegExp(`({[^}]*lbl:\\s*"${target.activePill}")\\s*}`, "g");
  newContent = newContent.replace(activeRegex, `$1, active: true }`);

  fs.writeFileSync(targetFile, newContent);
  console.log(`Synced: ${target.slug}`);
});

console.log("All Private Chef pages synced successfully!");
