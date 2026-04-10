// app/collections/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";
import Link from "next/link";

const collections = [
  { 
    title: "The Milano Collection", 
    desc: "Italian-inspired minimalism focused on linear comfort and premium hide. Each piece combines architectural precision with uncompromising comfort.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    count: "12 Pieces",
    category: "Sofas & Seating"
  },
  { 
    title: "Heritage Kerala Series", 
    desc: "A tribute to local timber and artisanal joinery with a modern twist. Celebrating 25 years of craftsmanship rooted in Kerala's rich woodworking tradition.",
    image: "https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop",
    count: "08 Pieces",
    category: "Dining & Storage"
  },
  { 
    title: "The Avant-Garde Suite", 
    desc: "Sculptural seating and dining solutions for the artistic homeowner. Where form meets function in bold, contemporary statements.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop",
    count: "15 Pieces",
    category: "Signature Series"
  },
  { 
    title: "Aerial Window Systems", 
    desc: "Bespoke curtains and blinds engineered for Kerala's tropical light. Precision-tailored solutions that transform natural illumination into architectural poetry.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop",
    count: "Custom Made",
    category: "Window Treatments"
  }
];

export default function CollectionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      
      {/* ============================================
          HERO HEADER — CINEMATIC INTRODUCTION
          ============================================ */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-[#eeeeee]">
        <div className="max-container">
           <FadeInView className="max-w-5xl space-y-8">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="heading-label">Curated Portfolios</span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#C0001A]/30 to-transparent"></div>
              </div>
              
              {/* Main Title */}
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight" 
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Design <span className="italic font-normal text-[#C0001A]">Narratives</span><span className="text-[#C0001A]">.</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-[#666666] font-light max-w-3xl leading-relaxed">
                Explore our thematic collections, each representing a unique dialogue between 
                material, form, and functionality. Crafted in Kondotty, designed for excellence.
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 md:gap-12 pt-8">
                <div>
                  <div className="text-3xl font-bold text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>35+</div>
                  <div className="text-xs uppercase tracking-widest text-[#666666] mt-1">Signature Pieces</div>
                </div>
                <div className="w-px bg-[#eeeeee]"></div>
                <div>
                  <div className="text-3xl font-bold text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>04</div>
                  <div className="text-xs uppercase tracking-widest text-[#666666] mt-1">Collections</div>
                </div>
                <div className="w-px bg-[#eeeeee]"></div>
                <div>
                  <div className="text-3xl font-bold text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>100%</div>
                  <div className="text-xs uppercase tracking-widest text-[#666666] mt-1">Customizable</div>
                </div>
              </div>
           </FadeInView>
        </div>
      </section>

      {/* ============================================
          COLLECTIONS GRID — FULL COLOR ALWAYS
          ============================================ */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="max-container space-y-24 md:space-y-32 lg:space-y-40">
          {collections.map((col, index) => (
            <FadeInView 
              key={col.title} 
              delay={index * 0.15} 
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* ── IMAGE SIDE (Full Color, Premium Hover) ── */}
              <motion.div 
                className={`relative aspect-[4/3] overflow-hidden bg-[#f9f9f9] group cursor-pointer ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Main Image - FULL COLOR ALWAYS */}
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Count Badge */}
                <div className="absolute top-6 right-6 bg-white px-4 py-2 shadow-lg">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111]">
                    {col.count}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-[#C0001A] px-4 py-2">
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white">
                    {col.category}
                  </div>
                </div>

                {/* Hover Overlay CTA */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-white text-[#111111] py-3 px-6 font-bold text-xs uppercase tracking-widest hover:bg-[#C0001A] hover:text-white transition-all duration-300">
                    View Collection
                  </button>
                </div>
              </motion.div>

              {/* ── TEXT SIDE (Enhanced Hierarchy) ── */}
              <div 
                className={`space-y-6 md:space-y-8 ${
                  index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Accent Line */}
                <motion.div 
                  className="w-16 h-0.5 bg-[#C0001A]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                {/* Collection Title */}
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight hover:text-[#C0001A] transition-colors duration-300 cursor-pointer" 
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {col.title}
                </h2>
                
                {/* Description */}
                <p className="text-[#666666] text-base md:text-lg font-light leading-relaxed max-w-xl">
                  {col.desc}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-3 py-1.5 border border-[#eeeeee] text-[10px] uppercase tracking-wider text-[#666666]">
                    Premium Materials
                  </div>
                  <div className="px-3 py-1.5 border border-[#eeeeee] text-[10px] uppercase tracking-wider text-[#666666]">
                    Made in Kondotty
                  </div>
                  <div className="px-3 py-1.5 border border-[#eeeeee] text-[10px] uppercase tracking-wider text-[#666666]">
                    Customizable
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button 
                    className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-[#111111] hover:text-[#C0001A] transition-colors duration-300 pt-4"
                    whileHover={{ x: 4 }}
                  >
                    <span>Explore Collection</span>
                    <ArrowRight 
                      size={18} 
                      className="group-hover:translate-x-2 transition-transform duration-500" 
                    />
                  </motion.button>
                </Link>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* ============================================
          BESPOKE CTA SECTION — PREMIUM INVITATION
          ============================================ */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9f9f9] to-white"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C0001A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#111111]/5 rounded-full blur-3xl"></div>

        <div className="max-container relative z-10">
           <FadeInView className="max-w-3xl mx-auto text-center space-y-10">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C0001A]/10 flex items-center justify-center">
                  <Sparkles className="text-[#C0001A]" size={28} />
                </div>
              </div>

              {/* Heading */}
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" 
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Seeking Something <span className="italic text-[#C0001A]">Bespoke</span>?
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
                Our Kondotty manufacturing unit specializes in one-off commission pieces for premium 
                residences and commercial studios. From concept to installation, we bring your vision to life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/contact">
                  <button className="btn-primary w-full sm:w-auto">
                    Commission a Project
                  </button>
                </Link>
                
                <Link href="/about">
                  <button className="btn-ghost-dark w-full sm:w-auto">
                    Visit Our Showroom
                  </button>
                </Link>
              </div>

              {/* Trust Indicator */}
              <div className="pt-8 flex items-center justify-center gap-2 text-sm text-[#666666]">
                <div className="w-2 h-2 rounded-full bg-[#C0001A] animate-pulse"></div>
                <span className="text-xs uppercase tracking-wider">25 Years of Manufacturing Excellence</span>
              </div>
           </FadeInView>
        </div>
      </section>

      {/* ============================================
          PROCESS PREVIEW (Optional Enhancement)
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-[#eeeeee]">
        <div className="max-container">
          <div className="text-center mb-16">
            <span className="heading-label">Our Process</span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              From Concept to Creation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {[
              { num: "01", title: "Consultation", desc: "Understanding your space and vision" },
              { num: "02", title: "Design", desc: "Custom 3D renders and material selection" },
              { num: "03", title: "Crafting", desc: "Precision manufacturing in Kondotty" },
              { num: "04", title: "Installation", desc: "White-glove delivery and setup" }
            ].map((step, i) => (
              <FadeInView key={step.num} delay={i * 0.1}>
                <div className="text-center space-y-4 p-6 hover:bg-[#f9f9f9] transition-colors duration-300 rounded-lg">
                  <div 
                    className="text-5xl font-bold text-[#C0001A]/20" 
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{step.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}