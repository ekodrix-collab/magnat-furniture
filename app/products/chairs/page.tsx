// app/products/chairs/page.tsx
import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Premium Chairs in Kerala | Accent, Recliner & Dining Chairs | MAGNAT™",
  description:
    "Explore MAGNAT's curated chair collection — wooden accent chairs, sleek bar stools, and luxurious recliners. Handcrafted in Kondotty, Kerala with 25 years of expertise.",
  keywords: [
    "chairs Kondotty",
    "accent chair Kerala",
    "lounge chair Malappuram",
    "dining chairs Kondotty",
    "luxury chairs Kerala",
    "wooden chairs Kondotty",
    "fabric chairs Kerala",
    "leather recliner Malappuram",
    "MAGNAT furniture chairs",
  ],
  alternates: { canonical: "https://magnat.in/products/chairs" },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const chairProducts = [
  { slug: "oxide-accent-chair", name: "Oxide Accent Chair", description: "Bold architectural lines with rust-toned velvet. A perfect statement piece for modern living rooms.", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200", badge: "Best Seller", material: "Premium Velvet" },
  { slug: "nordic-oak-lounge", name: "Nordic Oak Lounge", description: "Sensuous Scandinavian design crafted from solid oak. Features natural cane weaving for airflow.", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200", badge: "New Arrival", material: "Solid Oak" },
  { slug: "imperial-wingback", name: "Imperial Wingback", description: "Traditional high-back silhouette in top-grain leather. Deep-button tufting built by master craftsmen.", image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200", badge: null, material: "Top-grain Leather" },
  { slug: "luna-swivel-chair", name: "Luna Swivel Chair", description: "Curved barrel chair atop a smooth 360-degree swivel base. Upholstered in performance bouclé.", image: "https://images.unsplash.com/photo-1506439014206-8c0ce2f46f82?q=80&w=1200", badge: "Popular", material: "Bouclé Fabric" },
  { slug: "kerala-teak-rocker", name: "Kondotty Teak Rocker", description: "A classic rocking chair hand-carved from seasoned Kerala Teak. Perfect for verandas.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200", badge: "Classic", material: "Kerala Teak" },
  { slug: "urban-dining-chair", name: "Urban Dining Chair", description: "Sleek metallic minimalist dining chair with memory foam leatherette seating.", image: "https://images.unsplash.com/photo-1617325247661-675eab2bdca6?q=80&w=1200", badge: null, material: "Leatherette" },
  { slug: "plaza-bar-stool", name: "Plaza Bar Stool", description: "Counter-height elegance. Brass-finished footrest and deep emerald velvet seating.", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200", badge: null, material: "Brass & Velvet" },
  { slug: "cloud-recliner", name: "Cloud Recliner Auto", description: "Motorized reclining mechanism with zero-gravity positioning to relieve lower back pressure.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200", badge: "High-Tech", material: "Performance Leather" },
  { slug: "boho-rattan-chair", name: "Boho Rattan Chair", description: "Sustainable rattan twisted by hand into a beautiful sunburst pattern. Eco-friendly.", image: "https://images.unsplash.com/photo-1549187771-b4e99744ad66?q=80&w=1200", badge: "Eco-Friendly", material: "Natural Rattan" },
  { slug: "milano-armchair", name: "Milano Armchair", description: "Italian-inspired low profile resting chair. Polished walnut finish over a sturdy hardwood frame.", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200", badge: null, material: "Walnut Wood" },
  { slug: "clubhouse-leather", name: "Clubhouse Leather Chair", description: "Heavy distressed leather armchair reminiscent of vintage smoking rooms and libraries.", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200", badge: null, material: "Distressed Leather" },
  { slug: "linen-slipper-chair", name: "Linen Slipper Chair", description: "Armless profile perfect for bedrooms and corners. Beautifully draped in Belgian linen.", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200", badge: null, material: "Belgian Linen" },
  { slug: "bistro-outdoor-chair", name: "Bistro Outdoor Chair", description: "All-weather aluminum frame wrapped in synthetic wicker. Designed to endure the Kerala monsoon.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200", badge: "Outdoor", material: "Synthetic Wicker" },
  { slug: "senator-office-chair", name: "Senator Office Chair", description: "Ergonomic executive chair. Adjustable lumbar, headrest, and 3D armrests for extreme comfort.", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1200", badge: "Ergonomic", material: "Mesh & Leather" },
  { slug: "monarch-dining-chair", name: "Monarch Dining Chair", description: "High-back dining chair with nailhead trim and espresso finished wooden legs.", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200", badge: "Premium", material: "Fabric & Teak" },
  { slug: "origami-folding-chair", name: "Origami Folding Chair", description: "A masterpiece of utility. Solid wood folding chair that collapses entirely flat for storage.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200", badge: "Smart Space", material: "Ash Wood" },
];

const seoStats = [
  { num: "25+", label: "Years Manufacturing" },
  { num: "16", label: "Chair Profiles" },
  { num: "100%", label: "Made in Kondotty" },
  { num: "2–4wk", label: "Delivery Across Kerala" },
];

const seoTags = [
  "Accent Chairs",
  "Teak Rockers",
  "Recliners",
  "Dining Seating",
  "Office Chairs",
];

const faqItems = [
  {
    q: "Do you deliver chairs across Kerala?",
    a: "Yes. We deliver to all major cities and towns in Kerala including Kozhikode, Kochi, Thrissur, and Trivandrum.",
  },
  {
    q: "Can I customize the upholstery?",
    a: "Absolutely. All our chairs are made-to-order in our Kondotty factory. You can choose from a wide range of fabrics, leather, and velvet.",
  },
  {
    q: "How long does manufacturing and delivery take?",
    a: "Most chairs are delivered within 2–4 weeks after order confirmation.",
  },
  {
    q: "Do you offer ergonomic office chairs?",
    a: "Yes. We offer specialized ergonomic chairs focused on lumbar support and prolonged seating comfort.",
  },
];



// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ChairsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#111] selection:text-white pt-[60px] md:pt-[80px]">
      <section className="relative px-6 py-20 bg-[#fafaf9] lg:px-16" aria-labelledby="hero-title">
        <div className="max-container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="lg:w-[55%]">
              <span className="block text-[10px] tracking-[0.3em] font-bold uppercase text-[#C0001A] mb-4" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Curated Seating
              </span>
              <h1 id="hero-title" className="text-[44px] lg:text-[72px] font-normal leading-tight text-[#111] m-0 mb-5" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                The <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Chair</em> Collection.
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-[1.7] text-[#666] m-0 mb-10 max-w-xl" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Accent chairs, recliners, and bespoke loungers designed for maximum comfort. Proudly manufactured in our Kondotty facility using premium wood and curated fabrics.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919446516395" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg rounded-[3px]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#111] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 no-underline border border-[#ddd] rounded-[3px] transition-all hover:bg-[#111] hover:text-white hover:border-[#111]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-3.5 bg-[#f4f4f2] border-b border-[#ebebeb] max-sm:py-2.5">
        <div className="max-container">
          <p className="text-xs text-[#666] m-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Showing <strong className="text-[#111]">{chairProducts.length} chairs</strong> — All handcrafted in Kondotty, Kerala
          </p>
        </div>
      </div>

      <section className="py-12 max-sm:py-7">
        <div className="max-container">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 max-sm:gap-3">
            {chairProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20">
        <div className="max-container">
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-[#ebebeb]">
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C0001A] mb-3" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Common Questions
              </span>
              <h2 className="text-[44px] font-normal leading-[1.1] text-[#111] m-0" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Frequently Asked <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Questions</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-0">
            {faqItems.map((item, i) => (
              <details key={item.q} className="group/faq border-b border-[#ebebeb] py-0 open:pb-2">
                <summary className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex items-center justify-between gap-4 list-none select-none hover:text-[#C0001A] transition-colors duration-200" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] text-[#C0001A] font-normal tracking-widest w-5 flex-shrink-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown className="text-[#C0001A] transition-transform duration-300 group-open/faq:rotate-180 flex-shrink-0" size={16} />
                </summary>
                <div className="pb-6 pl-9 text-sm text-[#666] leading-[1.8]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
