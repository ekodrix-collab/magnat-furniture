import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { History, PencilRuler, Users, Globe } from "lucide-react";

const milestones = [
  { year: "2001", title: "The Foundation", desc: "Started as a small artisanal workshop in Kerala, driven by a passion for solid wood." },
  { year: "2010", title: "Regional Expansion", desc: "Opened our first flagship showroom, bringing premium designs to a wider audience." },
  { year: "2018", title: "Digital Heritage", desc: "Integrated modern design technologies while preserving traditional hand-crafting techniques." },
  { year: "2026", title: "Magnat Today", desc: "A leading name in premium furniture, known for uncompromising quality and bespoke luxury." },
];

export const metadata = {
  title: "Our Story",
  description: "Learn about the heritage and craftsmanship of Magnat Furniture. Celebrating 25 years of excellence in luxury interior design.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 bg-brand-primary min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 mt-12 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <FadeInView>
              <span className="section-label">Since 2001</span>
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-[#1A1A1A] mb-10 leading-tight">
                Crafting <span className="italic text-[#8B1E1E]">Legacy</span>, One Piece at a Time.
              </h1>
              <p className="text-lg text-body leading-relaxed font-light mb-8 max-w-xl">
                At Magnat Furniture, we believe that furniture is more than just functionality—it's an expression of your soul and a testament to your lifestyle.
              </p>
              <p className="text-body leading-loose font-light opacity-80 max-w-xl">
                For 25 years, our master artisans have blended traditional craftsmanship with contemporary aesthetics to create pieces that stand the test of time. Every curve, every joint, and every finish reflects our dedication to excellence.
              </p>
            </FadeInView>
          </div>
          <div className="lg:w-1/2 relative h-[700px] w-full overflow-hidden border border-brand">
            <FadeInView delay={0.4} direction="left" className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop"
                alt="Our Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-secondary py-32 border-y border-brand mb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: History, title: "Heritage", desc: "Preserving ancient Kerala woodcrafting traditions." },
              { icon: PencilRuler, title: "Precision", desc: "Every millimeter is measured with absolute dedication." },
              { icon: Globe, title: "Sustainability", desc: "Exclusively using ethically sourced premium materials." },
              { icon: Users, title: "Community", desc: "Supporting generations of local master artisans." },
            ].map((value, i) => (
              <FadeInView key={i} delay={i * 0.1} align="center">
                <div className="flex flex-col items-center text-center group">
                  <div className="h-16 w-16 mb-8 rounded-full bg-white flex items-center justify-center text-[#8B1E1E] transition-all group-hover:scale-110 group-hover:bg-[#8B1E1E] group-hover:text-white shadow-sm border border-brand">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[#1A1A1A]">{value.title}</h3>
                  <p className="text-sm text-body font-light leading-relaxed">{value.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="container mx-auto px-6 lg:px-12 mb-32">
        <SectionHeading
          label="The Journey"
          title="A Legacy in the Making"
          align="center"
          className="mb-24"
        />
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand hidden lg:block" />
          
          <div className="space-y-24">
            {milestones.map((ms, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2 flex flex-col items-center lg:items-center">
                  <FadeInView direction={i % 2 === 0 ? "right" : "left"}>
                    <div className={`${i % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>
                      <span className="font-playfair text-6xl font-bold text-[#C6A969] mb-4 block">{ms.year}</span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-widest">{ms.title}</h3>
                      <p className="max-w-md mx-auto lg:mx-0 text-body font-light leading-relaxed italic">{ms.desc}</p>
                    </div>
                  </FadeInView>
                </div>
                <div className="relative z-10 h-6 w-6 rounded-full bg-[#8B1E1E] border-4 border-white shadow-md hidden lg:block" />
                <div className="lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
