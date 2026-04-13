import { Metadata } from "next";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import ProductClientPage from "./ProductClientPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | MAGNAT™ Furniture",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | Premium Furniture by MAGNAT™`,
    description: product.short_description || product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | MAGNAT™`,
      description: product.short_description || product.description.slice(0, 160),
      images: [
        {
          url: product.images[0] || "/images/placeholder-furniture.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    // Will naturally pass null to client page, which will render the 404 UI
    return <ProductClientPage product={null} relatedProducts={[]} />;
  }

  const relatedProducts = await getRelatedProducts(product.category, slug);

  return <ProductClientPage product={product} relatedProducts={relatedProducts} />;
}