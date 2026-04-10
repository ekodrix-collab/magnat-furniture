"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Eye, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    short_description: string;
    images: string[];
    categoryName?: string;
    price?: string;
    isNew?: boolean;
    isBestseller?: boolean;
  };
  compact?: boolean; // Controls compact rendering for alternate views
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const { name, short_description, images, slug, categoryName, price, isNew, isBestseller } = product;
  const mainImage = images?.[0] || "/images/placeholder-furniture.jpg";
  const [isLiked, setIsLiked] = useState(false);

  const whatsappMessage = `Hello MAGNAT Furniture Kondotty, I'm interested in the ${name}. Can you provide more details?`;
  const whatsappLink = `https://wa.me/919446516395?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div 
      className="group relative flex flex-col bg-white transition-all duration-500 hover:shadow-2xl"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      
      {/* ── Image Container ── */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f9f9f9] block">
        <Link href={`/products/${slug}`} className="absolute inset-0 z-0">
          <Image
            src={mainImage}
            alt={name || "Premium Furniture"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {isNew && (
            <span className="px-3 py-1 bg-[#C0001A] text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg">
              New Arrival
            </span>
          )}
          {isBestseller && (
            <span className="px-3 py-1 bg-[#111111] text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick Action Buttons - Hidden until hover */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
              isLiked ? "bg-[#C0001A] text-white" : "bg-white text-[#111111] hover:bg-[#C0001A] hover:text-white"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </motion.button>
          
          <Link href={`/products/${slug}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#111111] text-[#111111] hover:text-white flex items-center justify-center shadow-lg transition-colors"
              aria-label="Quick view"
            >
              <Eye size={18} />
            </motion.div>
          </Link>
        </div>

        {/* Hover Overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
           <motion.a
             href={whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             initial={{ y: 20, opacity: 0 }}
             whileHover={{ scale: 1.02 }}
             className="w-full bg-white text-[#111111] py-3 text-xs font-bold tracking-[0.2em] uppercase text-center hover:bg-[#C0001A] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl opacity-0 group-hover:opacity-100"
             style={{ 
               transitionDelay: "100ms",
               fontFamily: "var(--font-dm-sans)"
             }}
           >
             <MessageCircle size={16} />
             Enquire Now
           </motion.a>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className={`flex flex-col ${compact ? 'p-4' : 'p-6'} bg-white`}>
        {/* Category */}
        {categoryName && (
          <span 
            className="text-[#C0001A] text-[9px] font-bold tracking-[0.3em] uppercase mb-2" 
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {categoryName}
          </span>
        )}
        
        {/* Product Name */}
        <h3 
          className={`text-[#111111] ${compact ? 'text-base' : 'text-lg'} font-semibold leading-tight mb-3 group-hover:text-[#C0001A] transition-colors duration-300 line-clamp-2`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <Link href={`/products/${slug}`}>
            {name}
          </Link>
        </h3>
        
        {/* Description */}
        {!compact && short_description && (
          <p 
            className="text-[#666666] text-sm leading-relaxed line-clamp-2 mb-4 font-light" 
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {short_description}
          </p>
        )}

        {/* Price & CTA Row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#eeeeee]">
          {price && (
            <span 
              className="text-[#111111] font-semibold text-lg" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {price}
            </span>
          )}
          
          <Link 
            href={`/products/${slug}`} 
            className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#666666] hover:text-[#C0001A] transition-colors flex items-center gap-2 ml-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
               <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Animated Line */}
        <div className="mt-3 h-px bg-gradient-to-r from-[#C0001A]/0 via-[#C0001A]/50 to-[#C0001A]/0 w-0 group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
}