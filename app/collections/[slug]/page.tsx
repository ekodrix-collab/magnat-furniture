"use client";

import { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

/* ── Static product data keyed by collection slug ── */
const collectionData: Record<string, {
  name: string;
  description: string;
  heroImage: string;
  products: { id: string; name: string; slug: string; images: string[]; short_description: string }[];
}> = {
  "living-room": {
    name: "Living Room",
    description: "Sofas, armchairs, and statement pieces that define your personal style and elevate your everyday living.",
    heroImage: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
    products: [
      { id: "1", name: "Classic Velvet Sofa", slug: "classic-velvet-sofa", images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop"], short_description: "Deep-tufted velvet upholstery with walnut-finished solid wood legs." },
      { id: "3", name: "Leather Armchair", slug: "leather-armchair", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], short_description: "Top-grain Italian leather with hand-stitched detailing." },
      { id: "6", name: "Chesterfield Sofa", slug: "chesterfield-sofa", images: ["https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop"], short_description: "Classic tufted leather sofa with rolled arms." },
      { id: "7", name: "Marble Coffee Table", slug: "marble-coffee-table", images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"], short_description: "Italian Carrara marble top with brass legs." },
    ],
  },
  "dining-room": {
    name: "Dining Room",
    description: "Elegant dining sets crafted for memorable gatherings, shared moments, and celebrations around the table.",
    heroImage: "/images/dining-001.jpg",
    products: [
      { id: "2", name: "Oak Dining Table", slug: "oak-dining-table", images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"], short_description: "European White Oak table seats up to 8." },
      { id: "8", name: "Velvet Dining Chairs", slug: "velvet-dining-chairs", images: ["https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop"], short_description: "Contoured comfort with premium velvet upholstery." },
    ],
  },
  bedroom: {
    name: "Bedroom",
    description: "Sanctuaries of rest featuring our signature beds, wardrobes, and nightstands designed for ultimate comfort.",
    heroImage: "/images/bedroom-001.jpg",
    products: [
      { id: "4", name: "Heritage Canopy Bed", slug: "heritage-canopy-bed", images: ["/images/bedroom-001.jpg"], short_description: "Architectural metal framing with a plush upholstered headboard." },
    ],
  },
  office: {
    name: "Office Furniture",
    description: "Ergonomic designs and premium finishes for executive workspaces that inspire productivity and prestige.",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    products: [
      { id: "5", name: "Executive Desk", slug: "executive-desk", images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"], short_description: "Premium workspace desk with cable management." },
    ],
  },
  sofas: {
    name: "Sofas",
    description: "From classic Chesterfields to modern modular designs — discover sofas that become the heart of your home.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    products: [
      { id: "1", name: "Classic Velvet Sofa", slug: "classic-velvet-sofa", images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop"], short_description: "Deep-tufted velvet upholstery with walnut-finished solid wood legs." },
      { id: "6", name: "Chesterfield Sofa", slug: "chesterfield-sofa", images: ["https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop"], short_description: "Classic tufted leather sofa with rolled arms." },
    ],
  },
  chairs: {
    name: "Chairs",
    description: "Ergonomic armchairs, accent chairs, and dining chairs — each designed for both comfort and visual impact.",
    heroImage: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
    products: [
      { id: "3", name: "Leather Armchair", slug: "leather-armchair", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], short_description: "Top-grain Italian leather with hand-stitched detailing." },
      { id: "8", name: "Velvet Dining Chairs", slug: "velvet-dining-chairs", images: ["https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop"], short_description: "Contoured comfort for dining with premium fabric." },
    ],
  },
  dining: {
    name: "Dining",
    description: "Tables and chairs for the most important room in the house — where families come together.",
    heroImage: "/images/dining-001.jpg",
    products: [
      { id: "2", name: "Oak Dining Table", slug: "oak-dining-table", images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"], short_description: "European White Oak table seats up to 8." },
      { id: "8", name: "Velvet Dining Chairs", slug: "velvet-dining-chairs", images: ["https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop"], short_description: "Contoured comfort with premium velvet upholstery." },
    ],
  },
  "kids-room": {
    name: "Kids Room",
    description: "Comfortable, safe, and imaginative furniture designed for your little ones to grow, play, and dream.",
    heroImage: "/images/kids-room.jpg",
    products: [],
  },
  outdoor: {
    name: "Outdoor",
    description: "Premium materials engineered for outdoor luxury, longevity, and effortless elegance under the open sky.",
    heroImage: "/images/outdoor.jpg",
    products: [],
  },
};

export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const collection = collectionData[slug];

  if (!collection) {
    return (
      <div className="pt-40 pb-32 bg-brand-primary min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-playfair text-5xl font-bold text-[#1A1A1A] mb-6">Collection Not Found</h1>
        <p className="text-body font-light mb-10">The collection you're looking for doesn't exist.</p>
        <Button href="/collections" variant="primary" showArrow>Back to Collections</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-primary">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={collection.heroImage}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/30 to-transparent" />
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-6 lg:px-12 pb-16">
          <FadeInView>
            <Link href="/collections" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C6A969] mb-6 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              All Collections
            </Link>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {collection.name}
            </h1>
            <p className="text-lg text-white/70 font-light max-w-2xl leading-relaxed">
              {collection.description}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          {collection.products.length > 0 ? (
            <>
              <FadeInView>
                <div className="flex items-center justify-between mb-16 border-b border-brand pb-8">
                  <p className="text-sm text-body font-light">
                    Showing <span className="font-semibold text-[#1A1A1A]">{collection.products.length}</span> {collection.products.length === 1 ? "piece" : "pieces"}
                  </p>
                </div>
              </FadeInView>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {collection.products.map((product, index) => (
                  <FadeInView key={product.id} delay={index * 0.08}>
                    <ProductCard product={product} />
                  </FadeInView>
                ))}
              </div>
            </>
          ) : (
            <div className="py-24 text-center">
              <FadeInView>
                <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-4">Coming Soon</h2>
                <p className="text-body font-light italic leading-loose max-w-md mx-auto mb-10">
                  Our artisans are currently crafting exquisite pieces for this collection. Contact us to discuss bespoke options.
                </p>
                <Button href="/contact" variant="primary" showArrow>
                  Discuss Bespoke Options
                </Button>
              </FadeInView>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#EFE7DF] border-y border-brand py-20 px-6 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <FadeInView>
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-4">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-body font-light leading-relaxed">
                We specialize in bespoke furniture. Share your vision and our master designers will bring it to life.
              </p>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Button href="/contact" variant="gold" showArrow className="px-10 py-5 text-sm">
              Request Custom Design
            </Button>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
