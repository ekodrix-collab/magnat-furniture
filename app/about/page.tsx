"use client";

import FadeInView from "@/components/ui/FadeInView";
import HeritageSection from "@/components/home/HeritageSection";

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ── Editorial Header ── */}
      <section className="py-32 bg-[#f9f9f9]">
        <div className="max-container flex flex-col items-center text-center">
           <FadeInView className="max-w-4xl space-y-8">
              <span className="heading-label mx-auto">Our Origin Story</span>
              <h1 className="text-7xl lg:text-9xl font-bold text-[#111] tracking-tighter" style={{ fontFamily: "var(--font-playfair)" }}>
                 Beyond <br />
                 <span className="italic font-normal">Manufacturing.</span>
              </h1>
              <p className="text-2xl text-black/50 font-light leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
                 Magnat was born from a singular vision: to bring world-class design integrity 
                 to the heart of Kerala&apos;s homes.
              </p>
           </FadeInView>
        </div>
      </section>

      {/* ── Image/Philosophy Split ── */}
      <section className="py-40">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeInView direction="right">
             <div className="aspect-square relative overflow-hidden bg-[#f0f0f0]">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                  alt="Precision Craftsmanship"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute top-10 left-10 text-white font-black text-8xl opacity-10">M</div>
             </div>
          </FadeInView>

          <FadeInView direction="left" className="space-y-12">
             <h2 className="text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>The Art of Material Intelligence.</h2>
             <p className="text-lg text-black/60 font-light leading-relaxed">
                At our Kondotty facility, we blend the ancestral wisdom of Kerala woodworking 
                with precision CNC technology and Italian-sourced textiles. This hybrid 
                approach ensures that every piece is not only visually stunning but 
                structurally immortal.
             </p>
             <div className="grid grid-cols-2 gap-10">
                <div className="space-y-2">
                   <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase">Sustainable Sourcing</h4>
                   <p className="text-xs text-black/40">Premium legal timber and eco-certified materials.</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase">Artisanal Production</h4>
                   <p className="text-xs text-black/40">Hand-finished by second-generation master craftsmen.</p>
                </div>
             </div>
          </FadeInView>
        </div>
      </section>

      {/* Common Heritage Components */}
      <HeritageSection />

      {/* ── Team/Culture Highlight ── */}
      <section className="py-40 bg-[#111] text-white">
        <div className="max-container flex flex-col items-center text-center">
           <FadeInView className="max-w-2xl space-y-8">
              <h2 className="text-5xl font-bold italic" style={{ fontFamily: "var(--font-playfair)" }}>Design Consultations.</h2>
              <p className="text-white/40 font-light">
                 Our team of interior architects in Kondotty are available for bespoke 
                 project consultations. We don&apos;t just build furniture; we curate environments.
              </p>
              <button className="btn-primary border-white">Meet Our Designers</button>
           </FadeInView>
        </div>
      </section>
    </main>
  );
}
