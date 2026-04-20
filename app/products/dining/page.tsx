// app/products/dining/page.tsx
import type { Metadata } from "next";
import { MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getProducts } from "@/lib/api/products";
import ProductListWithFilter from "@/components/products/ProductListWithFilter";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dining Collections in Kondotty, Kerala | Teak Dining Sets | MAGNAT™",
  description:
    "Explore MAGNAT's exquisite dining collection — from solid teak dining tables to modern minimalist sets. Handcrafted in Kondotty, Kerala. Create memories with our premium dining furniture.",
  keywords: [
    "dining tables Kondotty",
    "dining sets Kerala",
    "teak wood dining Malappuram",
    "modern dining furniture Kondotty",
    "8 seater dining Kerala",
    "6 seater dining Kerala",
    "MAGNAT dining collection",
  ],
  openGraph: {
    title: "Dining Collections — Elegant Spaces for Living | MAGNAT™ Furniture",
    description:
      "Crafting the heart of your home. Premium dining sets handcrafted in Kondotty, Kerala.",
    url: "/products/dining",
    type: "website",
    images: [
      {
        url: "/images/dining-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MAGNAT Premium Dining Collection",
      },
    ],
  },
  alternates: { canonical: "https://magnat.in/products/dining" },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const seoStats = [
  { num: "1500+", label: "Homes Furnished" },
  { num: "12", label: "Table Designs" },
  { num: "100%", label: "Solid Wood" },
  { num: "Premium", label: "Finish Quality" },
];

const faqItems = [
  {
    q: "Do you offer custom sizes for dining tables?",
    a: "Yes, we specialize in custom manufacturing and can adjust table dimensions to fit your specific dining area perfectly.",
  },
  {
    q: "Is the wood treated for durability?",
    a: "Every piece of wood we use undergoes a thorough seasoning and treatment process to ensure resistance against warping and termites.",
  },
];

export default async function DiningPage() {
  const allProducts = await getProducts();
  const diningProducts = allProducts.filter(p => 
    p.category_id === "Dining" || 
    p.category?.name === "Dining" || 
    p.category?.slug === "dining"
  );

  return (
    <main className="pt-20 bg-[#fafaf9] min-h-screen">
      {/* ── SEO Intro ── */}
      <section className="hidden md:block bg-white border-b border-[#f0f0f0] py-16">
        <div className="max-container">
          <div className="seo-kicker flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-[#C0001A]" >
            The Heart of the Home · Kondotty Craftsmanship
            <span className="flex-1 h-px bg-[#f0f0f0]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 gap-0">
            <div className="pr-16 border-r border-[#f0f0f0]">
              <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111] mb-6" >
                Timeless <em className="text-[#C0001A]" style={{ fontStyle: "italic" }}>Dining</em> Collections by MAGNAT
              </h2>
              <div className="w-10 h-px bg-[#C0001A] mb-5" />
              <p className="text-sm text-[#666] leading-[1.85] font-light" >
                Our dining collection combines the warmth of traditional Kerala woodcraft with modern aesthetic sensibilities. From grand 8-seater teak tables for large family gatherings to intimate 4-seater sets for modern apartments, each piece is a testament to our 25-year legacy.
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
                <a href="https://wa.me/919446516395" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 no-underline rounded-[3px]" >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product List with Filter ── */}
      <ProductListWithFilter initialProducts={diningProducts} category="Dining" />

      {/* ── FAQ ── */}
      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20">
        <div className="max-container">
          <h2 className="text-[44px] font-normal leading-[1.1] text-[#111] mb-12" >Dining <em className="text-[#C0001A]">Insights</em></h2>
          <div className="grid grid-cols-2 gap-x-16">
            {faqItems.map((item, i) => (
              <details key={item.q} className="group/faq border-b border-[#ebebeb] py-0">
                <summary className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex items-center justify-between list-none hover:text-[#C0001A]" >
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
