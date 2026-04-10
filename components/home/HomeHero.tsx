"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero-section.png",
    alt: "MAGNAT Premium Living Room",
    heading: "Living Room",
    description: "A quarter-century legacy of handcrafted excellence. We curate the world's finest designs for the most sophisticated Kerala interiors.",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2600&auto=format&fit=crop",
    alt: "MAGNAT Luxury Interior",
    heading: "Luxury Spaces",
    description: "From timeless classics to contemporary masterpieces — every piece tells a story of unmatched craftsmanship and refined taste.",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    alt: "MAGNAT Sofa Collection",
    heading: "Sofa Collection",
    description: "Sink into comfort without sacrificing style. Our exclusive sofa collections redefine relaxation for the discerning homeowner.",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2600&auto=format&fit=crop",
    alt: "MAGNAT Contemporary Design",
    heading: "Contemporary Design",
    description: "Bold lines, rich textures, and thoughtful detail — our contemporary range brings modern elegance to Kerala's finest homes.",
  },
];

const INTERVAL = 6500;

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const bgVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const textVariants = {
    enter: { x: 60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit:  { x: -40, opacity: 0 },
  };

  const buttonVariants = {
    enter: { x: -60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit:  { x: 40, opacity: 0 },
  };

  const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#111]" style={{  minHeight: "850px" }}>
      {/* ── Cinematic Background with Carousel ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`bg-${current}`}
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <img
                src={SLIDES[current].src}
                alt={SLIDES[current].alt}
                className="w-full h-full object-cover grayscale-[0.3] brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Editorial Content ── */}

      <div className="max-container relative z-20 h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full space-y-2 flex flex-col items-center">

          <div className="space-y-3 w-full flex flex-col items-center">

            {/* Heading */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`heading-${current}`}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1.6, ease: smoothEase }}
                className="space-y-2 text-center w-full"
              >
                <h1
                  className="text-white text-center leading-[0.95] font-semibold tracking-[-0.04em]"
                  style={{ fontFamily: "sans-serif", fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
                >
                  {SLIDES[current].heading}
                </h1>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col lg:flex-col lg:items-center gap-3 lg:gap-10 w-full items-center">

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1.6, ease: smoothEase, delay: 0.12 }}
                  className="text-white/90 text-sm lg:text-lg text-center font-light leading-relaxed max-w-xl"
                  style={{ fontFamily: "cursive" }}
                >
                  {SLIDES[current].description}
                </motion.p>
              </AnimatePresence>

              {/* Button */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`btn-${current}`}
                  variants={buttonVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1.6, ease: smoothEase, delay: 0.22 }}
                  className="flex flex-col sm:flex-row items-center gap-8"
                >
                  <Link
                    href="/collections"
                    className="btn-primary !text-white !bg-[#C0001A] hover:!bg-[#62010e] hover:!text-white !border-none py-5 px-12 text-[10px] rounded-sm"
                  >
                    Explore More
                  </Link>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

      {/* ── Carousel Dot Indicators — right center on lg, bottom center on small ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 hidden lg:flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block transition-all duration-500 rounded-full ${
                i === current
                  ? "w-1.5 h-6 bg-[#C0001A]"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex lg:hidden flex-row items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block transition-all duration-500 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-[#C0001A]"
                  : "w-1.5 h-1.5 bg-white/10 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] bg-white/10 w-full">
        <motion.div
          key={current}
          className="h-full bg-[#C0001A]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        />
      </div>

      {/* ── Side Accreditation ── */}
      <div className="absolute right-12 bottom-5 z-20 hidden lg:flex flex-col items-end gap-3 text-white/20">
        <span className="text-[10px] font-bold tracking-[0.6em] uppercase whitespace-nowrap origin-right transition-colors hover:text-[#C0001A] cursor-default">
          EST. 2001 · KONDOTTY · KERALA
        </span>
      </div>

      {/* Scroll Milestone */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
      </motion.div>
    </section>
  );
}