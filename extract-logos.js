const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'aset logo');
const outputDir = path.join(__dirname, 'src', 'lib', 'data');
const outputFile = path.join(outputDir, 'logos.ts');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to recursively get all webp files in a directory
function getFilesRecursive(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(fullPath));
    } else {
      const ext = file.toLowerCase();
      if (ext.endsWith('.webp') || ext.endsWith('.png') || ext.endsWith('.jpg') || ext.endsWith('.jpeg')) {
        results.push(`/aset logo/${path.relative(baseDir, fullPath).replace(/\\/g, '/')}`);
      }
    }
  });
  return results;
}

const fnb = getFilesRecursive(path.join(baseDir, 'LOGO-LOGO BRAND F&B-'));
const clothing = getFilesRecursive(path.join(baseDir, 'LOGO - LOGO TENANT CLOTHING BGS 2026'));
const women = getFilesRecursive(path.join(baseDir, 'LOGO - LOGO WOMEN FASHION'));
const community = getFilesRecursive(path.join(baseDir, 'LOGO - LOGO KOMUNITAS & GARAGE'));
const sponsor = getFilesRecursive(path.join(baseDir, 'LOGO SPONSOR BGS 2026'));

const content = `// Auto-generated file containing paths to all logo assets
export const fnbLogos = ${JSON.stringify(fnb, null, 2)};
export const clothingLogos = ${JSON.stringify(clothing, null, 2)};
export const womenFashionLogos = ${JSON.stringify(women, null, 2)};
export const communityLogos = ${JSON.stringify(community, null, 2)};
export const sponsorLogos = ${JSON.stringify(sponsor, null, 2)};
`;

fs.writeFileSync(outputFile, content, 'utf8');
console.log('Logo paths successfully extracted to src/lib/data/logos.ts');
