const fs = require('fs');

// Read rawTenants from TenantDirectory.tsx
const content = fs.readFileSync('./src/components/home/TenantDirectory.tsx', 'utf-8');
const match = content.match(/const rawTenants = \[(.*?)\];/s);
if (!match) throw new Error("Could not find rawTenants");

let rawTenants;
eval(`rawTenants = [${match[1]}]`);

// Read logos.ts
const logosContent = fs.readFileSync('./src/lib/data/logos.ts', 'utf-8');
const fnbMatch = logosContent.match(/export const fnbLogos = \[(.*?)\];/s);
const clothingMatch = logosContent.match(/export const clothingLogos = \[(.*?)\];/s);
const womenMatch = logosContent.match(/export const womenFashionLogos = \[(.*?)\];/s);

let fnbLogos = [], clothingLogos = [], womenFashionLogos = [];
if (fnbMatch) eval(`fnbLogos = [${fnbMatch[1]}]`);
if (clothingMatch) eval(`clothingLogos = [${clothingMatch[1]}]`);
if (womenMatch) eval(`womenFashionLogos = [${womenMatch[1]}]`);

const allLogos = [...clothingLogos, ...womenFashionLogos, ...fnbLogos];

function findLogo(name) {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  return allLogos.find(logo => {
    const parts = logo.split('/');
    const filename = parts[parts.length - 1].replace('.webp', '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const folderName = parts[parts.length - 2].toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (filename.length > 3 && (filename.includes(normalizedName) || normalizedName.includes(filename))) return true;
    if (folderName.length > 3 && (folderName.includes(normalizedName) || normalizedName.includes(folderName))) return true;
    
    // Special hardcoded fixes for known messy ones
    if (normalizedName === 'concistencystudio' && filename.includes('consistency')) return true;
    if (normalizedName === 'miraclemates' && filename.includes('miracle')) return true;
    if (normalizedName === 'foryueatdrink' && filename.includes('foryueatndrink')) return true;
    if (normalizedName === 'cuankiserayu' && filename.includes('cuankieserayu')) return true;
    if (normalizedName === 'ssliter' && filename.includes('seliter')) return true;
    if (normalizedName === 'bugisbandung' && filename.includes('bugisandung')) return true;

    return false;
  });
}

const missing = [];
const foundCount = [];
rawTenants.forEach(t => {
  const logo = findLogo(t.name);
  if (!logo) {
    missing.push(t.name);
  } else {
    foundCount.push(t.name);
  }
});

console.log(`Found: ${foundCount.length} / ${rawTenants.length}`);
console.log(`Missing:`);
missing.forEach(m => console.log(`- ${m}`));
