"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { fnbLogos, clothingLogos, womenFashionLogos } from "@/lib/data/logos";

const allLogos = [...clothingLogos, ...womenFashionLogos, ...fnbLogos];

function findLogo(name: string) {
  // Fix ampersands first, then strip special chars
  const normalizedName = name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
  const fallbackName = name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]/g, '');
  
  return allLogos.find(logo => {
    const parts = logo.split('/');
    const filename = parts[parts.length - 1].replace('.webp', '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
    const folderName = parts[parts.length - 2]?.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '') || '';
    
    if (filename.length > 3 && (filename.includes(normalizedName) || normalizedName.includes(filename) || filename.includes(fallbackName))) return true;
    if (folderName.length > 3 && (folderName.includes(normalizedName) || normalizedName.includes(folderName))) return true;
    
    // Hardcoded fixes for major typos/mismatches in filenames
    if (normalizedName === 'concistencystudio' && filename.includes('consistency')) return true;
    if (normalizedName === 'miraclemates' && filename.includes('miracle')) return true;
    if (normalizedName === 'foryueatdrink' && filename.includes('foryueatndrink')) return true;
    if (normalizedName === 'cuankiserayu' && filename.includes('cuankieserayu')) return true;
    if (normalizedName === 'ssliter' && filename.includes('seliter')) return true;
    if (normalizedName === 'bugisbandung' && filename.includes('bugisandung')) return true;
    if (normalizedName === 'marayascraft' && filename.includes('marayascarf')) return true;
    if (normalizedName === 'yarashima' && filename.includes('yarashyma')) return true;
    if (normalizedName === 'quais' && filename.includes('quias')) return true;
    if (normalizedName === 'mosacoffeegarage' && filename.includes('mossacoffee')) return true;
    if (normalizedName === 'pizzamizzano' && filename.includes('myzannopizzeria')) return true;
    if (normalizedName === 'cumibakarsquidmore' && filename.includes('squidmore')) return true;
    if (normalizedName === 'bolaubigardujati' && filename.includes('bolaobigardujati')) return true;
    if (normalizedName === 'bakmitigaroda' && filename.includes('bakmietigaroda')) return true;
    if (normalizedName === 'basoacibaper' && filename.includes('basoacibapper')) return true;
    if (normalizedName === 'siomaysg' && filename.includes('siomaybuletbener')) return true;

    return false;
  });
}

// Full list from PDF with proper names
const rawTenants = [
  // Clothing
  { name: "TVF Shoes", category: "Clothing Brand" }, { name: "Miracle Mates", category: "Clothing Brand" },
  { name: "Kick Denim", category: "Clothing Brand" }, { name: "TRQ Motorcycle", category: "Clothing Brand" },
  { name: "Vearst Jeans", category: "Clothing Brand" }, { name: "Seventyfour", category: "Clothing Brand" },
  { name: "SSST", category: "Clothing Brand" }, { name: "Wellborn", category: "Clothing Brand" },
  { name: "Rocketrebels", category: "Clothing Brand" }, { name: "Popculine", category: "Clothing Brand" },
  { name: "BJG Overseas", category: "Clothing Brand" }, { name: "Meet The Kids", category: "Clothing Brand" },
  { name: "Krow Music Merch", category: "Clothing Brand" }, { name: "Aliansi Record BDG", category: "Clothing Brand" },
  { name: "Flo", category: "Clothing Brand" }, { name: "Hateword", category: "Clothing Brand" },
  { name: "Reclays", category: "Clothing Brand" }, { name: "Shadow13", category: "Clothing Brand" },
  { name: "Papersmoth", category: "Clothing Brand" }, { name: "Kremlin", category: "Clothing Brand" },
  { name: "House of Smith", category: "Clothing Brand" }, { name: "Mechajoy", category: "Clothing Brand" },
  { name: "Kanky", category: "Clothing Brand" }, { name: "Concistency Studio", category: "Clothing Brand" },
  { name: "Sixpax", category: "Clothing Brand" }, { name: "DND EXE", category: "Clothing Brand" },
  { name: "Meedle Reachout", category: "Clothing Brand" }, { name: "Kumorune", category: "Clothing Brand" },
  { name: "Insurgent Club", category: "Clothing Brand" }, { name: "Deadly Stock", category: "Clothing Brand" },
  { name: "Sanit Barkley", category: "Clothing Brand" }, { name: "Potmeetspop", category: "Clothing Brand" },
  
  // Women Fashion
  { name: "Fey by Fera", category: "Women Fashion" }, { name: "Dningrum", category: "Women Fashion" },
  { name: "Zeebia", category: "Women Fashion" }, { name: "Nymph", category: "Women Fashion" },
  { name: "Versus City", category: "Women Fashion" }, { name: "Marayascraft", category: "Women Fashion" },
  { name: "Batik Reunceum", category: "Women Fashion" }, { name: "Xusha", category: "Women Fashion" },
  { name: "Netaly", category: "Women Fashion" }, { name: "Langit Tenun", category: "Women Fashion" },
  { name: "Yarashima", category: "Women Fashion" }, { name: "Kaynn", category: "Women Fashion" },
  { name: "Quais", category: "Women Fashion" }, { name: "Ethniq Couture", category: "Women Fashion" },
  { name: "Masagi", category: "Women Fashion" }, { name: "Patih House", category: "Women Fashion" },
  { name: "Jeenaandkaia", category: "Women Fashion" }, { name: "We Are We", category: "Women Fashion" },
  { name: "Sona Studio", category: "Women Fashion" }, { name: "4D Basic Hijab", category: "Women Fashion" },
  { name: "Nazmi", category: "Women Fashion" }, { name: "Disya", category: "Women Fashion" },

  // Kuliner
  { name: "Jeruk Lokal Cihapit", category: "Kuliner & Food Truck" }, { name: "Spill & Bites", category: "Kuliner & Food Truck" },
  { name: "Opieun Tahu Walik", category: "Kuliner & Food Truck" }, { name: "Dapur Ancaman", category: "Kuliner & Food Truck" },
  { name: "G.R.A.B", category: "Kuliner & Food Truck" }, { name: "Wahon", category: "Kuliner & Food Truck" },
  { name: "Warti Lestari", category: "Kuliner & Food Truck" }, { name: "Lovita Yoghurt", category: "Kuliner & Food Truck" },
  { name: "Foryu Eat & Drink", category: "Kuliner & Food Truck" }, { name: "Ice Cream Jail", category: "Kuliner & Food Truck" },
  { name: "Ayam Penyet Rempah Lodaya", category: "Kuliner & Food Truck" }, { name: "Kedai Bujang Mijah", category: "Kuliner & Food Truck" },
  { name: "The House Plant Coffee", category: "Kuliner & Food Truck" }, { name: "Surabi Cihapit", category: "Kuliner & Food Truck" },
  { name: "Railway Coffee", category: "Kuliner & Food Truck" }, { name: "Eat Lab", category: "Kuliner & Food Truck" },
  { name: "Phi Pho", category: "Kuliner & Food Truck" }, { name: "Scoop & Skoops", category: "Kuliner & Food Truck" },
  { name: "Kusuma", category: "Kuliner & Food Truck" }, { name: "Ouva Kitchen", category: "Kuliner & Food Truck" },
  { name: "Kitchen Eleven", category: "Kuliner & Food Truck" }, { name: "American Mac & Cheese", category: "Kuliner & Food Truck" },
  { name: "Bakmi Tiga Roda", category: "Kuliner & Food Truck" }, { name: "Shihlin Taiwan", category: "Kuliner & Food Truck" },
  { name: "Cuanki Serayu", category: "Kuliner & Food Truck" }, { name: "N&N Kitchen", category: "Kuliner & Food Truck" },
  { name: "Baso Aci Baper", category: "Kuliner & Food Truck" }, { name: "Sajian Eyang Lin", category: "Kuliner & Food Truck" },
  { name: "Teras Rumah", category: "Kuliner & Food Truck" }, { name: "Nasi Cikur", category: "Kuliner & Food Truck" },
  { name: "Siomay SG", category: "Kuliner & Food Truck" }, { name: "Zona De Camidas", category: "Kuliner & Food Truck" },
  { name: "Warung Taburai", category: "Kuliner & Food Truck" }, { name: "Ssliter", category: "Kuliner & Food Truck" },
  { name: "Bugis Bandung", category: "Kuliner & Food Truck" }, { name: "Kinabanin", category: "Kuliner & Food Truck" },
  { name: "Sluurp Drink", category: "Kuliner & Food Truck" }, { name: "Ayam Goreng Mirasa", category: "Kuliner & Food Truck" },
  { name: "Mosa Coffee Garage", category: "Kuliner & Food Truck" }, { name: "Cuanki Berkah Jaya", category: "Kuliner & Food Truck" },
  { name: "Pizza Mizzano", category: "Kuliner & Food Truck" }, { name: "Raijinkleub", category: "Kuliner & Food Truck" },
  { name: "Alfamart Moko", category: "Kuliner & Food Truck" }, { name: "Ny. Liem", category: "Kuliner & Food Truck" },
  { name: "Kyla Food", category: "Kuliner & Food Truck" }, { name: "Duri Durian", category: "Kuliner & Food Truck" },
  { name: "Kopi Kendara", category: "Kuliner & Food Truck" }, { name: "Cumi Bakar Squidmore", category: "Kuliner & Food Truck" },
  { name: "Pincuk Daun", category: "Kuliner & Food Truck" }, { name: "Terve", category: "Kuliner & Food Truck" },
  { name: "Rochi", category: "Kuliner & Food Truck" }, { name: "Gorengan Roda Putih", category: "Kuliner & Food Truck" },
  { name: "Sangu Mangkok Ampera", category: "Kuliner & Food Truck" }, { name: "Sushi Tei", category: "Kuliner & Food Truck" },
  { name: "Roti Kembang", category: "Kuliner & Food Truck" }, { name: "Little Contrast", category: "Kuliner & Food Truck" },
  { name: "Bola Ubi Gardujati", category: "Kuliner & Food Truck" }, { name: "Bolu Bakar Tunggal", category: "Kuliner & Food Truck" }
];

const matchedLogos = new Set<string>();
const finalTenantsMap = new Map<string, any>();

// 1. Process Raw Tenants first (the official PDF list)
rawTenants.forEach(t => {
  const logo = findLogo(t.name);
  if (logo) matchedLogos.add(logo);
  
  finalTenantsMap.set(t.name.toLowerCase(), {
    ...t,
    logo,
    initial: t.name.substring(0, 2).toUpperCase(),
    color: t.category === "Clothing Brand" ? "bg-bgs-yellow text-black comic-border" :
           t.category === "Women Fashion" ? "bg-bgs-red text-white comic-border" :
           "bg-bgs-green text-white comic-border"
  });
});

// 2. Add any unmatched logos as new tenants
function formatUnmatchedName(logoPath: string) {
  const parts = logoPath.split('/');
  // If inside a brand's specific subfolder, use the subfolder name
  if (parts.length > 5) return parts[parts.length - 2];
  
  // If in a root folder (like F&B), use the filename and clean it up
  let name = parts[parts.length - 1].replace('.webp', '');
  name = name.replace(/^Food Truck - /, '').replace(/^0\. /, '').trim();
  
  // Clean up trailing numbers or parentheses indicating duplicates like "Mossa Coffee(1)" or "Tjap Jadoel 2"
  name = name.replace(/\s*\(\d+\)$/, '').replace(/\s*\d+$/, '').trim();
  
  // Manual consolidation for heavily misspelled duplicates in F&B
  const lowerName = name.toLowerCase().replace(/ /g, '');
  if (lowerName.includes('thehouseplant')) return 'The House Plant Coffee';
  if (lowerName.includes('kartikasari')) return 'Kartika Sari';
  if (lowerName.includes('cuankiberkahdjaya')) return 'Cuanki Berkah Jaya';
  
  return name;
}

const processUnmatched = (logoList: string[], category: string) => {
  logoList.forEach(logo => {
    if (!matchedLogos.has(logo)) {
      const originalName = formatUnmatchedName(logo);
      
      // Clean up common suffixes for the map key to avoid duplicates
      const cleanName = originalName.toLowerCase().replace(/ logo$/i, '').trim();
      const mapKey = cleanName.replace(/[^a-z0-9]/g, '');
      
      let exists = false;
      for (const key of finalTenantsMap.keys()) {
        const existingKey = key.toLowerCase().replace(/ logo$/i, '').replace(/[^a-z0-9]/g, '');
        if (existingKey === mapKey || (existingKey.length > 4 && (existingKey.includes(mapKey) || mapKey.includes(existingKey)))) {
          exists = true;
          break;
        }
      }
      
      if (!exists) {
        finalTenantsMap.set(mapKey, {
          name: originalName.replace(/ logo$/i, '').trim(),
          category,
          logo,
          initial: originalName.substring(0, 2).toUpperCase(),
          color: category === "Clothing Brand" ? "bg-bgs-yellow text-black comic-border" :
                 category === "Women Fashion" ? "bg-bgs-red text-white comic-border" :
                 "bg-bgs-green text-white comic-border"
        });
      }
    }
  });
};

processUnmatched(clothingLogos, "Clothing Brand");
processUnmatched(womenFashionLogos, "Women Fashion");
processUnmatched(fnbLogos, "Kuliner & Food Truck");

// Filter out any tenant that doesn't have a logo
const tenantsData = Array.from(finalTenantsMap.values()).filter(t => t.logo);

export default function TenantDirectory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { value: "All", label: `Semua Kategori (${tenantsData.length})` },
    { value: "Clothing Brand", label: `Clothing Brand (${tenantsData.filter(t => t.category === "Clothing Brand").length})` },
    { value: "Women Fashion", label: `Women Fashion (${tenantsData.filter(t => t.category === "Women Fashion").length})` },
    { value: "Kuliner & Food Truck", label: `Kuliner & Food Truck (${tenantsData.filter(t => t.category === "Kuliner & Food Truck").length})` }
  ];

  const filteredTenants = tenantsData.filter(t => {
    const matchesFilter = filter === "All" || t.category === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const visibleTenants = filteredTenants.slice(0, visibleCount);

  return (
    <section id="tenant" className="py-[80px] bg-white bg-halftone border-b-8 border-black">
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop relative">
        {/* Decorative Assets */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-0 md:left-20 w-24 md:w-32 z-10 pointer-events-none hidden sm:block"
        >
          <Image src="/aset visual/Batagor.webp" alt="Kuliner" width={150} height={150} className="w-full h-auto object-contain transform -rotate-12 drop-shadow-xl" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ delay: 1, duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 right-0 md:right-20 w-24 md:w-32 z-10 pointer-events-none hidden sm:block"
        >
          <Image src="/aset visual/tas.webp" alt="Fashion" width={150} height={150} className="w-full h-auto object-contain transform rotate-12 drop-shadow-xl" />
        </motion.div>

        <div className="text-center mb-10 relative z-10 flex justify-center">
          <div className="bg-bgs-yellow comic-border p-4 inline-block transform rotate-1 comic-shadow-sm mx-auto">
            <h2 className="font-headline-md text-4xl md:text-5xl font-black text-black uppercase italic">Direktori Tenant</h2>
          </div>
        </div>
        
        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-2xl comic-border comic-shadow mb-8 flex flex-col md:flex-row gap-4 relative z-20">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-black font-bold">search</span>
            <input 
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-black bg-white outline-none font-bold text-black" 
              placeholder="Cari tenant..." 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-4 relative min-w-[200px] md:min-w-[240px]">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-black bg-bgs-yellow text-black font-bold outline-none transition-all comic-shadow-sm hover:-translate-y-1"
            >
              <span className="font-medium text-sm truncate pr-2">
                {categories.find(c => c.value === filter)?.label}
              </span>
              <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>
            
            <motion.div 
              initial={false}
              animate={{ 
                opacity: isDropdownOpen ? 1 : 0, 
                y: isDropdownOpen ? 0 : -10, 
                pointerEvents: isDropdownOpen ? "auto" : "none" 
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-[110%] left-0 right-0 bg-white border-2 border-black rounded-xl comic-shadow overflow-hidden flex flex-col z-50"
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setFilter(cat.value);
                    setVisibleCount(20);
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-3 text-left hover:bg-black/5 transition-colors font-bold text-sm ${
                    filter === cat.value 
                      ? 'bg-black/10 text-black' 
                      : 'text-black'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {visibleTenants.map((tenant, i) => (
            <motion.div 
              key={`${tenant.name}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-2xl border-2 border-black comic-shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              {tenant.logo ? (
                <div className="w-16 h-16 md:w-24 md:h-24 mb-4 flex items-center justify-center transition-transform group-hover:scale-110 relative bg-black/5 rounded-xl p-2">
                  <Image 
                    src={tenant.logo} 
                    alt={tenant.name} 
                    fill 
                    className="object-contain p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" 
                  />
                </div>
              ) : (
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 ${tenant.color}`}>
                  <span className="font-headline-md text-lg md:text-xl font-bold">{tenant.initial}</span>
                </div>
              )}
              <h4 className="font-black text-black group-hover:text-bgs-red line-clamp-1 truncate w-full px-2 uppercase">{tenant.name}</h4>
              <span className="text-xs text-black font-bold mt-1 uppercase">{tenant.category}</span>
            </motion.div>
          ))}
        </div>
        
        {visibleCount < filteredTenants.length ? (
          <div className="text-center mt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="bg-bgs-yellow border-2 border-black text-black px-8 py-3 rounded-full font-black comic-shadow-sm hover:bg-white hover:-translate-y-1 transition-all uppercase"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        ) : filteredTenants.length > 20 ? (
          <div className="text-center mt-8">
            <button 
              onClick={() => {
                setVisibleCount(20);
                document.getElementById('tenant')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-bgs-yellow border-2 border-black text-black px-8 py-3 rounded-full font-black comic-shadow-sm hover:bg-white hover:-translate-y-1 transition-all uppercase"
            >
              Tampilkan Lebih Sedikit
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
