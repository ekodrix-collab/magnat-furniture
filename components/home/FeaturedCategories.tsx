"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInView from "@/components/ui/FadeInView";

const categories = [
  {
    name: "Living Room",
    label: "Sofas & Sectionals",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    href: "/collections/sofas",
    colSpan: "lg:col-span-2",
  },
  {
    name: "Dining Room",
    label: "Refined Sets",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000&auto=format&fit=crop",
    href: "/collections/dining",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Master Suite",
    label: "Bedroom Oasis",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000&auto=format&fit=crop",
    href: "/collections/bedroom",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Armchairs",
    label: "Sculptural Seating",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
    href: "/collections/chairs",
    colSpan: "lg:col-span-1",
  },
  {
    name: "Workplace",
    label: "Executive Offices",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    href: "/collections/office",
    colSpan: "lg:col-span-1",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-[#f5f2ee] py-24 lg:py-32 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <FadeInView className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[#c9a96e] text-[9px] font-bold tracking-[0.45em] uppercase mb-4 block" style={{ fontFamily: "var(--font-inter)" }}>
              Curated Collections
            </span>
            <h2 className="text-[#1a1a1a] leading-[1.1]" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 600 }}>
              The World of <br />
              <span className="italic">Magnat Furniture</span>
            </h2>
          </div>
          <Link href="/collections" className="btn-gold-outline hidden lg:inline-flex">
            Explore All Categories
          </Link>
        </FadeInView>

        {/* Diagonal / Masonry-inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <FadeInView
              key={category.name}
              delay={0.1 * index}
              className={`group relative h-[450px] lg:h-[600px] overflow-hidden ${category.colSpan}`}
            >
              <Link href={category.href} className="block relative h-full w-full">
                {/* Image Component */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
                
                {/* Overlay Text — Bottom left editorial style */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="block text-[9px] font-bold tracking-[0.3em] uppercase text-[#c9a96e] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                      {category.label}
                    </span>
                    <h3 className="text-white text-3xl font-semibold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Modern reveal rule */}
                  <div className="mt-8 h-[1px] w-0 bg-white/40 transition-all duration-700 group-hover:w-full" />
                  
                  {/* Invisible CTA that slides up */}
                  <div className="mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="text-white text-[9px] font-bold tracking-[0.25em] uppercase flex items-center gap-3">
                      View Collection
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
        
        {/* Mobile Mobile CTA */}
        <div className="mt-12 text-center lg:hidden">
          <Link href="/collections" className="btn-gold-outline w-full justify-center">
            Explore All Categories
          </Link>
        </div>

      </div>
    </section>
  );
}
