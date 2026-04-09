"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Partial<Product>;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, short_description, images, slug } = product;
  const mainImage = images?.[0] || "/images/placeholder-furniture.jpg";

  return (
    <div className="group relative flex flex-col items-start text-left bg-white border border-transparent hover:border-[#c9a96e]/10 transition-all duration-500">
      
      {/* ── Image Area ── */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f9f9f9]">
        <Image
          src={mainImage}
          alt={name || "Premium Furniture"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Editorial Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
           <a
             href={`https://wa.me/919074477358?text=Hi, I am interested in ${name}`}
             target="_blank"
             rel="noopener noreferrer"
             className="w-full bg-white py-3 text-[#1a1a1a] text-[10px] font-bold tracking-[0.2em] uppercase text-center hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
           >
             Enquire Now
           </a>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="py-6 w-full flex flex-col items-start">
        <span className="text-[#c9a96e] text-[9px] font-bold tracking-[0.35em] uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>
          Masterpiece Series
        </span>
        
        <h3 className="text-[#1a1a1a] text-lg font-semibold leading-tight group-hover:text-[#c9a96e] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
          <Link href={`/products/${slug}`}>
            {name}
          </Link>
        </h3>
        
        <div className="mt-3 w-8 h-[1px] bg-[#c9a96e]/20 group-hover:w-full transition-all duration-700" />
        
        {short_description && (
          <p className="mt-4 text-[#1a1a1a]/50 text-[13px] leading-relaxed line-clamp-2 font-light" style={{ fontFamily: "var(--font-inter)" }}>
            {short_description}
          </p>
        )}
        
        {/* Subtle Next-level indicator */}
        <Link href={`/products/${slug}`} className="mt-5 text-[9px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-all flex items-center gap-2">
           View Details
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
        </Link>
      </div>
    </div>
  );
}
