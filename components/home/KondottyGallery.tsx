"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const items = [
  { img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop", span: "row-span-2" },
  { img: "https://images.unsplash.com/photo-1595248447627-58a697194a00?q=80&w=1974&auto=format&fit=crop", span: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop", span: "row-span-2" },
  { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop", span: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", span: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop", span: "row-span-2" },
  { img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", span: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop", span: "row-span-1" },
];

export default function KondottyGallery() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="max-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-8">
           <FadeInView>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-none mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                 From Our <span className="italic text-[#C0001A]">Showroom.</span>
              </h2>
              <p className="text-white/30 text-[9px] lg:text-[10px] font-bold tracking-[0.3em] lg:tracking-[0.4em] uppercase">Visual Journey of Craft</p>
           </FadeInView>
           
           <FadeInView delay={0.2} className="shrink-0">
              <a 
                href="https://instagram.com/magnat_furniture_.kondotty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white/50 hover:text-[#C0001A] transition-colors group"
              >
                 <Instagram className="w-[18px] h-[18px] lg:w-5 lg:h-5" />
                 <span className="text-[10px] lg:text-xs font-bold tracking-widest uppercase">Follow Perspective</span>

                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </FadeInView>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] lg:auto-rows-[250px] gap-3 lg:gap-4 xl:gap-6">
           {items.map((item, index) => (
             <FadeInView 
                key={index} 
                delay={index * 0.05} 
                className={`${item.span} group relative overflow-hidden bg-white/5`}
             >
                <div className="absolute inset-x-0 bottom-0 h-0 bg-[#C0001A] group-hover:h-2 transition-all duration-500 z-20" />
                <img 
                  src={item.img} 
                  alt="Furniture Showcase" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </FadeInView>
           ))}
        </div>


      </div>
    </section>
  );
}
