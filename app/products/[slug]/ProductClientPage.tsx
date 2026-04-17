"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import { useFavorites } from "@/lib/context/FavoritesContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, MessageCircle, Heart, Star, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight
} from "lucide-react";

import { Product } from "@/lib/types";

export default function ProductClientPage({ 
  product, 
  relatedProducts 
}: { 
  product: Product;
  relatedProducts: Product[];
}) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const { isFavorite, toggleFavorite, favoritesCount } = useFavorites();
  const liked = product ? isFavorite(product.slug) : false;

  if (!product) {
    return (
      <div className="pt-40 pb-32 bg-[#fafaf9] min-h-screen flex flex-col items-center justify-center">
        <FadeInView>
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold text-[#111111] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Product Not Found
            </h1>
            <p className="text-[#666666] font-light mb-10 leading-relaxed">
              The product you're looking for is currently unavailable. Browse our curated catalog for other exquisite pieces.
            </p>
            <Link href="/products" className="bg-[#111] text-white px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm">
              Browse All Products
            </Link>
          </div>
        </FadeInView>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi MAGNAT Furniture, I'm enquiring about the ${product.name}.`);
  const whatsappLink = `https://wa.me/919446516395?text=${whatsappMessage}`;
  const images = product.images && product.images.length > 0 ? product.images : ["/images/placeholder-furniture.jpg"];

  // Split images for desktop layout: 1 main image, up to 2 sub-images 
  const mainImage = images[0];
  const subImages = images.slice(1, 3);
  // Ensure we always have two sub-images for the grid layout visually, padding with main image if needed
  const displaySubImages = [
    subImages[0] || mainImage,
    subImages[1] || mainImage
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      
      {/* ── Mobile Standalone Header (Placed naturally below global navbar) ── */}
      <div className="md:hidden pt-[140px] pb-4 px-6 flex items-center bg-white">
         <button 
           onClick={() => router.back()} 
           className="w-10 h-10 rounded-full bg-[#f6f6f6] flex items-center justify-center text-[#111]"
           aria-label="Go Back"
         >
            <ChevronLeft size={20} strokeWidth={2} />
         </button>
      </div>

      <div className="max-container pt-4 md:pt-32 px-0 md:px-10 lg:px-16">
        
        {/* ── Desktop Breadcrumbs ── */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-medium tracking-[0.05em] text-[#666] mb-10">
          <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
          <span className="text-[#ccc] px-1">{'>'}</span>
          <Link href={`/products?category=${product.category?.slug || ""}`} className="hover:text-[#111] transition-colors">{product.category?.name || 'Collection'}</Link>
          <span className="text-[#ccc] px-1">{'>'}</span>
          <span className="text-[#111] font-bold">{product.name}</span>
        </div>

        {/* ── Main Layout ── */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-16 lg:gap-24 mb-24">
          
          {/* ══════ LEFT: Images ══════ */}
          <div className="w-full md:w-[55%] flex flex-col pt-20 md:pt-0">
             
             {/* Mobile: Pill Gallery underneath single image */}
             <div className="relative w-full aspect-[4/3] md:hidden bg-[#f4f3f0]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt={product.name}
                      fill
                      priority
                      sizes="100vw"
                      className="object-contain p-8 mix-blend-multiply" 
                    />
                  </motion.div>
                </AnimatePresence>
             </div>

             {/* Mobile Pill Selector */}
             {images.length > 1 && (
               <div className="md:hidden flex justify-center mt-6 mb-8 px-6">
                  <div className="flex items-center gap-4 bg-[#f4f3f0] py-2 px-6 rounded-full border border-[#ebebeb]">
                    {images.map((img: string, i: number) => (
                      <button 
                        key={i}
                        className={`relative w-8 h-8 rounded-full overflow-hidden transition-all ${
                          currentImageIndex === i ? 'ring-2 ring-[#111] ring-offset-1 bg-white' : 'opacity-60'
                        }`}
                        onClick={() => setCurrentImageIndex(i)}
                      >
                         <Image src={img} alt={`Thumb ${i}`} fill className="object-cover mix-blend-multiply" />
                      </button>
                    ))}
                  </div>
               </div>
             )}

             {/* Desktop: Grid Layout (1 Big, 2 Small) */}
             <div className="hidden md:flex flex-col gap-5">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#f4f3f0]">
                   <Image
                      src={mainImage}
                      alt={product.name}
                      fill
                      priority
                      sizes="(min-width: 768px) 50vw"
                      className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-1000"
                   />
                </div>
                <div className="grid grid-cols-2 gap-5">
                   <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#f4f3f0]">
                     <Image
                        src={displaySubImages[0]}
                        alt={`${product.name} Detail 1`}
                        fill
                        sizes="(min-width: 768px) 25vw"
                        className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-1000"
                     />
                   </div>
                   <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#f4f3f0]">
                     <Image
                        src={displaySubImages[1]}
                        alt={`${product.name} Detail 2`}
                        fill
                        sizes="(min-width: 768px) 25vw"
                        className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-1000"
                     />
                   </div>
                </div>
             </div>
          </div>

          {/* ══════ RIGHT: Product Information ══════ */}
          <div className="w-full md:w-[45%] px-6 md:px-0 flex flex-col pt-0 md:pt-4">
             
             {/* Category & Like (Desktop) */}
             <div className="hidden md:flex items-center justify-between mb-4">
                <span className="bg-[#f0f0f0] text-[#666] text-[10px] font-bold tracking-[0.05em] px-4 py-1.5 rounded-full">
                   {product.category?.name || 'Sofa'}
                </span>
                <button onClick={() => toggleFavorite(product.slug)} className="text-[#111]">
                   <Heart size={22} fill={liked ? '#111' : 'none'} strokeWidth={1.5} className="transition-all hover:scale-110" />
                </button>
             </div>

             {/* Title & Like (Mobile) */}
             <div className="flex md:hidden items-start justify-between mb-2">
                <h1 className="text-[26px] font-semibold text-[#111] leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                   {product.name}
                </h1>
                <button onClick={() => toggleFavorite(product.slug)} className="text-[#111] mt-1 shrink-0 ml-4">
                   <Heart size={20} fill={liked ? '#111' : 'none'} strokeWidth={1.5} className="transition-all hover:scale-110" />
                </button>
             </div>

             {/* Desktop Title */}
             <h1 className="hidden md:block text-[32px] lg:text-[40px] font-semibold text-[#111] leading-tight mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                {product.name}
             </h1>

             {/* Mock Stars */}
             <div className="flex items-center gap-2 mb-5">
                <div className="flex text-[#FFD700]">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <span className="text-[11px] text-[#666] underline decoration-[#ccc] underline-offset-2">(145 Reviews)</span>
             </div>

             {/* Price (Visible matching the screenshot) */}
             <div className="mb-6">
                <span className="text-[22px] md:text-[28px] font-semibold text-[#111]" style={{ fontFamily: "var(--font-inter)" }}>
                   {product.price || "$200.00"}
                </span>
             </div>

             {/* Description (Clamped on mobile, full on desktop) */}
             <div className="text-[#666] text-[13px] md:text-[14px] leading-[1.7] mb-8 font-light max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>
                <p className={`${!isExpanded ? 'line-clamp-3 md:line-clamp-none' : ''}`}>
                   {product.description || product.short_description}
                </p>
                <button 
                  className="md:hidden mt-2 text-[#111] font-semibold text-[13px]"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'View less' : 'View more'}
                </button>
             </div>

             {/* Dimensions Table */}
             <div className="mb-10 w-full lg:w-11/12">
                <h3 className="text-[15px] font-semibold text-[#111] mb-5">Product Dimensions</h3>
                
                <div className="flex flex-col border-t border-[#f0f0f0]">
                   {product.specifications && product.specifications.length > 0 ? (
                      product.specifications.map((spec: any, i: number) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-[#f0f0f0] text-[13px]">
                           <span className="text-[#666] font-light">{spec.label}</span>
                           <span className="text-[#111] font-medium">{spec.value}</span>
                        </div>
                      ))
                   ) : (
                      // Mock Dimensions if specs not available
                      <>
                        <div className="flex justify-between flex-wrap gap-2 items-center py-4 border-b border-[#f0f0f0] text-[13px] sm:text-[14px]">
                           <span className="text-[#666] font-light">Width</span>
                           <span className="text-[#111] font-medium text-right sm:text-left">H84.5 x W64 x D75 cm</span>
                        </div>
                        <div className="flex justify-between flex-wrap gap-2 items-center py-4 border-b border-[#f0f0f0] text-[13px] sm:text-[14px]">
                           <span className="text-[#666] font-light">Weight</span>
                           <span className="text-[#111] font-medium text-right sm:text-left">15.6 kg / 34.4 lbs</span>
                        </div>
                      </>
                   )}
                </div>
             </div>

             {/* Get 30% OFF banner & WhatsApp Button matching "Add to Cart" Layout */}
             <div className="mt-auto pb-4">
                <div className="bg-[#e9fdf5] border border-[#a8edd5] rounded-[6px] p-4 flex items-center gap-3 mb-6">
                   <MessageCircle size={16} className="text-[#111]" />
                   <span className="text-[13px] font-medium text-[#111]">Customizing for Kerala homes? Let's talk.</span>
                </div>

                <div className="flex items-center gap-3 w-full">
                   <a 
                     href={whatsappLink} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full bg-[#2a2a2a] hover:bg-[#111] text-white py-4 rounded-[6px] text-[11px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-2 transition-colors shadow-sm"
                   >
                     Enquire On WhatsApp <MessageCircle size={14} />
                   </a>
                </div>
             </div>

          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {relatedProducts && relatedProducts.length > 0 && (
         <div className="max-container px-6 md:px-10 lg:px-16 pt-10 border-t border-[#f0f0f0]">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-[20px] md:text-[24px] font-bold text-[#111] uppercase tracking-[-0.02em]" style={{ fontFamily: "var(--font-inter)" }}>
                  Related Products
               </h2>
               <Link href={`/products?category=${product.category?.slug || ""}`} className="hidden md:flex items-center gap-1 text-[13px] text-[#666] hover:text-[#111] transition-colors border border-[#e0e0e0] px-4 py-2 rounded-full">
                  See all products <ArrowRight size={14} />
               </Link>
            </div>
            
            {/* Grid matches requested layout: 1300px+ (xl) = 4, md = 3, mobile = 2 */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
               {relatedProducts.map((p, i) => (
                  <ProductCard key={p.slug} product={p} />
               ))}
            </div>
            
            <div className="mt-8 flex justify-center md:hidden">
               <Link href={`/products?category=${product.category?.slug || ""}`} className="flex items-center gap-1 text-[13px] text-[#666] hover:text-[#111] border border-[#e0e0e0] px-6 py-2 rounded-full">
                  See all products <ArrowRight size={14} />
               </Link>
            </div>
         </div>
      )}

      {/* Global CSS to style the scrollbar lightly on mobile if needed, though we didn't use horizontal scrolling here */}
    </div>
  );
}
