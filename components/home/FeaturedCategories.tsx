"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const categories = [
  {
    name: "Sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    href: "/collections/sofas",
    count: "12+ Designs",
  },
  {
    name: "Chairs",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
    href: "/collections/chairs",
    count: "24+ Designs",
  },
  {
    name: "Dining",
    image: "https://images.unsplash.com/photo-1577113398331-d843d3341a63?q=80&w=1974&auto=format&fit=crop",
    href: "/collections/dining",
    count: "08+ Designs",
  },
  {
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693314120-0d4438678217?q=80&w=2070&auto=format&fit=crop",
    href: "/collections/bedroom",
    count: "15+ Designs",
  },
  {
    name: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    href: "/collections/office",
    count: "06+ Designs",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-brand-secondary py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <SectionHeading
          label="Our World"
          title="Curated Collections"
          subtitle="Explore our meticulously crafted furniture categories, designed to bring harmony and sophistication to every room."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <FadeInView
              key={category.name}
              delay={0.1 * index}
              className="group relative h-[450px] overflow-hidden"
            >
              <Link href={category.href} className="block relative h-full w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent transition-all duration-500 group-hover:bg-[#1A1A1A]/30">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#C6A969] mb-2 opacity-100 transition-opacity">
                    {category.count}
                  </span>
                  <h3 className="font-playfair text-3xl font-semibold text-white">
                    {category.name}
                  </h3>
                  
                  {/* Subtle hover indicator */}
                  <div className="mt-4 h-[1px] w-0 bg-[#C6A969] transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
