"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/lib/context/FavoritesContext";

const EXPLORE_DATA = {
  categories: [
    { name: "Sofas", href: "/products?category=sofas", image: "/images/sofa3d.png" },
    { name: "Chairs", href: "/products?category=chairs", image: "/images/chair.png" },
    { name: "Dining", href: "/products?category=dining", image: "/images/dining-001.jpg" },
    { name: "Curtains", href: "/products?category=curtains", image: "/images/curtains_nav.png" },
  ],
  rooms: [
    { name: "Living Room", href: "/rooms/living-room" },
    { name: "Dining Room", href: "/rooms/dining-room" },
    { name: "Bedroom", href: "/rooms/bedroom" },
    { name: "Office", href: "/rooms/office" },
  ]
};

function NavbarContent() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { favoritesCount, setDrawerOpen } = useFavorites();

  return (
    <div className="max-container h-20 flex items-center justify-between">
      {/* Brand Identity */}
      <Link href="/" className="flex items-center group">
        <div className="bg-[#C0001A] px-6 py-2 transition-colors group-hover:bg-[#111]">
          <span className="text-white font-black tracking-[0.25em] text-[15px]">MAGNAT</span>
        </div>
      </Link>

      {/* Primary Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        
        {/* Independent Key: Collections */}
        <Link 
          href="/collections" 
          className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/80 hover:text-[#C0001A] transition-colors"
        >
          Collections
        </Link>
        
        {/* Dropdown: Explore */}
        <div 
          className="relative h-full flex items-center"
          onMouseEnter={() => setActiveMenu('explore')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${activeMenu === 'explore' ? "text-[#C0001A]" : "text-black/80 hover:text-[#C0001A]"}`}>
            Explore <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'explore' ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeMenu === 'explore' && (
              <motion.div initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 10 }} className="absolute top-full left-[-150px] w-[580px] pt-5">
                <div className="bg-white p-8 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-black/5 grid grid-cols-12 gap-10">
                  {/* Furniture Types (7 cols) */}
                  <div className="col-span-7">
                    <span className="text-[9px] font-black tracking-[0.2em] uppercase text-black/30 block mb-6 px-1">Furniture Categories</span>
                    <div className="grid grid-cols-2 gap-4">
                      {EXPLORE_DATA.categories.map((item) => (
                        <Link key={item.name} href={item.href} className="group block space-y-2 p-1" onClick={() => setActiveMenu(null)}>
                          <div className="aspect-[4/3] bg-[#f9f9f9] rounded-lg overflow-hidden border border-black/[0.03]">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <span className="text-[12px] font-bold text-black group-hover:text-[#C0001A] transition-colors">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Roomscapes (5 cols) */}
                  <div className="col-span-5 border-l border-black/5 pl-10">
                    <span className="text-[9px] font-black tracking-[0.2em] uppercase text-black/30 block mb-6 text-nowrap">Shop by Room</span>
                    <div className="flex flex-col gap-4">
                      {EXPLORE_DATA.rooms.map((item) => (
                        <Link key={item.name} href={item.href} className="text-[14px] font-bold text-black hover:text-[#C0001A] transition-colors whitespace-nowrap" onClick={() => setActiveMenu(null)}>
                          {item.name}
                        </Link>
                      ))}
                      <div className="mt-8 pt-8 border-t border-black/5">
                        <Link href="/products" className="text-[10px] font-black tracking-[0.2em] uppercase text-[#C0001A] hover:underline" onClick={() => setActiveMenu(null)}>
                          View All Pieces
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/showrooms" className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/80 hover:text-[#C0001A] transition-colors">Showrooms</Link>
        <Link href="/about" className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/80 hover:text-[#C0001A] transition-colors">About Us</Link>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        <button onClick={() => setDrawerOpen(true)} className="relative text-black/80 hover:text-[#C0001A] transition-colors" aria-label="Favorites">
          <Heart size={20} strokeWidth={1.5} />
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C0001A] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{favoritesCount}</span>
          )}
        </button>
        <Link href="/contact" className="hidden lg:block bg-[#111] text-white px-8 py-3 rounded-md text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#C0001A] transition-colors shadow-sm">Enquire</Link>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 w-full bg-white z-[90] p-10 md:hidden border-b border-black/5 shadow-2xl">
            <nav className="flex flex-col gap-6">
              <Link href="/collections" className="text-3xl font-bold font-playfair" onClick={() => setMobileOpen(false)}>Collections</Link>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black/30 mt-4">Explore catalog</span>
              <div className="grid grid-cols-2 gap-4">
                 <Link href="/products?category=sofas" className="text-xl font-bold font-playfair" onClick={() => setMobileOpen(false)}>Sofas</Link>
                 <Link href="/rooms/living-room" className="text-xl font-bold font-playfair" onClick={() => setMobileOpen(false)}>Living</Link>
              </div>
              <Link href="/showrooms" className="text-3xl font-bold font-playfair" onClick={() => setMobileOpen(false)}>Showrooms</Link>
              <Link href="/about" className="text-3xl font-bold font-playfair" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contact" className="text-3xl font-bold font-playfair text-[#C0001A]" onClick={() => setMobileOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[100] w-full bg-white border-b border-black/5">
      <Suspense fallback={<div className="h-20 bg-white" />}>
        <NavbarContent />
      </Suspense>
    </header>
  );
}
