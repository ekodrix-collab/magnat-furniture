"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

import { HeroSlide } from "@/lib/types";

// ── Extend HeroSlide type locally to support separate mobile images ──
// Add `mobile_image_url?: string` to your HeroSlide type in @/lib/types
// For now we cast with an extended interface:
interface HeroSlideExtended extends HeroSlide {
  mobile_image_url?: string;
}

const FALLBACK_SLIDES: HeroSlideExtended[] = [
  {
    id: "fallback-1",
    // Desktop image (wide/landscape)
    image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    // Mobile image (portrait or square crop)
    mobile_image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Sofa Collection",
    heading: "Sofa Collection",
    description: "Sink into comfort without sacrificing style. Exclusive sofa collections redefined.",
    sort_order: 0,
    is_active: true,
  },
  {
    id: "fallback-2",
    image_url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2600&auto=format&fit=crop",
    mobile_image_url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Luxury Interior",
    heading: "Luxury Spaces",
    description: "From timeless classics to contemporary masterpieces — every piece tells a story.",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "fallback-3",
    image_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2600&auto=format&fit=crop",
    mobile_image_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Contemporary Design",
    heading: "Contemporary Design",
    description: "Bold lines, rich textures, and thoughtful detail — modern elegance for Kerala homes.",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "fallback-4",
    image_url: "/images/hero-section.png",
    mobile_image_url: "/images/hero-section-mobile.png",
    alt_text: "MAGNAT Premium Living Room",
    heading: "Living Room",
    description: "A quarter-century legacy of handcrafted excellence. Kerala's finest interiors.",
    sort_order: 3,
    is_active: true,
  },
];

const INTERVAL = 6500;

import { getHeroSlides } from "@/lib/api/hero";

export default function HomeHero({ slides: initialSlides }: { slides?: HeroSlide[] }) {
  const [slides, setSlides] = useState<HeroSlideExtended[]>(
    (initialSlides as HeroSlideExtended[]) || FALLBACK_SLIDES
  );
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function loadSlides() {
      if (!initialSlides) {
        const fetched = await getHeroSlides();
        setSlides(fetched as HeroSlideExtended[]);
      }
    }
    loadSlides();
  }, [initialSlides]);

  const activeSlides = slides;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % activeSlides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [activeSlides.length, isPaused]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  }, [activeSlides.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % activeSlides.length);
  }, [activeSlides.length]);

  const bgVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

  return (
    <section
      className="relative w-full bg-white select-none pt-4 pb-3 md:pt-5 md:pb-4 px-3 md:px-6 lg:px-8"
      style={{ marginTop: "1px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Aspect-ratio container: 16:6 desktop, 4:3 mobile ── */}
      <div className="max-container">
        <div
          className="hero-aspect relative w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "16 / 6" }}
        >
          {/* Mobile override */}
          <style>{`
          @media (max-width: 767px) {
            .hero-aspect { aspect-ratio: 4 / 3 !important; }
          }
          @keyframes dot-fill {
            from { width: 0%; }
            to   { width: 100%; }
          }
          .dot-fill-bar {
            animation: dot-fill ${INTERVAL}ms linear forwards;
          }
        `}</style>

          {/* Image Carousel */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`bg-${current}`}
              custom={direction}
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: [0.32, 0, 0.67, 0] }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                {/* Desktop image */}
                <img
                  src={activeSlides[current].image_url}
                  alt={activeSlides[current].alt_text || activeSlides[current].heading}
                  className="w-full h-full object-cover hidden md:block"
                  draggable={false}
                />
                {/* Mobile image — falls back to desktop image if no mobile_image_url */}
                <img
                  src={activeSlides[current].mobile_image_url || activeSlides[current].image_url}
                  alt={activeSlides[current].alt_text || activeSlides[current].heading}
                  className="w-full h-full object-cover block md:hidden"
                  draggable={false}
                />

                {/* Gradient overlay — lighter than before since not full-screen editorial */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom Center Controls: ‹ · dots · › ── */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-row items-center gap-3">

            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex items-center justify-center w-7 h-7 text-white/70 hover:text-white transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dot indicators with animated fill */}
            {activeSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex items-center justify-center"
              >
                {i === current ? (
                  /* Active dot: pill shape with left-to-right fill animation */
                  <span className="relative block w-7 h-[5px] rounded-full overflow-hidden bg-white/30">
                    <span
                      key={`fill-${current}`}
                      className="dot-fill-bar absolute left-0 top-0 h-full bg-white rounded-full"
                      style={{ width: "0%" }}
                    />
                  </span>
                ) : (
                  /* Inactive dot: small circle */
                  <span className="block w-[5px] h-[5px] rounded-full bg-white/40 hover:bg-white/70 transition-colors duration-200" />
                )}
              </button>
            ))}

            {/* Next arrow */}
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="flex items-center justify-center w-7 h-7 text-white/70 hover:text-white transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </div>


          {/* ── EST. badge — small, subtle, bottom-right ── */}
          <div className="absolute bottom-2 right-4 z-20 hidden lg:block">
            <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-white/20 whitespace-nowrap">
              EST. 2001 · KONDOTTY · KERALA
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}