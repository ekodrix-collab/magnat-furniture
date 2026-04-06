"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const craftStories = [
  {
    thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    title: "Master Craftsmanship",
    description: "Every joint, every curve is shaped by decades of expertise passed down through generations of Kerala artisans.",
    stat: "200+",
    statLabel: "Expert Artisans",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1616137422495-1e96aadd3461?q=80&w=2000&auto=format&fit=crop",
    title: "Premium Materials",
    description: "We source only the finest sustainably harvested teak, rosewood, and imported hardwoods for lasting beauty.",
    stat: "100%",
    statLabel: "Sustainably Sourced",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1964&auto=format&fit=crop",
    title: "Design Philosophy",
    description: "Where classical Kerala woodcraft traditions meet contemporary minimalism — furniture that transcends trends.",
    stat: "25+",
    statLabel: "Years of Legacy",
  },
];

export default function VideoSection() {
  return (
    <section className="bg-brand-primary py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <SectionHeading
          label="The Magnat Way"
          title="Stories Behind the Design"
          subtitle="Discover the passion, precision, and philosophy that goes into every Magnat piece. From raw timber to refined masterpiece."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {craftStories.map((story, index) => (
            <FadeInView key={story.title} delay={index * 0.2} className="group relative h-[600px] overflow-hidden">
              <Image
                src={story.thumbnail}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col">
                {/* Stat */}
                <div className="mb-6">
                  <span className="font-playfair text-5xl font-bold text-[#C6A969] block leading-none">{story.stat}</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/60 mt-1 block">{story.statLabel}</span>
                </div>
                
                {/* Divider */}
                <div className="h-[1px] w-12 bg-[#C6A969]/50 mb-6 transition-all duration-500 group-hover:w-full" />
                
                {/* Title & Description */}
                <h3 className="font-playfair text-2xl font-bold text-white tracking-wide mb-3">
                  {story.title}
                </h3>
                <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs transition-colors group-hover:text-white/80">
                  {story.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
