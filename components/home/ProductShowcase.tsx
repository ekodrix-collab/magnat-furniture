"use client";

import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";

const featuredProducts = [
  {
    id: "1",
    name: "Classic Velvet Sofa",
    slug: "classic-velvet-sofa",
    short_description: "Deep-tufted velvet upholstery with walnut-finished solid wood legs. A masterpiece of comfort.",
    images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop"],
  },
  {
    id: "2",
    name: "Scandinavian Oak Dining",
    slug: "oak-dining-table",
    short_description: "Minimalist dining table crafted from sustainably sourced European White Oak. Seats up to 8.",
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"],
  },
  {
    id: "3",
    name: "Empiric Leather Armchair",
    slug: "leather-armchair",
    short_description: "Top-grain Italian leather with hand-stitched detailing. Ergonomic design for ultimate leisure.",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"],
  },
  {
    id: "4",
    name: "Heritage Canopy Bed",
    slug: "heritage-canopy-bed",
    short_description: "Architectural metal framing with a plush upholstered headboard. The center-piece of your sanctuary.",
    images: ["/images/bedroom-001.jpg"],
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-brand-primary py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <SectionHeading
            label="Featured Products"
            title="The Art of Comfort"
            subtitle="Explore our most popular pieces, each representing the pinnacle of design and durability. Meticulously crafted for your home."
            className="max-w-2xl"
          />
          <FadeInView delay={0.4}>
            <Button href="/products" variant="outline" showArrow>
              View All Products
            </Button>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product, index) => (
            <FadeInView key={product.id} delay={0.1 * index}>
              <ProductCard product={product} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
