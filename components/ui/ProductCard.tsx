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
    <Link href={`/products/${slug}`} className="block h-full no-underline">
      <article
        className="
          group relative bg-white flex flex-col overflow-hidden cursor-pointer
          border border-[#e8e4e0]
          rounded-[2px]
          transition-all duration-500 ease-out
          hover:-translate-y-[3px]
          hover:shadow-[0_24px_64px_rgba(17,17,17,0.12)]
          hover:border-[#d4cfc9]
          h-full
        "
      >

      {/* ── Image Container ── */}
      <div
        className="relative w-full overflow-hidden bg-[#f5f3f0] flex-shrink-0 "
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={mainImage}
          alt={`${name} — MAGNAT Furniture`}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          priority={false}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Badge */}
        {displayBadge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="
              inline-block bg-[#111] text-white
              text-[9px] font-semibold tracking-[0.22em] uppercase
              px-3 py-1.5 rounded-[2px]
              sm:text-[8px] sm:px-2.5 sm:py-1
            ">
              {displayBadge}
            </span>
          </div>
        )}
      </div>

      {/* ── Thin accent line ── */}
      <div className="h-[2px] w-0 bg-[#C0001A] group-hover:w-full transition-all duration-500 ease-out" />

      {/* ── Content Area ── */}
      <div className="
        flex flex-col flex-1
        px-6 pt-5 pb-6
        sm:px-4 sm:pt-4 sm:pb-5
        xs:px-3 xs:pt-3 xs:pb-4
      ">

        {/* Label (Material or Category) */}
        {displayLabel && (
          <span className="
            block mb-2 text-[9px] font-bold tracking-[0.28em] uppercase text-[#C0001A]
            sm:text-[8px] sm:mb-1.5
          ">
            {displayLabel}
          </span>
        )}

        {/* Product Name */}
        <h3 className="
          font-semibold leading-tight text-[#111] mb-2
          text-[1.05rem]
          sm:text-[0.95rem]
          xs:text-[0.875rem]
          transition-colors duration-300 group-hover:text-[#111]
          tracking-[-0.01em]
        ">
          {name}
        </h3>

        {/* Divider */}
        <div className="w-8 h-px bg-[#ddd] mb-3 sm:mb-2" />

        {/* Description */}
        {displayDescription && (
          <p className="
            text-[#888] leading-relaxed mb-4 flex-1 line-clamp-2
            text-[0.825rem]
            sm:text-[0.775rem]
            xs:text-[0.72rem]
            sm:mb-3
          ">
            {displayDescription}
          </p>
        )}

        {/* CTA Button */}
        <div className="mt-auto pt-4 sm:pt-3">
          <div
            className="
              w-full inline-flex items-center justify-center gap-2
              bg-[#111] text-white
              text-[10px] font-bold tracking-[0.2em] uppercase
              px-5 py-3
              rounded-[2px]
              no-underline
              transition-all duration-300
              hover:bg-[#C0001A]
              active:scale-[0.98]
              sm:py-2.5 sm:text-[9px] sm:tracking-[0.15em]
              xs:py-2 xs:px-3
              group/btn
            "
          >
            <span>Details</span>
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </div>
        </div>
      </div>
      </article>
    </Link>
  );
}