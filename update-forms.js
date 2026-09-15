const fs = require('fs');
const path = require('path');

const newForm = `             <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#475569]">Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="E.g. Owner/Manager name" className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#f97316] transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#475569]">Phone Number <span className="text-red-500">*</span></label>
                  <div className="flex bg-[#f8fafc] border border-slate-200 rounded-lg overflow-hidden focus-within:border-[#f97316] transition-colors">
                      <div className="flex items-center justify-center bg-transparent pl-4 pr-2 shrink-0 border-r border-slate-200">
                        <span className="text-lg">🇮🇳</span> <span className="text-[15px] font-semibold text-slate-700 ml-2">+91</span>
                      </div>
                      <input type="tel" placeholder="Enter 10 Digit Mobile No." className="w-full bg-transparent px-4 py-3 text-[15px] focus:outline-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#475569]">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="E.g. Cafe@gmail.com" className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#f97316] transition-colors" />
                </div>

                <div className="pt-4">
                   <button type="button" className="w-full bg-[#0b57d0] hover:bg-[#0842a0] text-white font-bold py-3.5 rounded-lg transition-colors text-[15px] shadow-sm">
                     Next
                   </button>
                </div>
             </form>`;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const formRegex = /<form className="space-y-6">[\s\S]*?<\/form>/;
      
      if(formRegex.test(content)) {
         content = content.replace(formRegex, newForm);
         fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

walkDir('src/app/services');
console.log('Replaced all service forms successfully.');
