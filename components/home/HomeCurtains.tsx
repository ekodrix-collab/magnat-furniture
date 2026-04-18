"use client";

import { useRef, useEffect, useState } from "react";
import { ProcessStep } from "@/lib/types";

const FALLBACK_STEPS: ProcessStep[] = [
  {
    id: "1",
    step_number: "01",
    label: "Consultation & Measurement",
    title: "Consultation & Measurement",
    description: "We understand your needs and take accurate measurements — online or on-site visit.",
    tag: "Step 01",
    image_url: "",
    sort_order: 0,
  },
  {
    id: "2",
    step_number: "02",
    label: "Design & Quote",
    title: "Design & Quote",
    description: "Custom design with clear pricing, materials, and full details shared upfront.",
    tag: "Step 02",
    image_url: "",
    sort_order: 1,
  },
  {
    id: "3",
    step_number: "03",
    label: "Production",
    title: "Production",
    description: "Crafted with precision using quality wood and raw materials by our artisans.",
    tag: "Step 03",
    image_url: "",
    sort_order: 2,
  },
  {
    id: "4",
    step_number: "04",
    label: "Delivery & Setup",
    title: "Delivery & Setup",
    description: "Safe delivery and proper installation done at your space.",
    tag: "Step 04",
    image_url: "",
    sort_order: 3,
  },
];

const STEP_ICONS = [
  // Consultation
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Design
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>,
  // Production
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // Delivery
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={20} height={20}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>,
];

function StepCard({ step, index, triggered }: {
  step: ProcessStep;
  index: number;
  triggered: boolean;
}) {
  const delay = index * 0.1;

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 border border-gray-200 
                 hover:border-[#C0001A] hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {/* Step number label */}
      <span
        className="block text-[11px] font-medium tracking-[.2em] text-[#C0001A] mb-5"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {step.step_number}
      </span>

      {/* Icon box */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                   text-[#C0001A] group-hover:bg-[#C0001A] group-hover:text-white 
                   transition-all duration-300"
        style={{ background: "#f9f9f9", border: "1px solid #eee" }}
      >
        {STEP_ICONS[index]}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C0001A] 
                   transition-colors leading-snug"
        style={{ fontFamily: "var(--font-lato)" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed text-gray-600"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {step.description}
      </p>

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#C0001A] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
}

export default function HomeCurtains({ steps }: { steps?: ProcessStep[] }) {
  const activeSteps = steps && steps.length > 0 ? steps : FALLBACK_STEPS;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeSteps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}