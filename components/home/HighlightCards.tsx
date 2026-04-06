"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Leisure Chairs",
    description: "Designed for relaxation, crafted for luxury living rooms.",
    image: "/images/living-chairs.jpg",
    href: "/collections/living-room",
  },
  {
    title: "Arm Chairs",
    description: "Versatile, ergonomic designs for classic and modern interiors.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop",
    href: "/collections/chairs",
  },
];

export default function HighlightCards() {
  return (
    <section className="bg-brand-secondary py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {cards.map((card, i) => (
            <FadeInView key={card.title} delay={i * 0.2} direction={i === 0 ? "right" : "left"}>
              <Link href={card.href} className="group relative block h-[500px] overflow-hidden lg:h-[600px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Visual Glassmorphism Card */}
                <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/10 backdrop-blur-md p-10 border border-white/20 transition-all duration-500 group-hover:bg-[#1A1A1A] group-hover:border-transparent">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/80 font-light mb-6 text-sm max-w-xs transition-colors group-hover:text-white/70">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-3 text-white text-[0.7rem] font-bold uppercase tracking-[0.2em]">
                    Discover More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
