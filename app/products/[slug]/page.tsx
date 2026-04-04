"use client";

import { use } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";
import { CheckCircle2, MessageCircle, Share2, Info } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

const relatedProducts = [
  { id: "2", name: "Oak Dining Table", slug: "oak-dining-table", images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"], short_description: "European White Oak table." },
  { id: "3", name: "Leather Armchair", slug: "leather-armchair", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"], short_description: "Top-grain Italian leather." },
  { id: "4", name: "Canopy Bed", slug: "heritage-canopy-bed", images: ["https://images.unsplash.com/photo-1505693314120-0d4438678217?q=80&w=2070&auto=format&fit=crop"], short_description: "Architectural metal framing." },
];

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Mock data for detail page
  const product = {
    name: "Classic Velvet Sofa",
    category: "Living Room",
    description: "Our Classic Velvet Sofa is the embodiment of timeless luxury. Featuring traditional deep-tufted upholstery and sustainably sourced walnut-finished solid wood legs, this piece is designed to be the centerpiece of any sophisticated living environment. The premium velvet fabric is both incredibly soft to the touch and highly durable, ensuring that your investment maintains its beauty for years to come. Hand-crafted by our master artisans in Kerala with 25 years of expertise.",
    features: [
      "Traditional Deep-Tufted Upholstery",
      "Sustainable Solid Walnut Legs",
      "High-Density Premium Foam Core",
      "Solid Teak Wood Internal Frame",
      "5-Year Structural Warranty",
    ],
    specifications: [
      { label: "Width", value: "220 cm" },
      { label: "Depth", value: "95 cm" },
      { label: "Height", value: "85 cm" },
      { label: "Leg Material", value: "Solid Walnut" },
      { label: "Upholstery", value: "Premium Italian Velvet" },
    ],
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
  };

  const whatsappLink = `https://wa.me/919074477358?text=${encodeURIComponent(`Hi Magnat Furniture, I'm interested in viewing more details about the "${product.name}"`)}`;

  return (
    <div className="pt-32 pb-32 bg-brand-primary min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 mt-12">
        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* Images Grid */}
          <div className="space-y-6">
            <FadeInView direction="none" duration={1.2}>
              <div className="relative h-[600px] overflow-hidden border border-brand group">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeInView>
            <div className="grid grid-cols-2 gap-6">
              {product.images.slice(1).map((img, i) => (
                <FadeInView key={i} delay={0.2 + i * 0.1} direction="up" className="relative h-64 overflow-hidden border border-brand group">
                  <Image
                    src={img}
                    alt={`${product.name} Detail ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </FadeInView>
              ))}
            </div>
          </div>

          {/* Content info */}
          <div className="flex flex-col">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C6A969] bg-white px-3 py-1 border border-brand">
                  {product.category}
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-body">
                  In Stock
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-body leading-relaxed font-light mb-12 italic border-l-2 border-[#8B1E1E] pl-8">
                {product.description}
              </p>
            </FadeInView>

            {/* Features */}
            <FadeInView delay={0.2} className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-8 flex items-center gap-2">
                <Info size={16} className="text-[#C6A969]" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                    <CheckCircle2 size={16} className="text-[#8B1E1E] shrink-0" />
                    <span className="font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Specs */}
            <FadeInView delay={0.3} className="mb-16">
              <div className="border-t border-brand pt-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
                  {product.specifications.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A969] mb-2">{spec.label}</span>
                      <span className="text-sm text-[#1A1A1A] font-medium tracking-widest">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Actions */}
            <FadeInView delay={0.4} className="mt-auto flex flex-col sm:flex-row gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#8B1E1E] hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <MessageCircle size={20} fill="currentColor" />
                Enquire Now
              </a>
              <Button href="/contact" variant="outline" className="flex-1 border-[#1A1A1A] px-10 py-5">
                Visit our Showroom
              </Button>
            </FadeInView>
          </div>
        </div>

        {/* Brand Guarantee */}
        <FadeInView direction="up">
          <div className="bg-[#EFE7DF] border border-brand p-12 mb-32 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-4">The Magnat Guarantee</h2>
              <p className="text-body font-light italic leading-loose">
                "Each piece we deliver is not just furniture, but a legacy of 25 years of master craftsmanship. We guarantee that your custom-made piece is crafted from the finest materials and handled with absolute care until it reaches your doorstep."
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center h-32 w-32 rounded-full border-2 border-[#C6A969] border-dashed">
              <span className="font-playfair text-xl font-bold text-[#8B1E1E]">Est. 2001</span>
            </div>
          </div>
        </FadeInView>

        {/* Related Products */}
        <div>
          <SectionHeading
            label="Curated for you"
            title="Complete the Look"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProducts.map((p, i) => (
              <FadeInView key={p.id} delay={i * 0.1}>
                <ProductCard product={p} />
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
