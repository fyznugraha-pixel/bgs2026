const fs = require('fs');

const content = fs.readFileSync('./src/components/home/TenantDirectory.tsx', 'utf-8');
const match = content.match(/const rawTenants = \[(.*?)\];/s);
let rawTenants;
eval(`rawTenants = [${match[1]}]`);

const logosContent = fs.readFileSync('./src/lib/data/logos.ts', 'utf-8');
let fnbLogos = [], clothingLogos = [], womenFashionLogos = [];
eval(`fnbLogos = [${logosContent.match(/export const fnbLogos = \[(.*?)\];/s)[1]}]`);
eval(`clothingLogos = [${logosContent.match(/export const clothingLogos = \[(.*?)\];/s)[1]}]`);
eval(`womenFashionLogos = [${logosContent.match(/export const womenFashionLogos = \[(.*?)\];/s)[1]}]`);

const allLogos = [...clothingLogos, ...womenFashionLogos, ...fnbLogos];

function findLogo(name) {
  const normalizedName = name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
  const fallbackName = name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]/g, '');
  
  return allLogos.find(logo => {
    const parts = logo.split('/');
    const filename = parts[parts.length - 1].replace('.webp', '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
    const folderName = parts[parts.length - 2]?.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '') || '';
    
    if (filename.length > 3 && (filename.includes(normalizedName) || normalizedName.includes(filename) || filename.includes(fallbackName))) return true;
    if (folderName.length > 3 && (folderName.includes(normalizedName) || normalizedName.includes(folderName))) return true;
    
    return false;
  });
}

const matchedLogos = new Set();
const finalTenantsMap = new Map();

rawTenants.forEach(t => {
  const logo = findLogo(t.name);
  if (logo) matchedLogos.add(logo);
  finalTenantsMap.set(t.name.toLowerCase(), { name: t.name, logo });
});

function formatUnmatchedName(logoPath) {
  const parts = logoPath.split('/');
  if (parts.length > 5) return parts[parts.length - 2];
  let name = parts[parts.length - 1].replace('.webp', '');
  return name.replace(/^Food Truck - /, '').replace(/^0\. /, '').trim();
}

fnbLogos.forEach(logo => {
  if (!matchedLogos.has(logo)) {
    const name = formatUnmatchedName(logo);
    finalTenantsMap.set(name.toLowerCase(), { name, logo });
  }
});

const arr = Array.from(finalTenantsMap.values());
const plant = arr.filter(t => t.name.toLowerCase().includes('plant'));
console.log(plant);
