// app/products/curtains/page.tsx
import type { Metadata } from "next";
import { MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/lib/data/products";
import ProductListWithFilter from "@/components/products/ProductListWithFilter";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Premium Curtains & Drapes | Custom Fabrics | MAGNAT™ Kerala",
  description:
    "Discover MAGNAT's premium curtains and home textiles. From blackout drapes to sheer linens, we offer custom-fit solutions for every window. Manufactured in Kondotty, Kerala.",
  keywords: [
    "curtains Kondotty",
    "blackout curtains Kerala",
    "sheer drapes Malappuram",
    "custom curtains Kerala",
    "home textiles Kondotty",
    "window treatments Kerala",
  ],
  alternates: { canonical: "https://magnat.in/products/curtains" },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const curtainProducts = allProducts.filter(p => p.category === "Curtains");

const seoStats = [
  { num: "1000+", label: "Windows Dressed" },
  { num: "50+", label: "Fabric Choices" },
  { num: "Custom", label: "Tailoring" },
  { num: "7day", label: "Expert Setup" },
];

export default function CurtainsPage() {
  return (
    <main className="pt-20 bg-[#fafaf9] min-h-screen">
      {/* ── SEO Intro ── */}
      <section className="hidden md:block bg-white border-b border-[#f0f0f0] py-16">
        <div className="max-container">
          <div className="seo-kicker flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-[#C0001A]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Elevate Your View · Textile Excellence
            <span className="flex-1 h-px bg-[#f0f0f0]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 gap-0">
            <div className="pr-16 border-r border-[#f0f0f0]">
              <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111] mb-6" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Curating <em className="text-[#C0001A]" style={{ fontStyle: "italic" }}>Light</em> & Privacy
              </h2>
              <div className="w-10 h-px bg-[#C0001A] mb-5" />
              <p className="text-sm text-[#666] leading-[1.85] font-light" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                MAGNAT Furniture brings you a curated selection of curtains and drapes designed to transform your rooms through the interplay of light and texture. From elegant blackout fabrics for master bedrooms to airy sheer linens for your living area, our textiles are sourced for quality and visual appeal.
              </p>
            </div>

            <div className="pl-16 flex flex-col justify-between gap-7">
              <div className="grid grid-cols-2 gap-px bg-[#f0f0f0] border border-[#f0f0f0]">
                {seoStats.map((s) => (
                  <div key={s.label} className="bg-white px-5 py-6 flex flex-col gap-1.5">
                    <span className="text-[30px] font-medium text-[#111] leading-none" style={{ fontFamily: "var(--font-playfair, serif)" }}>{s.num}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#999]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5">
                <a href="https://wa.me/919446516395" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 no-underline rounded-[3px]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product List with Filter ── */}
      <ProductListWithFilter initialProducts={curtainProducts} category="Curtains" />
    </main>
  );
}
