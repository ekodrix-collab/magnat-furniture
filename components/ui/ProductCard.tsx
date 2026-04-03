import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: Partial<Product>;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, short_description, images, slug } = product;
  const mainImage = images?.[0] || "/images/placeholder-furniture.jpg";

  return (
    <div className="product-card group relative">
      <div className="product-card-img relative h-[400px] overflow-hidden">
        <Image
          src={mainImage}
          alt={name || "Premium Furniture"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-10 items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/products/${slug}`}
            className="flex items-center gap-2 bg-white px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-white"
          >
            Details
          </Link>
          <a
            href={`https://wa.me/919074477358?text=Hi, I am interested in ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1A1A1A] px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#8B1E1E]"
          >
            Enquire
          </a>
        </div>
      </div>

      <div className="p-6 text-center">
        <span className="mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A969]">
          Premium Collection
        </span>
        <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A]">
          <Link href={`/products/${slug}`} className="hover:text-[#8B1E1E] transition-colors">
            {name}
          </Link>
        </h3>
        {short_description && (
          <p className="mt-2 line-clamp-2 text-sm text-[#5A5A5A]">
            {short_description}
          </p>
        )}
      </div>
    </div>
  );
}
