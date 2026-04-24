"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Pick<Product, 'name' | 'slug' | 'images'> & Partial<Product>;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const { 
    slug, 
    name, 
    description, 
    short_description, 
    images, 
    material, 
    categories, 
    badge,
    is_new,
    is_bestseller,
    price 
  } = product;

  // Handle both possible sources of images and description
  const mainImage = images?.[0] || "/images/placeholder-furniture.jpg";
  const displayDescription = short_description || description;
  const displayLabel = material || categories?.name;
  const displayBadge = badge || (is_new ? "New Arrival" : is_bestseller ? "Best Seller" : null);

  return (
    <article className={`group border border-[#f0f0f0] rounded-[4px] overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(17,17,17,0.10)] hover:border-[#ebebeb] h-full cursor-pointer`}>

      {/* ── Image Container ── */}
      <div className="relative w-full overflow-hidden bg-[#f7f7f5] flex-shrink-0" style={{ aspectRatio: "3/2.8" }}>
        <Image
          src={mainImage}
          alt={`${name} — MAGNAT Furniture`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          priority={false}
        />
        {displayBadge && (
          <div className="absolute top-3 left-3 bg-[#111] text-white text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-[2px] z-10 max-sm:text-[7px] max-sm:px-2 max-sm:py-1">
            {displayBadge}
          </div>
        )}
      </div>

      {/* ── Content Area ── */}
      <div className={`flex flex-col flex-1 px-5 pt-6 pb-7 min-h-[220px] max-sm:px-3 max-sm:pt-2.5 max-sm:pb-3.5 max-sm:min-h-[140px]`}>
        {/* Label (Material or Category) */}
        {displayLabel && (
          <span 
            className="block mb-2 text-[10px] font-medium tracking-[0.25em] uppercase text-[#C0001A] max-sm:text-[8px] max-sm:mb-[5px]" 
          >
            {displayLabel}
          </span>
        )}

        {/* Product Name */}
        <h3 
          className="text-base font-medium leading-snug text-[#111] mb-2 transition-colors duration-300 group-hover:text-[#C0001A] max-sm:text-[0.88rem] max-sm:mb-1.5" 
        >
          {name}
        </h3>

        {/* Description */}
        {displayDescription && (
          <p 
            className="text-sm text-[#666] leading-relaxed mb-4 flex-1 line-clamp-2 max-sm:text-[0.72rem] max-sm:mb-3" 
          >
            {displayDescription}
          </p>
        )}

        {/* Price (Optional, if present) */}
        {price && (
          <div className="mb-4">
             <span className="text-[10px] uppercase tracking-widest text-[#999] block mb-0.5">Starting from</span>
             <span className="text-[#111] font-semibold text-[15px]">{price}</span>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex items-center gap-2.5 mt-auto">
          <Link
            href={`/products/${slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111] text-white text-sm font-semibold tracking-[0.15em] uppercase px-4 py-3 rounded-[4px] no-underline transition-colors duration-300 hover:bg-[#C0001A] max-sm:py-2.5 max-sm:text-[9px] max-sm:tracking-[0.12em]"
            aria-label={`View details for ${name}`}
          >
            Details
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}