"use client";

import { Award, ShieldCheck, PencilRuler, Truck } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const features = [
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous standards for lasting beauty and durability.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description: "Finest sustainably sourced solid woods and fabrics.",
  },
  {
    icon: PencilRuler,
    title: "Custom Design",
    description: "Bespoke furniture tailored to your unique living space.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "White-glove delivery service to your doorstep, complimentary.",
  },
];

const PLAYFAIR = 'var(--font-playfair), "Georgia", serif';
const INTER = 'var(--font-inter), "Helvetica Neue", sans-serif';

export default function ExperienceSection() {
  return (
    <section className="relative bg-brand-primary border-b border-brand overflow-hidden">

      {/* Corner bracket marks */}
      <span aria-hidden className="absolute top-7 left-7 w-5 h-5 pointer-events-none"
        style={{ borderTop: "1px solid rgba(198,169,105,0.45)", borderLeft: "1px solid rgba(198,169,105,0.45)" }} />
      <span aria-hidden className="absolute bottom-7 right-7 w-5 h-5 pointer-events-none"
        style={{ borderBottom: "1px solid rgba(198,169,105,0.45)", borderRight: "1px solid rgba(198,169,105,0.45)" }} />

      {/* Full-width wrapper — no container max-width restriction on this section */}
      <div className="w-full px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-0 max-w-screen-xl mx-auto">

          {/* ══ LEFT ══ */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start lg:pr-12 xl:pr-20">
            <FadeInView direction="right" duration={1.1}>
              <div className="relative select-none">

                {/* Ghost outline numeral */}
                <span aria-hidden className="absolute pointer-events-none"
                  style={{
                    fontFamily: PLAYFAIR,
                    fontWeight: 900,
                    fontSize: "220px",
                    lineHeight: 1,
                    top: "-16px",
                    left: "-12px",
                    letterSpacing: "-0.05em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(139,30,30,0.07)",
                  }}>
                  25
                </span>

                {/* Numeral + label row */}
                <div className="relative z-10 flex items-end gap-3">

                  {/* Large "25" — fixed 160px, not clamped */}
                  <span style={{
                    fontFamily: PLAYFAIR,
                    fontWeight: 900,
                    fontSize: "160px",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    display: "block",
                    background: "linear-gradient(160deg, #B82222 0%, #8B1E1E 55%, #5C1010 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    25
                  </span>

                  {/* Label stack */}
                  <div className="flex flex-col justify-end pb-4">
                    <span style={{
                      fontFamily: PLAYFAIR,
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "22px",
                      letterSpacing: "0.04em",
                      color: "#5A5A5A",
                      lineHeight: 1.3,
                    }}>
                      years of
                    </span>

                    {/* Gold dot + rule */}
                    <div className="flex items-center gap-1.5 my-2">
                      <span className="rounded-full flex-shrink-0"
                        style={{ width: "5px", height: "5px", background: "#C6A969" }} />
                      <span style={{
                        display: "block", height: "1px", width: "44px",
                        background: "linear-gradient(to right, #C6A969, transparent)",
                      }} />
                    </div>

                    <span style={{
                      fontFamily: PLAYFAIR,
                      fontWeight: 700,
                      fontSize: "16px",
                      letterSpacing: "0.36em",
                      color: "#1A1A1A",
                      textTransform: "uppercase" as const,
                      whiteSpace: "nowrap",
                    }}>
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Heritage line */}
            <FadeInView delay={0.25} duration={0.9}>
              <div className="flex items-center gap-3 mt-8">
                <span style={{ display: "block", height: "1px", width: "32px", background: "#C6A969", opacity: 0.5 }} />
                <span style={{
                  fontFamily: PLAYFAIR,
                  fontStyle: "italic",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  color: "#8B8B8B",
                  whiteSpace: "nowrap",
                }}>
                  Est. 2001 &nbsp;·&nbsp; Magnat Furniture
                </span>
                <span style={{ display: "block", height: "1px", width: "32px", background: "#C6A969", opacity: 0.5 }} />
              </div>
            </FadeInView>
          </div>

          {/* Vertical gold divider */}
          <div aria-hidden className="hidden lg:block flex-shrink-0 w-px self-stretch"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, #C6A969 25%, #C6A969 75%, transparent 100%)",
              opacity: 0.3,
            }} />

          {/* ══ RIGHT — Feature grid ══ */}
          <div className="w-full lg:w-[55%] lg:pl-12 xl:pl-20 mt-16 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, i) => (
                <FadeInView key={feature.title} delay={0.3 + i * 0.1}>
                  <div className="group flex items-start gap-4">

                    {/* Square icon box */}
                    <div
                      className="group-hover:bg-luxury-red group-hover:text-white"
                      style={{
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "42px",
                        height: "42px",
                        border: "1px solid rgba(198,169,105,0.35)",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,0.65)",
                        color: "#8B1E1E",
                        transition: "background 0.28s ease, color 0.28s ease, border-color 0.28s ease",
                      }}>
                      <feature.icon size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h4
                        className="group-hover:text-red transition-colors duration-300"
                        style={{
                          fontFamily: INTER,
                          fontWeight: 700,
                          fontSize: "10.5px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase" as const,
                          color: "#1A1A1A",
                          marginBottom: "6px",
                        }}>
                        {feature.title}
                      </h4>

                      <div style={{ height: "1px", width: "20px", background: "#C6A969", opacity: 0.4, marginBottom: "8px" }} />

                      <p style={{ fontFamily: INTER, fontSize: "13.5px", color: "#5A5A5A", lineHeight: 1.75, fontWeight: 300 }}>
                        {feature.description}
                      </p>
                    </div>

                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}