"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Instagram, Search, User, Heart, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * Navbar Configuration Constants
 */
const NAV_CONFIG = {
  brand: "MAGNAT",
  phone: "+91 94465 16395",
  phoneRaw: "+919446516395",
  whatsapp: "https://wa.me/919446516395",
  colors: {
    brand: "#C0001A",
  },
  socials: {
    instagram: "https://instagram.com",
  }
};

const mainNav = [
  { label: "Collections", href: "/collections" },
  { label: "Sofas", href: "/products?category=sofas", category: "sofas" },
  { label: "Chairs", href: "/products?category=chairs", category: "chairs" },
  { label: "Dining", href: "/products?category=dining", category: "dining" },
  { label: "Curtains", href: "/products?category=curtains", category: "curtains" },
  { label: "Showrooms", href: "/showrooms" },
  { label: "About Us", href: "/about" },
];

/**
 * Helper to determine if a nav link is active
 */
const checkIsActive = (item: typeof mainNav[0], pathname: string, currentCategory: string | null) => {
  if (item.category) {
    return currentCategory === item.category;
  }
  return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
};

/**
 * NavbarInner: Contains the logic that depends on searchParams.
 * Must be wrapped in Suspense.
 */
function NavbarContent({ scrolled, mobileOpen, setMobileOpen, isVisible }: { 
  scrolled: boolean, 
  mobileOpen: boolean, 
  setMobileOpen: (open: boolean) => void,
  isVisible: boolean
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className={`w-full transition-all duration-700 ease-in-out ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-20" : "bg-white h-24"}`}>
        <div className="max-container h-full flex items-center justify-between">
          
          {/* Left: Brand Identity */}
          <Link href="/" className="flex items-center gap-8 group" aria-label={`${NAV_CONFIG.brand} Home`}>
             <div className="relative">
                <div className="bg-[#C0001A] px-7 py-3 transition-all duration-700 group-hover:bg-[#111]">
                   <span className="text-white font-black tracking-[0.18em] text-[18px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {NAV_CONFIG.brand}
                   </span>
                </div>
                <span className="absolute -top-1 -right-2 text-[8px] font-bold text-[#C0001A]">™</span>
             </div>

             {/* 25 Year Milestone */}
             <div className="hidden lg:flex flex-col border-l border-black/10 pl-6 space-y-0.5" aria-hidden="true">
                <div className="flex items-center gap-2">
                   <span className="text-[15px] font-black text-[#111]" style={{ fontFamily: "var(--font-playfair)" }}>25+</span>
                   <span className="text-[10px] font-bold text-[#111]">Years</span>
                </div>
                <span className="text-[7px] font-bold tracking-[0.35em] uppercase text-black/25">Manufacturing Heritage</span>
             </div>
          </Link>

          {/* Center: Curated Navigation */}
          <nav className="hidden xl:flex items-center gap-8" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const isActive = checkIsActive(item, pathname, currentCategory);
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative group text-[10px] font-bold tracking-[0.25em] uppercase transition-all py-2 ${
                    isActive ? "text-[#C0001A]" : "text-[#111]/80 hover:text-[#C0001A]"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#C0001A] transition-all duration-500 ease-luxury ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right: Interaction Trigger */}
          <div className="flex items-center gap-4 lg:gap-6">
             <div className="hidden lg:block">
                <Link href="/contact" className="btn-primary !py-3 !px-8 !text-[9px]">
                   Enquire Project
                </Link>
             </div>
             <a 
               href={`tel:${NAV_CONFIG.phoneRaw}`} 
               className="md:hidden w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#C0001A]"
               aria-label={`Call ${NAV_CONFIG.brand}`}
             >
                <Phone size={18} />
             </a>
             <button 
               className="xl:hidden p-2 text-[#111] hover:bg-black/5 rounded-full transition-colors" 
               onClick={() => setMobileOpen(true)}
               aria-label="Open Mobile Menu"
             >
               <Menu size={24} strokeWidth={1.5} />
             </button>
          </div>
        </div>
      </div>

      {/* ── Sophisticated Mobile Experience (Immersive Overlay) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col pt-24"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Background Layers */}
            <div className="absolute inset-0 bg-[#F7F4F0] dark:bg-[#0A0A0A] transition-colors duration-500" />
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none overflow-hidden">
               <motion.img 
                 initial={{ scale: 1.1, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 src="/images/luxury-nav-bg.png" 
                 className="w-full h-full object-cover blur-sm"
                 alt=""
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4F0]/80 via-transparent to-[#F7F4F0]/95 dark:from-[#0A0A0A]/80 dark:to-[#0A0A0A]/95" />

            {/* Header Section */}
            <div className="relative z-[210] max-container flex items-center justify-between px-10 mb-8 mt-[-60px]">
               <motion.div
                 initial={{ x: -20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
               >
                  <span className="font-black tracking-[0.3em] text-[10px] uppercase text-[#C0001A]">Navigation</span>
               </motion.div>
               <motion.button 
                 whileHover={{ rotate: 90 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={() => setMobileOpen(false)} 
                 className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10"
                 aria-label="Close Mobile Menu"
               >
                  <X size={20} className="text-[#111] dark:text-white" />
               </motion.button>
            </div>

            {/* Menu Links */}
            <div className="relative z-[210] flex-1 overflow-y-auto px-10 pb-12 flex flex-col justify-center">
               <nav className="flex flex-col space-y-2">
                  {mainNav.map((item, i) => {
                     const isActive = checkIsActive(item, pathname, currentCategory);
                     
                     return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                         <Link 
                           href={item.href} 
                           onClick={() => setMobileOpen(false)}
                           className={`group block relative py-3 px-6 rounded-2xl transition-all duration-500 ${
                             isActive ? "bg-[#C0001A] shadow-xl shadow-red-500/10" : "hover:bg-black/5 dark:hover:bg-white/5"
                           }`}
                           aria-current={isActive ? "page" : undefined}
                         >
                            <span className={`text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-tight leading-[1.1] transition-colors inline-block ${
                              isActive ? "text-white" : "text-[#111] dark:text-white"
                            }`}
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                               {item.label}
                            </span>
                         </Link>
                      </motion.div>
                     );
                  })}
               </nav>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="mt-16 pt-8 border-t border-black/5 dark:border-white/5"
               >
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-[#111]/40 dark:text-white/40">Connect</span>
                        <div className="flex gap-5">
                           <Link 
                             href={NAV_CONFIG.socials.instagram} 
                             className="text-[#111] dark:text-white hover:text-[#C0001A] transition-colors"
                             target="_blank"
                             rel="noopener noreferrer"
                             aria-label="Instagram"
                           >
                              <Instagram size={20} strokeWidth={1.5} />
                           </Link>
                           <Link 
                             href="/wishlist" 
                             className="text-[#111] dark:text-white hover:text-[#C0001A] transition-colors"
                             aria-label="My Wishlist"
                           >
                              <Heart size={20} strokeWidth={1.5} />
                           </Link>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-[#111]/40 dark:text-white/40">Enquiries</span>
                        <a 
                          href={`tel:${NAV_CONFIG.phoneRaw}`} 
                          className="text-[14px] font-bold text-[#111] dark:text-white hover:underline transition-all"
                        >
                          {NAV_CONFIG.phone}
                        </a>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Million Dollar Action: WhatsApp Integration */}
            <motion.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="relative z-[210] p-10 bg-[#111] dark:bg-[#C0001A] text-white"
            >
               <div className="max-container flex items-center justify-between">
                  <div className="space-y-1">
                     <span className="text-[7px] font-bold tracking-[0.4em] uppercase opacity-60">Design Consultation</span>
                     <p className="text-sm font-medium">Chat with our experts via WhatsApp</p>
                  </div>
                  <a 
                    href={NAV_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#111] px-6 py-3 rounded-md text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-[#C0001A] hover:text-white dark:hover:bg-white dark:hover:text-[#C0001A] transition-all flex items-center gap-3 shadow-xl"
                    aria-label="Book via WhatsApp"
                  >
                     Book Now
                  </a>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const { scrollY } = useScroll();
  
  /**
   * Scroll Lock implementation for Mobile Menu
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state for visual changes (hiding top bar)
    setScrolled(latest > 20);

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else if (latest < previous) {
      setIsVisible(true);
    }

    // Always show at the very top
    if (latest < 50) {
      setIsVisible(true);
    }
  });

  return (
    <header className="fixed top-0 z-[100] w-full">
      {/* ── Top Accessory Bar (Only shown at top) ── */}
      <div className={`w-full bg-[#111] text-white/60 transition-all duration-700 ease-in-out border-b border-white/5 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-12 opacity-100"}`}>
        <div className="max-container h-full flex items-center justify-between">
           <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Kondotty Flagship</span>
              <div className="h-3 w-px bg-white/10" />
              <Link href="/appointment" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">Book Consult</Link>
           </div>
           
           <div className="flex items-center gap-8">
              <Link href="/subscribe" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors">Subscribe</Link>
              <button 
                className="hover:text-white transition-colors"
                aria-label="Search"
              >
                 <Search size={14} strokeWidth={1.5} />
              </button>
              <Link 
                href="/account" 
                className="flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-white transition-colors"
                aria-label="My Account"
              >
                 <User size={14} strokeWidth={1.5} />
                 My List
              </Link>
              <Link 
                href={NAV_CONFIG.socials.instagram} 
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                 <Instagram size={14} strokeWidth={1.5} />
              </Link>
           </div>
        </div>
      </div>

      {/* ── Navbar Content wrapped in Suspense ── */}
      <Suspense fallback={<div className="bg-white h-24 w-full" />}>
        <NavbarContent 
          scrolled={scrolled} 
          mobileOpen={mobileOpen} 
          setMobileOpen={setMobileOpen} 
          isVisible={isVisible}
        />
      </Suspense>
    </header>
  );
}

