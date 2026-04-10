"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const collections = [
  { 
    title: "Sofas & Sectionals", 
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Chairs & Recliners", 
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
  },
  { 
    title: "Dining Sets", 
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Curtains & Blinds", 
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Bedroom Furniture", 
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Full Interior Projects", 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HomeCollection() {
  return (
    <section id="collection" className="bg-white py-24 lg:py-40 overflow-hidden border-t border-black/5">
      <div className="max-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-10">
           <FadeInView className="max-w-2xl">
              <span className="heading-label">The Portfolio</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                Our <span className="italic font-normal text-black/90">Curated Work.</span>
              </h2>
           </FadeInView>
           <FadeInView delay={0.2} className="shrink-0">
              <button className="btn-primary !px-10 lg:!px-14 !py-4 lg:!py-5 !text-[9px] lg:!text-[10px]">
                 Explore All
              </button>
           </FadeInView>
        </div>

        {/* 3x2 Grid (Standardized grayscale-to-color) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 xl:gap-16">

          {collections.map((item, index) => (
            <FadeInView key={item.title} delay={index * 0.1} direction="up" className="group cursor-pointer">
               <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />

                  {/* Red Overlay Slide-up (Standardized) */}
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-white/95 backdrop-blur-sm translate-y-[calc(100%-80px)] group-hover:translate-y-0 transition-transform duration-700">
                     <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>
                               {item.title}
                            </h3>
                            <ArrowRight size={20} className="text-[#C0001A] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-black/40 text-xs font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            Discover our manufacturing excellence in {item.title.toLowerCase()}. Custom solutions for premium homes.
                        </p>
                     </div>
                  </div>
               </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
