"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Phone, ArrowUpRight, Navigation } from "lucide-react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";

const features = [
  "Free Design Consultation",
  "Tailored Manufacturing",
  "Curated Delivery"
];

export default function HomeShowroom() {
  return (
    <section id="showroom" className="bg-[#ffffff] dark:bg-[#0a0a0a] py-24 lg:py-40 overflow-hidden relative border-t border-black/5 dark:border-white/5 transition-colors duration-500">

      <div className="max-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text & Features */}
          <div className="lg:w-1/2 space-y-10 lg:space-y-12">
             <FadeInView direction="up">
                <span className="heading-label mb-6">The Studio Experience</span>
                <h2 className="text-4xl lg:text-7xl font-semibold leading-[1.1] text-black dark:text-white mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                   Experience the <br />
                   <span className="italic font-light text-[#C0001A]">Standard of Luxury.</span>
                </h2>
                <p className="text-black/60 dark:text-white/50 text-base lg:text-lg font-normal max-w-lg leading-relaxed mb-10" style={{ fontFamily: "var(--font-inter)" }}>
                   Step into our flagship Kondotty studio to witness the fusion of heritage craft 
                   and modern architectural design. Meet our designers and find your inspiration in an environment crafted for the discerning.
                </p>
             </FadeInView>

             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {features.map((feat, i) => (
                  <FadeInView key={feat} delay={i * 0.15} className="flex items-center gap-3 group">
                     <div className="w-8 h-8 rounded-full border border-[#C0001A]/20 dark:border-[#C0001A]/40 flex items-center justify-center group-hover:bg-[#C0001A] transition-all duration-300">
                        <CheckCircle2 size={14} className="text-[#C0001A] group-hover:text-white transition-colors" />
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black dark:text-white/80">{feat}</span>
                  </FadeInView>
                ))}
             </div>
          </div>

          {/* Right: Modern Showroom Card (Glassmorphism + Image) */}
          <FadeInView delay={0.4} direction="left" className="lg:w-1/2 w-full relative">
             <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <Image 
                  src="/images/living-chairs.jpg" 
                  alt="Magnat Showroom Preview" 
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                
                {/* Glassmorphism Info Card */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="glass-luxury p-8 lg:p-12 rounded-xl border border-white/10 dark:hover:border-white/20 transition-all duration-500 backdrop-blur-2xl bg-white/90 dark:bg-black/80">
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <span className="text-[10px] font-bold text-[#C0001A] tracking-[0.4em] uppercase">The Kondotty Flagship</span>
                          <div className="flex items-start gap-5">
                             <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                                <MapPin size={24} className="text-[#C0001A]" />
                             </div>
                             <div className="space-y-2">
                                <p className="text-xl lg:text-2xl font-semibold leading-tight text-black dark:text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                                   Kondotty — Malappuram Road,<br />Next to City Center, Kondotty
                                </p>
                                <a 
                                  href="https://maps.google.com/?q=Magnat+Furniture+Kondotty" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0001A] hover:gap-3 transition-all underline decoration-red-500/30 underline-offset-4"
                                >
                                  Get Directions <Navigation size={12} />
                                </a>
                             </div>
                          </div>
                       </div>

                       <div className="grid grid-cols-2 gap-8 py-8 border-y border-black/5 dark:border-white/10">
                          <div className="space-y-2">
                             <span className="text-black/40 dark:text-white/40 text-[9px] uppercase tracking-widest flex items-center gap-2 font-bold">
                                <Clock size={12} className="text-[#C0001A]" /> Studio Hours
                             </span>
                             <p className="text-black dark:text-white text-sm font-semibold">9:30 AM — 08:30 PM</p>
                          </div>
                          <div className="space-y-2">
                             <span className="text-black/40 dark:text-white/40 text-[9px] uppercase tracking-widest flex items-center gap-2 font-bold">
                                <Phone size={12} className="text-[#C0001A]" /> Direct Line
                             </span>
                             <p className="text-black dark:text-white text-sm font-semibold hover:text-[#C0001A] transition-colors">
                                <a href="tel:+919446516395">+91 9446516395</a>
                             </p>
                          </div>
                       </div>

                       <div className="pt-2">
                          <a 
                            href="https://wa.me/919446516395" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-primary w-full group flex items-center justify-center gap-3 py-5"
                          >
                             <span>Book Private Consultation</span>
                             <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </a>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </FadeInView>

        </div>
      </div>
    </section>
  );
}
