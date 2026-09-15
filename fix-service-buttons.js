const fs = require('fs');
const path = require('path');

const servicesDir = 'c:/Users/lOQ/Desktop/Zomocoock/src/app/services';

function convertButtons() {
    const folders = fs.readdirSync(servicesDir);
    let updatedCount = 0;

    folders.forEach(folder => {
        const filePath = path.join(servicesDir, folder, 'page.tsx');
        if (!fs.existsSync(filePath)) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Pattern for Register Requirement button
        // <button className="...">\n  <span className="...">🚀</span> Register Requirement\n</button>
        if (content.includes('<button') && content.includes('Register Requirement')) {
            content = content.replace(
                /<button([^>]+)>\s*<span([^>]+)>(.*?)<\/span>\s*Register Requirement\s*<\/button>/g,
                '<a href="#registration-form"$1>\n             <span$2>$3</span> Register Requirement\n           </a>'
            );
            modified = true;
        }

        // Pattern for View Salary Guide button
        if (content.includes('<button') && content.includes('View Salary Guide')) {
            content = content.replace(
                /<button([^>]+)>\s*<span([^>]+)>(.*?)<\/span>\s*View Salary Guide\s*<\/button>/g,
                '<a href="#salary-guide"$1>\n             <span$2>$3</span> View Salary Guide\n           </a>'
            );
            modified = true;
        }
        
        // Let's also ensure sections have the IDs
        if (!content.includes('id="registration-form"')) {
            content = content.replace(
                /<section className="py-20 px-4 sm:px-6 lg:px-8 bg-\[#f8fafc\]">/,
                '<section id="registration-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">'
            );
        }
        if (!content.includes('id="salary-guide"')) {
            content = content.replace(
                /<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">/,
                '<section id="salary-guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">'
            );
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed buttons in ${folder}`);
            updatedCount++;
        }
    });

    console.log(`\nCompleted! Fixed ${updatedCount} files.`);
}

convertButtons();
