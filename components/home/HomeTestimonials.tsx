// HomeTestimonials.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Abdul Rahman",
    location: "Kondotty",
    text: "The signature sofa we commissioned has become the heart of our home. The craftsmanship and attention to structural detail is exceptional.",
    rating: 5,
  },
  {
    name: "Sana Fathima",
    location: "Calicut",
    text: "Working with Magnat for our full interior project was a masterclass in professional design. Their curtains collection is truly premier.",
    rating: 5,
  },
  {
    name: "Rishi Kumar",
    location: "Malappuram",
    text: "A 25-year legacy you can truly feel in the product. The quality is a cut above any international brand I've seen in Kerala.",
    rating: 5,
  },
  {
    name: "Faisal Mohammed",
    location: "Kozhikode",
    text: "Every piece is crafted with intention. Our dining set is a statement of elegance that our guests consistently admire.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Thrissur",
    text: "Magnat's design team understood our vision immediately. The curtains transformed our living space beyond expectation.",
    rating: 5,
  },
  {
    name: "Arjun Menon",
    location: "Kochi",
    text: "The attention to detail in every stitch and joint is remarkable. Truly furniture built to be passed down generations.",
    rating: 5,
  },
];

const QuoteIcon = () => (
  <svg width="24" height="18" viewBox="0 0 28 20" fill="currentColor" aria-hidden="true">
    <path d="M0 20V13.6C0 9.87 1.12 6.8 3.36 4.4C5.6 2 8.53 0.587 12.16 0L13.44 2.24C11.09 2.72 9.17 3.787 7.68 5.44C6.19 7.09 5.44 8.96 5.44 11.04H10.56V20H0ZM17.44 20V13.6C17.44 9.87 18.56 6.8 20.8 4.4C23.04 2 25.97 0.587 29.6 0L30.88 2.24C28.53 2.72 26.61 3.787 25.12 5.44C23.63 7.09 22.88 8.96 22.88 11.04H28V20H17.44Z" />
  </svg>
);

function TestimonialCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] lg:w-[380px] bg-white border border-black/[0.07] p-8 flex flex-col relative group overflow-hidden select-none rounded-lg cursor-pointer"
      style={{ minHeight: "200px" }}
    >
      {/* Top red line on hover */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C0001A] w-0 group-hover:w-full transition-all duration-500"
        aria-hidden="true"
      />

      <div className="text-[#1A1A1A] opacity-10 mb-5">
        <QuoteIcon />
      </div>

      {/* Stars */}
      <div className="flex gap-[4px] mb-4" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg key={i} width="8" height="8" viewBox="0 0 10 10" fill="#1A1A1A" aria-hidden="true">
            <polygon points="5,0 6.1,3.5 9.8,3.5 6.8,5.7 7.9,9.1 5,7 2.1,9.1 3.2,5.7 0.2,3.5 3.9,3.5" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p
        className="text-[#2A2A2A] text-[15px] font-normal leading-[1.8] mb-4 flex-grow italic"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="pt-5 border-t border-black/[0.06]">
        <p className="text-[#1A1A1A] text-[9px] font-semibold tracking-[0.25em] uppercase mb-1">
          {review.name}
        </p>
        <p className="text-black/30 text-[9px] font-medium tracking-[0.2em] uppercase">
          {review.location}
        </p>
      </div>
    </div>
  );
}

function InfiniteMarquee({ items }: { items: typeof reviews }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 lg:w-52 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FAFAF8 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 lg:w-52 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #FAFAF8 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Scrolling track */}
      <div
        className="flex"
        style={{
          gap: "20px",
          animation: "marquee 45s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
          paddingBlock: "4px", // prevent box-shadow clip
        }}
      >
        {doubled.map((rev, i) => (
          <TestimonialCard key={`${rev.name}-${i}`} review={rev} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function HomeTestimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAF8] py-36 overflow-hidden border-t border-black/[0.06]"
    >
      {/* Header */}
      <div className="max-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-7"
          >
            <span className="block w-8 h-px bg-[#C0001A] opacity-50" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C0001A] uppercase">
              Client Perspectives
            </span>
            <span className="block w-8 h-px bg-[#C0001A] opacity-50" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
            className="heading-title text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted by{" "}
            <br />
            <em className="font-light italic">Discerning Families.</em>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="w-12 h-px bg-[#C0001A] mx-auto mt-8 origin-center"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Full-width marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <InfiniteMarquee items={reviews} />
      </motion.div>

      {/* Bottom heritage line */}
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-5">
            <span className="block w-12 h-px bg-black/10" aria-hidden="true" />
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-black/25">
              25 Years of Craftsmanship
            </span>
            <span className="block w-12 h-px bg-black/10" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}