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
              <button className="hover:text-white transition-colors">
                 <Search size={14} strokeWidth={1.5} />
              </button>
              <Link href="/account" className="flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">
                 <User size={14} strokeWidth={1.5} />
                 My List
              </Link>
              <a href="https://instagram.com" className="hover:text-white transition-colors">
                 <Instagram size={14} strokeWidth={1.5} />
              </a>
           </div>
        </div>
      </div>

      {/* ── Main Signature Bar ── */}
      <div className={`w-full transition-all duration-700 ease-in-out ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-20" : "bg-white h-24"}`}>
        <div className="max-container h-full flex items-center justify-between">
          
          {/* Left: Brand Identity (Standardized Red Badge) */}
          <Link href="/" className="flex items-center gap-8 group">
             <div className="relative">
                <div className="bg-[#C0001A] px-7 py-3 transition-all duration-700 group-hover:bg-[#111]">
                   <span className="text-white font-black tracking-[0.18em] text-[18px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      MAGNAT
                   </span>
                </div>
                <span className="absolute -top-1 -right-2 text-[8px] font-bold text-[#C0001A]">™</span>
             </div>

             {/* 25 Year Milestone */}
             <div className="hidden lg:flex flex-col border-l border-black/10 pl-6 space-y-0.5">
                <div className="flex items-center gap-2">
                   <span className="text-[15px] font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>25+</span>
                   <span className="text-[10px] font-bold text-[#111]">Years</span>
                </div>
                <span className="text-[7px] font-bold tracking-[0.35em] uppercase text-black/25">Manufacturing Heritage</span>
             </div>
          </Link>

          {/* Center: Curated Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-[10px] font-bold tracking-[0.25em] uppercase text-[#111]/80 hover:text-[#C0001A] transition-all py-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C0001A] transition-all duration-500 ease-luxury group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Interaction Trigger */}
          <div className="flex items-center gap-6">
             <Link href="/contact" className="hidden md:flex btn-primary !py-3.2 !px-8 !text-[9px]">
                Enquire Project
             </Link>
             <button className="xl:hidden p-2 text-[#111]" onClick={() => setMobileOpen(true)}>
               <Menu size={28} strokeWidth={1.5} />
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
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="h-24 px-10 flex items-center justify-between border-b border-black/5">
                  <span className="font-black tracking-[0.2em] text-lg text-[#C0001A]">MAGNAT</span>
                  <button onClick={() => setMobileOpen(false)} className="p-2 bg-black/5 rounded-full"><X size={24} /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-10 py-12 flex flex-col gap-8">
                 {mainNav.map((item, i) => (
                   <motion.div
                     key={item.label}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.05 }}
                   >
                      <Link 
                        href={item.href} 
                        onClick={() => setMobileOpen(false)}
                        className="text-4xl font-bold tracking-tight text-[#111] hover:text-[#C0001A] transition-colors" 
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                         {item.label}
                      </Link>
                   </motion.div>
                 ))}
              </div>
              <div className="p-10 bg-[#111] text-white space-y-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">Connect</span>
                    <p className="text-xl font-semibold">+91 9446516395</p>
                 </div>
                 <div className="flex gap-6">
                    <Instagram size={20} className="text-white/60 hover:text-white transition-colors" />
                    <Heart size={20} className="text-white/60 hover:text-white transition-colors" />
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
