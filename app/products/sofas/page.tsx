// app/products/sofas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// SEO METADATA — Targeted for Kerala sofa buyers
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
  alternates: {
    canonical: "https://magnat.in/products/sofas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────
// SOFA PRODUCTS DATA
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

// ─────────────────────────────────────────────────────────────
// SOFA CARD COMPONENT
// ─────────────────────────────────────────────────────────────
function SofaCard({
  product,
}: {
  product: (typeof sofaProducts)[number];
}) {
  return (
    <article className="sofa-card group">
      {/* Image */}
      <div className="sofa-card__image-wrap">
        <Image
          src={product.image}
          alt={`${product.name} — MAGNAT Furniture Kondotty Kerala`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1300px) 33vw, 25vw"
          className="sofa-card__image"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="sofa-card__body">
        {/* Material Tag */}
        <span className="sofa-card__material">{product.material}</span>

        {/* Name */}
        <h3 className="sofa-card__name">{product.name}</h3>

        {/* Description — 2 line clamp */}
        <p className="sofa-card__desc">{product.description}</p>

        {/* CTA Row */}
        <div className="sofa-card__actions">
          <Link
            href={`/products/${product.slug}`}
            className="sofa-card__detail-btn"
            aria-label={`View details for ${product.name}`}
          >
            Details
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* Scoped Styles */}
      <style>{`
        .sofa-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease;
        }
        .sofa-card:hover {
          box-shadow: 0 16px 48px rgba(17,17,17,0.10);
          transform: translateY(-4px);
          border-color: #ebebeb;
        }

        /* ── Image ── */
        .sofa-card__image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2.8; /* Increased height from 4 / 3 */
          overflow: hidden;
          background: #f7f7f5;
          flex-shrink: 0;
        }
        .sofa-card__image {
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .sofa-card:hover .sofa-card__image {
          transform: scale(1.06);
        }





        /* ── Body ── */
        .sofa-card__body {
          padding: 24px 20px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 220px;
        }
        .sofa-card__material {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C0001A;
          font-family: var(--font-dm-sans, sans-serif);
          display: block;
          margin-bottom: 8px;
        }
        .sofa-card__name {
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.3;
          color: #111;
          font-family: var(--font-playfair, serif);
          margin: 0 0 8px;
          transition: color 0.3s;
        }
        .sofa-card:hover .sofa-card__name {
          color: #C0001A;
        }
        .sofa-card__desc {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.5;
          font-family: var(--font-dm-sans, sans-serif);
          margin: 0 0 16px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 2.46rem; /* Exact height for 2 lines (0.82 * 1.5 * 2) */
        }

        /* ── Actions ── */
        .sofa-card__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }
        .sofa-card__detail-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #111;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 11px 16px;
          text-decoration: none;
          font-family: var(--font-dm-sans, sans-serif);
          transition: background 0.3s, color 0.3s;
          border-radius: 3px;
        }
        .sofa-card__detail-btn:hover {
          background: #C0001A;
        }
        .sofa-card__enquire-btn {
          display: none;
        }
      `}</style>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function SofasPage() {
  return (
    <main className="sofas-page">
      {/* ── Page Header ── */}
      <section className="sofas-header">
        <div className="max-container">
          {/* Breadcrumb */}
          <nav className="sofas-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Sofas</span>
          </nav>

          {/* Title Block */}
          <div className="sofas-title-block">
            <span className="heading-label">Kondotty Craftsmanship · Kerala</span>
            <h1 className="sofas-h1">
              Sofa <span className="sofas-h1__accent">Collection</span>
            </h1>
            <p className="sofas-subtitle sofas-subtitle--desktop">
              Handcrafted sofas made at our Kondotty manufacturing unit. Each piece is built
              with premium-grade materials and finished by skilled Kerala artisans — designed
              to complement modern and traditional homes alike.
            </p>

            {/* Quick Stats */}
            <div className="sofas-stats sofas-stats--desktop">
              <div className="sofas-stat">
                <span className="sofas-stat__num">{sofaProducts.length}</span>
                <span className="sofas-stat__label">Sofa Styles</span>
              </div>
              <div className="sofas-stat__divider" aria-hidden="true" />
              <div className="sofas-stat">
                <span className="sofas-stat__num">25+</span>
                <span className="sofas-stat__label">Years Manufacturing</span>
              </div>
              <div className="sofas-stat__divider" aria-hidden="true" />
              <div className="sofas-stat">
                <span className="sofas-stat__num">Custom</span>
                <span className="sofas-stat__label">Size &amp; Fabric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO Intro Text ── */}
      <section className="sofas-seo-intro sofas-seo-intro--desktop-only">
        <div className="max-container">
          <div className="sofas-seo-intro__inner">
            <div className="sofas-seo-intro__left">
              <h2 className="sofas-seo-intro__heading">
                Buy Sofas Directly from the Manufacturer in Kondotty
              </h2>
              <p>
                MAGNAT Furniture is a leading furniture manufacturer based in Kondotty, Malappuram district,
                Kerala. We specialize in premium sofa sets — from L-shaped sectionals and wooden sofa sets
                to recliner sofas and modular configurations. Every sofa is built in-house at our Kondotty
                factory and delivered directly to your home, eliminating middlemen for the best value.
              </p>
              <p>
                Whether you&apos;re furnishing a new home in Kozhikode, Malappuram, Thrissur, or anywhere
                across Kerala, our team can help you choose the perfect sofa and customize it to your space,
                color, and fabric preference. Visit our showroom or send us an enquiry to get started.
              </p>
            </div>
            <div className="sofas-seo-intro__ctas">
              <a
                href="https://wa.me/919446516395?text=Hello%20MAGNAT%20Furniture%2C%20I%20want%20to%20enquire%20about%20your%20sofa%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="sofas-whatsapp-cta"
              >
                <MessageCircle size={18} strokeWidth={2} />
                WhatsApp Enquiry
              </a>
              <Link href="/contact" className="sofas-contact-cta">
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Count Bar ── */}
      <div className="sofas-count-bar">
        <div className="max-container">
          <p className="sofas-count-text">
            Showing <strong>{sofaProducts.length} sofas</strong> — All handcrafted in Kondotty, Kerala
          </p>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="sofas-grid-section" aria-label="Sofa products">
        <div className="max-container">
          <div className="sofas-grid">
            {sofaProducts.map((product) => (
              <SofaCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO FAQ Section ── */}
      <section className="sofas-faq">
        <div className="max-container">
          <h2 className="sofas-faq__heading">Frequently Asked Questions — Sofas in Kerala</h2>
          <div className="sofas-faq__list">
            {[
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
            ].map((item) => (
              <details key={item.q} className="sofas-faq__item">
                <summary className="sofas-faq__q">
                  {item.q}
                  <ChevronDown className="sofas-faq__icon" size={18} />
                </summary>
                <div className="sofas-faq__a">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Page-Level Styles ── */}
      <style>{`
        .sofas-page {
          padding-top: 80px; /* navbar clearance */
          background: #fafaf9;
          min-height: 100vh;
        }

        /* ── Header ── */
        .sofas-header {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 48px 0 40px;
        }
        .sofas-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #888;
          font-family: var(--font-dm-sans, sans-serif);
          margin-bottom: 28px;
        }
        .sofas-breadcrumb a {
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }
        .sofas-breadcrumb a:hover { color: #C0001A; }
        .sofas-breadcrumb span[aria-current] { color: #111; font-weight: 600; }

        .sofas-title-block { max-width: 680px; }
        .sofas-h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #111;
          font-family: var(--font-playfair, serif);
          margin: 0 0 16px;
        }
        .sofas-h1__accent {
          color: #C0001A;
          font-style: italic;
          font-weight: 400;
        }
        .sofas-subtitle {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
          font-family: var(--font-dm-sans, sans-serif);
          margin: 0 0 28px;
          max-width: 600px;
        }
        .sofas-stats {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .sofas-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sofas-stat__num {
          font-size: 1.5rem;
          font-weight: 700;
          color: #C0001A;
          font-family: var(--font-playfair, serif);
          line-height: 1;
        }
        .sofas-stat__label {
          font-size: 10px;
          color: #888;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: var(--font-dm-sans, sans-serif);
        }
        .sofas-stat__divider {
          width: 1px;
          height: 36px;
          background: #e8e8e8;
        }

        /* ── SEO Intro ── */
        .sofas-seo-intro {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 40px 0;
        }
        .sofas-seo-intro__inner {
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .sofas-seo-intro__left {
          flex: 1;
        }
        .sofas-seo-intro__heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111;
          font-family: var(--font-playfair, serif);
          margin: 0 0 14px;
        }
        .sofas-seo-intro__left p {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-dm-sans, sans-serif);
          margin: 0 0 12px;
        }
        .sofas-seo-intro__ctas {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-shrink: 0;
          min-width: 200px;
        }
        .sofas-whatsapp-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 13px 22px;
          text-decoration: none;
          font-family: var(--font-dm-sans, sans-serif);
          transition: background 0.3s;
          border-radius: 3px;
          justify-content: center;
        }
        .sofas-whatsapp-cta:hover { background: #1ab954; }
        .sofas-contact-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: #111;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 12px 22px;
          text-decoration: none;
          font-family: var(--font-dm-sans, sans-serif);
          border: 1px solid #ddd;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          border-radius: 3px;
        }
        .sofas-contact-cta:hover {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* ── Count Bar ── */
        .sofas-count-bar {
          padding: 14px 0;
          background: #f4f4f2;
          border-bottom: 1px solid #ebebeb;
        }
        .sofas-count-text {
          font-size: 12px;
          color: #666;
          font-family: var(--font-dm-sans, sans-serif);
          margin: 0;
        }
        .sofas-count-text strong { color: #111; }

        /* ── Grid ── */
        .sofas-grid-section {
          padding: 48px 0 64px;
        }
        .sofas-grid {
          display: grid;
          gap: 24px;
          /* Mobile & tablet: 2 columns */
          grid-template-columns: repeat(2, 1fr);
        }
        /* ≥1024px — 3 columns */
        @media (min-width: 1024px) {
          .sofas-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        /* ≥1300px — 4 columns */
        @media (min-width: 1300px) {
          .sofas-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ── FAQ ── */
        .sofas-faq {
          background: #fff;
          border-top: 1px solid #f0f0f0;
          padding: 56px 0;
        }
        .sofas-faq__heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111;
          font-family: var(--font-playfair, serif);
          margin: 0 0 32px;
        }
        .sofas-faq__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 900px;
        }
        .sofas-faq__item {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .sofas-faq__item:hover {
          border-color: #C0001A;
        }
        .sofas-faq__item[open] {
          border-color: #C0001A;
          background: #fafaf9;
        }
        .sofas-faq__q {
          padding: 20px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          font-family: var(--font-playfair, serif);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          user-select: none;
        }
        .sofas-faq__q::-webkit-details-marker {
          display: none;
        }
        .sofas-faq__icon {
          transition: transform 0.3s ease;
          color: #C0001A;
        }
        .sofas-faq__item[open] .sofas-faq__icon {
          transform: rotate(180deg);
        }
        .sofas-faq__a {
          padding: 0 24px 24px;
          font-size: 0.875rem;
          color: #555;
          line-height: 1.7;
          font-family: var(--font-dm-sans, sans-serif);
        }
        .sofas-faq__a p { margin: 0; }



        /* ── Mobile-first: hide heavy content, show images fast ── */

        /* Description — visible on all screens with 2-line clamp */
        .sofa-card__desc { 
          display: -webkit-box !important; 
        }

        /* SEO intro block — desktop only */
        .sofas-seo-intro--desktop-only { display: none; }
        @media (min-width: 768px) {
          .sofas-seo-intro--desktop-only { display: block; }
        }

        /* Header subtitle — hide on mobile */
        .sofas-subtitle--desktop { display: none; }
        @media (min-width: 768px) {
          .sofas-subtitle--desktop { display: block; }
        }

        /* Stats row — hide on mobile */
        .sofas-stats--desktop { display: none; }
        @media (min-width: 768px) {
          .sofas-stats--desktop { display: flex; }
        }



        /* Mobile general tweaks */
        @media (max-width: 767px) {
          .sofas-header { padding: 28px 0 24px; }
          .sofas-breadcrumb { margin-bottom: 16px; }
          .sofas-h1 { font-size: 1.8rem; margin-bottom: 0; }
          .sofas-grid { gap: 12px; }
          .sofas-grid-section { padding: 28px 0 40px; }
          .sofa-card__image-wrap { aspect-ratio: 4 / 3; }
          .sofa-card__body { padding: 10px 12px 14px; min-height: 140px; }
          .sofa-card__material { font-size: 8px; margin-bottom: 5px; }
          .sofa-card__name { font-size: 0.88rem; margin-bottom: 6px; }
          .sofa-card__desc { 
            font-size: 0.72rem; 
            margin-bottom: 12px; 
            max-height: 2.16rem; /* 0.72 * 1.5 * 2 = exact 2 lines */
          }
          .sofa-card__detail-btn { padding: 10px 10px; font-size: 9px; letter-spacing: 0.12em; }
          .sofas-faq { display: none; }
          .sofas-count-bar { padding: 10px 0; }
        }
      `}</style>
    </main>
  );
}
