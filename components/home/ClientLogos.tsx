"use client";

import FadeInView from "@/components/ui/FadeInView";

const clientLogos = [
  "PRESTIGE INTERIORS", "HILTON GROUP", "OBEROI HOTELS", "KOCHI METRO", "LULU MALL", "GRAND HYATT", "MARRIOTT INTERNATIONAL"
];

const tickerItems = [...clientLogos, ...clientLogos];

export default function ClientLogos() {
  return (
    <section className="bg-[#f5f2ee] py-24 border-y border-[#1a1a1a]/5 overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 mb-12">
        <h4 className="text-center text-[9px] font-bold uppercase tracking-[0.45em] text-[#c9a96e]" style={{ fontFamily: "var(--font-inter)" }}>
          The Portfolio of Trust
        </h4>
      </div>
      
      <FadeInView delay={0.2} direction="none" duration={1.5}>
        <div className="relative flex items-center">
          
          <div className="flex animate-scroll whitespace-nowrap gap-16 lg:gap-32">
            {tickerItems.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center"
              >
                <span className="text-[#1a1a1a]/15 text-2xl lg:text-3xl font-semibold tracking-[0.1em] hover:text-[#c9a96e] transition-colors duration-500 uppercase cursor-default select-none" style={{ fontFamily: "var(--font-playfair)" }}>
                  {logo}
                </span>
                {/* Minimal divider dot */}
                <span className="ml-16 lg:ml-32 text-[#c9a96e]/20 text-[6px]">◆</span>
              </div>
            ))}
          </div>
          
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f5f2ee] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#f5f2ee] to-transparent z-10 pointer-events-none" />
        </div>
      </FadeInView>
    </section>
  );
}
