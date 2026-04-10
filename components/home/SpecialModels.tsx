"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const specialModels = [
  {
    name: "The Milano Suite",
    series: "Signature Series",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    desc: "A masterwork of Italian-inspired geometry and pure comfort."
  },
  {
    name: "Oxide Curvilinear",
    series: "Avant Garde",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop",
    desc: "Redefining the boundaries of sculptural seating design."
  },
  {
    name: "Kondotty Heritage I",
    series: "Local Excellence",
    image: "https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop",
    desc: "Blending raw Kerala teak with modern velvet textures."
  }
];

export default function SpecialModels() {
  return (
    <section className="bg-[#f9f9f9] py-40 overflow-hidden">
      <div className="max-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
           <FadeInView className="max-w-2xl text-left">
              <span className="heading-label">Curated Masterpieces</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                The Signature <br />
                <span className="italic font-normal">Models.</span>
              </h2>
           </FadeInView>
           <FadeInView delay={0.2}>
              <button className="btn-primary">View Full Portfolio</button>
           </FadeInView>
        </div>

        {/* Special Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {specialModels.map((model, index) => (
             <FadeInView 
                key={model.name} 
                delay={index * 0.15} 
                className="group cursor-pointer"
             >
                {/* Image Container with Grayscale Effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-8 group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700">
                   <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                   />
                   
                   {/* Signature Mark */}
                   <div className="absolute top-8 left-8 bg-[#111] px-4 py-2 text-[8px] font-bold text-white tracking-[0.3em] uppercase">
                      Signature Piece
                   </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-left">
                   <div className="flex items-center gap-3">
                      <span className="text-[#C0001A] text-[9px] font-bold tracking-[0.2em] uppercase">{model.series}</span>
                      <div className="h-px flex-1 bg-black/5" />
                      <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-[#111] text-[#111]" />)}
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>{model.name}</h3>
                   <p className="text-black/45 text-sm font-light leading-relaxed max-w-xs">{model.desc}</p>
                   
                   <div className="pt-4 flex items-center gap-4 text-[9px] font-bold tracking-[0.3em] uppercase group-hover:text-[#C0001A] transition-colors">
                      Inquire Design <ArrowRight size={14} />
                   </div>
                </div>
             </FadeInView>
           ))}
        </div>

      </div>
    </section>
  );
}
