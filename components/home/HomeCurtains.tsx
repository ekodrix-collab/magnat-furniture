"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

const swatches = [
  { name: "Cream", hex: "#F5F5DC" },
  { name: "Slate", hex: "#708090" },
  { name: "Nutmeg", hex: "#7E5E52" },
  { name: "Cloud", hex: "#F8F8F8" },
  { name: "Indigo", hex: "#1A237E" },
  { name: "Oatmeal", hex: "#D2B48C" },
];

export default function HomeCurtains() {
  return (
    <section id="curtains" className="bg-white py-40 overflow-hidden border-t border-black/5">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left: Editorial Image (Grayscale to Color) */}
          <FadeInView direction="right" className="lg:w-1/2 w-full aspect-[4/5] relative group cursor-pointer">
             <div className="absolute inset-0 border-[1.5rem] border-[#f9f9f9] shadow-2xl z-20 pointer-events-none transition-colors duration-700 group-hover:border-white" />
             <img 
               src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop" 
               alt="Bespoke Curtains and Blinds"
               className="w-full h-full object-cover z-10 transition-all duration-1000 group-hover:scale-[1.02]"
             />
             <div className="absolute top-10 left-10 w-24 h-24 bg-[#C0001A] z-0 blur-[80px] opacity-10" />
          </FadeInView>

          {/* Right: Text & Swatches */}
          <div className="lg:w-1/2 space-y-12">
             <FadeInView>
                <span className="heading-label">Window Architecture</span>
                <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                   Dress Every <br />
                   <span className="italic font-normal">Opening.</span>
                </h2>
                <div className="w-20 h-[2px] bg-[#C0001A] mb-10" />
                <p className="text-xl text-black/55 font-light leading-relaxed max-w-xl">
                   From ethereal sheers that capture the morning light to professional blackout solutions 
                   for total privacy. Zebra blinds, roller blinds, and floor-to-ceiling drapes — 
                   all custom manufactured in our Kondotty studio.
                </p>
             </FadeInView>

             <div className="space-y-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/30">Textural Palette</span>
                <div className="flex flex-wrap gap-4">
                   {swatches.map((color, i) => (
                     <FadeInView key={color.name} delay={i * 0.1} className="group relative">
                        <div 
                          className="w-12 h-12 rounded-full border border-black/5 cursor-pointer transition-all duration-500 hover:scale-110 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-bold uppercase tracking-widest text-[#C0001A] whitespace-nowrap">
                           {color.name}
                        </span>
                     </FadeInView>
                   ))}
                </div>
             </div>

             <FadeInView delay={0.4} className="pt-6">
                <button className="btn-primary">Request Measurement</button>
             </FadeInView>
          </div>

        </div>
      </div>
    </section>
  );
}
