"use client";

import { Instagram, Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <footer id="contact" className="bg-[#111111] text-[#F7F4F0] border-t-2 border-[#C0001A]">
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* ── Left: Professional Inquiry Form ── */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Get a Free Quote</h2>
              <p className="text-white/40 text-[15px] font-light max-w-md">Our manufacturing unit in Kondotty is ready to bring your vision to life. Message us for custom sofas or full interior projects.</p>
            </div>

            {formState !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors"
                  />
                </div>
                
                <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors appearance-none text-white/50">
                   <option value="" className="bg-[#111]">Primary Interest</option>
                   <option value="sofa" className="bg-[#111]">Custom Sofa / Sectional</option>
                   <option value="chairs" className="bg-[#111]">Seating / Chairs</option>
                   <option value="dining" className="bg-[#111]">Dining Collection</option>
                   <option value="curtains" className="bg-[#111]">Curtains & Blinds</option>
                   <option value="interior" className="bg-[#111]">Full Interior Project</option>
                </select>

                <textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C0001A] transition-colors resize-none"
                ></textarea>

                <button type="submit" disabled={formState === "submitting"} className="btn-red w-full">
                   {formState === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            ) : (
              <div className="bg-[#C0001A]/10 border border-[#C0001A]/40 p-10 text-center">
                 <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Inquiry Sent Successfully</h3>
                 <p className="text-white/60 text-sm">Thank you for choosing Magnat. Our Kondotty studio will reach out to you within 24 hours.</p>
              </div>
            )}
          </div>

          {/* ── Right: Showroom & Info ── */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Contact Block */}
               <div className="space-y-8">
                  <h4 className="text-[#C0001A] text-[10px] font-bold tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>Connect Directly</h4>
                  <div className="space-y-6">
                    <a href="tel:9446516395" className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C0001A] transition-colors">
                          <Phone size={16} className="text-[#C0001A]" />
                       </div>
                       <span className="text-sm font-semibold">9446516395</span>
                    </a>
                    <a href="https://wa.me/919446516395" className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C0001A] transition-colors">
                          <MessageSquare size={16} className="text-[#C0001A]" />
                       </div>
                       <span className="text-sm font-semibold">Message on WhatsApp</span>
                    </a>
                    <a href="https://instagram.com/magnat_furniture_.kondotty" className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C0001A] transition-colors">
                          <Instagram size={16} className="text-[#C0001A]" />
                       </div>
                       <span className="text-sm font-semibold">@magnat_furniture_.kondotty</span>
                    </a>
                  </div>
               </div>

               {/* Studio Info */}
               <div className="space-y-8">
                  <h4 className="text-[#C0001A] text-[10px] font-bold tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>Our Studio</h4>
                  <div className="space-y-4">
                    <p className="flex items-start gap-4 text-sm font-light leading-relaxed">
                       <MapPin size={18} className="text-[#C0001A] shrink-0" />
                       Kondotty — Malappuram Road,<br />Next to City Center, Kondotty,<br />Kerala 673638
                    </p>
                    <p className="text-xs text-white/30 italic">Studio Hours: 09:30 AM — 08:30 PM (Mon-Sat)</p>
                  </div>
               </div>
            </div>

            {/* Interactive Google Map */}
            <div className="aspect-[16/7] bg-white/5 relative border border-white/5 overflow-hidden">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.577732999317!2d75.9678667!3d11.1447936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee03d3e05f3%3A0x895ea8e05f23c7d8!2sMagnat%20Furniture%20and%20Interiors!5e0!3m2!1sen!2sin!4v1775902098710!5m2!1sen!2sin" 
                  className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="bg-[#C0001A] px-3 py-1 text-[10px] font-black tracking-tighter italic">MAGNAT</div>
              <p className="text-[11px] text-white/20 font-bold tracking-widest uppercase">
                © {new Date().getFullYear()} Magnat Furniture, Kondotty | All Rights Reserved.
              </p>
           </div>
           
           <div className="flex gap-8">
              <Link href="/privacy" className="text-[10px] text-white/20 font-bold uppercase tracking-widest hover:text-[#C0001A] transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[10px] text-white/20 font-bold uppercase tracking-widest hover:text-[#C0001A] transition-colors">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
