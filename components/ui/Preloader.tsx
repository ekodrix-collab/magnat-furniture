// components/ui/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  // Check if already loaded this session (enabled for production feel)
  useEffect(() => {
    if (sessionStorage.getItem("magnat-preloaded") === "true") {
      setIsLoading(false);
    }
  }, []);

  // Main Loading Timer
  useEffect(() => {
    if (!isLoading) return;
    
    // Total display time before initiating exit
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Save it so it never runs again this session
      sessionStorage.setItem("magnat-preloaded", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F4F0] overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 1.2, ease: luxuryEase } 
          }}
        >
          {/* Subtle noise/pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply flex items-center justify-center">
             <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111111'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
             />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            
            {/* ── LOGO REVEAL ── */}
            <div className="overflow-hidden mb-16 relative">
              <motion.div
                className="bg-[#C0001A] px-12 py-6 md:px-16 md:py-8 shadow-2xl relative"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: luxuryEase }}
              >
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-black tracking-[0.25em] text-4xl md:text-6xl"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    MAGNAT
                  </motion.span>
                </div>
              </motion.div>
              
              {/* TM Badge */}
              <motion.span
                className="absolute -top-3 -right-5 text-[#C0001A] text-xl font-bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
              >
                ™
              </motion.span>
              
              {/* Est Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#111111] px-6 py-2 shadow-xl whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: luxuryEase }}
              >
                 <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                    Est. 2001
                 </span>
              </motion.div>
            </div>

            {/* ── PROGRESS BAR (Ultra Smooth Tween) ── */}
            <div className="w-full flex flex-col items-center">
              <div className="overflow-hidden mb-6">
                 <motion.p
                   className="text-[#111111] text-[10px] font-bold tracking-[0.4em] uppercase text-center"
                   initial={{ y: "100%", opacity: 0 }}
                   animate={{ y: 0, opacity: 0.5 }}
                   transition={{ duration: 0.8, delay: 1.4, ease: luxuryEase }}
                 >
                   Crafting Excellence
                 </motion.p>
              </div>

              {/* Bar Container */}
              <motion.div
                className="w-full h-[1px] bg-[#111111]/10 relative overflow-hidden"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: luxuryEase }}
              >
                {/* Fill Line */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#C0001A] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }} // Syncs with total unmount time
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}