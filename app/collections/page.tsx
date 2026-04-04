import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const collections = [
  {
    name: "Living Room",
    slug: "living-room",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
    description: "Sofas, armchairs, and coffee tables that define your personal style.",
  },
  {
    name: "Dining Room",
    slug: "dining-room",
    image: "/images/dining-001.jpg",
    description: "Elegant dining sets for memorable gatherings and shared moments.",
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    image: "/images/bedroom-001.jpg",
    description: "Sancutaries of rest featuring our signature beds and wardrobes.",
  },
  {
    name: "Office Furniture",
    slug: "office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    description: "Ergonomic designs and premium finishes for executive workspaces.",
  },
  {
    name: "Kids Room",
    slug: "kids-room",
    image: "/images/kids-room.jpg",
    description: "Comfortable and safe environments designed for your little ones.",
  },
  {
    name: "Outdoor",
    slug: "outdoor",
    image: "/images/outdoor.jpg",
    description: "Premium materials engineered for outdoor luxury and longevity.",
  },
];

export const metadata = {
  title: "Premium Collections",
  description: "Explore the curated collections of Magnat Furniture — from luxury living rooms to bespoke executive offices.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-brand-primary">
      <div className="container mx-auto px-6 lg:px-12 mt-12">
        <SectionHeading
          label="The Curated World"
          title="Our Collections"
          subtitle="Explore our thoughtfully designed categories, each offering a unique perspective on luxury living and master craftsmanship."
          align="center"
          className="mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {collections.map((collection, index) => (
            <FadeInView key={collection.slug} delay={index * 0.1}>
              <Link href={`/products?category=${collection.slug}`} className="group block relative h-[500px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-10 pt-24 bg-gradient-to-t from-[#1A1A1A] to-transparent">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">
                    {collection.name}
                  </h3>
                  <p className="text-white/70 text-sm font-light mb-8 max-w-xs group-hover:text-white transition-colors">
                    {collection.description}
                  </p>
                  <div className="inline-flex items-center gap-3 text-white text-[0.65rem] font-bold uppercase tracking-[0.25em]">
                    Discover Collection
                    <div className="h-[1px] w-8 bg-[#C6A969] transition-all group-hover:w-16" />
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
