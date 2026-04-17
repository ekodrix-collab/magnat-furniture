"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeInView from "@/components/ui/FadeInView";
import { Category } from "@/lib/types";

/* ── Data ── */
const FALLBACK_COL1: Category[] = [
  { id: "1", name: "Classic Sofas", slug: "sofas", image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 0, created_at: "" },
  { id: "2", name: "Premium Curtains", slug: "curtains", image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 1, created_at: "" },
];

const FALLBACK_COL2: Category[] = [
  { id: "3", name: "Dining Sets", slug: "dining-sets", image_url: "https://images.unsplash.com/photo-1617806118233-1ec365ba409e?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 0, created_at: "" },
  { id: "4", name: "Lounge Chairs", slug: "chairs", image_url: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 1, created_at: "" },
];

const FALLBACK_COL3: Category[] = [
  { id: "5", name: "Bespoke Interiors", slug: "interiors", image_url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 0, created_at: "" },
  { id: "6", name: "Bedroom Suites", slug: "bedroom", image_url: "https://images.unsplash.com/photo-1505693419148-de1967a93fb4?q=80&w=2000&auto=format&fit=crop", description: null, is_featured: true, sort_order: 1, created_at: "" },
];

/* ── Card Component ── */
function CategoryCard({ 
  cat, 
  height = "h-full", 
  delay = 0 
}: { 
  cat: Category; 
  height?: string; 
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={`group relative rounded-[28px] overflow-hidden cursor-pointer flex-1 ${height}`}
      style={{ background: "#1a1a1a" }}
    >
      <Link href={`/products/${cat.slug}`} className="absolute inset-0 z-20" aria-label={`Go to ${cat.name}`} />
      <img
        src={cat.image_url || "/images/placeholder-furniture.jpg"}
        alt={cat.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 flex flex-col items-start pointer-events-none">
        <h3
          className="text-white font-bold leading-tight tracking-wide"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          {cat.name}
        </h3>
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export default function SpecialModels({ categories }: { categories?: Category[] }) {
  const col1 = categories && categories.length >= 2 ? categories.slice(0, 2) : FALLBACK_COL1;
  const col2 = categories && categories.length >= 4 ? categories.slice(2, 4) : FALLBACK_COL2;
  const col3 = categories && categories.length >= 6 ? categories.slice(4, 6) : FALLBACK_COL3;

  return (
    <section className="bg-[#f9f9f9] py-32 overflow-hidden">
      <div className="max-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-10">
          <FadeInView className="max-w-2xl text-left">
            <span className="heading-label">Curated Masterpieces</span>
            <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
              The Signature <br />
              <span className="italic font-normal">Models.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Link href="/products" className="btn-primary">View Full Portfolio</Link>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[850px] h-auto auto-rows-fr">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full">
            {col1.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} height={i === 0 ? "flex-[1.5]" : "flex-1"} delay={i * 0.1} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 h-full">
            {col2.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} height={i === 0 ? "flex-1" : "flex-[1.5]"} delay={0.1 + i * 0.1} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full">
            {col3.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} height={i === 0 ? "flex-[1.5]" : "flex-1"} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
