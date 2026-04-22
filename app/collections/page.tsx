// app/collections/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";
import Link from "next/link";

// Updated data with sub-images for the editorial feel
const collections = [
  {
    title: "Luxury Living Room Collections",
    desc: "Italian-inspired minimalist sofas and designer armchairs focused on linear comfort and premium hide. Each piece combines architectural precision with uncompromising luxury.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    count: "12 Exclusive Pieces",
    category: "Living Room",
    subImages: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000"
    ]
  },
  {
    title: "Designer Dining Furniture",
    desc: "Bespoke dining tables and artisanal chairs crafted from premium local timber with a modern twist. Celebrating 25 years of master craftsmanship in Kerala.",
    image: "https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop",
    count: "08 Handcrafted Sets",
    category: "Dining Room",
    subImages: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
      "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1000"
    ]
  },
  {
    title: "Bespoke Bedroom Sanctuaries",
    desc: "Architectural beds and sculptural storage solutions for the elite homeowner. Where artistic form meets functional durability in bold, contemporary statements.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop",
    count: "15 Masterpieces",
    category: "Bedroom",
    subImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=1000"
    ]
  },
  {
    title: "Custom Interior Systems",
    desc: "Bespoke motorized curtains and architectural blinds engineered for Kerala's tropical climate. Tailored solutions that transform light into premium atmosphere.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop",
    count: "Custom Engineered",
    category: "Curtains & Blinds",
    subImages: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1000"
    ]
  }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4F0] dark:bg-zinc-950 transition-colors duration-500">

      {/* ============================================
          EDITORIAL HERO — ASYMMETRIC COMPOSITION
          ============================================ */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden flex items-center">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
            alt="Luxury Furniture Collection India - Magnat Bespoke Interiors"
            className="w-full h-full object-cover object-[75%_center]"
          />
        </motion.div>

        <div className="max-container relative z-20 w-full">
          <FadeInView className="max-w-4xl space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-[#C0001A]"></div>
              <span className="text-white/90 text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase">
                Curated Portfolios 2026
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] tracking-tighter">
                Luxury <br />
                <span className="italic font-normal text-white/90">Designer</span> <br />
                <span className="text-[#C0001A]">Collections.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/70 font-light max-w-xl leading-relaxed border-l-2 border-white/10 pl-8">
              Discover India's most exclusive artisanal gallery. We combine heritage woodworking
              with contemporary aesthetics to create high-end furniture that defines your story.
            </p>

            <div className="pt-2 flex items-center gap-8">
              <button className="px-12 py-5 bg-[#C0001A] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#C0001A] transition-all duration-500 rounded-lg shadow-2xl group flex items-center gap-4">
                Explore Catalog
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </button>
              <div className="hidden md:block">
                <div className="flex flex-col">
                  <span className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Scroll to view</span>
                  <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto"></div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ============================================
          COLLECTIONS GALLERY — EDITORIAL GRID
          ============================================ */}
      <section className="py-14 md:py-20">
        <div className="max-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
            <FadeInView className="max-w-2xl">
              <span className="heading-label">The Portfolios</span>
              <h2 className="text-4xl md:text-6xl font-bold dark:text-white leading-tight">
                Selection <br />
                <span className="italic font-normal text-zinc-400">by Magnat</span>
              </h2>
            </FadeInView>
          </div>

          <div className="space-y-20 md:space-y-32">
            {collections.map((col, index) => {
              const detailHref = `/collections/${col.title.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <FadeInView
                  key={col.title}
                  delay={index * 0.1}
                  className="group relationship"
                >
                  <div className={`grid lg:grid-cols-12 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                    {/* ── IMAGE COMPOSITION ── */}
                    <Link
                      href={detailHref}
                      className={`lg:col-span-7 relative block ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                    >
                      <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-2xl rounded-sm">
                        <motion.img
                          src={col.image}
                          alt={col.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          whileInView={{ scale: 1.1 }}
                          viewport={{ once: true }}
                        />
                        <div className="absolute inset-0 bg-[#C0001A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Sub-images Cluster */}
                      <div className={`absolute -bottom-8 md:-bottom-16 z-10 flex gap-4 md:gap-6 ${index % 2 === 0 ? "right-4 md:-right-10" : "left-4 md:-left-10"}`}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="w-20 h-20 md:w-40 md:h-40 shadow-2xl border-4 border-white dark:border-zinc-950 overflow-hidden rounded-sm"
                        >
                          <img src={col.subImages?.[0] || col.image} className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="w-16 h-16 md:w-32 md:h-32 shadow-2xl border-4 border-white dark:border-zinc-950 mt-6 overflow-hidden rounded-sm"
                        >
                          <img src={col.subImages?.[1] || col.image} className="w-full h-full object-cover" />
                        </motion.div>
                      </div>
                    </Link>

                    {/* ── TEXT CONTENT ── */}
                    <div className={`lg:col-span-5 space-y-5 md:space-y-6 ${index % 2 !== 0 ? "lg:order-1 lg:text-right" : ""}`}>
                      <Link href={detailHref} className="block group/text">
                        <div className={`flex flex-col ${index % 2 !== 0 ? "lg:items-end" : ""}`}>
                          <span className="text-[#C0001A] text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
                            Collection {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white leading-tight group-hover/text:text-[#C0001A] transition-colors duration-300">
                            {col.title}
                          </h3>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light mt-4">
                          {col.desc}
                        </p>
                      </Link>

                      <div className={`flex flex-wrap gap-3 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                        {["Premium Finish", "Solid Wood", "Bespoke"].map(tag => (
                          <span key={tag} className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className={`${index % 2 !== 0 ? "lg:flex lg:justify-end" : ""}`}>
                        <Link href={detailHref} className="group flex items-center gap-6">
                          <span className="text-[11px] font-bold tracking-[0.3em] uppercase dark:text-white group-hover:text-[#C0001A] transition-colors">
                            Explore the Story
                          </span>
                          <div className="relative w-16 h-[1px] bg-zinc-300 dark:bg-zinc-800 overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-[#C0001A]"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "0%" }}
                              transition={{ duration: 0.4 }}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          BESPOKE CALL TO ACTION
          ============================================ */}
      <section className="py-20 md:py-28 bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C0001A]/5 blur-3xl opacity-20" />
        <div className="max-container relative z-10 text-center space-y-8">
          <FadeInView align="center" className="max-w-3xl">
            <span className="text-[#C0001A] text-[10px] font-bold tracking-[0.4em] uppercase">Bespoke Manufacturing</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
              Your Vision, <br />
              <span className="italic font-normal text-white/60">Our Craft</span><span className="text-[#C0001A]">.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link href="/contact" className="px-10 py-5 bg-[#C0001A] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-lg">Start a Project</Link>
              <Link href="/showroom" className="px-10 py-5 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-lg">View Showroom</Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}