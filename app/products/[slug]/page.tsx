"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";
import { CheckCircle2, MessageCircle, Info, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

/* ── Full product catalog keyed by slug ── */
const productCatalog: Record<string, {
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
}> = {
  "classic-velvet-sofa": {
    name: "Classic Velvet Sofa",
    category: "Living Room",
    description: "Our Classic Velvet Sofa is the embodiment of timeless luxury. Featuring traditional deep-tufted upholstery and sustainably sourced walnut-finished solid wood legs, this piece is designed to be the centerpiece of any sophisticated living environment. The premium velvet fabric is both incredibly soft to the touch and highly durable, ensuring that your investment maintains its beauty for years to come. Hand-crafted by our master artisans in Kerala with 25 years of expertise.",
    features: ["Traditional Deep-Tufted Upholstery", "Sustainable Solid Walnut Legs", "High-Density Premium Foam Core", "Solid Teak Wood Internal Frame", "5-Year Structural Warranty"],
    specifications: [{ label: "Width", value: "220 cm" }, { label: "Depth", value: "95 cm" }, { label: "Height", value: "85 cm" }, { label: "Leg Material", value: "Solid Walnut" }, { label: "Upholstery", value: "Premium Italian Velvet" }],
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "oak-dining-table": {
    name: "Scandinavian Oak Dining Table",
    category: "Dining Room",
    description: "Minimalist in form yet rich in character, our Scandinavian Oak Dining Table is crafted from sustainably sourced European White Oak. The natural grain patterns make each table uniquely beautiful. Designed to seat up to 8 guests comfortably, it features a gently rounded edge profile and subtly tapered legs that embody modern Scandinavian design principles. A centerpiece for memorable family gatherings.",
    features: ["European White Oak Construction", "Natural Oil Finish", "Seats Up to 8 Guests", "Rounded Edge Profile", "10-Year Structural Warranty"],
    specifications: [{ label: "Length", value: "240 cm" }, { label: "Width", value: "100 cm" }, { label: "Height", value: "76 cm" }, { label: "Material", value: "European White Oak" }, { label: "Finish", value: "Natural Oil" }],
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    ],
  },
  "leather-armchair": {
    name: "Empiric Leather Armchair",
    category: "Living Room",
    description: "The Empiric Leather Armchair is a testament to Italian leathercraft married with Kerala woodworking tradition. Upholstered in top-grain Italian leather with meticulous hand-stitched detailing, every seam speaks of dedication. The ergonomic design cradles you in comfort, while the solid rosewood frame ensures decades of reliable service. Perfect for a reading nook or a statement accent piece.",
    features: ["Top-Grain Italian Leather", "Hand-Stitched Detailing", "Ergonomic Contoured Design", "Solid Rosewood Frame", "5-Year Structural Warranty"],
    specifications: [{ label: "Width", value: "82 cm" }, { label: "Depth", value: "90 cm" }, { label: "Height", value: "95 cm" }, { label: "Frame", value: "Solid Rosewood" }, { label: "Upholstery", value: "Italian Full-Grain Leather" }],
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "heritage-canopy-bed": {
    name: "Heritage Canopy Bed",
    category: "Bedroom",
    description: "The Heritage Canopy Bed transforms your bedroom into a royal sanctuary. Its architectural metal framing is complemented by a plush, deeply padded upholstered headboard that invites you to unwind. The canopy structure adds vertical drama and pairs beautifully with sheer drapes for a romantic, sophisticated atmosphere. Built on a solid teak platform for exceptional support.",
    features: ["Architectural Metal Canopy Frame", "Plush Upholstered Headboard", "Solid Teak Wood Platform", "Integrated Slat Support System", "5-Year Structural Warranty"],
    specifications: [{ label: "Size", value: "King (180×200 cm)" }, { label: "Headboard Height", value: "140 cm" }, { label: "Canopy Height", value: "220 cm" }, { label: "Frame", value: "Powder-Coated Steel" }, { label: "Platform", value: "Solid Teak" }],
    images: [
      "/images/bedroom-001.jpg",
      "https://images.unsplash.com/photo-1505693314120-0d4438678217?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    ],
  },
  "executive-desk": {
    name: "Executive Desk",
    category: "Office",
    description: "Command your workspace with our Executive Desk, designed for professionals who demand both form and function. The expansive desktop provides ample room for dual monitors, while integrated cable management channels keep your workspace pristine. Crafted from premium walnut with a hand-rubbed satin finish, it features discrete storage compartments and soft-close drawers.",
    features: ["Premium Walnut Construction", "Integrated Cable Management", "Soft-Close Drawers", "Hand-Rubbed Satin Finish", "Ergonomic Desktop Height"],
    specifications: [{ label: "Width", value: "180 cm" }, { label: "Depth", value: "85 cm" }, { label: "Height", value: "76 cm" }, { label: "Material", value: "Solid Walnut" }, { label: "Finish", value: "Hand-Rubbed Satin" }],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1964&auto=format&fit=crop",
    ],
  },
  "chesterfield-sofa": {
    name: "Chesterfield Sofa",
    category: "Living Room",
    description: "Our Chesterfield Sofa brings the timeless elegance of the 18th-century British design into the modern era. Hand-tufted in premium full-grain leather with individually placed brass nail-head trim, this sofa is the epitome of classical luxury. The deep button tufting provides excellent lumbar support, while the rolled arms and low backrest create an inviting silhouette.",
    features: ["Full-Grain Leather Upholstery", "Hand-Tufted Button Detail", "Brass Nail-Head Trim", "Rolled Arm Design", "Kiln-Dried Hardwood Frame"],
    specifications: [{ label: "Width", value: "230 cm" }, { label: "Depth", value: "100 cm" }, { label: "Height", value: "78 cm" }, { label: "Material", value: "Full-Grain Leather" }, { label: "Frame", value: "Kiln-Dried Hardwood" }],
    images: [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "marble-coffee-table": {
    name: "Marble Coffee Table",
    category: "Living Room",
    description: "The Marble Coffee Table is where art meets utility. Topped with a slab of genuine Italian Carrara marble with its signature veining, it rests on brushed brass legs that catch the light beautifully. Each marble surface is unique due to the natural stone patterns, making your table truly one-of-a-kind. A refined focal point for any contemporary living room.",
    features: ["Italian Carrara Marble Top", "Brushed Brass Legs", "Unique Natural Veining", "Protective Sealant Finish", "Anti-Scratch Felt Pads"],
    specifications: [{ label: "Diameter", value: "100 cm" }, { label: "Height", value: "42 cm" }, { label: "Top Material", value: "Carrara Marble" }, { label: "Legs", value: "Brushed Brass" }, { label: "Weight", value: "45 kg" }],
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1964&auto=format&fit=crop",
    ],
  },
  "velvet-dining-chairs": {
    name: "Velvet Dining Chairs",
    category: "Dining Room",
    description: "Elevate every meal with our Velvet Dining Chairs, designed for contoured comfort and visual warmth. The ergonomically shaped backrest supports your posture during long dinner conversations. Premium velvet upholstery in rich jewel tones pairs beautifully with any dining table, while the solid oak legs provide unwavering stability. Sold as a set of two.",
    features: ["Ergonomic Contoured Backrest", "Premium Velvet Upholstery", "Solid Oak Legs", "Stain-Resistant Treatment", "Sold as a Set of 2"],
    specifications: [{ label: "Width", value: "50 cm" }, { label: "Depth", value: "58 cm" }, { label: "Height", value: "88 cm" }, { label: "Seat Height", value: "46 cm" }, { label: "Upholstery", value: "Premium Velvet" }],
    images: [
      "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616137422495-1e96aadd3461?q=80&w=2000&auto=format&fit=crop",
    ],
  },
};

/* ── Related products helper ── */
const allProductSlugs = Object.keys(productCatalog);
function getRelatedProducts(currentSlug: string) {
  return allProductSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 3)
    .map((s) => ({
      id: s,
      name: productCatalog[s].name,
      slug: s,
      images: [productCatalog[s].images[0]],
      short_description: productCatalog[s].description.slice(0, 80) + "…",
    }));
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = productCatalog[slug];

  /* ── Fallback for unknown slugs ── */
  if (!product) {
    return (
      <div className="pt-40 pb-32 bg-brand-primary min-h-screen flex flex-col items-center justify-center">
        <FadeInView>
          <div className="text-center">
            <h1 className="font-playfair text-5xl font-bold text-[#1A1A1A] mb-6">Product Not Found</h1>
            <p className="text-body font-light mb-10 max-w-md mx-auto">The product you&apos;re looking for is currently unavailable. Browse our curated catalog for other exquisite pieces.</p>
            <Button href="/products" variant="primary" showArrow>Browse All Products</Button>
          </div>
        </FadeInView>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(slug);
  const whatsappLink = `https://wa.me/919074477358?text=${encodeURIComponent(`Hi Magnat Furniture, I'm interested in viewing more details about the "${product.name}"`)}`;

  return (
    <div className="pt-32 pb-32 bg-brand-primary min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 mt-12">
        {/* Breadcrumb */}
        <FadeInView>
          <Link href="/products" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C6A969] mb-10 hover:text-[#8B1E1E] transition-colors">
            <ArrowLeft size={14} />
            Back to Products
          </Link>
        </FadeInView>

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
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                    sizes="(max-width: 1024px) 50vw, 25vw"
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
                Each piece we deliver is not just furniture, but a legacy of 25 years of master craftsmanship. We guarantee that your custom-made piece is crafted from the finest materials and handled with absolute care until it reaches your doorstep.
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
