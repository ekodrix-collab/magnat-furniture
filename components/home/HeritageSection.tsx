"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

export default function HeritageSection() {
   return (
      <section className="py-20 sm:py-30 overflow-hidden bg-white relative border-b border-black/5">
         {/* Architectural Background Numeral */}
         <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] mt-20 pointer-events-none select-none">
            <span className="text-[80vw] md:text-[40vw] font-black leading-none" style={{ fontFamily: "var(--font-playfair)" }}>25</span>
         </div>

         <div className="max-container flex flex-col items-center text-center relative z-10">
            <div className="max-w-4xl space-y-12">

               <FadeInView className="">
                  <span className="heading-label">The Legacy of Craft</span>
                  <h2 className="heading-title  text-nowrap" style={{ fontFamily: "var(--font-playfair)" }}>
                     A Quarter Century of <br />
                     <span className="text-[#C0001A]">Design Excellence.</span>
                  </h2>
               </FadeInView>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-left sm:pt-12">
                  <FadeInView direction="right" className="space-y-8">
                     <p 
                        className="text-md md:text-xl font-light text-[#111]/80 leading-relaxed" 
                        style={{ fontFamily: "var(--font-inter)" }}
                     >
                        Since 2001, Magnat has been at the forefront of the furniture industry in Kerala,
                        transforming over 5,000 homes with our signature blend of international
                        design and artisanal production.
                     </p>
                     <div className="h-px w-24 bg-[#C0001A]" />
                  </FadeInView>

                  <FadeInView direction="left" className="space-y-10">
                     <div className="space-y-4">
                        <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#111]" style={{ fontFamily: "var(--font-inter)" }}>Our Philosophy</h4>
                        <p className="text-[#111]/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                           We believe that a home is a living gallery. Every piece of furniture
                           carrying the Magnat name is a testament to 25 years of material
                           intelligence and structural integrity.
                        </p>
                     </div>

                     <div className="flex items-end gap-6 border-l border-[#C0001A]/20 pl-8">
                        <div className="flex flex-col">
                           <span className="text-5xl font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>2001</span>
                           <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-black/30" style={{ fontFamily: "var(--font-inter)" }}>Founder Era</span>
                        </div>
                        <div className="h-px flex-1 bg-black/5 mb-4" />
                        <div className="flex flex-col items-end">
                           <span className="text-5xl font-black text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>2026</span>
                           <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#C0001A]" style={{ fontFamily: "var(--font-inter)" }}>Global Vision</span>
                        </div>
                     </div>
                  </FadeInView>
               </div>
            </div>
         </div>
      </section>
   );
}