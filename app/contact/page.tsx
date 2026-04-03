"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="pt-32 pb-32 bg-brand-primary min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
          
          {/* Contact Details */}
          <div>
            <FadeInView>
              <SectionHeading
                label="Get in Touch"
                title="Bespoke Consultations"
                subtitle="Whether you're looking for a single statement piece or a complete interior design solution, our experts are here to assist you."
                className="mb-16"
              />
            </FadeInView>
            
            <div className="space-y-12">
              <FadeInView delay={0.2} direction="right">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 rounded-full bg-white border border-brand flex items-center justify-center text-[#8B1E1E] transition-all group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-transparent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2">Visit Our Showroom</h4>
                    <p className="text-body font-light leading-relaxed text-sm">
                      123 Luxury Avenue, Design District,<br />Kerala, India - 682001
                    </p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.3} direction="right">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 rounded-full bg-white border border-brand flex items-center justify-center text-[#8B1E1E] transition-all group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-transparent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2">Direct Line</h4>
                    <p className="text-body font-light leading-relaxed text-sm">+91 9074477358</p>
                    <p className="text-body font-light leading-relaxed text-sm">+91 484 2123 4567</p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.4} direction="right">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 rounded-full bg-white border border-brand flex items-center justify-center text-[#8B1E1E] transition-all group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-transparent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2">Email Inquiries</h4>
                    <p className="text-body font-light leading-relaxed text-sm">info@magnatfurniture.com</p>
                    <p className="text-body font-light leading-relaxed text-sm">sales@magnatfurniture.com</p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.5} direction="right">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 rounded-full bg-white border border-brand flex items-center justify-center text-[#8B1E1E] transition-all group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:border-transparent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2">Store Hours</h4>
                    <p className="text-body font-light leading-relaxed text-sm">Monday — Saturday: 09:00 AM - 08:30 PM</p>
                    <p className="text-body font-light leading-relaxed text-sm">Sunday: 10:30 AM - 07:00 PM</p>
                  </div>
                </div>
              </FadeInView>
            </div>
            
            <FadeInView delay={0.6} className="mt-16">
              <a 
                href="https://wa.me/919074477358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#128C7E] hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
              >
                <MessageCircle size={22} fill="currentColor" />
                Live WhatsApp Chat
              </a>
            </FadeInView>
          </div>

          {/* Contact Form */}
          <FadeInView delay={0.3} direction="left" className="relative">
            <div className="bg-brand-secondary p-12 lg:p-16 border border-brand shadow-sm">
              <AnimatePresence mode="wait">
                {formState !== "success" ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-white border border-brand px-6 py-4 outline-none focus:border-[#8B1E1E] transition-colors text-sm font-light italic" 
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">Email Address *</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full bg-white border border-brand px-6 py-4 outline-none focus:border-[#8B1E1E] transition-colors text-sm font-light italic" 
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full bg-white border border-brand px-6 py-4 outline-none focus:border-[#8B1E1E] transition-colors text-sm font-light italic" 
                          placeholder="+91"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">Collection Interest</label>
                        <select 
                          className="w-full bg-white border border-brand px-6 py-4 outline-none focus:border-[#8B1E1E] transition-colors text-sm font-light italic appearance-none cursor-pointer"
                        >
                          <option value="">Select Category</option>
                          <option value="living-room">Living Room</option>
                          <option value="dining-room">Dining Room</option>
                          <option value="bedroom">Bedroom</option>
                          <option value="office">Office Furniture</option>
                          <option value="custom">Bespoke Project</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">Brief Inquiry *</label>
                      <textarea 
                        rows={6}
                        required 
                        className="w-full bg-white border border-brand px-6 py-4 outline-none focus:border-[#8B1E1E] transition-colors text-sm font-light italic resize-none" 
                        placeholder="Tell us about the piece you're looking for..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === "submitting"}
                      className="group flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#8B1E1E] w-full disabled:opacity-50 disabled:cursor-not-allowed shadow-xl active:scale-[0.98]"
                    >
                      {formState === "submitting" ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="h-24 w-24 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center mb-10 shadow-2xl">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-4">Inquiry Received</h3>
                    <p className="text-body font-light italic leading-loose max-w-sm">
                      Thank you for your interest in Magnat Furniture. A senior design consultant will reach out to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="mt-12 text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#8B1E1E] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
