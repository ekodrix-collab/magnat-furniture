"use client";

import { Instagram, Phone, Facebook, Youtube, MessageSquare, Mail } from "lucide-react";
import Link from "next/link";

const footNav = [
  {
    links: [
      { label: "Home", href: "/" },
      { label: "Packages & offers", href: "/offers" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
  {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Clients", href: "/clients" },
      { label: "Store Locator", href: "/showrooms" },
    ]
  },
  {
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Brands", href: "/brands" },
    ]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#111111] text-[#F7F4F0] border-t border-white/5 overflow-hidden">
      <div className="max-container pt-20 pb-16">
        
        {/* ── Main Footer Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-20">
          
          {/* Column 1-8: Quick Links Section */}
          <div className="lg:col-span-8">
             <h4 className="text-[#C0001A] text-[13px] md:text-[15px] font-bold tracking-[0.1em] mb-10 md:mb-12" >Quick Links</h4>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-x-12">
                {footNav.map((column, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                     {column.links.map((link) => (
                       <Link 
                         key={link.label} 
                         href={link.href}
                         className="text-[13px] md:text-[14px] text-white/50 hover:text-white transition-colors duration-300"
                       >
                          {link.label}
                       </Link>
                     ))}
                  </div>
                ))}
             </div>
          </div>

          {/* Column 9-12: Social Media Section */}
          <div className="lg:col-span-4">
             <h4 className="text-[#C0001A] text-[13px] md:text-[15px] font-bold tracking-[0.1em] mb-8 md:mb-10" >Social media</h4>
             <div className="flex items-center gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C0001A] transition-all duration-300 hover:scale-110">
                   <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="https://instagram.com/magnat_furniture_.kondotty" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C0001A] transition-all duration-300 hover:scale-110">
                   <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="https://youtube.com/@magnat_furniture" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C0001A] transition-all duration-300 hover:scale-110">
                   <Youtube size={22} strokeWidth={1.5} />
                </a>
                <a href="https://wa.me/919446516395" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C0001A] transition-all duration-300 hover:scale-110">
                   <MessageSquare size={20} strokeWidth={1.5} />
                </a>
             </div>
          </div>

        </div>

        {/* ── Bottom Attribution Bar ── */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-[11px] text-white/20 font-medium tracking-wider uppercase">
                © {currentYear} Magnat Furniture, Kondotty. All Rights Reserved.
              </p>
              <div className="hidden md:block h-3 w-[1px] bg-white/10" />
              <p className="text-[11px] text-white/30 font-medium tracking-wider uppercase">
                Powered by <a href="https://www.ekodrix.com/" target="_blank" rel="noopener noreferrer" className="text-[#C0001A] hover:underline transition-all">ekodrix</a>
              </p>
           </div>
           
           <div className="flex gap-8">
              <Link href="/privacy" className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] hover:text-[#C0001A] transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] hover:text-[#C0001A] transition-colors">Terms</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}
