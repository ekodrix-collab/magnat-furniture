"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "@/lib/types";

/* ── Fallback Data (Hardcoded) ── */
const FALLBACK_ITEMS: Category[] = [
  { id: "fb1", name: "Luxury Velvet Sofa", slug: "sofas", image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 0, created_at: "" },
  { id: "fb2", name: "Minimalist Lounge Chair", slug: "chairs", image_url: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 1, created_at: "" },
  { id: "fb3", name: "Premium Sheer Curtains", slug: "curtains", image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 2, created_at: "" },
  { id: "fb4", name: "Dining Table Set", slug: "dining", image_url: "https://images.unsplash.com/photo-1617806118233-1ec365ba409e?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 3, created_at: "" },
  { id: "fb5", name: "Modern Bedroom Suite", slug: "bedroom", image_url: "https://images.unsplash.com/photo-1505693419148-de1967a93fb4?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 4, created_at: "" },
];

/* ── Card Component ── */
function CategoryCard({ cat }: { cat: Category }) {
  // Simulate price based on ID or just default
  const price = "₹25,000";

  return (
    <div className="flex-shrink-0 w-[260px] md:w-[280px] group cursor-pointer">
      <Link href={`/products/${cat.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
          <img
            src={cat.image_url || "/images/placeholder-furniture.jpg"}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Text Info (Matches Screenshot Style) */}
        <div className="mt-4 flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            {cat.slug || "Category"}
          </span>
          <h3 className="text-[16px] font-semibold text-[#111] leading-tight">
            {cat.name}
          </h3>
          <p className="text-[14px] text-gray-500 font-medium mt-1">
            Starts from {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

/* ── Main Component ── */
export default function SpecialModels({ categories }: { categories?: Category[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Logic: Use categories if they exist, otherwise use fallback
  const displayItems = (categories && categories.length > 0) ? categories : FALLBACK_ITEMS;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const amount = clientWidth * 0.75; // Scroll 75% of container width
      const scrollTo = direction === 'left' ? scrollLeft - amount : scrollLeft + amount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-container px-6 lg:px-8">

        {/* Header & Controls */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#111] mb-2" >
              Top Sellers
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="p-2.5 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="p-2.5 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayItems.map((cat) => (
            <div key={cat.id} className="snap-start">
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}