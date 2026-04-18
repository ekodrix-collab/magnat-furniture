"use client";

import { Award, ShieldCheck, PencilRuler, Truck } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const features = [
  {
    icon: Award,
    title: "Heritage Quality",
    description: "Rigorous standards for lasting beauty and structural integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Rare Materials",
    description: "The finest sustainably sourced solid hardwoods and full-grain leathers.",
  },
  {
    icon: PencilRuler,
    title: "Bespoke Design",
    description: "Furniture tailored to the unique geometry of your architectural space.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Expert installation and placement by our master logistics team.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-[#f5f2ee] py-24 lg:py-40 overflow-hidden">
      
      {/* ── Background Highlight ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
        <span 
          style={{  fontSize: "clamp(300px, 40vw, 600px)", fontWeight: 900, lineHeight: 1 }}
          className="text-[#1a1a1a]"
        >
          25
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* ── Left: The Narrative ── */}
          <div className="w-full lg:w-[45%]">
            <FadeInView direction="right">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#c9a96e]" />
                  <span className="text-[#c9a96e] text-[10px] font-bold tracking-[0.5em] uppercase" >
                    Since 2001
                  </span>
                </div>
                
                <h2 className="text-[#1a1a1a] leading-[1.05] tracking-tight" style={{  fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 600 }}>
                  A Quarter Century of <br />
                  <span className="italic font-normal serif-accent text-[#dfc08a]">Timeless Design</span>
                </h2>
                
                <p className="text-[#1a1a1a]/60 text-lg leading-relaxed max-w-lg font-light mt-4" >
                  The art of Magnat is the art of endurance. For 25 years, we have mastered the 
                  delicate balance between heritage woodcraft and the contemporary vision—crafting 
                  furniture that doesn&apos;t just fill a space, but defines a legacy.
                </p>
                
                {/* Enhanced 25y Highlight Badge */}
                <div className="mt-12 flex items-center gap-10">
                   <div className="flex flex-col items-start border-l border-[#c9a96e]/30 pl-8">
                      <span className="text-[#c9a96e] text-[28px] font-bold leading-none mb-2" >25+</span>
                      <span className="text-[#1a1a1a]/40 text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap" >Years Experience</span>
                   </div>
                   <div className="flex flex-col items-start border-l border-[#c9a96e]/30 pl-8">
                      <span className="text-[#1a1a1a] text-[28px] font-bold leading-none mb-2" >5000+</span>
                      <span className="text-[#1a1a1a]/40 text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap" >Homes Transformed</span>
                   </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* ── Right: Refined Features ── */}
          <div className="w-full lg:w-[55%] lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20">
              {features.map((feature, i) => (
                <FadeInView key={feature.title} delay={0.2 + i * 0.1}>
                  <div className="group flex flex-col gap-8">
                    {/* Architectural icon framing */}
                    <div className="relative w-14 h-14 flex items-center justify-center border border-[#c9a96e]/15 transition-all duration-700 group-hover:border-[#c9a96e]">
                      <feature.icon size={22} strokeWidth={1} className="text-[#1a1a1a]/40 group-hover:text-[#c9a96e] transition-colors duration-500" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#c9a96e] scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#c9a96e] scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-left" />
                    </div>
                    
                    <div>
                      <h4 className="text-[#1a1a1a] text-[12px] font-bold tracking-[0.25em] uppercase mb-4" >
                        {feature.title}
                      </h4>
                      <p className="text-[#1a1a1a]/55 text-[14px] leading-relaxed font-light" >
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