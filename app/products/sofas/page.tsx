// app/products/sofas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sofas in Kondotty, Kerala | Premium Sofa Collection | MAGNAT™",
  description:
    "Explore MAGNAT's handcrafted sofa collection — L-shaped sofas, modular sofas, wooden sofa sets, and more. Manufactured in Kondotty, Kerala with 25 years of expertise. Visit our showroom or enquire on WhatsApp.",
  keywords: [
    "sofas Kondotty",
    "sofa set Kerala",
    "L-shaped sofa Malappuram",
    "modular sofa Kondotty",
    "luxury sofa Kerala",
    "sofa shop near me Kerala",
    "wooden sofa set Kondotty",
    "fabric sofa Kerala",
    "leather sofa Malappuram",
    "MAGNAT furniture sofa",
    "best sofa Kerala 2024",
    "sofa manufacturer Kondotty",
  ],
  openGraph: {
    title: "Premium Sofas — Handcrafted in Kondotty | MAGNAT™ Furniture",
    description:
      "Kerala's finest sofa collection. Handcrafted in Kondotty with premium fabric, leather, and teak. Visit MAGNAT Furniture showroom or enquire online.",
    url: "/products/sofas",
    type: "website",
    images: [
      {
        url: "/images/sofa3d.png",
        width: 1200,
        height: 630,
        alt: "MAGNAT Premium Sofa Collection Kondotty Kerala",
      },
    ],
  },
  alternates: { canonical: "https://magnat.in/products/sofas" },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const sofaProducts = [
  {
    slug: "milano-modular-sofa",
    name: "Milano Modular Sofa",
    description:
      "Architectural comfort with premium fabric upholstery. Fully customizable in size and fabric. Handstitched in our Kondotty workshop.",
    image: "/images/sofa3d.png",
    badge: "Best Seller",
    material: "Premium Fabric",
  },
  {
    slug: "royal-l-shaped-sofa",
    name: "Royal L-Shaped Sofa",
    description:
      "Space-maximizing L-design with deep cushioning. Available in fabric and velvet options. Ideal for Kerala living rooms.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    badge: "New Arrival",
    material: "Velvet / Fabric",
  },
  {
    slug: "heritage-wooden-sofa-set",
    name: "Heritage Wooden Sofa Set",
    description:
      "Kerala teak frame with handwoven cushions. A timeless 3+1+1 set built to last generations. Polished with premium lacquer.",
    image: "/images/sofa3d1.png",
    badge: null,
    material: "Kerala Teak",
  },
  {
    slug: "zen-single-seater",
    name: "Zen Single Seater",
    description:
      "Minimalist silhouette, maximum comfort. Perfect accent sofa for bedroom or reading nook. Solid wood legs, removable cover.",
    image: "/images/singlesofa.png",
    badge: null,
    material: "Leather / Fabric",
  },
  {
    slug: "luxe-recliner-sofa",
    name: "Luxe Recliner Sofa",
    description:
      "Full manual recliner mechanism with plush padding. Available in 3-seater configuration. Premium leatherette finish.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop",
    badge: "Popular",
    material: "Leatherette",
  },
  {
    slug: "kochi-sectional-sofa",
    name: "Kochi Sectional Sofa",
    description:
      "Contemporary sectional design with modular configuration options. Deep-seat cushions with pocket spring support.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    badge: null,
    material: "Premium Fabric",
  },
  {
    slug: "canvas-3-seater",
    name: "Canvas 3-Seater",
    description:
      "Clean lines and neutral tones — a versatile 3-seater that complements any interior. Washable cotton canvas cover.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop",
    badge: null,
    material: "Cotton Canvas",
  },
  {
    slug: "verde-chaise-lounge",
    name: "Verde Chaise Lounge",
    description:
      "Elongated chaise silhouette perfect for balconies and reading corners. Solid rubber wood frame with foam cushion.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    badge: "New Arrival",
    material: "Rubberwood",
  },
  {
    slug: "malabar-velvet-sofa",
    name: "Malabar Velvet Sofa",
    description:
      "Deep emerald velvet with gold-finished legs. A statement piece for luxury Kerala homes. High-density foam for lasting comfort.",
    image: "https://images.unsplash.com/photo-1549187771-b4e99744ad66?q=80&w=1200&auto=format&fit=crop",
    badge: "Premium",
    material: "Luxury Velvet",
  },
  {
    slug: "calicut-teak-classic",
    name: "Calicut Teak Classic",
    description:
      "Traditional 3-seater crafted from seasoned Calicut teak. Hand-carved details with premium oil finish. Built to last generations.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop",
    badge: null,
    material: "Solid Teak",
  },
  {
    slug: "urban-chesterfield",
    name: "Urban Chesterfield",
    description:
      "Timeless tufted design in aged tan leather. Perfectly balanced proportions with deep-buttoned backrest and rolled arms.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200&auto=format&fit=crop",
    badge: "Classic",
    material: "Top Grain Leather",
  },
  {
    slug: "nordic-minimalist",
    name: "Nordic Minimalist",
    description:
      "Breathable linen upholstery with light oak legs. A subtle, airy design that brings brightness to any modern living space.",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
    badge: null,
    material: "Premium Linen",
  },
  {
    slug: "trivandrum-daybed",
    name: "Trivandrum Daybed",
    description:
      "Versatile daybed with a solid mahogany frame. Perfect for afternoon siestas or as additional seating during guest visits.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200&auto=format&fit=crop",
    badge: null,
    material: "Mahogany Wood",
  },
  {
    slug: "sultan-power-recliner",
    name: "Sultan Power Recliner",
    description:
      "The ultimate relaxation experience with electric reclining and USB charging ports. Padded with cooling gel memory foam.",
    image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1200&auto=format&fit=crop",
    badge: "High-Tech",
    material: "Performance Leatherette",
  },
  {
    slug: "palm-shore-rattan-sofa",
    name: "Palm Shore Rattan Sofa",
    description:
      "Sustainable rattan weave with weather-resistant cushions. Ideal for semi-outdoor verandas and garden-facing rooms.",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200&auto=format&fit=crop",
    badge: "Eco-Friendly",
    material: "Natural Rattan",
  },
  {
    slug: "nilgiri-sectional",
    name: "Nilgiri Sectional",
    description:
      "Large-scale corner sectional for family gatherings. Features pet-friendly performance fabric and adjustable headrests.",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1200&auto=format&fit=crop",
    badge: "Family Choice",
    material: "Performance Fabric",
  },
];

const seoStats = [
  { num: "25+", label: "Years Manufacturing" },
  { num: "16", label: "Sofa Styles" },
  { num: "100%", label: "Made in Kondotty" },
  { num: "2–4wk", label: "Delivery Across Kerala" },
];

const seoTags = [
  "L-Shaped Sofas",
  "Modular Sets",
  "Teak Wood",
  "Recliner Sofas",
  "Custom Fabric",
];

const faqItems = [
  {
    q: "Do you deliver sofas across Kerala?",
    a: "Yes. We deliver our sofas to all major cities and towns in Kerala including Kozhikode, Kochi, Thrissur, Palakkad, Malappuram, and Kannur. Contact us for delivery charges to your location.",
  },
  {
    q: "Can I customize the sofa fabric or size?",
    a: "Absolutely. All our sofas are made-to-order in our Kondotty factory. You can choose from a wide range of fabrics, leather, velvet, and leatherette options, as well as custom dimensions.",
  },
  {
    q: "How long does manufacturing and delivery take?",
    a: "Most sofas are delivered within 2–4 weeks after order confirmation. Custom orders may take slightly longer depending on material availability and complexity.",
  },
  {
    q: "Do you offer a warranty on sofas?",
    a: "Yes. We provide a manufacturer's warranty on the frame and upholstery. Our after-sales team is always available for repairs, refinishing, and support.",
  },
  {
    q: "Can I visit your showroom to see the sofas?",
    a: "Yes, our showroom is located in Kondotty, Malappuram, Kerala. You can visit us to experience the sofas in person. Call +91 94465 16395 to confirm showroom hours.",
  },
  {
    q: "What sofa materials are available at MAGNAT?",
    a: "We offer a wide range of upholstery options including premium fabric, velvet, leatherette, top-grain leather, cotton canvas, and natural rattan. For wooden frames, we use Kerala teak, solid mahogany, and rubberwood. All materials are sourced for durability and suited to Kerala's climate.",
  },
];

// ─────────────────────────────────────────────────────────────
// SOFA CARD
// ─────────────────────────────────────────────────────────────
function SofaCard({ product }: { product: (typeof sofaProducts)[number] }) {
  return (
    <article className="sofa-card group border border-[#f0f0f0] rounded-[4px] overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(17,17,17,0.10)] hover:border-[#ebebeb]">
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-[#f7f7f5] flex-shrink-0" style={{ aspectRatio: "3/2.8" }}>
        <Image
          src={product.image}
          alt={`${product.name} — MAGNAT Furniture Kondotty Kerala`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1300px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          priority={false}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 pt-6 pb-7 min-h-[220px] max-sm:px-3 max-sm:pt-2.5 max-sm:pb-3.5 max-sm:min-h-[140px]">
        <span className="block mb-2 text-[10px] font-medium tracking-[0.25em] uppercase text-[#C0001A] max-sm:text-[8px] max-sm:mb-[5px]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          {product.material}
        </span>
        <h3 className="text-base font-medium leading-snug text-[#111] mb-2 transition-colors duration-300 group-hover:text-[#C0001A] max-sm:text-[0.88rem] max-sm:mb-1.5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          {product.name}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed mb-4 flex-1 line-clamp-2 max-sm:text-[0.72rem] max-sm:mb-3" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          {product.description}
        </p>
        <div className="flex items-center gap-2.5 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111] text-white text-sm font-semibold tracking-[0.15em] uppercase px-4 py-3 rounded-[4px] no-underline transition-colors duration-300 hover:bg-[#C0001A] max-sm:py-2.5 max-sm:text-[9px] max-sm:tracking-[0.12em]"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            aria-label={`View details for ${product.name}`}
          >
            Details
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function SofasPage() {
  return (
    <main className="pt-20 bg-[#fafaf9] min-h-screen">



      {/* ── SEO Intro — desktop only ── */}
      <section className="hidden md:block bg-white border-b border-[#f0f0f0] py-16">
        <div className="max-container">

          {/* Kicker with line */}
          <div className="seo-kicker flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-[#C0001A]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Manufacturer · Kondotty, Kerala · Est. 1999
            <span className="flex-1 h-px bg-[#f0f0f0]" aria-hidden="true" />
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-2 gap-0">

            {/* Left — editorial copy */}
            <div className="pr-16 border-r border-[#f0f0f0]">
              <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111] mb-6" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Buy Sofas Directly from the{" "}
                <em className="text-[#C0001A]" style={{ fontStyle: "italic" }}>Manufacturer</em>{" "}
                in Kondotty
              </h2>

              {/* Red rule */}
              <div className="w-10 h-px bg-[#C0001A] mb-5" />

              <p className="text-sm text-[#666] leading-[1.85] font-light mb-4" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                MAGNAT Furniture is a leading furniture manufacturer based in Kondotty,
                Malappuram district, Kerala. We specialize in premium sofa sets — from
                L-shaped sectionals and wooden sofa sets to recliner sofas and modular
                configurations. Every sofa is built in-house at our Kondotty factory and
                delivered directly to your home, eliminating middlemen for the best value.
              </p>
              <p className="text-sm text-[#666] leading-[1.85] font-light mb-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Whether you&apos;re furnishing a new home in Kozhikode, Malappuram, Thrissur,
                or anywhere across Kerala, our team can help you choose the perfect sofa and
                customize it to your space, color, and fabric preference.
              </p>

              {/* Pull quote */}
              <blockquote className="mt-6 pl-4 border-l-2 border-[#C0001A] text-[15px] italic text-[#999] leading-[1.7]" style={{ fontFamily: "var(--font-playfair, serif)", fontStyle: "italic" }}>
                Handcrafted at source. No middlemen. Delivered across Kerala.
              </blockquote>
            </div>

            {/* Right — stats + tags + CTAs */}
            <div className="pl-16 flex flex-col justify-between gap-7">

              {/* 2×2 stat grid */}
              <div className="grid grid-cols-2 gap-px bg-[#f0f0f0] border border-[#f0f0f0]">
                {seoStats.map((s) => (
                  <div key={s.label} className="bg-white px-5 py-6 flex flex-col gap-1.5">
                    <span className="text-[30px] font-medium text-[#111] leading-none" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                      {s.num}
                    </span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#999]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Keyword tags */}
              <div className="flex flex-wrap gap-2">
                {seoTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase text-[#888] border border-[#e8e8e8] px-3 py-1.5"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-2.5">
                <a
                  href="https://wa.me/919446516395?text=Hello%20MAGNAT%20Furniture%2C%20I%20want%20to%20enquire%20about%20your%20sofa%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 no-underline rounded-[3px] transition-colors hover:bg-[#1ab954]"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  WhatsApp Enquiry
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent text-[#111] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 no-underline border border-[#ddd] rounded-[3px] transition-all hover:bg-[#111] hover:text-white hover:border-[#111]"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Visit Showroom
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Count Bar ── */}
      <div className="py-3.5 bg-[#f4f4f2] border-b border-[#ebebeb] max-sm:py-2.5">
        <div className="max-container">
          <p className="text-xs text-[#666] m-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Showing <strong className="text-[#111]">{sofaProducts.length} sofas</strong> — All handcrafted in Kondotty, Kerala
          </p>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="py-12 max-sm:py-7" aria-label="Sofa products">
        <div className="max-container">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 max-sm:gap-3">
            {sofaProducts.map((product) => (
              <SofaCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — desktop only ── */}
      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20">
        <div className="max-container">

          {/* Header row */}
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-[#ebebeb]">
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C0001A] mb-3" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Common Questions
              </span>
              <h2 className="text-[44px] font-normal leading-[1.1] text-[#111] m-0" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Frequently Asked <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Questions</em>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-3">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-[#111] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 no-underline border border-[#ddd] rounded-[3px] transition-all hover:bg-[#111] hover:text-white hover:border-[#111]"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Send an Enquiry
              </Link>
            </div>
          </div>

          {/* FAQ grid — 2 columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-0">
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                className="group/faq border-b border-[#ebebeb] py-0 open:pb-2"
              >
                <summary
                  className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex items-center justify-between gap-4 list-none select-none hover:text-[#C0001A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] text-[#C0001A] font-normal tracking-widest w-5 flex-shrink-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className="text-[#C0001A] transition-transform duration-300 group-open/faq:rotate-180 flex-shrink-0"
                    size={16}
                  />
                </summary>
                <div className="pb-6 pl-9 text-sm text-[#666] leading-[1.8]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

    </main >
  );
}