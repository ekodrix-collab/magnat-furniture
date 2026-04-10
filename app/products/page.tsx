"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";

// Mock data for products
const allProducts = [
  { slug: "milano-sofa", name: "Milano Modular Sofa", short_description: "Architectural comfort with Italian-sourced leather foundations.", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop"], categoryName: "Sofas" },
  { slug: "oxide-chair", name: "Oxide Accent Chair", short_description: "A sculptural masterpiece blending velvet and matte steel.", images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop"], categoryName: "Chairs" },
  { slug: "kondotty-table", name: "Kondotty Heritage Table", short_description: "Hand-finished Kerala teak with a minimalist glass inlay.", images: ["https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop"], categoryName: "Dining" },
  { slug: "zenith-curtains", name: "Zenith Sheer Series", short_description: "Light-filtering sheers designed for tropical ventilation.", images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop"], categoryName: "Curtains" },
  { slug: "monolith-bed", name: "Monolith Master Bed", short_description: "Upholstered luxury with integrated ambient lighting slots.", images: ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2600&auto=format&fit=crop"], categoryName: "Bedroom" },
  { slug: "vector-recliner", name: "Vector Ergonomic Recliner", short_description: "Precision-engineered support for the modern executive lounge.", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], categoryName: "Chairs" },
];

const categories = ["All", "Sofas", "Chairs", "Dining", "Curtains", "Bedroom"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.categoryName === activeCategory);

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="py-24 border-b border-black/5">
        <div className="max-container">
           <FadeInView className="max-w-4xl space-y-4">
              <span className="heading-label">Product Showcase</span>
              <h1 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                 Signature <span className="italic font-normal">Inventory.</span>
              </h1>
           </FadeInView>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-black/5">
         <div className="max-container flex items-center justify-between py-6">
            <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-all whitespace-nowrap pb-1 border-b-2 ${
                     activeCategory === cat ? "border-[#C0001A] text-[#111]" : "border-transparent text-black/30 hover:text-black"
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            <div className="hidden md:flex items-center gap-4 text-black/30 text-[9px] font-bold tracking-widest uppercase">
               <span>Display Mode:</span>
               <div className="flex gap-2">
                  <div className="w-3 h-3 bg-black" />
                  <div className="w-3 h-3 border border-black/20" />
               </div>
            </div>
         </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="py-24">
        <div className="max-container">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
              {filteredProducts.map((product, index) => (
                <FadeInView key={product.slug} delay={index * 0.05}>
                   <ProductCard product={product} />
                </FadeInView>
              ))}
           </div>
           
           {filteredProducts.length === 0 && (
             <div className="py-40 text-center">
                <span className="text-black/30 italic">No pieces found in this category.</span>
             </div>
           )}
        </div>
      </section>

      {/* ── Personalized Service ── */}
      <section className="py-32 bg-[#111] text-white">
         <div className="max-container flex flex-col items-center text-center">
            <FadeInView className="max-w-xl space-y-8">
               <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Can&apos;t find the exact piece?</h2>
               <p className="text-white/40 text-sm font-light leading-relaxed">
                  Our Kondotty studio specializes in bespoke furniture design. 
                  Share your inspiration and we will manufacture it tailored to your home.
               </p>
               <button className="btn-primary border-white">Request Custom Design</button>
            </FadeInView>
         </div>
      </section>
    </main>
  );
}
