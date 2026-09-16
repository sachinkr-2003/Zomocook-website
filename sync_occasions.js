const fs = require('fs');
const path = require('path');

const occasions = [
  { folder: 'chef-for-birthday-party', name: 'Birthday Party', id: 'BirthdayParty' },
  { folder: 'chef-for-house-party', name: 'House Party', id: 'HouseParty' },
  { folder: 'chef-for-wedding-functions', name: 'Wedding Functions', id: 'WeddingFunctions' },
  { folder: 'chef-for-corporate-event', name: 'Corporate Event', id: 'CorporateEvent' },
  { folder: 'chef-for-anniversary-party', name: 'Anniversary Party', id: 'AnniversaryParty' },
  { folder: 'chef-for-kids-party', name: 'Kids Party', id: 'KidsParty' },
  { folder: 'chef-for-kitty-party', name: 'Kitty Party', id: 'KittyParty' },
  { folder: 'chef-for-bachelor-party', name: 'Bachelor Party', id: 'BachelorParty' }
];

const templatePath = path.join(process.cwd(), 'src/app/services/chef-for-birthday-party/page.tsx');
let template = fs.readFileSync(templatePath, 'utf8');

for (const occ of occasions) {
  let newContent = template;
  
  // Replacements
  newContent = newContent.split('BirthdayPartyChefPage').join(occ.id + 'ChefPage');
  
  newContent = newContent.split('Birthday <br className="hidden sm:block" /> Party').join(occ.name);
  newContent = newContent.split('Birthday Party').join(occ.name);
  
  // Internal links for the first card are now all uniform: href="#lead-form"

  // Ensure 'baby birthday' in reviews goes away contextually
  if(occ.id !== 'BirthdayParty' && occ.id !== 'KidsParty') {
      newContent = newContent.split('baby birthday').join('special event');
  }

  const destDir = path.join(process.cwd(), 'src/app/services', occ.folder);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'page.tsx'), newContent);
  console.log('Created precise page: ' + occ.folder);
}
