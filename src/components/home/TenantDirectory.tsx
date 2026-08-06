"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Full list from PDF
const tenantsData = [
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
  { name: "House Plant Coffee", category: "Kuliner & Food Truck" }, { name: "Surabi Cihapit", category: "Kuliner & Food Truck" },
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
].map(t => ({
  ...t,
  initial: t.name.substring(0, 2).toUpperCase(),
  color: t.category === "Clothing Brand" ? "bg-secondary-container text-on-secondary-container" :
         t.category === "Women Fashion" ? "bg-error-container text-on-error-container" :
         "bg-tertiary-container text-on-tertiary-container"
}));

export default function TenantDirectory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const filteredTenants = tenantsData.filter(t => {
    const matchesFilter = filter === "All" || t.category === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const visibleTenants = filteredTenants.slice(0, visibleCount);

  return (
    <section id="tenant" className="py-[80px]" style={{ backgroundColor: "rgba(5, 22, 48, 0.05)" }}>
      <div className="max-w-[1536px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10">
          <h2 className="font-headline-md text-4xl font-bold text-primary mb-4">Direktori Tenant</h2>
        </div>
        
        {/* Search & Filters */}
        <div className="bg-surface p-4 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-3 rounded-xl border-surface-variant focus:border-secondary focus:ring-1 focus:ring-secondary bg-background outline-none transition-all" 
              placeholder="Cari tenant..." 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select 
              className="px-4 py-3 rounded-xl border-surface-variant bg-background text-on-surface focus:border-secondary outline-none appearance-none relative min-w-[200px] cursor-pointer"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setVisibleCount(20);
              }}
            >
              <option value="All">Semua Kategori ({tenantsData.length})</option>
              <option value="Clothing Brand">Clothing Brand (34)</option>
              <option value="Women Fashion">Women Fashion (22)</option>
              <option value="Kuliner & Food Truck">Kuliner & Food Truck (64)</option>
            </select>
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
              className="bg-surface p-6 rounded-2xl border border-surface-variant shadow-sm hover:shadow-md hover:border-secondary transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 ${tenant.color}`}>
                <span className="font-headline-md text-lg md:text-xl font-bold">{tenant.initial}</span>
              </div>
              <h4 className="font-bold text-primary group-hover:text-secondary line-clamp-1">{tenant.name}</h4>
              <span className="text-xs text-on-surface-variant mt-1">{tenant.category}</span>
            </motion.div>
          ))}
        </div>
        
        {visibleCount < filteredTenants.length && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 transition-colors"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
