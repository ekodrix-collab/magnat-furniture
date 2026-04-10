// app/products/[slug]/page.tsx
"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeInView from "@/components/ui/FadeInView";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, MessageCircle, Phone, Mail, CheckCircle2, 
  Ruler, Palette, Shield, Truck, ChevronLeft, ChevronRight,
  Share2, Heart
} from "lucide-react";

/* ── Product catalog (keep your existing data) ── */
const productCatalog: Record<string, {
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  price: string;
  deliveryTime: string;
}> = {
  "classic-velvet-sofa": {
    name: "Classic Velvet Sofa",
    category: "Living Room",
    price: "₹1,85,000",
    deliveryTime: "4-6 weeks",
    description: "Our Classic Velvet Sofa isn't just furniture—it's a statement of refined taste. Hand-tufted by master craftsmen in our Kondotty workshop, each piece takes over 120 hours to complete. The premium velvet we use is sourced from Italian mills, chosen for its exceptional softness and durability. The walnut legs are hand-finished with traditional Kerala woodworking techniques passed down through generations.",
    features: [
      "Hand-Tufted Premium Italian Velvet",
      "Sustainable Solid Walnut Legs",
      "High-Density Premium Foam Core",
      "Solid Teak Internal Frame",
      "5-Year Structural Warranty",
      "Made in Kondotty, Kerala"
    ],
    specifications: [
      { label: "Width", value: "220 cm" },
      { label: "Depth", value: "95 cm" },
      { label: "Height", value: "85 cm" },
      { label: "Leg Material", value: "Solid Walnut" },
      { label: "Upholstery", value: "Premium Italian Velvet" },
      { label: "Weight Capacity", value: "400 kg" }
    ],
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  // ... keep your other products
};

const allProductSlugs = Object.keys(productCatalog);

function getRelatedProducts(currentSlug: string) {
  return allProductSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 3)
    .map((s) => ({
      slug: s,
      name: productCatalog[s].name,
      images: [productCatalog[s].images[0]],
      short_description: productCatalog[s].description.slice(0, 80) + "…",
      price: productCatalog[s].price,
      categoryName: productCatalog[s].category
    }));
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = productCatalog[slug];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="pt-40 pb-32 bg-white min-h-screen flex flex-col items-center justify-center">
        <FadeInView>
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold text-[#111111] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Product Not Found
            </h1>
            <p className="text-[#666666] font-light mb-10 leading-relaxed">
              The product you're looking for is currently unavailable. Browse our curated catalog for other exquisite pieces.
            </p>
            <Link href="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </FadeInView>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(slug);
  const whatsappLink = `https://wa.me/919446516395?text=${encodeURIComponent(`Hi MAGNAT Furniture, I'm interested in the ${product.name}. Can you provide more details?`)}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="pt-24 pb-32 bg-white min-h-screen">
      <div className="max-container">
        
        {/* ── Breadcrumb Navigation ── */}
        <FadeInView className="py-8">
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Link href="/" className="hover:text-[#C0001A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#C0001A] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#111111] font-medium">{product.name}</span>
          </div>
        </FadeInView>

        {/* ── Product Main Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          
          {/* ══════ LEFT: Image Gallery ══════ */}
          <div className="space-y-6">
            {/* Main Image with Gallery */}
            <FadeInView direction="none" duration={1.2}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f9f9f9] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full">
                  {currentImageIndex + 1} / {product.images.length}
                </div>

                {/* Wishlist & Share */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      isLiked ? "bg-[#C0001A] text-white" : "bg-white/90 hover:bg-white text-[#111111]"
                    }`}
                  >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </FadeInView>

            {/* Thumbnail Grid */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`relative aspect-square overflow-hidden bg-[#f9f9f9] transition-all ${
                      currentImageIndex === i ? "ring-2 ring-[#C0001A] ring-offset-2" : "opacity-60 hover:opacity-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} Thumbnail ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 15vw"
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* ══════ RIGHT: Product Info ══════ */}
          <div className="flex flex-col">
            <FadeInView>
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 bg-[#C0001A]/10 text-[#C0001A] text-[9px] font-bold tracking-[0.3em] uppercase">
                  {product.category}
                </span>
                <span className="flex items-center gap-2 text-xs text-[#666666]">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  In Stock
                </span>
              </div>

              {/* Product Name */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {product.name}
              </h1>

              {/* Price & Delivery */}
              <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-[#eeeeee] mb-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] block mb-1">Price</span>
                  <span className="text-3xl font-bold text-[#111111]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {product.price}
                  </span>
                </div>
                <div className="w-px h-12 bg-[#eeeeee]"></div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] block mb-1">Delivery</span>
                  <span className="text-sm font-medium text-[#111111]">{product.deliveryTime}</span>
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-[#666666] text-base leading-relaxed font-light mb-8"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {product.description}
              </p>
            </FadeInView>

            {/* Key Features */}
            <FadeInView delay={0.2} className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#111111] mb-6 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#C0001A]" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-[#111111]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C0001A] mt-2 shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInView>

            {/* Specifications */}
            <FadeInView delay={0.3} className="mb-10">
              <div className="p-6 bg-[#f9f9f9] rounded-lg">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#111111] mb-6 flex items-center gap-2">
                  <Ruler size={18} className="text-[#C0001A]" />
                  Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {product.specifications.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-[#666666] mb-2">
                        {spec.label}
                      </span>
                      <span className="text-sm text-[#111111] font-semibold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* CTA Buttons */}
            <FadeInView delay={0.4} className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={20} fill="currentColor" />
                WhatsApp Us
              </a>
              
              <a
                href="tel:+919446516395"
                className="flex-1 flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#C0001A] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </FadeInView>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#eeeeee]">
              {[
                { icon: Shield, text: "5-Year Warranty" },
                { icon: Truck, text: "Free Delivery" },
                { icon: Palette, text: "Customizable" },
                { icon: CheckCircle2, text: "Made in Kerala" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <item.icon className="text-[#C0001A] mb-2" size={24} />
                  <span className="text-[10px] uppercase tracking-wider text-[#666666]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAGNAT Guarantee Section ── */}
        <FadeInView direction="up" className="mb-32">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#f9f9f9] to-white border border-[#eeeeee] p-12 md:p-16 rounded-2xl">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C0001A]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-[#C0001A]" size={32} />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#111111]" style={{ fontFamily: "var(--font-playfair)" }}>
                    The MAGNAT™ Guarantee
                  </h2>
                </div>
                <p className="text-[#666666] font-light leading-relaxed text-lg">
                  Each piece we deliver isn't just furniture—it's a legacy of 25 years of master craftsmanship. 
                  We guarantee that your piece is crafted from the finest materials and handled with absolute care 
                  until it reaches your doorstep. Made in Kondotty, trusted across Kerala.
                </p>
              </div>
              
              <div className="shrink-0 flex items-center justify-center h-32 w-32 rounded-full border-2 border-[#C0001A] border-dashed">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C0001A]" style={{ fontFamily: "var(--font-playfair)" }}>Est.</div>
                  <div className="text-3xl font-bold text-[#111111]" style={{ fontFamily: "var(--font-playfair)" }}>2001</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* ── Related Products ── */}
        <div>
          <FadeInView>
            <div className="text-center mb-16">
              <span className="heading-label">Complete Your Space</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
                You Might Also Love
              </h2>
            </div>
          </FadeInView>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, i) => (
              <FadeInView key={p.slug} delay={i * 0.1}>
                <ProductCard product={p} />
              </FadeInView>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}