"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

export default function HeritageSection() {
  return (
    <section className="bg-white py-24 lg:py-40 overflow-hidden relative border-b border-black/5">
      {/* Architectural Background Numeral */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
         <span className="text-[60vw] font-black leading-none" style={{ fontFamily: "var(--font-playfair)" }}>25</span>
      </div>

      <div className="max-container flex flex-col items-center text-center relative z-10">
        <div className="max-w-5xl space-y-12 lg:space-y-16">
           
           <FadeInView className="space-y-6 lg:space-y-10">
              <span className="heading-label">The Legacy of Craft</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                 A Quarter Century of <br />
                 <span className="italic font-normal">Design Excellence.</span>
              </h2>
           </FadeInView>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-start text-left pt-12">
              <FadeInView direction="right" className="space-y-8 lg:space-y-12">
                 <p className="text-xl lg:text-2xl xl:text-3xl font-light text-[#111]/70 leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                    Since 2001, Magnat has been at the forefront of the furniture industry in Kerala, 
                    transforming over 5,000 homes with our signature blend of international 
                    design and artisanal production.
                 </p>
                 <div className="h-px w-20 lg:w-32 bg-[#C0001A]" />
              </FadeInView>

              <FadeInView direction="left" className="space-y-10 lg:space-y-14">
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#111]">Our Philosophy</h4>
                    <p className="text-[#111]/50 text-sm lg:text-base leading-relaxed">
                       We believe that a home is a living gallery. Every piece of furniture 
                       carrying the Magnat name is a testament to 25 years of material 
                       intelligence and structural integrity.
                    </p>
                 </div>
                 
                 <div className="flex items-end gap-6 border-l border-[#C0001A]/20 pl-6 lg:pl-10">
                    <div className="flex flex-col">
                       <span className="text-4xl lg:text-5xl font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>2001</span>
                       <span className="text-[8px] lg:text-[9px] font-bold tracking-[0.3em] uppercase text-black/30">Founder Era</span>
                    </div>
                    <div className="h-px flex-1 bg-black/5 mb-4" />
                    <div className="flex flex-col items-end">
                       <span className="text-4xl lg:text-5xl font-black text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>2026</span>
                       <span className="text-[8px] lg:text-[9px] font-bold tracking-[0.3em] uppercase text-[#C0001A]">Global Vision</span>
                    </div>
                 </div>
              </FadeInView>
           </div>
        </div>
      </div>
    </section>

  );
}
