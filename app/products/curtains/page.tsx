// app/products/curtains/page.tsx
import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Curtains & Blinds | Custom Drapes in Kerala | MAGNAT™",
  description:
    "Discover bespoke window treatments by MAGNAT. Custom sheer curtains, blackout drapes, and motorized blinds crafted to fit your home flawlessly.",
  keywords: [
    "curtains Kondotty",
    "window blinds Kerala",
    "blackout curtains Malappuram",
    "sheer curtains Kondotty",
    "luxury drapes Kerala",
    "motorized blinds Kondotty",
    "MAGNAT furnishings",
  ],
  alternates: { canonical: "https://magnat.in/products/curtains" },
  robots: { index: true, follow: true },
};

const curtainProducts = [
  { slug: "zenith-sheer-curtain", name: "Zenith Sheer Curtain", description: "Ultra-fine Belgian linen blend that filters harsh sunlight while maintaining natural illumination.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200", badge: "Best Seller", material: "Linen Sheer" },
  { slug: "eclipse-blackout", name: "Eclipse Blackout Drapes", description: "Triple-weave insulating fabric that blocks 99% of UV rays and dampens street noise perfectly.", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200", badge: "Premium", material: "Thermal Blackout" },
  { slug: "venetian-wooden-blinds", name: "Venetian Wooden Blinds", description: "Minimalist horizontal blinds crafted from sustainably sourced basswood. Available in natural or painted finishes.", image: "https://images.unsplash.com/photo-1542664539-715bd7f8482f?q=80&w=1200", badge: null, material: "Basswood" },
  { slug: "velvet-opulence", name: "Velvet Opulence Drape", description: "Heavy falling velvet that adds dramatic texture and royal elegance to large formal windows.", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200", badge: "Luxury", material: "Crushed Velvet" },
  { slug: "motorized-roller", name: "Motorized Roller Blinds", description: "Smart home integrated roller blinds. Control your home's natural lighting directly from your smartphone.", image: "https://images.unsplash.com/photo-1588701832274-1a1aabc59dc0?q=80&w=1200", badge: "High-Tech", material: "Smart Fabric" },
  { slug: "breeze-cotton-panels", name: "Breeze Cotton Panels", description: "Lightweight, breathable 100% organic cotton panels. Perfect for keeping rooms well-ventilated.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200", badge: "Eco-Friendly", material: "Organic Cotton" },
  { slug: "roman-shade-classic", name: "Roman Shade Classic", description: "Structured fabric folds that lay flat when extended. A tailored look for kitchens and studies.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200", badge: null, material: "Linen Blend" },
  { slug: "damask-jacquard", name: "Damask Jacquard Drape", description: "Traditional woven patterns for a highly textured, classic aesthetic. Includes matching tie-backs.", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200", badge: "Classic", material: "Jacquard Weave" },
  { slug: "cellular-honeycomb", name: "Cellular Honeycomb Blinds", description: "Energy-efficient blinds engineered to trap heat in the pockets, keeping your room cool in the Kerala summer.", image: "https://images.unsplash.com/photo-1542664539-715bd7f8482f?q=80&w=1200", badge: "Smart Space", material: "Technical Fabric" },
  { slug: "ombre-voile", name: "Ombre Voile Sheers", description: "A gorgeous vertical color gradient dyed into diaphanous voile fabric for sweeping visual height.", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200", badge: "Artisanal", material: "Polyester Voile" },
  { slug: "plantation-shutters", name: "Plantation Shutters", description: "Solid internal wooden shutters offering absolute privacy and unparalleled architectural style.", image: "https://images.unsplash.com/photo-1588701832274-1a1aabc59dc0?q=80&w=1200", badge: "Premium", material: "Painted Timber" },
  { slug: "silk-shimmer", name: "Silk Shimmer Drapes", description: "Faux silk offering incredible luster and light reflection, completely lined for durability.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200", badge: null, material: "Faux Silk" },
  { slug: "vertical-louvers", name: "Vertical Louvers", description: "The classic solution for sliding glass doors and massive horizontal window spans.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200", badge: null, material: "PVC & Fabric" },
  { slug: "macrame-boho", name: "Macrame Boho Hanging", description: "Hand-knotted artisanal macrame curtain. Designed to serve as an airy partition or bohemian window treatment.", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200", badge: "Handmade", material: "Cotton Twine" },
  { slug: "double-pinch-pleat", name: "Double Pinch Pleat", description: "A highly tailored heading style ensuring uniform, regimented folds from ceiling to floor.", image: "https://images.unsplash.com/photo-1542664539-715bd7f8482f?q=80&w=1200", badge: null, material: "Mixed Blend" },
  { slug: "bamboo-roll-up", name: "Bamboo Roll-Up Blinds", description: "Natural, rustic aesthetic bringing a beachy or organic farmhouse texture to your interior.", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200", badge: "Sustainable", material: "Natural Bamboo" },
];

const seoStats = [
  { num: "25+", label: "Years Expertise" },
  { num: "16", label: "Window Treatments" },
  { num: "100%", label: "Custom Measured" },
  { num: "Free", label: "Consultation" },
];

const faqItems = [
  { q: "Do you offer measurement and installation services?", a: "Yes, our team will visit your home in Kerala to take precise measurements and handle the complete installation of tracks and curtains." },
  { q: "Can I motorize my existing curtains?", a: "In many cases, yes. We can install smart motorized tracks that integrate with your existing fabric drapes." },
  { q: "What is the difference between blackout and thermal curtains?", a: "Blackout curtains block light, while thermal curtains are specifically layered to block heat transfer and noise. Our premium Eclipse line does both." },
  { q: "How do I wash these curtains?", a: "Sheers and cottons can usually be machine washed on delicate, while heavy velvets, silks, and tailored pleats require professional dry cleaning." },
];



export default function CurtainsPage() {
  return (
    <main className="min-h-screen bg-white pt-[60px] md:pt-[80px]">
      <section className="relative px-6 py-20 bg-[#fafaf9] lg:px-16" aria-labelledby="hero-title">
        <div className="max-container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-[55%]">
              <span className="block text-[10px] tracking-[0.3em] font-bold uppercase text-[#C0001A] mb-4" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Window Treatments</span>
              <h1 id="hero-title" className="text-[44px] lg:text-[72px] font-normal leading-tight text-[#111] m-0 mb-5" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                The <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Curtains</em> Collection.
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-[1.7] text-[#666] m-0 mb-10 max-w-xl" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Control light and frame your views with MAGNAT’s bespoke curtain and blind installations. Tailored perfectly to your architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919446516395" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 rounded-[3px]">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-[#ddd] text-[#111] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-[3px] hover:bg-[#111] hover:text-white">
                  Schedule Measure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-3.5 bg-[#f4f4f2] border-b border-[#ebebeb]">
        <div className="max-container px-6 lg:px-16">
          <p className="text-xs text-[#666] m-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Showing <strong className="text-[#111]">{curtainProducts.length} window treatments</strong> — Built to order
          </p>
        </div>
      </div>

      <section className="py-12 px-6 lg:px-16">
        <div className="max-container">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {curtainProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20 px-6 lg:px-16">
        <div className="max-container">
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-[#ebebeb]">
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C0001A] mb-3">Common Questions</span>
              <h2 className="text-[44px] font-normal text-[#111] m-0" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Frequently Asked <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Questions</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-16">
            {faqItems.map((item, i) => (
              <details key={item.q} className="group/faq border-b border-[#ebebeb] py-0 open:pb-2">
                <summary className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex justify-between gap-4 select-none hover:text-[#C0001A]">
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] text-[#C0001A] w-5">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </span>
                  <ChevronDown className="text-[#C0001A] transition-transform group-open/faq:rotate-180" size={16} />
                </summary>
                <div className="pb-6 pl-9 text-sm text-[#666]">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
