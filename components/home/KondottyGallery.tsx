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
    <section className="bg-[#111111] py-32 overflow-hidden border-t border-white/5">
      <div className="max-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <FadeInView>
              <h2 className="text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-white leading-tight mb-4 md:mb-5 lg:mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                 From Our <span className="italic text-[#C0001A]">Showroom.</span>
              </h2>
              <p className="text-white/30 text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>Visual Journey of Craft</p>
           </FadeInView>
           
           <FadeInView delay={0.2}>
              <a 
                href="https://instagram.com/magnat_furniture_.kondotty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white/50 hover:text-[#C0001A] transition-colors group"
              >
                 <Instagram size={20} />
                 <span className="text-xs font-bold tracking-widest uppercase">Follow Perspective</span>
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </FadeInView>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
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
