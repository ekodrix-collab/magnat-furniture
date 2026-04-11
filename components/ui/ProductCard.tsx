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
      className="group relative flex flex-col bg-white dark:bg-zinc-900 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      
      {/* ── Image Container ── */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f9f9f9] dark:bg-zinc-800 block">
        <Link href={`/products/${slug}`} className="absolute inset-0 z-0">
          <Image
            src={mainImage}
            alt={name || "Premium Furniture"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-1000 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges - Glassmorphism */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {isNew && (
            <span className="px-3 py-1.5 bg-red-600/90 backdrop-blur-md text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg border border-white/10">
              New Arrival
            </span>
          )}
          {isBestseller && (
            <span className="px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg border border-white/10">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 z-20">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#C0001A", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xl backdrop-blur-xl transition-all border border-white/20 ${
              isLiked ? "bg-[#C0001A] text-white" : "bg-white/80 dark:bg-black/40 text-[#111111] dark:text-white"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.5} />
          </motion.button>
          
          <Link href={`/products/${slug}`}>
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#111", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/40 text-[#111111] dark:text-white flex items-center justify-center shadow-xl backdrop-blur-xl transition-all border border-white/20"
              aria-label="Quick view"
            >
              <Eye size={18} strokeWidth={1.5} />
            </motion.div>
          </Link>
        </div>

        {/* Interaction Overlay - Shop Friendly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
           <motion.a
             href={whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="w-full bg-white dark:bg-zinc-100 text-[#111111] py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl rounded-sm"
             style={{ fontFamily: "var(--font-dm-sans)" }}
           >
             <MessageCircle size={14} strokeWidth={2.5} />
             Enquire on WhatsApp
           </motion.a>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className={`flex flex-col ${compact ? 'p-4' : 'p-6'} bg-white dark:bg-zinc-900 border-t border-zinc-50 dark:border-zinc-800`}>
        {/* Category Header */}
        <div className="flex items-center justify-between mb-2">
          {categoryName ? (
            <span 
              className="text-[#C0001A] text-[9px] font-bold tracking-[0.3em] uppercase" 
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {categoryName}
            </span>
          ) : (
             <span className="w-8 h-px bg-zinc-200 dark:bg-zinc-700" />
          )}
          
          <div className="flex gap-1">
             {[1, 2, 3].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
             ))}
          </div>
        </div>
        
        {/* Product Name */}
        <h3 
          className={`text-[#111111] dark:text-white ${compact ? 'text-lg' : 'text-xl'} font-semibold leading-tight mb-2 group-hover:text-[#C0001A] transition-colors duration-300 line-clamp-1`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <Link href={`/products/${slug}`}>
            {name}
          </Link>
        </h3>
        
        {/* Description */}
        {!compact && short_description && (
          <p 
            className="text-[#666666] dark:text-zinc-400 text-xs leading-relaxed line-clamp-2 mb-4 font-light" 
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {short_description}
          </p>
        )}

        {/* Footer info: Price & Arrow */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50 dark:border-zinc-800">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#999] mb-1">Starting from</span>
            <span 
              className="text-[#111111] dark:text-white font-bold text-lg" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {price || "Contact for Price"}
            </span>
          </div>
          
          <Link 
            href={`/products/${slug}`} 
            className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-zinc-100 dark:border-zinc-800 hover:bg-[#C0001A] hover:border-[#C0001A] transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-400 group-hover/btn:text-white transition-colors">
               <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}