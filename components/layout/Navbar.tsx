"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Search, User, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainNav = [
  { label: "Collections", href: "/collections" },
  { label: "Sofas", href: "/products?category=sofas" },
  { label: "Chairs", href: "/products?category=chairs" },
  { label: "Dining", href: "/products?category=dining" },
  { label: "Curtains", href: "/products?category=curtains" },
  { label: "Showrooms", href: "/showrooms" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[100] w-full">
      {/* ── Top Accessory Bar (Architectural Precision) ── */}
      <div className={`w-full bg-[#111] text-white/60 transition-all duration-700 ease-in-out border-b border-white/5 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-12 opacity-100"}`}>
        <div className="max-container h-full flex items-center justify-between">
           <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Kondotty Flagship</span>
              <div className="h-3 w-px bg-white/10" />
              <Link href="/appointment" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">Book Consult</Link>
           </div>
           
           <div className="flex items-center gap-8">
              <Link href="/subscribe" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">Subscribe</Link>
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                 <Search size={14} strokeWidth={1.5} />
              </button>
              <Link href="/account" className="flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">
                 <User size={14} strokeWidth={1.5} />
                 My List
              </Link>
              <a href="https://instagram.com" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                 <Instagram size={14} strokeWidth={1.5} />
              </a>
           </div>

        </div>
      </div>

      {/* ── Main Signature Bar ── */}
      <div className={`w-full transition-all duration-700 ease-in-out ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-20" : "bg-white h-24"}`}>
        <div className="max-container h-full flex items-center justify-between">
          
          {/* Left: Brand Identity (Standardized Red Badge) */}
          <Link href="/" className="flex items-center gap-4 lg:gap-8 group shrink-0">
             <div className="relative">
                <div className="bg-[#C0001A] px-5 lg:px-7 py-2.5 lg:py-3 transition-all duration-700 group-hover:bg-[#111]">
                   <span className="text-white font-black tracking-[0.18em] text-[15px] lg:text-[18px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      MAGNAT
                   </span>
                </div>
                <span className="absolute -top-1 -right-2 text-[8px] font-bold text-[#C0001A]">™</span>
             </div>

             {/* 25 Year Milestone - Hidden on small laptops to save space */}
             <div className="hidden 2xl:flex flex-col border-l border-black/10 pl-6 space-y-0.5">
                <div className="flex items-center gap-2">
                   <span className="text-[15px] font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>25+</span>
                   <span className="text-[10px] font-bold text-[#111]">Years</span>
                </div>
                <span className="text-[7px] font-bold tracking-[0.35em] uppercase text-black/25">Manufacturing Heritage</span>
             </div>
          </Link>

          {/* Center: Curated Navigation (Responsive gaps) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-10 mx-4">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-[9px] 2xl:text-[10px] font-bold tracking-[0.25em] uppercase text-[#111]/80 hover:text-[#C0001A] transition-all py-2 whitespace-nowrap"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C0001A] transition-all duration-500 ease-luxury group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Interaction Trigger */}
          <div className="flex items-center gap-3 lg:gap-6 shrink-0">
             <Link href="/contact" className="hidden lg:flex btn-primary !py-3 !px-6 xl:!px-8 !text-[8px] xl:!text-[9px]">
                Enquire Project
             </Link>
             <button className="xl:hidden p-2 text-[#111] hover:bg-black/5 rounded-full transition-colors" onClick={() => setMobileOpen(true)}>
               <Menu strokeWidth={1.5} className="w-6 h-6 lg:w-7 lg:h-7" />
             </button>

          </div>
        </div>
      </div>


      {/* Mobile Experience (Drawer) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 250 }}
              className="absolute right-0 top-0 h-full w-full max-w-[85%] bg-white shadow-2xl flex flex-col"
            >
              <div className="h-20 lg:h-24 px-8 lg:px-10 flex items-center justify-between border-b border-black/5">
                  <span className="font-black tracking-[0.2em] text-lg text-[#C0001A]">MAGNAT</span>
                  <button onClick={() => setMobileOpen(false)} className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors">
                    <X size={20} />
                  </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-8 lg:px-10 py-10 lg:py-12 flex flex-col justify-between">
                 <div className="flex flex-col gap-6 lg:gap-8">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/25">Menu Navigator</span>
                    {mainNav.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                         <Link 
                           href={item.href} 
                           onClick={() => setMobileOpen(false)}
                           className="text-3xl lg:text-4xl font-bold tracking-tight text-[#111] hover:text-[#C0001A] transition-colors flex items-center justify-between group" 
                           style={{ fontFamily: "var(--font-playfair)" }}
                         >
                            {item.label}
                            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[#C0001A]" />
                         </Link>
                      </motion.div>
                    ))}
                 </div>

                 <div className="pt-10 space-y-8">
                    <div className="h-px w-full bg-black/5" />
                    <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center">
                       Enquire Project
                    </Link>
                 </div>
              </div>

              <div className="p-8 lg:p-10 bg-[#111] text-white space-y-8">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">Connect</span>
                       <p className="text-lg font-semibold tracking-tight">+91 9446516395</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">Social</span>
                       <div className="flex gap-4">
                          <Instagram size={18} className="text-white/60 hover:text-white transition-colors" />
                          <Heart size={18} className="text-white/60 hover:text-white transition-colors" />
                       </div>
                    </div>
                 </div>
                 <p className="text-[10px] text-white/20 font-bold tracking-[0.2em] uppercase">Kondotty · Kerala · since 2001</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
