"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FeaturedItem } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";

// ─── Brand ────────────────────────────────────────────────────────────────
const BRAND_RED = "#930011";

// ─── Fallback Data ────────────────────────────────────────────────────────
const FALLBACK_PRODUCTS: FeaturedItem[] = [
  {
    id: "1",
    category: "Living Area",
    name: "Nordic Chair",
    subtitle: "Minimal aesthetics meet maximum comfort.",
    image_url: "/images/singlesofa.png",
    sort_order: 0,
    is_active: true,
  },
  {
    id: "2",
    category: "Living Area",
    name: "Skyline Sofa",
    subtitle: "Superior comfort with elegant design.",
    image_url: "/images/singlesofa4.png",
    sort_order: 1,
    is_active: true,
    is_bestseller: true,
  },
  {
    id: "3",
    category: "Living Area",
    name: "Bloom Sofa",
    subtitle: "Soft curves for contemporary spaces.",
    image_url: "/images/singlesofa3.png",
    sort_order: 2,
    is_active: true,
    is_new: true,
  },
  {
    id: "4",
    category: "Bedroom",
    name: "Luna Armchair",
    subtitle: "Luxurious comfort with sleek modern look.",
    image_url: "/images/sofa3d1.png",
    sort_order: 3,
    is_active: true,
  },
  {
    id: "5",
    category: "Office",
    name: "Crest Desk Chair",
    subtitle: "Ergonomic support for long work hours.",
    image_url: "/images/chair.png",
    sort_order: 4,
    is_active: true,
    is_new: true,
  },
];

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Chevron ──────────────────────────────────────────────────────────────
function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: FeaturedItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi MAGNAT! I'm interested in the "${product.name}". Please share more details.`
  );

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-400 group"
      style={{
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.10)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
      }}
    >
      {/* ── Image area ── */}
      <div className="relative bg-[#F6F4F1] flex items-center justify-center overflow-hidden"
        style={{ height: "200px" }}>

        {/* Single badge — bestseller takes priority */}
        {(product.is_bestseller || product.is_new) && (
          <div className="absolute top-2.5 left-2.5 z-20">
            {product.is_bestseller ? (
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm text-white shadow"
                style={{ background: BRAND_RED }}>
                Best Seller
              </span>
            ) : (
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm text-white shadow bg-[#111]">
                New
              </span>
            )}
          </div>
        )}

        {/* Category pill */}
        <span className="absolute top-2.5 right-2.5 z-20 text-[8px] font-semibold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-500 border border-gray-200/60">
          {product.category || "Furniture"}
        </span>

        {/* Product image */}
        <img
          src={product.image_url}
          alt={product.name}
          draggable={false}
          className="h-[82%] w-[82%] object-contain transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))" }}
        />

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] origin-left transition-transform duration-400"
          style={{
            background: BRAND_RED,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </div>

      {/* ── Text + CTAs ── */}
      <div className="flex flex-col px-4 pt-3 pb-4 gap-3">
        {/* Name & subtitle */}
        <div>
          <h3 className="font-playfair text-[15px] font-black text-[#111] leading-snug tracking-tight">
            {product.name}
          </h3>
          {product.subtitle && (
            <p className="text-[12px] text-gray-400 mt-0.5 leading-relaxed line-clamp-1 font-light">
              {product.subtitle}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={`https://wa.me/919876543210?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest transition-opacity duration-200 hover:opacity-85 active:scale-95 shadow"
            style={{ background: `linear-gradient(135deg, ${BRAND_RED}, #C0001A)` }}
          >
            <WhatsAppIcon />
            Enquire
          </a>
          <Link
            href={product.slug ? `/products/${product.slug}` : "/collections"}
            className="flex-1 flex items-center justify-center py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-200 text-[#111] transition-all duration-200 hover:border-[#930011] hover:text-[#930011] active:scale-95 bg-white"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────
export default function FurnitureCarousel({ items }: { items?: FeaturedItem[] }) {
  const products = items && items.length > 0 ? items : FALLBACK_PRODUCTS;

  // How many cards visible per breakpoint
  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [currentIndex, setCurrentIndex] = useState(0);

  const GAP = 20; // px gap between cards
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Compute card width from container
  const recalc = useCallback(() => {
    const vw = window.innerWidth;
    const pv = vw < 640 ? 1 : vw < 1024 ? 3 : 4;
    setPerView(pv);

    // Container max-width is 1200, but use actual container if smaller
    const containerW = Math.min(vw - 32, 1200 - 48); // 32px page padding, 48px inner padding
    const w = (containerW - GAP * (pv - 1)) / pv;
    setCardWidth(Math.floor(w));
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  const maxIndex = Math.max(0, products.length - perView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i: number) => setCurrentIndex(i);

  // Touch / swipe
  const touchStartX = useRef<number | null>(null);
  const SWIPE_MIN = 40;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAF8] py-12 md:py-20 overflow-hidden"
      style={{ borderTop: "1px solid #EFECE8" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(147,0,17,0.05) 0%, transparent 70%)",
          transform: "translate(35%,-35%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Header + arrow row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-4 mb-8 md:mb-10"
        >
          {/* Left: heading */}
          <SectionHeading
            label="Featured Masterpieces"
            titlePart1="The Signature"
            titlePart2="Selection"
            subtitle="A curated edit of our most-loved pieces — crafted for enduring style."
            className="!text-left !mx-0 !max-w-lg"
          />

          {/* Right: arrows (hidden on mobile — they have swipe) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 mb-1">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-25 transition-all hover:border-[#930011] hover:text-[#930011] active:scale-90"
            >
              <Chevron dir="left" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-25 transition-all hover:border-[#930011] hover:text-[#930011] active:scale-90"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </motion.div>

        {/* ── Carousel track ── */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${currentIndex * (cardWidth + GAP)}px)`,
              transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(delta) >= SWIPE_MIN) delta > 0 ? next() : prev();
              touchStartX.current = null;
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom row: dots + mobile arrows + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex items-center justify-between gap-4"
        >
          {/* Mobile prev/next */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-25 transition-all active:scale-90"
            >
              <Chevron dir="left" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="Next"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-25 transition-all active:scale-90"
            >
              <Chevron dir="right" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to position ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? "22px" : "6px",
                  height: "6px",
                  background: i === currentIndex ? BRAND_RED : "#D1D5DB",
                }}
              />
            ))}
          </div>

          {/* View All CTA */}
          <Link
            href="/collections"
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#111] hover:text-[#930011] transition-colors duration-200"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </motion.div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <div className="text-center sm:text-left">
            <p className="font-inter text-[9px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-1">
              Can't find what you're looking for?
            </p>
            <p className="font-playfair text-lg font-bold text-[#111] leading-tight tracking-wide">
              Let us craft your perfect piece.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20MAGNAT!%20I'd%20like%20a%20custom%20furniture%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow transition-opacity hover:opacity-90 active:scale-95 shrink-0"
            style={{ background: `linear-gradient(135deg, ${BRAND_RED}, #C0001A)` }}
          >
            <WhatsAppIcon />
            Get a Free Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}
