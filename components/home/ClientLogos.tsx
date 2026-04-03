import FadeInView from "@/components/ui/FadeInView";

const clientLogos = [
  "STORIES", "VILANGADAN", "LUXURY INTERIORS", "ROYAL HOMES", "ELITE DECOR", "DESIGN DISTRICT"
];

export default function ClientLogos() {
  return (
    <section className="bg-brand-primary py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <h4 className="text-center text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#C6A969]">
          Trusted by Industry Leaders
        </h4>
      </div>
      
      <FadeInView delay={0.2} direction="none" duration={1.5}>
        <div className="relative">
          {/* Ticker Animation */}
          <div className="logo-ticker-track flex">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="px-16 flex items-center justify-center"
              >
                <span className="font-playfair text-3xl font-bold text-[#1A1A1A]/20 tracking-tighter hover:text-[#8B1E1E]/40 transition-colors uppercase cursor-default">
                  {logo}
                </span>
              </div>
            ))}
            {/* Second set for infinite loop */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`loop-${index}`} 
                className="px-16 flex items-center justify-center"
              >
                <span className="font-playfair text-3xl font-bold text-[#1A1A1A]/20 tracking-tighter hover:text-[#8B1E1E]/40 transition-colors uppercase cursor-default">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-primary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-primary to-transparent z-10" />
        </div>
      </FadeInView>
    </section>
  );
}
