"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[850px] w-full overflow-hidden bg-[#111]">
      {/* ── Cinematic Background (Full Spectrum Color) ── */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop" 
            alt="MAGNAT Premium Living" 
            className="w-full h-full object-cover object-center"
          />
          {/* Professional Cinematic Grade Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        </motion.div>
      </div>

      {/* ── Editorial Content ── */}
      <div className="max-container relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-5xl space-y-12 lg:space-y-20 xl:space-y-24">
           
           <div className="space-y-6 lg:space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center gap-4 lg:gap-6"
              >
                 <div className="h-px w-8 lg:w-12 bg-[#C0001A]" />
                 <span className="text-white font-bold text-[9px] lg:text-[11px] tracking-[0.4em] lg:tracking-[0.5em] uppercase">The Art of Living Since 2001</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-white leading-[0.9] lg:leading-[0.95] font-semibold tracking-[-0.04em]"
                style={{ 
                  fontFamily: "var(--font-playfair)", 
                  fontSize: "clamp(3.5rem, 12vw, 10.5rem)" // Refined for better mobile scaling
                }}
              >
                Go big on <br />
                <span className="italic font-normal opacity-90 text-[#f6f6f6]">Living.</span>
              </motion.h1>
           </div>

           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20"
           >
              <p className="text-white/70 text-base lg:text-xl xl:text-2xl font-light leading-relaxed max-w-xl border-l border-[#C0001A]/40 pl-6 lg:pl-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
                 A quarter-century legacy of handcrafted excellence. We curate the world&apos;s 
                 finest designs for the most sophisticated Kerala interiors.
              </p>
              
               <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
                  <Link href="/collections" className="btn-primary !bg-white !text-black hover:!bg-[#C0001A] hover:!text-white border-none py-5 px-14 text-[10px] shadow-2xl transition-all duration-500 rounded-full">
                     Experience Our World
                  </Link>
                  <button className="flex items-center gap-5 group cursor-pointer">
                     <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C0001A] group-hover:border-[#C0001A] transition-all duration-500 shadow-lg">
                        <Play fill="white" className="w-4 h-4 xl:w-5 xl:h-5 text-white translate-x-0.5" />
                     </div>
                     <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors">Play Showreel</span>
                  </button>
               </div>

           </motion.div>
        </div>
      </div>


      {/* ── Side Accreditation ── */}
      <div className="absolute right-12 bottom-12 z-20 hidden lg:flex flex-col items-end gap-3 text-white/20">
         <span className="text-[10px] font-bold tracking-[0.6em] uppercase whitespace-nowrap -rotate-90 origin-right transition-colors hover:text-[#C0001A] cursor-default">
            EST. 2001 · KONDOTTY · KERALA
         </span>
         <div className="h-24 w-px bg-white/10" />
      </div>

      {/* Scroll Milestone */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
         <div className="relative w-6 h-10 border-2 border-white/10 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [4, 20, 4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-[#C0001A] rounded-full mt-2"
            />
         </div>
      </motion.div>
    </section>
  );
}
