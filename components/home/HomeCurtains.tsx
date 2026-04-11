"use client";

import { useRef, useEffect, useState } from "react";

/* ── Steps ── */
const steps = [
  {
    step: "01",
    label: "Design & Selection",
    title: "Crafting Your Vision",
    desc: "Our designers sit with you to understand your space, lifestyle, and aesthetic — translating ideas into detailed blueprints.",
    tag: "Expert Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    label: "Material Sourcing",
    title: "Only the Finest Materials",
    desc: "Premium timber, imported fabrics and precision hardware — handpicked from trusted global suppliers for every project.",
    tag: "Top Quality",
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    label: "Artisan Craftsmanship",
    title: "Built by Master Hands",
    desc: "Each piece is hand-cut, joined and finished in our Kondotty workshop — with decades of expertise guiding every detail.",
    tag: "Handcrafted",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    label: "White Glove Delivery",
    title: "Delivered with Care",
    desc: "We deliver, install, and position every piece personally — your satisfaction is the final signature on every project.",
    tag: "5-Star Service",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  },
];

/* ── Card Component ── */
function StepCard({
  step,
  index,
  triggered,
}: {
  step: (typeof steps)[0];
  index: number;
  triggered: boolean;
}) {
  const delay = index * 0.18 + 0.4;

  return (
    <div
      className="flex flex-col bg-[#f7f7f3] rounded-2xl overflow-hidden group cursor-default"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0px)" : "translateY(48px)",
        transition: `opacity 1s ease ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: "clamp(140px, 18vw, 200px)" }}>
        <img
          src={step.image}
          alt={step.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
          style={{
            filter: "saturate(0.85) contrast(0.95)",
            transform: triggered ? "scale(1)" : "scale(1.1)",
            transition: `transform 1.6s cubic-bezier(0.22,1,0.36,1) ${delay + 0.1}s, filter 0.4s ease`,
          }}
        />
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Glancing shimmer sweep effect */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.9) 50%, transparent 80%)",
            transform: triggered ? "translateX(150%) scale(1.5)" : "translateX(-150%) scale(1.5)",
            transition: triggered ? `transform 1.2s ease-in-out ${delay + 0.3}s` : "none",
          }}
        />

        {/* Step number top-left */}
        <div className="absolute top-3 left-3">
          <span
            className="text-white/90 font-bold"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            {step.step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C0001A]">{step.label}</p>
        <h3
          className="font-bold text-[#111] leading-snug"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(15px, 1.6vw, 19px)", lineHeight: 1.3 }}
        >
          {step.title}
        </h3>
        <p className="text-black/45 text-xs leading-relaxed flex-1 mt-1">{step.desc}</p>

        {/* Tag */}
        <span className="mt-3 self-start inline-block text-[10px] font-semibold text-black/40 bg-white border border-black/8 px-3 py-1.5 rounded-full tracking-wide">
          {step.tag}
        </span>
      </div>
    </div>
  );
}

/* ── Progress line between cards (desktop only) ── */
function ProgressDot({ index, triggered }: { index: number; triggered: boolean }) {
  return (
    <div
      className="hidden lg:flex shrink-0 items-center justify-center w-8"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "scale(1)" : "scale(0.4)",
        transition: `opacity 0.6s ease ${index * 0.18 + 0.75}s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.18 + 0.75}s`,
      }}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="w-[1px] h-3 bg-black/10 rounded-full" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-black/15 bg-white shadow-sm" />
        <div className="w-[1px] h-3 bg-black/10 rounded-full" />
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function HomeCurtains() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Fallback: always show within 1.5s regardless of scroll
    const fallback = setTimeout(() => setTriggered(true), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block border-t border-black/5"
      style={{ background: "linear-gradient(180deg, #eeeee8 0%, #e8e8e2 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14">

        {/* ── White rounded frame ── */}
        <div
          className="bg-white rounded-[28px] overflow-hidden"
          style={{
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: triggered
              ? "0 24px 80px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.04)"
              : "0 4px 16px rgba(0,0,0,0.04)",
            opacity: triggered ? 1 : 0,
            transform: triggered ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
            transition: "opacity 0.9s ease, transform 1.1s cubic-bezier(0.22,1,0.36,1), box-shadow 1.3s ease 0.2s",
          }}
        >

          {/* ── Header ── */}
          <div className="text-center px-6 pt-12 pb-10 md:pt-16 md:pb-12">

            {/* Pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/8 bg-[#f5f5f0] mb-7"
              style={{
                opacity: triggered ? 1 : 0,
                transform: triggered ? "scale(1) translateY(0)" : "scale(0.85) translateY(8px)",
                transition: "opacity 0.7s ease 0.25s, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.25s",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C0001A]" />
              <span className="text-[10px] font-semibold text-black/45 tracking-[0.22em] uppercase">
                How It Works
              </span>
            </div>

            {/* Title */}
            <div
              style={{
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.9s ease 0.38s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.38s",
              }}
            >
              <h2
                className="font-bold text-[#111] leading-tight mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(26px, 4vw, 50px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Your Path to a{" "}
                <span className="italic font-normal text-black/28">Perfect Home</span>
              </h2>
              <p
                className="text-black/40 font-light max-w-md mx-auto leading-relaxed"
                style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}
              >
                A seamless journey from inspiration to installation — handled with care at every step.
              </p>
            </div>
          </div>

          {/* ── Cards — desktop: horizontal row | mobile: vertical stack ── */}
          <div className="px-4 sm:px-6 md:px-8 pb-10 md:pb-12">

            {/* Desktop row — large screens only */}
            <div className="hidden lg:flex items-stretch gap-0">
              {steps.map((step, i) => (
                <div key={step.step} className="flex items-stretch flex-1 min-w-0">
                  <StepCard step={step} index={i} triggered={triggered} />
                  {i < steps.length - 1 && (
                    <ProgressDot index={i} triggered={triggered} />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile + Tablet vertical stack */}
            <div className="lg:hidden flex flex-col gap-5">
              {steps.map((step, i) => (
                <div
                  key={step.step}
                  className="flex flex-col sm:flex-row gap-4 bg-[#f7f7f3] rounded-2xl overflow-hidden"
                  style={{
                    opacity: triggered ? 1 : 0,
                    transform: triggered ? "translateY(0)" : "translateY(32px)",
                    transition: `opacity 0.9s ease ${i * 0.14 + 0.35}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.14 + 0.35}s`,
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-none sm:rounded-2xl sm:w-44 shrink-0" style={{ height: "180px" }}>
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ filter: "saturate(0.85) contrast(0.95)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:bg-gradient-to-r" />
                    <span
                      className="absolute top-3 left-4 text-white/80 font-bold"
                      style={{ fontFamily: "var(--font-playfair)", fontSize: "11px", letterSpacing: "0.2em" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center gap-2">
                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C0001A]">{step.label}</p>
                    <h3
                      className="font-bold text-[#111] leading-snug"
                      style={{ fontFamily: "var(--font-playfair)", fontSize: "18px" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-black/45 text-xs leading-relaxed">{step.desc}</p>
                    <span className="mt-1 self-start text-[10px] font-semibold text-black/40 bg-white border border-black/8 px-3 py-1.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
