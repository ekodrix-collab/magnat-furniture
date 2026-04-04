"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import { Filter, SlidersHorizontal } from "lucide-react";

const allProducts = [
  { id: "1", name: "Classic Velvet Sofa", category_id: "living-room", slug: "classic-velvet-sofa", images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop"], short_description: "Deep-tufted velvet upholstery." },
  { id: "2", name: "Oak Dining Table", category_id: "dining-room", slug: "oak-dining-table", images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"], short_description: "European White Oak table." },
  { id: "3", name: "Leather Armchair", category_id: "living-room", slug: "leather-armchair", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], short_description: "Top-grain Italian leather." },
  { id: "4", name: "Canopy Bed", category_id: "bedroom", slug: "heritage-canopy-bed", images: ["/images/bedroom-001.jpg"], short_description: "Architectural metal framing." },
  { id: "5", name: "Executive Desk", category_id: "office", slug: "executive-desk", images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"], short_description: "Premium office workspace." },
  { id: "6", name: "Chesterfield Sofa", category_id: "living-room", slug: "chesterfield-sofa", images: ["https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop"], short_description: "Classic tufted leather sofa." },
  { id: "7", name: "Marble Coffee Table", category_id: "living-room", slug: "marble-coffee-table", images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"], short_description: "Italian Carrara marble top." },
  { id: "8", name: "Velvet Dining Chairs", category_id: "dining-room", slug: "velvet-dining-chairs", images: ["https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop"], short_description: "Contoured comfort for dining." },
];

const categories = [
  { label: "All Products", value: "all" },
  { label: "Living Room", value: "living-room" },
  { label: "Dining Room", value: "dining-room" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Office", value: "office" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return allProducts;
    return allProducts.filter((p) => p.category_id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-brand-primary">
      <div className="container mx-auto px-6 lg:px-12 mt-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <SectionHeading
            label="Exclusive Catalog"
            title="Our Masterpieces"
            subtitle="Explore our complete range of premium furniture, meticulously organized by collection for your convenience."
            className="max-w-2xl"
          />

          <div className="flex flex-wrap gap-4 pt-10 border-t border-brand w-full lg:w-auto lg:border-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-8 py-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-all border ${activeCategory === cat.value
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                    : "bg-transparent text-[#1A1A1A] border-brand hover:border-[#1A1A1A]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product, index) => (
              <FadeInView key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </FadeInView>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-body font-light text-lg italic">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-32 min-h-screen bg-brand-primary flex items-center justify-center">
        <div className="animate-pulse text-[#1A1A1A] tracking-[0.3em] uppercase text-xs font-bold">
          Loading Catalog...
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
