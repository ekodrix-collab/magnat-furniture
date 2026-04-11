"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeInView from "@/components/ui/FadeInView";

/* ── Data ── */
const col1 = {
  name: "Living",
  href: "/living",
  image:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
};

const col2 = [
  {
    name: "Dining",
    href: "/dining",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2600&auto=format&fit=crop",
  },
  {
    name: "Bedroom",
    href: "/bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
  },
];

const col3 = [
  {
    name: "Office",
    href: "/office",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "School Furniture",
    href: "/school-furniture",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Storage",
    href: "/storage",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
];

/* ── Main component ── */
export default function SpecialModels() {
  return (
    <section className="bg-[#f9f9f9] py-32 overflow-hidden">
      <div className="max-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-10">
          <FadeInView className="max-w-2xl text-left">
            <span className="heading-label">
              Curated Masterpieces
            </span>
            <h2
              className="heading-title"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Signature <br />
              <span className="italic font-normal">Models.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <button className="btn-primary">View Full Portfolio</button>
          </FadeInView>
        </div>

        {/* ════════════════════════════
            COLUMNS BENTO GRID
        ════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto lg:h-[800px]">

          {/* ── COLUMN 1 — Hero (1 card) ── */}
          <div className="flex flex-col h-[450px] md:h-[600px] lg:h-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer flex-1"
              style={{ background: "#1a1a1a" }}
            >
              <Link href={col1.href} className="absolute inset-0 z-20" aria-label={`Go to ${col1.name}`} />
              {/* Background image */}
              <img
                src={col1.image}
                alt={col1.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Bottom text */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col items-start pointer-events-none">
                <h3
                  className="text-white font-bold leading-tight tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  {col1.name}
                </h3>
              </div>
            </motion.div>
          </div>

          {/* ── COLUMN 2 — 2 mid cards ── */}
          <div className="flex flex-col gap-4 h-[700px] md:h-[600px] lg:h-full">
            {col2.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                className="group relative rounded-[28px] overflow-hidden cursor-pointer flex-1"
                style={{ background: "#1a1a1a" }}
              >
                <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`Go to ${cat.name}`} />
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom text */}
                <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                  <h3
                    className="text-white font-bold leading-snug tracking-wide"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 3vw, 40px)" }}
                  >
                    {cat.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── COLUMN 3 — 3 bottom cards (Transforms into a 2-col layout on Tablet to match top row) ── */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 h-[800px] md:h-[600px] lg:h-full md:col-span-2 lg:col-span-1">
            
            {/* Top/Left Card: Office */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer flex-1"
              style={{ background: "#1a1a1a" }}
            >
              <Link href={col3[0].href} className="absolute inset-0 z-20" aria-label={`Go to ${col3[0].name}`} />
              <img
                src={col3[0].image}
                alt={col3[0].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <h3
                  className="text-white font-bold leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  {col3[0].name}
                </h3>
              </div>
            </motion.div>

            {/* Bottom/Right Cards Wrapper: School Furniture & Storage */}
            <div className="flex flex-col gap-4 flex-[2] md:flex-1 lg:flex-[2]">
              {col3.slice(1).map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.15 + (i + 1) * 0.08, ease: "easeOut" }}
                  className="group relative rounded-[28px] overflow-hidden cursor-pointer flex-1"
                  style={{ background: "#1a1a1a" }}
                >
                  <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`Go to ${cat.name}`} />
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <h3
                      className="text-white font-bold leading-snug tracking-wide"
                      style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.5vw, 32px)" }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
        {/* ════ End Columns Grid ════ */}

      </div>
    </section>
  );
}
