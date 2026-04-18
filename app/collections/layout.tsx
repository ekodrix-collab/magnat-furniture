// app/collections/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Furniture Collections | Magnat Furniture Kondotty",
  description:
    "Explore our signature furniture collections. From heritage craftsmanship to modern luxury designs. Custom-made sofas, dining sets, and curtains curated for your home in Kerala.",
  keywords: [
    "furniture collections kondotty",
    "magnat furniture collections",
    "luxury home furniture kerala",
    "sofa collections malappuram",
    "custom furniture designs kondotty",
    "premium furniture showroom kerala",
    "best furniture catalog kondotty",
    "modern furniture collections kerala",
  ],
  openGraph: {
    title: "Signature Furniture Collections | Magnat Furniture",
    description:
      "A curated collection of Magnat's finest furniture. Handcrafted in Kondotty with 25 years of excellence.",
    url: "https://magnat.in/collections",
  },
  alternates: { canonical: "https://magnat.in/collections" },
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
