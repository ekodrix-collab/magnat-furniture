"use client";

import { useRef } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "@/lib/types";

/* ── Fallback Data ── */
const FALLBACK_ITEMS: Category[] = [
  { id: "fb1", name: "Luxury Velvet Sofa", slug: "sofas", image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 0, created_at: "" },
  { id: "fb2", name: "Minimalist Lounge Chair", slug: "chairs", image_url: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 1, created_at: "" },
  { id: "fb3", name: "Premium Sheer Curtains", slug: "curtains", image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 2, created_at: "" },
  { id: "fb4", name: "Dining Table Set", slug: "dining", image_url: "https://images.unsplash.com/photo-1617806118233-1ec365ba409e?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 3, created_at: "" },
  { id: "fb5", name: "Modern Bedroom Suite", slug: "bedroom", image_url: "https://images.unsplash.com/photo-1505693419148-de1967a93fb4?q=80&w=800&auto=format&fit=crop", description: null, is_featured: true, sort_order: 4, created_at: "" },
];

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="flex-shrink-0 w-[260px] md:w-[280px] group cursor-pointer">
      <Link href={`/products/${cat.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={cat.image_url || "/images/placeholder-furniture.jpg"}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C0001A] font-bold">
            {cat.slug || "Category"}
          </span>
          <h3 className="text-[18px] font-bold text-[#111] leading-tight group-hover:text-[#C0001A] transition-colors">
            {cat.name}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default function SpecialModels({ categories }: { categories?: Category[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const displayItems = (categories && categories.length > 0) ? categories : FALLBACK_ITEMS;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const amount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - amount : scrollLeft + amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#FAF8F6] py-12 md:py-20">
      <div className="max-container px-4">

        {/* 1. Header Area */}
        <div className="text-center mb-4">
          <SectionHeading
            label="Top Products"
            titlePart1="Signature"
            titlePart2="Masterpieces"
          />
        </div>

        {/* 2. The Balanced Description Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center mb-10 md:mb-16">

          {/* LEFT: Subtle Element for Balance (Hidden on Mobile) */}
          <div className="hidden md:flex justify-start items-center">
            <span className="text-[11px] tracking-[0.3em] text-gray-400 uppercase font-medium rotate-0">
              Swipe to Explore
            </span>
          </div>

          {/* CENTER: Description (Spans 3 columns to stay centered) */}
          <div className="md:col-span-3 flex justify-center">
            <p className="text-[15px] md:text-[16px] text-gray-500 max-w-xl text-center leading-relaxed">
              Explore our most celebrated designs, curated for those who seek the perfect blend of architectural form and enduring comfort.
            </p>
          </div>

          {/* RIGHT: Controls (Hidden on Mobile) */}
          <div className="hidden md:flex justify-end items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#111] hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#111] hover:text-white transition-all active:scale-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3. Carousel */}
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