"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeInView from "@/components/ui/FadeInView";

/* ── Data ── */
const col1 = {
  name: "Living",
  href: "/products?category=sofas",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
};

const col2 = [
  {
    name: "Dining",
    href: "/products?category=dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1c0945594?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Bedroom",
    href: "/products?category=bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
  },
];

const col3 = [
  {
    name: "Office",
    href: "/products?category=office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "School Furniture",
    href: "/products?category=school",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Storage",
    href: "/products?category=storage",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function SpecialModels() {
  return (
    <section className="bg-[#f9f9f9] py-24 lg:py-40 overflow-hidden">
      <div className="max-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-10 lg:gap-12">
           <FadeInView className="max-w-2xl text-left">
              <span className="heading-label">Curated Masterpieces</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                The Signature <br />
                <span className="italic font-normal">Models.</span>
              </h2>
           </FadeInView>
           <FadeInView delay={0.2} className="shrink-0">
              <Link href="/collections" className="btn-primary !px-10 lg:!px-14 !py-4 lg:!py-5 !text-[9px] lg:!text-[10px]">
                 View Full Portfolio
              </Link>
           </FadeInView>
        </div>

        {/* ── 3-Column Masonry Grid — Standardized Luxury — ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 lg:h-[900px]">
          
          {/* Column 1: Large Feature Card */}
          <FadeInView className="h-[500px] lg:h-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative h-full w-full rounded-[28px] lg:rounded-[40px] overflow-hidden cursor-pointer shadow-xl border border-black/5"
              style={{ background: "#1a1a1a" }}
            >
              <Link href={col1.href} className="absolute inset-0 z-20" aria-label={`Explore ${col1.name}`} />
              <img
                src={col1.image}
                alt={col1.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C0001A] mb-4 block">Signature Series</span>
                <h3 className="text-white font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 5vw, 64px)" }}>
                   {col1.name}
                </h3>
              </div>
            </motion.div>
          </FadeInView>

          {/* Column 2: Two Medium Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 h-full">
            {col2.map((cat, i) => (
              <FadeInView key={cat.name} delay={0.1 * (i + 1)} className="flex-1 min-h-[300px]">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full w-full rounded-[28px] lg:rounded-[36px] overflow-hidden cursor-pointer shadow-lg border border-black/5"
                  style={{ background: "#1a1a1a" }}
                >
                  <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`Explore ${cat.name}`} />
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                    <h3 className="text-white font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 3.5vw, 40px)" }}>
                      {cat.name}
                    </h3>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>

          {/* Column 3: Three Smaller Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 h-full">
            {col3.map((cat, i) => (
              <FadeInView key={cat.name} delay={0.15 * (i + 1)} className="flex-1 min-h-[200px]">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full w-full rounded-[28px] overflow-hidden cursor-pointer shadow-md border border-black/5"
                  style={{ background: "#1a1a1a" }}
                >
                  <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`Explore ${cat.name}`} />
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <h3 className="text-white font-bold tracking-wide" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.5vw, 32px)" }}>
                      {cat.name}
                    </h3>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
