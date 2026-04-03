import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Craftsmanship", href: "/about" },
    { label: "Heritage", href: "/about" },
    { label: "Sustainability", href: "/about" },
  ],
  collections: [
    { label: "Living Room", href: "/collections/living-room" },
    { label: "Dining Room", href: "/collections/dining-room" },
    { label: "Bedroom", href: "/collections/bedroom" },
    { label: "Office Furniture", href: "/collections/office" },
  ],
  support: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
    { label: "Store Locator", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE7DF] pt-32 pb-12 border-t border-[#E5DED6]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="mb-8 block">
              <span className="font-playfair text-3xl font-bold tracking-tighter text-[#1A1A1A]">
                MAGNAT<span className="text-[#8B1E1E]">.</span>
              </span>
            </Link>
            <p className="mb-10 text-[#5A5A5A] text-sm leading-8 font-light">
              Crafting timeless elegance for over 25 years. Our commitment to premium materials and superior design ensures that every piece of furniture we create tells a story of luxury and comfort.
            </p>
            <div className="flex items-center gap-5">
              <a 
                href="#" 
                className="group flex h-11 w-11 items-center justify-center border border-[#E5DED6] rounded-full transition-all hover:bg-[#1A1A1A] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="group flex h-11 w-11 items-center justify-center border border-[#E5DED6] rounded-full transition-all hover:bg-[#1A1A1A] hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="group flex h-11 w-11 items-center justify-center border border-[#E5DED6] rounded-full transition-all hover:bg-[#1A1A1A] hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#C6A969]">Magnat</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center group text-sm text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
                      {link.label}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#C6A969]">Collections</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.collections.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center group text-sm text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
                      {link.label}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#C6A969]">Support</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center group text-sm text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
                      {link.label}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#C6A969]">Visit Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#8B1E1E] shrink-0" />
                <p className="text-sm text-[#1A1A1A] leading-relaxed">
                  123 Luxury Avenue, Design District,<br />Kerala, India - 682001
                </p>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="text-[#8B1E1E] shrink-0" />
                <a href="tel:+919074477358" className="text-sm text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
                  +91 9074477358
                </a>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-[#8B1E1E] shrink-0" />
                <a href="mailto:info@magnatfurniture.com" className="text-sm text-[#1A1A1A] hover:text-[#8B1E1E] transition-colors">
                  info@magnatfurniture.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-[#E5DED6] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[0.7rem] text-[#5A5A5A] uppercase tracking-widest leading-loose">
            &copy; {currentYear} Magnat Furniture. Handcrafted with Precision.
          </p>
          <div className="flex items-center gap-10">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#C6A969]">Premium Quality Since 1999</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
