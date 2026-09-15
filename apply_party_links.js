const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src/app/services');

const targetFolders = [
  'book-waiter-on-occasion',
  'book-chef-on-marriage-anniversary',
  'book-chef-on-kitty-party',
  'book-chef-on-family-get-together',
  'book-chef-on-cultural-events',
  'book-chef-on-birthday-party'
];

targetFolders.forEach(folder => {
  const filePath = path.join(servicesDir, folder, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Add IDs to sections
  content = content.replace(
    /<section className="bg-white pt-12 pb-16 text-center border-t border-slate-100">/g,
    '<section id="signature-menu" className="bg-white pt-12 pb-16 text-center border-t border-slate-100">'
  );

  content = content.replace(
    /<section className="bg-white border-y border-slate-100 pt-12 pb-16 text-center">/g,
    '<section id="contact-form" className="bg-white border-y border-slate-100 pt-12 pb-16 text-center">'
  );

  // Re-map buttons in Hero (Lines 47-52 approx)
  content = content.replace(
    /<button className="bg-\[#ea580c\] hover:bg-\[#c2410c\] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors text-\[16px\] w-full sm:w-auto">\s*Book a Chef Now\s*<\/button>/g,
    `<Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors text-[16px] w-full sm:w-auto inline-block">\n            Book a Chef Now\n          </Link>`
  );

  // Note: View Sample Menus has slightly different text/classes sometimes
  content = content.replace(
    /<button className="bg-white border-2 border-\[#ea580c\] text-\[#ea580c\] hover:bg-\[#fff7ed\] font-bold py-3\.5 px-10 rounded-xl transition-colors text-\[16px\] w-full sm:w-auto">\s*View Sample Menus\s*<\/button>/g,
    `<Link href="#signature-menu" scroll={true} className="bg-white border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] font-bold py-3.5 px-10 rounded-xl transition-colors text-[16px] w-full sm:w-auto inline-flex items-center justify-center">\n            View Sample Menus\n          </Link>`
  );

  // Menu item links
  content = content.replace(
    /<button className="w-full bg-\[#f97316\] hover:bg-\[#ea580c\] text-white font-bold py-3\.5 rounded-xl transition-colors shadow-sm">\s*View (\d+)\+ More( Dishes| Options)\s*<\/button>/g,
    `<Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">\n                 View $1+ More$2\n               </Link>`
  );

  // Bottom CTA
  content = content.replace(
    /<button className="bg-\[#ea580c\] hover:bg-\[#c2410c\] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm">\s*Book a Chef Now\s*<\/button>/g,
    `<Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm inline-block">\n                  Book a Chef Now\n               </Link>`
  );

  content = content.replace(
    /<button className="bg-white border-2 border-\[#ea580c\] text-\[#ea580c\] hover:bg-\[#fff7ed\] font-bold py-2\.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors w-full sm:w-auto text-\[15px\]">\s*<span className="text-xl">📞<\/span> Call Now\s*<\/button>/g,
    `<a href="tel:+919519808734" className="bg-white border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] font-bold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors w-full sm:w-auto text-[15px]">\n                  <span className="text-xl">📞</span> Call Now\n               </a>`
  );

  // book Waiter uses different text slightly inside the hero:
  content = content.replace(
    /<button className="bg-\[#ea580c\] hover:bg-\[#c2410c\] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors text-\[16px\] w-full sm:w-auto">\s*Book a Waiter Now\s*<\/button>/g,
    `<Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors text-[16px] w-full sm:w-auto inline-block">\n            Book a Waiter Now\n          </Link>`
  );
  content = content.replace(
    /<button className="bg-\[#ea580c\] hover:bg-\[#c2410c\] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm">\s*Book a Waiter Now\s*<\/button>/g,
    `<Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm inline-block">\n                  Book a Waiter Now\n               </Link>`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${folder}`);
});
