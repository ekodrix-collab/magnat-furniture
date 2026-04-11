"use client";

import { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

/* ── Static product data keyed by collection slug ── */
const collectionData: Record<string, {
  name: string;
  description: string;
  heroImage: string;
  products: { id: string; name: string; slug: string; images: string[]; short_description: string; price?: string; categoryName?: string; isNew?: boolean; isBestseller?: boolean }[];
}> = {
  "luxury-living-room-collections": {
    name: "Luxury Living Room",
    description: "Architectural seating and statement pieces that define the modern interior. Hand-curated for the uncompromising connoisseur.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop",
    products: [
      { id: "lr1", name: "Aurelius Modular Sofa", slug: "aurelius-sofa", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000"], short_description: "Top-grain Italian leather with walnut base.", price: "₹2,45,000", categoryName: "Seating", isBestseller: true },
      { id: "lr2", name: "Caspian Velvet Armchair", slug: "caspian-armchair", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000"], short_description: "Deep-tufted velvet with brass accent legs.", price: "₹85,000", categoryName: "Chairs" },
      { id: "lr3", name: "Vesper Marble Coffee Table", slug: "vesper-table", images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000"], short_description: "Hand-picked Carrara marble with steel frame.", price: "₹1,15,000", categoryName: "Tables", isNew: true },
      { id: "lr4", name: "Helios Lounge Chair", slug: "helios-chair", images: ["https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=1000"], short_description: "Ergonomic design in premium teak and leather.", price: "₹92,000", categoryName: "Seating" },
      { id: "lr5", name: "Zenith Media Console", slug: "zenith-console", images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000"], short_description: "Minimalist oak console with hidden cable management.", price: "₹1,35,000", categoryName: "Storage" },
      { id: "lr6", name: "Atlas Sectional", slug: "atlas-sectional", images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000"], short_description: "Expansive comfort in performance linen fabric.", price: "₹3,10,000", categoryName: "Seating" },
    ],
  },
  "designer-dining-furniture": {
    name: "Designer Dining",
    description: "Gather around masterworks of timber and marble. Where every meal becomes a shared moment of architectural beauty.",
    heroImage: "https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop",
    products: [
      { id: "dr1", name: "Solstice Oak Table", slug: "solstice-table", images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000"], short_description: "Solid European white oak dining table seats 8.", price: "₹1,85,000", categoryName: "Tables", isBestseller: true },
      { id: "dr2", name: "Nova Dining Chair", slug: "nova-chair", images: ["https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1000"], short_description: "Contoured back with premium upholstery.", price: "₹18,500", categoryName: "Chairs" },
      { id: "dr3", name: "Lunar Sideboard", slug: "lunar-sideboard", images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000"], short_description: "Walnut sideboard with hand-carved textures.", price: "₹1,45,000", categoryName: "Storage", isNew: true },
      { id: "dr4", name: "Tiber Round Table", slug: "tiber-table", images: ["https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000"], short_description: "Compact marble-top bistro table for 4.", price: "₹75,000", categoryName: "Tables" },
      { id: "dr5", name: "Solis Bench", slug: "solis-bench", images: ["https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000"], short_description: "Minimalist oak bench with fabric cushion.", price: "₹42,000", categoryName: "Seating" },
      { id: "dr6", name: "Elite Bar Stool", slug: "elite-stool", images: ["https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000"], short_description: "Sleek industrial design for modern bars.", price: "₹12,400", categoryName: "Chairs" },
    ],
  },
  "bespoke-bedroom-sanctuaries": {
    name: "Bedroom Sanctuaries",
    description: "Retreat into luxury. Precision-engineered beds and storage designed for ultimate restoration and privacy.",
    heroImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    products: [
      { id: "br1", name: "Heritage Canopy Bed", slug: "heritage-bed", images: ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1000"], short_description: "Solid walnut frame with upholstered headboard.", price: "₹2,10,000", categoryName: "Beds", isBestseller: true },
      { id: "br2", name: "Odessa Nightstand", slug: "odessa-stand", images: ["https://images.unsplash.com/photo-1532372320978-9a4d0ecf432b?q=80&w=1000"], short_description: "Twin-drawer stand with brass hardware.", price: "₹32,000", categoryName: "Storage" },
      { id: "br3", name: "Lyra Dresser", slug: "lyra-dresser", images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000"], short_description: "6-drawer dress in American walnut finish.", price: "₹1,25,000", categoryName: "Storage", isNew: true },
      { id: "br4", name: "Astra Platform Bed", slug: "astra-bed", images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000"], short_description: "Japanese-inspired low-profile oak bed.", price: "₹1,65,000", categoryName: "Beds" },
      { id: "br5", name: "Comet Bench", slug: "comet-bench", images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000"], short_description: "End-of-bed bench in premium navy velvet.", price: "₹48,000", categoryName: "Seating" },
    ],
  },
  "custom-interior-systems": {
    name: "Custom Systems",
    description: "Intelligent window and light management. Tailored solutions that define the atmosphere of your space.",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop",
    products: [
      { id: "cs1", name: "Motorized Zebra Blinds", slug: "zebra-blinds", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000"], short_description: "Smart-home integrated dual-layer blinds.", price: "Custom", categoryName: "Window Systems", isBestseller: true },
      { id: "cs2", name: "Velvet Blackout Curtains", slug: "velvet-curtains", images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000"], short_description: "Floor-to-ceiling soundproof velvet drapes.", price: "Custom", categoryName: "Curtains" },
      { id: "cs3", name: "Honeycomb Solar Blinds", slug: "honeycomb-blinds", images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1000"], short_description: "Energy-efficient cellular blinds for Kerala's tropical light.", price: "Custom", categoryName: "Window Systems", isNew: true },
    ],
  },
};

export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const collection = collectionData[slug];

  if (!collection) {
    return (
      <div className="pt-40 pb-32 bg-[#F7F4F0] dark:bg-zinc-950 min-h-screen flex flex-col items-center justify-center transition-colors duration-500">
        <FadeInView align="center">
          <h1 className="font-playfair text-5xl font-bold text-[#111] dark:text-white mb-6">Collection Not Found</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-light mb-10 max-w-md">The curation you're looking for might have been moved or updated.</p>
          <Link href="/collections" className="btn-red">Back to Collections</Link>
        </FadeInView>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4F0] dark:bg-zinc-950 transition-colors duration-500 pt-20 md:pt-28">
      
      {/* ============================================
          EDITORIAL HERO — PARALLAX HEADER
          ============================================ */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-end">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
           <Image
            src={collection.heroImage}
            alt={collection.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        <div className="max-container relative z-10 pb-20 w-full">
          <FadeInView className="max-w-4xl">
            <Link 
              href="/collections" 
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/70 hover:text-[#C0001A] transition-all mb-8 group"
            >
              <div className="w-8 h-px bg-white/30 group-hover:bg-[#C0001A] group-hover:w-12 transition-all" />
              All Portfolios
            </Link>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter">
              {collection.name}
            </h1>
            
            <p className="text-xl text-white/80 font-light max-w-2xl leading-relaxed">
              {collection.description}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ============================================
          SHOP CONTEXT — FILTERS & GRID
          ============================================ */}
      <section className="py-24">
        <div className="max-container">
          {collection.products.length > 0 ? (
            <>
              {/* Refined Filter Bar */}
              <FadeInView>
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-8 border-b border-zinc-200 dark:border-zinc-800 gap-6">
                   <div className="flex items-center gap-8">
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Curation</span>
                         <span className="text-sm font-semibold dark:text-white uppercase tracking-widest">{collection.name}</span>
                      </div>
                      <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Availability</span>
                         <span className="text-sm font-semibold dark:text-white uppercase tracking-widest">{collection.products.length} Pieces</span>
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest dark:text-white hover:bg-[#C0001A] hover:border-[#C0001A] hover:text-white transition-all">
                         Filter by Category
                      </button>
                      <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest dark:text-white hover:bg-[#C0001A] hover:border-[#C0001A] hover:text-white transition-all">
                         Sort By
                      </button>
                   </div>
                </div>
              </FadeInView>

              {/* Advanced Shop Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {collection.products.map((product, index) => (
                  <FadeInView key={product.id} delay={index * 0.08}>
                    <ProductCard product={product} />
                  </FadeInView>
                ))}
              </div>
            </>
          ) : (
            <div className="py-32 text-center max-w-2xl mx-auto space-y-12">
              <FadeInView align="center">
                <div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mx-auto mb-8">
                   <span className="text-zinc-300">Coming</span>
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold dark:text-white mb-6">Artisanally Crafting</h2>
                <p className="text-zinc-500 dark:text-zinc-400 font-light italic leading-loose text-lg">
                  Our master craftsmen in Kondotty are currently hand-curating new additions for this collection. 
                  Every piece undergoes rigorous quality checks before arrival.
                </p>
                <div className="pt-8">
                   <Link href="/contact" className="btn-red">Inquire About Pre-launch Pieces</Link>
                </div>
              </FadeInView>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          BESPOKE FOOTER CALLOUT
          ============================================ */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-24">
        <div className="max-container flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeInView className="max-w-2xl text-center md:text-left">
            <span className="text-[#C0001A] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Tailored Luxury</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold dark:text-white mb-6">
              Didn't find the perfect match?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light">
              We specialize in custom-engineered furniture solutions. Share your blueprints 
              or vision, and our designers will provide a detailed execution plan.
            </p>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Link href="/contact" className="px-12 py-5 bg-[#C0001A] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-950 transition-all shadow-xl rounded-sm">
              Request Bespoke Design
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
