"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const reviews = [
  {
    name: "Abdul Rahman",
    location: "Kondotty",
    text: "The signature sofa we commissioned has become the heart of our home. The craftsmanship and attention to structural detail is exceptional.",
    rating: 5
  },
  {
    name: "Sana Fathima",
    location: "Calicut",
    text: "Working with Magnat for our full interior project was a masterclass in professional design. Their curtains collection is truly premier.",
    rating: 5
  },
  {
    name: "Rishi Kumar",
    location: "Malappuram",
    text: "A 25-year legacy you can truly feel in the product. The quality is a cut above any international brand I've seen in Kerala.",
    rating: 5
  }
];

export default function HomeTestimonials() {
  return (
    <section className="bg-white py-40 overflow-hidden border-t border-black/5">
      <div className="max-container">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
           <FadeInView>
              <span className="heading-label mx-auto">Client Perspectives</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                Trusted by <br />
                <span className="italic font-normal">Discerning Families.</span>
              </h2>
              <div className="w-16 h-px bg-[#C0001A] mx-auto mt-8" />
           </FadeInView>
        </div>

        {/* Testimonials Grid (Standardized White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {reviews.map((rev, index) => (
             <FadeInView key={rev.name} delay={index * 0.1} className="bg-[#f9f9f9] p-12 lg:p-16 relative flex flex-col group border border-black/5 hover:border-[#C0001A]/20 transition-all duration-700">
                
                {/* Minimalist Quote Mark */}
                <div className="mb-10 text-[#C0001A] opacity-20">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.899 15.117 14.899 16.607 13.593C15.222 12.825 14.017 11.238 14.017 9.5C14.017 7.015 16.032 5 18.517 5C21.002 5 23.017 7.015 23.017 9.5C23.017 12.986 20.678 15.688 18 17.5V21H14.017ZM1 21L1 18C1 16.899 2.1 14.899 3.59 13.593C2.205 12.825 1 11.238 1 9.5C1 7.015 3.015 5 5.5 5C7.985 5 10 7.015 10 9.5C10 12.986 7.661 15.688 5 17.5V21H1Z" />
                   </svg>
                </div>

                <div className="flex gap-1 mb-10">
                   {[...Array(rev.rating)].map((_, i) => (
                     <Star key={i} size={10} className="fill-[#111] text-[#111]" />
                   ))}
                </div>

                <p className="text-[#111] text-lg font-light leading-relaxed mb-12 flex-grow" style={{ fontFamily: "var(--font-playfair)" }}>
                   &ldquo;{rev.text}&rdquo;
                </p>

                <div className="pt-10 border-t border-black/5 space-y-1">
                   <h4 className="text-[#111] font-bold text-xs tracking-widest uppercase">{rev.name}</h4>
                   <span className="text-black/30 text-[10px] font-bold tracking-[0.2em] uppercase">{rev.location}</span>
                </div>
             </FadeInView>
           ))}
        </div>

      </div>
    </section>
  );
}
