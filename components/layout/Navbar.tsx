"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled ? "navbar-scrolled py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-[110] flex items-center gap-2">
            <span className="font-playfair text-2xl font-bold tracking-tighter text-[#1A1A1A]">
              MAGNAT<span className="text-[#8B1E1E]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors ${
                  pathname === item.href ? "text-[#8B1E1E]" : "text-[#1A1A1A] hover:text-[#8B1E1E]"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] w-0 bg-[#8B1E1E] transition-all duration-300 group-hover:w-full ${pathname === item.href ? "w-full" : ""}`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
              <Search size={20} />
            </button>
            <Button href="/contact" variant="primary" showArrow className="px-6 py-2.5 text-[0.65rem]">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-[110] text-[#1A1A1A] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] flex flex-col bg-[#F7F3EF] px-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`font-playfair text-4xl font-semibold ${
                      pathname === item.href ? "text-[#8B1E1E]" : "text-[#1A1A1A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-12"
            >
              <div className="mb-8 h-[1px] w-full bg-[#E5DED6]" />
              <div className="flex flex-col gap-4">
                <a href="tel:+919074477358" className="flex items-center gap-3 text-lg font-medium text-[#1A1A1A]">
                  <Phone size={20} className="text-[#C6A969]" />
                  +91 9074477358
                </a>
                <Button href="/contact" variant="primary" className="w-full py-4 text-sm mt-4">
                  Visit Store
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
