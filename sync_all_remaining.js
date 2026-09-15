const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, 'src', 'app', 'services');
const MASTER_FILE = path.join(SERVICES_DIR, 'hire-north-indian-chef', 'page.tsx');

if (!fs.existsSync(MASTER_FILE)) {
  console.error("Master file not found:", MASTER_FILE);
  process.exit(1);
}

const masterContent = fs.readFileSync(MASTER_FILE, 'utf-8');

const targets = [
  // ================= MANPOWER SERVICES =================
  { slug: 'hire-kitchen-team-for-hotel', heroTitle: 'Hire an Expert Kitchen Team For Your Hotel', type: 'staffing' },
  { slug: 'hire-cook-on-agreement-basis', heroTitle: 'Hire Professional Cooks on Agreement Basis', type: 'staffing' },
  { slug: 'hotel-chefs-waiter-provider', heroTitle: 'Trusted Hotel Chefs & Waiters Provider in India', type: 'staffing' },
  { slug: 'cook-for-1-years-contract', heroTitle: 'Hire Professional Cooks on a 1-Year Contract', type: 'staffing' },
  { slug: 'top-cook-on-rent-in-india', heroTitle: 'Hire Top Cooks on Rent Across India', type: 'staffing' },
  { slug: 'hire-cook-for-catering-events-service', heroTitle: 'Hire Expert Cooks for Catering & Events', type: 'staffing' },

  // ================= PLACEMENT CONSULTANCY SERVICES =================
  { slug: 'restaurant-cook-service', heroTitle: 'Expert Restaurant Cook Placement Services', type: 'staffing' },
  { slug: 'chinese-cook-service', heroTitle: 'Professional Chinese Cook Placement Services', type: 'staffing' },
  { slug: 'nepali-chinese-chef', heroTitle: 'Hire Authentic Nepali & Chinese Chefs', type: 'staffing' },
  { slug: 'fast-food-cook-service', heroTitle: 'Hire Expert Fast Food Cooks for Your Outlet', type: 'staffing' },

  // ================= OTHER SERVICES =================
  { slug: 'apply-for-fssai', heroTitle: 'Hassle-Free FSSAI Registration & Licensing', type: 'other' },
  { slug: 'swiggy-zomato-registration', heroTitle: 'Swiggy & Zomato Onboarding for Restaurants', type: 'other' },
  { slug: 'menu-designing', heroTitle: 'Professional Menu Designing for Restaurants', type: 'other' },
  { slug: 'kitchen-setup', heroTitle: 'End-to-End Commercial Kitchen Setup Services', type: 'other' },
  { slug: 'digital-support', heroTitle: 'Comprehensive Digital Support for Hospitality', type: 'other' }
];

targets.forEach(target => {
  const targetDir = path.join(SERVICES_DIR, target.slug);
  const targetFile = path.join(targetDir, 'page.tsx');
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let newContent = masterContent;

  // Replace Main Hero Title
  newContent = newContent.replace(
    /Hire Verified Hospitality Staff Across India/g,
    target.heroTitle
  );
  
  if (target.type === 'other') {
    // For non-staffing services, remove the Salary Guide section completely
    // We can use a regex to match the section by comments
    newContent = newContent.replace(/\{\/\* ================= SALARY GUIDE ================= \*\/\}[\s\S]*?\{\/\* ================= TRUSTED STATS ================= \*\/\}/g, '{/* ================= TRUSTED STATS ================= */}');
    
    // Change top pill 
    newContent = newContent.replace(/TRUSTED HOSPITALITY STAFFING PARTNER/g, 'TRUSTED RESTAURANT BUSINESS PARTNER');
    
    // Change subtext
    newContent = newContent.replace(/Find experienced Chefs, Waiters, Kitchen Helpers, Captains, Managers and Hospitality Professionals for Hotels, Restaurants and Cafes/g, 'Expert B2B services to scale your operational efficiency, compliance, and digital presence.');
    
    // Change form title
    newContent = newContent.replace(/ZOMOCOOK COMMERCIAL HIRING/g, 'ZOMOCOOK BUSINESS SERVICES');

    // Change steps
    newContent = newContent.replace(/Hire Hospitality Staff in 4 Easy Steps/g, 'Get Service Support in 4 Easy Steps');
  }

  fs.writeFileSync(targetFile, newContent);
  console.log(`Synced: ${target.slug}`);
});

console.log("All Manpower, Consultancy & Other Service pages synced successfully!");
