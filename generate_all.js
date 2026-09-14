const fs = require('fs');
const path = require('path');

const baseFilePath = 'c:/Users/lOQ/Desktop/Zomocoock/src/app/services/hire-chef-for-new-opening/page.tsx';
let baseContent = fs.readFileSync(baseFilePath, 'utf8');

const pagesToCreate = [
      "Hire All Rounder cook for canteen",
      "Hire Female Cook For Hostel/PG",
      "Hire Professional Chef For Canteen",
      "Hire Team For Corporate Canteen",
      "Hire Male Cook For 12/24 Hours",
      "Hire Female Cook For 12/24 Hours",
      "Hire Professional Chef For Home",
      "Hire Cook for Daily Basis",
      "Book Chef On Birthday Party",
      "Book Chef On Cultural Events",
      "Book Chef On Kitty Party",
      "Book Waiter On Occasion",
      "Book Chef on Family Get Together",
      "Book Chef on Marriage Anniversary",
      "Hire North Indian Chef",
      "Hire Chinese chef",
      "Hire Tandoor Chef",
      "Hire Continental Chef",
      "Hire South Indian Chef",
      "Hire Kitchen Team For Hotel",
      "Hire Cook on Agreement Basis",
      "Hotel Chefs/Waiter Provider",
      "Cook for 1 Years Contract",
      "Top Cook on Rent in India",
      "Hire Cook for Catering/Events Service",
      "Restaurant Cook Service",
      "Chinese Cook Service",
      "Nepali Chinese Chef",
      "Fast Food Cook service",
      "Apply for FSSAI",
      "Swiggy/Zomato Registration",
      "Menu designing",
      "Kitchen Setup",
      "Digital Support"
];

function getSlug(name) {
  return name.toLowerCase().replace(/[\s/]+/g, '-');
}

let count = 0;

pagesToCreate.forEach(page => {
  const slug = getSlug(page);
  const folderPath = path.join('c:/Users/lOQ/Desktop/Zomocoock/src/app/services', slug);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Replace Title
  let newContent = baseContent.replace(
    'Hire Verified Hospitality Staff Across India', 
    page
  );

  if (page.includes("Female") || page.includes("Women")) {
     newContent = newContent.replace("Trusted Hospitality Staffing Partner", "Premium Female Staffing Partner");
  } else if (page.includes("Book") || page.includes("Party") || page.includes("Occasion")) {
     newContent = newContent.replace("Trusted Hospitality Staffing Partner", "Top-Rated Private Chef Service");
  } else if (page.includes("Registration") || page.includes("FSSAI") || page.includes("Support")) {
     newContent = newContent.replace("Trusted Hospitality Staffing Partner", "Professional Zomocook Services");
  }

  fs.writeFileSync(path.join(folderPath, 'page.tsx'), newContent);
  count++;
});

console.log('Successfully generated ' + count + ' additional pages!');
