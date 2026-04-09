"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const collections = [
  { 
    title: "The Milano Collection", 
    desc: "Italian-inspired minimalism focused on linear comfort and premium hide.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    count: "12 Pieces"
  },
  { 
    title: "Heritage Kerala Series", 
    desc: "A tribute to local timber and artisanal joinery with a modern twist.",
    image: "https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop",
    count: "08 Pieces"
  },
  { 
    title: "The Avant-Garde Suite", 
    desc: "Sculptural seating and dining solutions for the artistic homeowner.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop",
    count: "15 Pieces"
  },
  { 
    title: "Aerial Window Systems", 
    desc: "Bespoke curtains and blinds engineered for the Kerala tropical light.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop",
    count: "Custom Made"
  }
];

export default function CollectionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="py-32">
        <div className="max-container">
           <FadeInView className="max-w-4xl space-y-6">
              <span className="heading-label">Curated Portfolios</span>
              <h1 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                 Design <span className="italic font-normal">Narratives.</span>
              </h1>
              <p className="text-xl text-black/40 font-light max-w-2xl leading-relaxed">
                 Explore our thematic collections, each representing a unique dialogue between 
                 material, form, and functionality.
              </p>
           </FadeInView>
        </div>
      </section>

      {/* ── Collections Grid (Grayscale to Color) ── */}
      <section className="pb-40">
        <div className="max-container flex flex-col gap-32">
          {collections.map((col, index) => (
            <FadeInView 
              key={col.title} 
              delay={index * 0.1} 
              direction={index % 2 === 0 ? "right" : "left"}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Container */}
              <div className="lg:w-3/5 w-full aspect-[16/9] overflow-hidden bg-[#f9f9f9] group cursor-pointer relative shadow-sm">
                 <img 
                    src={col.image} 
                    alt={col.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
                 />
                 <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]">
                    {col.count}
                 </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-2/5 space-y-8 text-left">
                 <div className="w-12 h-px bg-[#C0001A]" />
                 <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{col.title}</h2>
                 <p className="text-black/50 text-base font-light leading-relaxed">{col.desc}</p>
                 <button className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#C0001A] transition-colors group">
                    Explore Collection <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                 </button>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-40 bg-[#f9f9f9] border-t border-black/5">
        <div className="max-container text-center">
           <FadeInView className="max-w-2xl mx-auto space-y-10">
              <h2 className="text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Seeking Something Bespoke?</h2>
              <p className="text-black/45">Our Kondotty manufacturing unit specializes in one-off commission pieces for premium residences and commercial studios.</p>
              <button className="btn-primary">Commission a Project</button>
           </FadeInView>
        </div>
      </section>
    </main>
  );
}
