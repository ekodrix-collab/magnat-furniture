"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const instagramPosts = [
  "/images/insta-post-001.jpg",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  "/images/insta-post-002.jpg",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
];

export default function InstagramSection() {
  return (
    <section className="bg-brand-primary py-32 border-t border-brand">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <SectionHeading
            label="Inspiration"
            title="Magnat on Instagram"
            subtitle="Follow us @MagnatFurniture for daily doses of interior design inspiration, new collection launches, and behind-the-scenes content."
            className="max-w-2xl"
          />
          <FadeInView delay={0.4}>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-3 bg-[#1A1A1A] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#8B1E1E]"
            >
              <Instagram size={18} />
              Follow Us
            </a>
          </FadeInView>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((image, index) => (
            <FadeInView key={index} delay={index * 0.1} direction="none" className="group relative aspect-square overflow-hidden hover:cursor-pointer">
              <Image
                src={image}
                alt={`Instagram Post ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#8B1E1E]/0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:bg-[#8B1E1E]/40 group-hover:opacity-100">
                <Instagram size={24} className="text-white" />
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
