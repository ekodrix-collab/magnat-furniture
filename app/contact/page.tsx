"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageSquare, Clock } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="py-32 bg-[#f9f9f9]">
        <div className="max-container">
           <FadeInView className="max-w-4xl space-y-6">
              <span className="heading-label">Channel Excellence</span>
              <h1 className="heading-title" style={{ fontFamily: "var(--font-playfair)" }}>
                 Get in <span className="italic font-normal">Touch.</span>
              </h1>
              <p className="text-xl text-black/40 font-light max-w-2xl leading-relaxed">
                 Whether you are a discerning homeowner or a professional architect, our team 
                 is ready to assist your inquiry.
              </p>
           </FadeInView>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-40">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          {/* Left: Global Inquiries Form */}
          <div className="space-y-16">
             <div className="space-y-4">
                <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Start a Design Dialogue.</h2>
                <div className="h-px w-20 bg-[#C0001A]" />
             </div>

             {formState !== "success" ? (
               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Your Name</label>
                       <input type="text" required className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Your Email</label>
                       <input type="email" required className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Inquiry Type</label>
                    <select className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors appearance-none">
                       <option>Residential Project</option>
                       <option>Commercial Unit</option>
                       <option>Signature Model Inquiry</option>
                       <option>Curtains & Blinds</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Detailed Message</label>
                    <textarea rows={5} className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors resize-none"></textarea>
                  </div>

                  <button disabled={formState === "submitting"} className="btn-primary w-full lg:w-fit py-5 px-16">
                     {formState === "submitting" ? "Protocol Initiated..." : "Submit Inquiry"}
                  </button>
               </form>
             ) : (
               <div className="bg-[#f9f9f9] p-16 border border-black/5 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#C0001A] rounded-full flex items-center justify-center mx-auto text-white">
                     <MessageSquare size={32} />
                  </div>
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Engagement Received.</h3>
                  <p className="text-black/50">Our Kondotty desk will respond to your invitation within 24 business hours.</p>
               </div>
             )}
          </div>

          {/* Right: Studio Credentials */}
          <div className="space-y-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                   <h4 className="heading-label">Kondotty Studio</h4>
                   <div className="space-y-4 text-sm text-[#111]/70 leading-relaxed font-light">
                      <p className="flex items-start gap-3">
                         <MapPin size={18} className="text-[#C0001A] mt-1 shrink-0" />
                         Kondotty — Malappuram Road,<br />Next to City Center,<br />Kerala 673638
                      </p>
                      <p className="flex items-center gap-3">
                         <Clock size={16} className="text-[#C0001A]" />
                         09:30 AM — 08:30 PM
                      </p>
                   </div>
                </div>

                <div className="space-y-6">
                   <h4 className="heading-label">Direct Lines</h4>
                   <div className="space-y-4 text-sm text-[#111]/70 font-light">
                      <a href="tel:9446516395" className="flex items-center gap-3 hover:text-[#C0001A] transition-colors">
                         <Phone size={16} className="text-[#C0001A]" />
                         +91 9446516395
                      </a>
                      <a href="mailto:info@magnat.in" className="flex items-center gap-3 hover:text-[#C0001A] transition-colors">
                         <Mail size={16} className="text-[#C0001A]" />
                         info@magnat.in
                      </a>
                      <a href="https://instagram.com" className="flex items-center gap-3 hover:text-[#C0001A] transition-colors">
                         <Instagram size={16} className="text-[#C0001A]" />
                         @magnat_official
                      </a>
                   </div>
                </div>
             </div>

             {/* Interactive Map Placeholder */}
             <div className="aspect-video bg-[#f9f9f9] border border-black/5 relative group cursor-pointer overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/0 transition-all duration-700" />
                <MapPin size={48} className="text-black/10 group-hover:text-[#C0001A] transition-all duration-700" />
                <div className="absolute bottom-6 left-8 text-[8px] font-bold tracking-[0.4em] uppercase text-black/20">Navigate to Showroom</div>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}
