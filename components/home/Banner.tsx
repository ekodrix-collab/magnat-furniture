"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Sofa, Star, MapPin, Truck, BedDouble } from "lucide-react";

import { HeroSlide } from "@/lib/types";
import { getHeroSlides } from "@/lib/api/hero";

const FALLBACK_SLIDES: HeroSlide[] = [
  {
    id: "fallback-1",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    mobile_image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Sofa Collection",
    heading: "Sofa Collection",
    description:
      "Sink into comfort without sacrificing style. Exclusive sofa collections redefined.",
    sort_order: 0,
    is_active: true,
  },
  {
    id: "fallback-2",
    image_url:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2600&auto=format&fit=crop",
    mobile_image_url:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Luxury Interior",
    heading: "Luxury Spaces",
    description:
      "From timeless classics to contemporary masterpieces — every piece tells a story.",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "fallback-3",
    image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2600&auto=format&fit=crop",
    mobile_image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    alt_text: "MAGNAT Contemporary Design",
    heading: "Contemporary Design",
    description:
      "Bold lines, rich textures, and thoughtful detail — modern elegance for Kerala homes.",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "fallback-4",
    image_url: "/images/hero-section.png",
    mobile_image_url: "/images/hero-section-mobile.png",
    alt_text: "MAGNAT Premium Living Room",
    heading: "Living Room",
    description:
      "A quarter-century legacy of handcrafted excellence. Kerala's finest interiors.",
    sort_order: 3,
    is_active: true,
  },
];

const BANNER_MESSAGES = [
  { icon: Sofa,      text: "New Arrivals — Sofa Collection 2025" },
  { icon: Star,      text: "25 Years of Craftsmanship in Kerala" },
  { icon: MapPin,    text: "Visit Our Kondotty Showroom" },
  { icon: Truck,     text: "Free Home Delivery on Orders Above ₹50,000" },
  { icon: BedDouble, text: "Exclusive Bedroom Sets — Limited Stock" },
];

const INTERVAL = 6500;

const contentSpring = {
  type: "spring",
  stiffness: 60,
  damping: 18,
  mass: 1,
} as const;

export default function HomeHero({
  slides: initialSlides,
}: {
  slides?: HeroSlide[];
}) {
  const [slides, setSlides] = useState<HeroSlide[]>(
    (initialSlides as HeroSlide[]) || FALLBACK_SLIDES,
  );
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function loadSlides() {
      if (!initialSlides) {
        const fetched = await getHeroSlides();
        setSlides(fetched as HeroSlide[]);
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
    [current],
  );

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + activeSlides.length) % activeSlides.length,
    );
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

  const duplicated = [...BANNER_MESSAGES, ...BANNER_MESSAGES];

  return (
    <section
      className="relative w-full bg-white select-none pt-4 pb-3 md:pt-5 md:pb-4 px-3 md:px-6 lg:px-8"
      style={{ marginTop: "1px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Scrolling announcement banner ── */}
      <div className="overflow-hidden w-full bg-[#C0001A] py-2 mb-3 rounded-lg select-none">
        <style>{`
          @keyframes banner-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .banner-track {
            display: flex;
            white-space: nowrap;
            animation: banner-scroll 28s linear infinite;
          }
          .banner-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="banner-track">
          {duplicated.map(({ icon: Icon, text }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white text-[11px] font-semibold tracking-widest uppercase pr-12"
              aria-hidden={i >= BANNER_MESSAGES.length ? "true" : undefined}
            >
              <Icon size={13} strokeWidth={2} className="shrink-0" />
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="max-container">
        <div
          className="hero-aspect relative w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "16 / 6" }}
        >
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

          {/* ── Image Carousel ── */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`bg-${current}`}
              custom={direction}
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.85, ease: [0.32, 0, 0.67, 0] }}
              className="absolute inset-0"
            >
              {/* ── Ken Burns zoom ── */}
              <motion.div
                key={`zoom-${current}`}
                initial={{ scale: 1.0 }}
                animate={{ scale: 1.06 }}
                transition={{
                  duration: INTERVAL / 1000 + 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative w-full h-full"
                style={{ transformOrigin: "center center" }}
              >
                {/* Desktop image */}
                <img
                  src={activeSlides[current].image_url}
                  alt={
                    activeSlides[current].alt_text ||
                    activeSlides[current].heading
                  }
                  className="w-full h-full object-cover hidden md:block"
                  draggable={false}
                />
                {/* Mobile image */}
                <img
                  src={
                    activeSlides[current].mobile_image_url ||
                    activeSlides[current].image_url
                  }
                  alt={
                    activeSlides[current].alt_text ||
                    activeSlides[current].heading
                  }
                  className="w-full h-full object-cover block md:hidden"
                  draggable={false}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10" />
              </motion.div>

              {/* ── Left-aligned content ── */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end items-start text-white p-6 md:p-12 lg:p-24">
                <div className="max-w-md lg:max-w-xl">
                  {/* Heading */}
                  <div
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    <motion.h2
                      key={`h-${current}`}
                      initial={{ x: -1500, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ ...contentSpring, delay: 0.25 }}
                      className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                    >
                      {activeSlides[current].heading}
                    </motion.h2>
                  </div>

                  {/* Description */}
                  <motion.p
                    key={`p-${current}`}
                    initial={{ y: -25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ...contentSpring, delay: 1.25 }}
                    className="text-base md:text-sm text-white/90 mt-[-15px] w-[80%]"
                  >
                    {activeSlides[current].description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    key={`btns-${current}`}
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ...contentSpring, delay: 1.55 }}
                    className="flex flex-row items-center gap-3 mt-5"
                  >
                    <button className="px-6 py-3 text-sm font-semibold bg-[#C0001A] rounded-full hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap">
                      Explore Collection
                    </button>
                    <button className="px-6 py-3 text-sm font-semibold bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap">
                      Contact Us
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom center dot navigation ── */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-row items-center gap-3">
            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex items-center justify-center w-7 h-7 text-white/70 hover:text-white transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dot indicators */}
            {activeSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex items-center justify-center"
              >
                {i === current ? (
                  <span className="relative block w-7 h-[5px] rounded-full overflow-hidden bg-white/30">
                    <span
                      key={`fill-${current}`}
                      className="dot-fill-bar absolute left-0 top-0 h-full bg-white rounded-full"
                      style={{ width: "0%" }}
                    />
                  </span>
                ) : (
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
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* ── EST. badge ── */}
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