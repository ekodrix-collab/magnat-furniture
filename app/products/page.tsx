"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import { Search, SlidersHorizontal, Grid3x3, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Mock data for products
const allProducts = [
  { 
    slug: "milano-sofa", 
    name: "Milano Modular Sofa", 
    short_description: "Architectural comfort with Italian-sourced leather foundations. Hand-stitched in Kondotty.", 
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop"], 
    categoryName: "Sofas",
    price: "₹1,85,000",
    isNew: true,
    isBestseller: false
  },
  { 
    slug: "oxide-chair", 
    name: "Oxide Accent Chair", 
    short_description: "A sculptural masterpiece blending velvet and matte steel. Limited edition.", 
    images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop"], 
    categoryName: "Chairs",
    price: "₹42,000",
    isNew: false,
    isBestseller: true
  },
  { 
    slug: "kondotty-table", 
    name: "Kondotty Heritage Table", 
    short_description: "Hand-finished Kerala teak with minimalist glass inlay. 25-year warranty.", 
    images: ["https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop"], 
    categoryName: "Dining",
    price: "₹95,000",
    isNew: false,
    isBestseller: true
  },
  { 
    slug: "zenith-curtains", 
    name: "Zenith Sheer Series", 
    short_description: "Light-filtering sheers designed for tropical ventilation. Custom-measured for your space.", 
    images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop"], 
    categoryName: "Curtains",
    price: "Custom Quote",
    isNew: true,
    isBestseller: false
  },
  { 
    slug: "monolith-bed", 
    name: "Monolith Master Bed", 
    short_description: "Upholstered luxury with integrated ambient lighting. King size perfection.", 
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2600&auto=format&fit=crop"], 
    categoryName: "Bedroom",
    price: "₹1,45,000",
    isNew: false,
    isBestseller: false
  },
  { 
    slug: "vector-recliner", 
    name: "Vector Ergonomic Recliner", 
    short_description: "Precision-engineered support for the modern executive. Italian leather option available.", 
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], 
    categoryName: "Chairs",
    price: "₹68,000",
    isNew: false,
    isBestseller: true
  },
];

const categories = ["All Products", "Sofas", "Chairs", "Dining", "Curtains", "Bedroom"];
const sortOptions = ["Featured", "Newest First", "Price: Low to High", "Price: High to Low", "Best Sellers"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [sortBy, setSortBy] = useState("Featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === "All Products" || p.categoryName === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.short_description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "Newest First": return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      case "Best Sellers": return a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1;
      default: return 0;
    }
  });

  return (
    <main className="pt-24 min-h-screen bg-white">
      
      {/* ============================================
          HERO HEADER — EMOTIONAL INTRODUCTION
          ============================================ */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-[#eeeeee]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111111' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-container relative z-10">
           <FadeInView className="max-w-4xl space-y-8">
              {/* Label */}
              <div className="flex items-center gap-4">
                <span className="heading-label">Kondotty Craftsmanship</span>
                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-[#C0001A]/30 to-transparent"></div>
              </div>
              
              {/* Main Title */}
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight" 
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Signature <span className="italic font-normal text-[#C0001A]">Collection</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-[#666666] font-light max-w-3xl leading-relaxed">
                Each piece tells a story of 25 years of manufacturing excellence. Handcrafted in Kondotty, 
                designed to become part of your family's legacy.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C0001A] rounded-full"></div>
                  <span className="text-sm text-[#111111] font-medium">{allProducts.length} Pieces Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C0001A] rounded-full"></div>
                  <span className="text-sm text-[#111111] font-medium">Custom Manufacturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C0001A] rounded-full"></div>
                  <span className="text-sm text-[#111111] font-medium">Direct Factory Pricing</span>
                </div>
              </div>
           </FadeInView>
        </div>
      </section>

      {/* ============================================
          ADVANCED FILTER & SEARCH BAR
          ============================================ */}
      <section className="sticky top-20 z-40 bg-white/98 backdrop-blur-xl border-b border-[#eeeeee] shadow-sm">
         <div className="max-container">
            {/* Top Bar - Search & View Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b border-[#eeeeee]/50">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" size={18} />
                <input
                  type="text"
                  placeholder="Search by name or material..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#eeeeee] rounded-lg text-sm focus:outline-none focus:border-[#C0001A] transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-[#eeeeee] rounded-lg text-xs font-medium uppercase tracking-wider focus:outline-none focus:border-[#C0001A] transition-colors cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 p-1 bg-[#f9f9f9] rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid" ? "bg-white shadow-sm text-[#C0001A]" : "text-[#666666] hover:text-[#111111]"
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("compact")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "compact" ? "bg-white shadow-sm text-[#C0001A]" : "text-[#666666] hover:text-[#111111]"
                    }`}
                    aria-label="Compact view"
                  >
                    <Grid3x3 size={18} />
                  </button>
                </div>

                {/* Filters Toggle (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden p-3 border border-[#eeeeee] rounded-lg hover:border-[#C0001A] transition-colors"
                >
                  <SlidersHorizontal size={18} />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="flex items-center gap-6 py-6 overflow-x-auto no-scrollbar">
                 {categories.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`relative text-xs font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap pb-2 group ${
                       activeCategory === cat ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
                     }`}
                     style={{ fontFamily: "var(--font-dm-sans)" }}
                   >
                     {cat}
                     <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C0001A] transition-all duration-300 ${
                       activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                     }`}></span>
                     {/* Count Badge */}
                     {cat !== "All Products" && (
                       <span className="ml-2 text-[9px] text-[#666666]">
                         ({allProducts.filter(p => p.categoryName === cat).length})
                       </span>
                     )}
                   </button>
                 ))}
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || activeCategory !== "All Products" || sortBy !== "Featured") && (
              <div className="flex flex-wrap items-center gap-2 py-3 border-t border-[#eeeeee]/50">
                <span className="text-xs text-[#666666] uppercase tracking-wider">Active:</span>
                {activeCategory !== "All Products" && (
                  <span className="px-3 py-1 bg-[#C0001A]/10 text-[#C0001A] text-xs rounded-full flex items-center gap-2">
                    {activeCategory}
                    <button onClick={() => setActiveCategory("All Products")} className="hover:text-[#111111]">×</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="px-3 py-1 bg-[#C0001A]/10 text-[#C0001A] text-xs rounded-full flex items-center gap-2">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm("")} className="hover:text-[#111111]">×</button>
                  </span>
                )}
                {sortBy !== "Featured" && (
                  <span className="px-3 py-1 bg-[#f9f9f9] text-[#666666] text-xs rounded-full">
                    Sorted by: {sortBy}
                  </span>
                )}
              </div>
            )}
         </div>
      </section>

      {/* ============================================
          PRODUCT GRID — ANIMATED & RESPONSIVE
          ============================================ */}
      <section className="py-16 md:py-24">
        <div className="max-container">
           {/* Results Header */}
           <FadeInView>
             <div className="flex items-center justify-between mb-8">
               <p className="text-sm text-[#666666]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                 Showing <span className="font-semibold text-[#111111]">{sortedProducts.length}</span> of {allProducts.length} pieces
               </p>
             </div>
           </FadeInView>

           {/* Product Grid */}
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeCategory + searchTerm + viewMode}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className={`grid gap-x-8 gap-y-16 ${
                 viewMode === "grid" 
                   ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                   : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
               }`}
             >
                {sortedProducts.map((product, index) => (
                  <FadeInView key={product.slug} delay={index * 0.05}>
                     <ProductCard product={product} compact={viewMode === "compact"} />
                  </FadeInView>
                ))}
             </motion.div>
           </AnimatePresence>
           
           {/* Empty State */}
           {sortedProducts.length === 0 && (
             <FadeInView>
               <div className="py-32 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f9f9f9] flex items-center justify-center">
                    <Search className="text-[#666666]" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    No pieces found
                  </h3>
                  <p className="text-[#666666] mb-8 max-w-md mx-auto">
                    We couldn't find any pieces matching your search. Try adjusting your filters or contact us for custom manufacturing.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("All Products");
                      setSearchTerm("");
                      setSortBy("Featured");
                    }}
                    className="btn-ghost-dark"
                  >
                    Reset Filters
                  </button>
               </div>
             </FadeInView>
           )}
        </div>
      </section>

      {/* ============================================
          CUSTOM DESIGN CTA — PREMIUM INVITATION
          ============================================ */}
      <section className="relative py-32 md:py-40 bg-[#111111] text-white overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#C0001A]/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

         <div className="max-container relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
               {/* Left Content */}
               <FadeInView className="flex-1 max-w-2xl">
                  <span className="inline-block px-4 py-1.5 bg-[#C0001A] text-white text-[9px] font-bold tracking-[0.3em] uppercase mb-6">
                    Bespoke Manufacturing
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                    Can&apos;t find the exact piece?
                  </h2>
                  <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                    Our Kondotty studio specializes in bespoke furniture design. Share your inspiration 
                    and we&apos;ll manufacture it tailored to your home. From concept to installation, 
                    we bring your vision to life with Kerala&apos;s finest craftsmanship.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-8 pt-4">
                    <div>
                      <div className="text-3xl font-bold text-[#C0001A] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>25+</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">Years Experience</div>
                    </div>
                    <div className="w-px bg-white/20"></div>
                    <div>
                      <div className="text-3xl font-bold text-[#C0001A] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>500+</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">Custom Pieces</div>
                    </div>
                    <div className="w-px bg-white/20"></div>
                    <div>
                      <div className="text-3xl font-bold text-[#C0001A] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>100%</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">Satisfaction</div>
                    </div>
                  </div>
               </FadeInView>

               {/* Right CTA */}
               <FadeInView delay={0.2} className="lg:text-right">
                  <Link href="/contact">
                    <button className="group relative px-10 py-5 bg-white text-[#111111] font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#C0001A] hover:text-white overflow-hidden">
                      <span className="relative z-10">Request Custom Design</span>
                      <div className="absolute inset-0 bg-[#C0001A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </Link>
                  <p className="text-sm text-white/50 mt-4">
                    Or call us at <a href="tel:+919446516395" className="text-white hover:text-[#C0001A] transition-colors">+91 94465 16395</a>
                  </p>
               </FadeInView>
            </div>
         </div>
      </section>

      {/* ============================================
          WHY CHOOSE MAGNAT — TRUST BUILDING
          ============================================ */}
      <section className="py-20 md:py-32 bg-[#f9f9f9]">
        <div className="max-container">
          <FadeInView className="text-center mb-16">
            <span className="heading-label">The MAGNAT™ Difference</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Why Kondotty Families Trust Us
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Factory Direct",
                desc: "No middlemen. You buy directly from our Kondotty manufacturing unit at honest prices.",
                icon: "🏭"
              },
              {
                title: "Lifetime Support",
                desc: "Every piece comes with our commitment. We're here for repairs, refinishing, or advice—always.",
                icon: "🤝"
              },
              {
                title: "Kerala Craftsmanship",
                desc: "Made by local artisans who've perfected their craft over generations. Supporting local talent.",
                icon: "🎨"
              }
            ].map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1}>
                <div className="p-8 bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}