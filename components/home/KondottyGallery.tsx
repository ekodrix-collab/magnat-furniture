"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Share2, Plus, X } from "lucide-react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";

const galleryItems = [
  { img: "/images/bedroom-001.jpg", title: "Royal Living" },
  { img: "/images/dining-001.jpg", title: "Classic Dining" },
  { img: "/images/insta-post-001.jpg", title: "Studio Vibe" },
  { img: "/images/living-chairs.jpg", title: "Lounge Area" },
  { img: "/images/kids-room.jpg", title: "Kids Space" },
  { img: "/images/outdoor.jpg", title: "Outdoor Decor" },
];

export default function KondottyGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="bg-white dark:bg-[#0a0a0a] py-24 md:py-32 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-container">
        
        {/* Editorial Header */}
        <div className="text-center mb-16 md:mb-20">
           <FadeInView direction="up">
              <span className="text-[10px] md:text-xs font-bold text-gold-classic uppercase tracking-[0.4em] mb-4 block">Follow Us</span>
              <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                 Inspired by Real Homes
              </h2>
              <p className="text-black/50 dark:text-white/40 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                 See how our furniture comes to life in real spaces, curated by our community. Join the Magnat family.
              </p>
           </FadeInView>
        </div>

        {/* Desktop View: Clean 3-Column Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-20">
           {galleryItems.map((item, index) => (
             <FadeInView 
                key={index} 
                delay={index * 0.1} 
                className="group relative aspect-square rounded-[40px] overflow-hidden bg-black/5 dark:bg-white/5"
             >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                 <div className="absolute inset-x-4 inset-y-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 scale-95 group-hover:scale-100 origin-center bg-black/20 dark:bg-white/5 backdrop-blur-md flex flex-col items-center justify-center border border-white/20">
                    <a 
                      href="https://instagram.com/magnat_furniture_.kondotty" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-white/90 dark:bg-black/80 rounded-full text-[#C0001A] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 cursor-pointer"
                    >
                       <Instagram size={20} />
                    </a>
                    <p className="text-white font-semibold tracking-[0.2em] uppercase text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                       {item.title}
                    </p>
                 </div>
             </FadeInView>
           ))}
        </div>

        {/* Mobile View: Interactive Instagram Card Stack */}
        <div className="md:hidden relative h-[450px] flex items-center justify-center mb-16 overflow-visible">
           <AnimatePresence mode="wait">
              {!isExpanded ? (
                /* The Stack */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setIsExpanded(true)}
                  className="relative w-72 h-96 cursor-pointer"
                >
                   {galleryItems.slice(0, 3).map((item, i) => (
                     <motion.div
                       key={i}
                       style={{ zIndex: 3 - i }}
                       animate={{ 
                         rotate: i * 5, 
                         x: i * 15, 
                         y: i * 10,
                         scale: 1 - i * 0.05
                       }}
                       className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl overflow-hidden border border-black/5 dark:border-white/10"
                     >
                        <Image src={item.img} alt="stack" fill className="object-cover" />
                        {i === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                             <div className="bg-white/95 dark:bg-black/95 px-6 py-3 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white shadow-xl">
                                <Plus size={16} /> Tap to Explore
                             </div>
                          </div>
                        )}
                     </motion.div>
                   ))}
                </motion.div>
              ) : (
                /* Horizontal Scroll */
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="w-full"
                >
                   {/* Scroll Container with Peeking Effect */}
                   <div className="flex overflow-x-auto gap-5 px-6 pb-10 no-scrollbar snap-x snap-mandatory">
                      {galleryItems.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-[85vw] snap-center">
                           <div className="bg-white dark:bg-neutral-900 rounded-[32px] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl">
                              {/* IG Style Header */}
                              <div className="p-5 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold-classic/10 flex items-center justify-center text-gold-classic font-bold text-xs ring-1 ring-gold-classic/20">M</div>
                                    <div className="flex flex-col">
                                       <span className="text-[12px] font-bold text-black dark:text-white uppercase tracking-widest">magnat_furniture</span>
                                       <span className="text-[9px] text-black/40 dark:text-white/40 uppercase tracking-widest">Kondotty, KL</span>
                                    </div>
                                 </div>
                                 <a 
                                   href="https://instagram.com/magnat_furniture_.kondotty" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-black/20 dark:text-white/20 hover:text-[#C0001A] transition-colors cursor-pointer"
                                 >
                                    <Instagram size={18} />
                                 </a>
                              </div>
                              <div className="relative aspect-square mx-2 mb-2 rounded-[24px] overflow-hidden">
                                 <Image src={item.img} alt={item.title} fill className="object-cover" />
                              </div>
                              <div className="p-5 flex items-center justify-between">
                                 <div className="flex items-center gap-5 text-black/60 dark:text-white/60">
                                    <Share2 size={20} className="hover:text-gold-classic transition-colors" />
                                    <Plus size={20} className="hover:text-gold-classic transition-colors" />
                                 </div>
                                 <div className="text-right">
                                    <span className="text-[10px] font-bold text-gold-classic uppercase tracking-[0.2em] block mb-1">Featured Space</span>
                                    <span className="text-[11px] font-medium text-black dark:text-white tracking-wider">{item.title}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Tendency to Scroll: Progress Indicator */}
                   <div className="flex justify-center gap-2 mb-8">
                      {galleryItems.map((_, i) => (
                        <div 
                          key={i} 
                          className="h-1 rounded-full bg-black/10 dark:bg-white/10 w-8 overflow-hidden"
                        >
                           <motion.div 
                             className="h-full bg-gold-classic"
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             viewport={{ once: false }}
                             transition={{ duration: 0.5, delay: i * 0.1 }}
                           />
                        </div>
                      ))}
                   </div>

                   <button 
                     onClick={() => setIsExpanded(false)}
                     className="mx-auto flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/60 dark:text-white/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                   >
                     <X size={14} /> Close Perspective
                   </button>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        {/* Global CTA Button */}
        <FadeInView delay={0.4} direction="up" align="center">
           <a 
             href="https://instagram.com/magnat_furniture_.kondotty" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-4 px-10 py-5 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 shadow-sm"
           >
              <Share2 size={18} />
              Follow on Instagram
           </a>
        </FadeInView>

      </div>
    </section>
  );
}
