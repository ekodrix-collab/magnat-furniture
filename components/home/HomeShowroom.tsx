"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const features = [
  "Free Design Consultation",
  "Tailored Manufacturing",
  "Curated Delivery"
];

export default function HomeShowroom() {
  return (
    <section id="showroom" className="bg-white py-40 overflow-hidden relative border-t border-black/5">
      {/* Decorative Background Text */}
      <div className="absolute top-10 right-0 opacity-[0.03] select-none text-[250px] font-black leading-none text-black pointer-events-none italic">
         VISIT
      </div>

      <div className="max-container flex flex-col lg:flex-row items-center gap-24">
        
        {/* Left: Text & Features */}
        <div className="lg:w-1/2 space-y-12 relative z-10">
           <FadeInView>
              <span className="heading-label">The Studio Experience</span>
              <h2 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                 Experience the <br />
                 <span className="italic font-normal">Standard of Luxury.</span>
              </h2>
              <p className="text-black/50 text-base font-light max-w-lg leading-relaxed mb-10">
                 Step into our flagship Kondotty studio to witness the fusion of heritage craft 
                 and modern architectural design. Meet our designers and find your inspiration.
              </p>
           </FadeInView>

           <div className="flex flex-col sm:flex-row items-center gap-10">
              {features.map((feat, i) => (
                <FadeInView key={feat} delay={i * 0.1} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full border border-[#C0001A]/20 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-[#C0001A]" />
                   </div>
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#111]">{feat}</span>
                </FadeInView>
              ))}
           </div>
        </div>

        {/* Right: Modern Showroom Card (Standardized White Theme) */}
        <FadeInView delay={0.4} direction="left" className="lg:w-1/2 w-full">
           <div className="bg-[#f9f9f9] border border-black/5 p-12 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C0001A]/5 -mr-24 -mt-24 rounded-full blur-3xl opacity-50" />
              
              <div className="space-y-16 relative z-10 text-left">
                 <div className="space-y-8">
                    <span className="text-[9px] font-bold text-[#C0001A] tracking-[0.4em] uppercase">The Kondotty Flagship</span>
                    <div className="flex items-start gap-4 text-[#111]">
                       <MapPin size={24} className="text-[#C0001A] shrink-0 mt-1" />
                       <p className="text-2xl font-semibold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                          Kondotty — Malappuram Road,<br />Next to City Center, Kondotty
                       </p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="space-y-3">
                       <span className="text-black/30 text-[9px] uppercase tracking-widest flex items-center gap-2">
                          <Clock size={12} /> Studio Hours
                       </span>
                       <p className="text-[#111] text-sm font-semibold">9:30 AM — 08:30 PM</p>
                    </div>
                    <div className="space-y-3">
                       <span className="text-black/30 text-[9px] uppercase tracking-widest flex items-center gap-2">
                          <Phone size={12} /> Direct Line
                       </span>
                       <p className="text-[#111] text-sm font-semibold">+91 9446516395</p>
                    </div>
                 </div>

                 <div className="pt-10 border-t border-black/5">
                    <a 
                      href="https://wa.me/919446516395" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                       Book Private Consultation
                    </a>
                 </div>
              </div>
           </div>
        </FadeInView>

      </div>
    </section>
  );
}
