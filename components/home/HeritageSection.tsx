"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, CreditCard } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

export default function HeritageSection() {
  return (
    <section className="bg-white py-24 lg:py-48 overflow-hidden border-b border-black/5">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-16 lg:gap-32 items-center">
          
          {/* ── Left: Detailed Introduction ── */}
          <div className="space-y-12 lg:space-y-16">
            <FadeInView className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-[#111] leading-[1.1]" style={{ fontFamily: "var(--font-playfair)" }}>
                Welcome to <br />
                <span className="text-[#C0001A]">Magnat Furniture</span>
              </h2>
              
              <div className="max-w-2xl space-y-6">
                <p className="text-lg lg:text-xl text-black/60 font-light leading-relaxed">
                  With over two decades of expertise, Magnat Furniture has built a trusted 
                  legacy of crafting quality furniture that blends comfort, style and durability. 
                  Operated directly from our flagship manufacturing unit in Kondotty.
                </p>
                <p className="text-lg lg:text-xl text-black/60 font-light leading-relaxed">
                  Our curated collection ranges from timeless classics to modern designs, offering 
                  pieces for every taste and space—be it your living room, dining area, bedroom or 
                  office. We also provide custom-made furniture tailored to your specifications.
                </p>
                <p className="text-lg lg:text-xl text-black/60 font-light leading-relaxed">
                  Every Magnat piece is a testament to our commitment to material intelligence 
                  and artisanal integrity, ensuring your space reflects your unique personality.
                </p>
              </div>

              <div className="pt-4">
                 <button className="btn-ghost-dark group !px-10 !py-5">
                    Explore More
                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </FadeInView>

            {/* Feature Ribbon (Inspired by Vilangadan reference) */}
            <FadeInView delay={0.3} className="pt-8 border-t border-black/5">
               <div className="flex flex-wrap items-center gap-12 lg:gap-16">
                  {/* Years badge */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col border-r border-black/10 pr-6">
                       <span className="text-3xl font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>25</span>
                       <span className="text-[8px] font-bold tracking-widest uppercase text-black/30">Years of Craft</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#C0001A] group-hover:border-[#C0001A] transition-all duration-500">
                        <CreditCard size={20} className="text-[#C0001A] group-hover:text-white transition-colors" opacity={0.6} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-black/30">Payment</span>
                        <span className="text-xs font-bold text-[#111]">Easy EMI</span>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#C0001A] group-hover:border-[#C0001A] transition-all duration-500">
                        <ShieldCheck size={20} className="text-[#C0001A] group-hover:text-white transition-colors" opacity={0.6} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-black/30">Assurance</span>
                        <span className="text-xs font-bold text-[#111]">Quality Certified</span>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#C0001A] group-hover:border-[#C0001A] transition-all duration-500">
                        <Truck size={20} className="text-[#C0001A] group-hover:text-white transition-colors" opacity={0.6} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-black/30">Logistics</span>
                        <span className="text-xs font-bold text-[#111]">Free Delivery</span>
                     </div>
                  </div>
               </div>
            </FadeInView>
          </div>

          {/* ── Right: Visual Accent (Geometric bars) ── */}
          <FadeInView direction="left" className="relative group">
             {/* Geometric Accents (The Teal bars from the reference, but in Magnat Red) */}
             <div className="absolute -top-10 right-20 w-8 h-32 bg-[#C0001A] -skew-x-12 z-20 group-hover:-translate-y-4 transition-transform duration-1000" />
             <div className="absolute -bottom-10 left-10 w-10 h-40 bg-[#C0001A] -skew-x-12 z-20 group-hover:translate-y-4 transition-transform duration-1000" />
             
             <div className="aspect-[4/5] relative overflow-hidden rounded-[20px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
                  alt="Magnat Interior Excellence"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl rounded-2xl hidden xl:block">
                <span className="text-4xl font-black text-[#111] italic" style={{ fontFamily: "var(--font-playfair)" }}>M</span>
                <div className="h-px w-8 bg-[#C0001A] my-2" />
                <span className="text-[8px] font-bold tracking-widest uppercase text-black/20">Since 2001</span>
             </div>
          </FadeInView>

        </div>
      </div>
    </section>
  );
}
