import { Award, ShieldCheck, Truck, PencilRuler } from "lucide-react";
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
    description: "Finest selection of sustainably sourced solid woods and fabrics.",
  },
  {
    icon: PencilRuler,
    title: "Custom Design",
    description: "Bespoke furniture tailored precisely to your unique living space.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "White-glove delivery service to your doorstep, complimentary.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-brand-primary py-32 px-6 lg:px-12 overflow-hidden border-b border-brand">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Legacy Number */}
          <div className="relative group w-full lg:w-1/2">
            <FadeInView direction="right" duration={1.2}>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-playfair text-[10rem] md:text-[15rem] leading-none font-bold text-[#8B1E1E] opacity-10 blur-[2px] absolute -top-10 -left-4 pointer-events-none transition-all group-hover:opacity-20 group-hover:blur-0">
                  25
                </span>
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <h2 className="font-playfair text-[8rem] md:text-[10rem] leading-none font-bold text-[#8B1E1E] drop-shadow-sm">
                    25
                  </h2>
                  <div className="mt-[-2rem] ml-4 lg:ml-12">
                    <span className="block text-2xl font-playfair italic text-[#1A1A1A] font-medium tracking-wide">
                      Years of
                    </span>
                    <span className="block text-4xl md:text-5xl font-playfair font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Content & Features */}
          <div className="w-full lg:w-1/2">
            <FadeInView delay={0.4}>
              <p className="mb-16 text-lg text-body leading-relaxed max-w-xl italic">
                "Since 1999, Magnat Furniture has been redefining luxury living through master craftsmanship and timeless design. Our heritage is built on a foundation of quality and a commitment to creating environments where stories are told."
              </p>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feature, i) => (
                <FadeInView key={feature.title} delay={0.5 + i * 0.1}>
                  <div className="flex flex-col gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-brand text-[#C6A969] shadow-sm transition-all hover:scale-110 hover:bg-[#8B1E1E] hover:text-white">
                      <feature.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-body leading-relaxed font-light">
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
