// app/products/chairs/page.tsx
import type { Metadata } from "next";
import { MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getProducts } from "@/lib/api/products";
import ProductListWithFilter from "@/components/products/ProductListWithFilter";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Premium Chairs in Kondotty, Kerala | Office & Accent Chairs | MAGNAT™",
  description:
    "Explore MAGNAT's premium chair collection — ergonomically designed office chairs, luxury accent chairs, and handcrafted dining chairs. Manufactured in Kondotty, Kerala. Quality you can trust.",
  keywords: [
    "chairs Kondotty",
    "office chairs Kerala",
    "accent chairs Malappuram",
    "luxury chairs Kondotty",
    "ergonomic chairs Kerala",
    "furniture shop Kondotty",
    "MAGNAT chairs",
    "dining chairs Kerala",
  ],
  openGraph: {
    title: "Premium Chairs — Comfort Meets Elegance | MAGNAT™ Furniture",
    description:
      "Handcrafted chairs for every space. From office ergonomics to living room accents. Manufactured in Kondotty, Kerala.",
    url: "/products/chairs",
    type: "website",
    images: [
      {
        url: "/images/chair-banner.jpg",
        width: 1200,
        height: 630,
        alt: "MAGNAT Premium Chair Collection",
      },
    ],
  },
  alternates: { canonical: "https://magnat.in/products/chairs" },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const seoStats = [
  { num: "5000+", label: "Chairs Delivered" },
  { num: "24", label: "Unique Designs" },
  { num: "5yr", label: "Structural Warranty" },
  { num: "48hr", label: "Fast Shipping" },
];

const faqItems = [
  {
    q: "Do you offer ergonomic office chairs?",
    a: "Yes, we have a range of ergonomic chairs with adjustable lumbar support, armrests, and height to ensure maximum comfort during long working hours.",
  },
  {
    q: "Can I customize the upholstery of the accent chairs?",
    a: "Absolutely. You can choose from our selection of premium fabrics, leathers, and colors to match your home decor.",
  },
  {
    q: "What kind of wood is used for the dining chairs?",
    a: "We primarily use seasoned Kerala Teak and high-quality Rubberwood for durability and a premium finish.",
  },
];

export default async function ChairsPage() {
  const allProducts = await getProducts();
  const chairProducts = allProducts.filter(p => 
    p.categories?.slug === "Chairs" 
  );

  return (
    <main className="md:mt-[-58px] bg-[#fafaf9] min-h-screen">
      {/* ── SEO Intro ── */}
      <section className="hidden md:block bg-white border-b border-[#f0f0f0] py-16">
        <div className="max-container">
          <div className="seo-kicker flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-[#C0001A]" >
            Premium Seating · Crafted in Kerala
            <span className="flex-1 h-px bg-[#f0f0f0]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 gap-0">
            <div className="pr-16 border-r border-[#f0f0f0]">
              <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111] mb-6" >
                Experience Superior <em className="text-[#C0001A]" style={{ fontStyle: "italic" }}>Comfort</em> with MAGNAT Chairs
              </h2>
              <div className="w-10 h-px bg-[#C0001A] mb-5" />
              <p className="text-sm text-[#666] leading-[1.85] font-light mb-4" >
                At MAGNAT Furniture, we believe a chair is more than just a seat — it&apos;s an essential part of your daily rhythm. Our collection ranges from high-performance ergonomic office chairs to elegantly crafted accent pieces that define your living space.
              </p>
            </div>

            <div className="pl-16 flex flex-col justify-between gap-7">
              <div className="grid grid-cols-2 gap-px bg-[#f0f0f0] border border-[#f0f0f0]">
                {seoStats.map((s) => (
                  <div key={s.label} className="bg-white px-5 py-6 flex flex-col gap-1.5">
                    <span className="text-[30px] font-medium text-[#111] leading-none" >{s.num}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#999]" >{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5">
                <a href="https://wa.me/919446516395" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 no-underline rounded-[3px] transition-colors hover:bg-[#C0001A]" >
                  <MessageCircle size={16} />
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product List with Filter ── */}
      <ProductListWithFilter initialProducts={chairProducts} categories="Chairs" />

      {/* ── FAQ ── */}
      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20">
        <div className="max-container">
          <h2 className="text-[44px] font-normal leading-[1.1] text-[#111] mb-12" >Questions & <em className="text-[#C0001A]">Answers</em></h2>
          <div className="grid grid-cols-2 gap-x-16">
            {faqItems.map((item, i) => (
              <details key={item.q} className="group/faq border-b border-[#ebebeb] py-0">
                <summary className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex items-center justify-between list-none hover:text-[#C0001A] transition-colors" >
                   <span>{item.q}</span>
                   <ChevronDown size={16} />
                </summary>
                <div className="pb-6 text-sm text-[#666] leading-[1.8]" >{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
