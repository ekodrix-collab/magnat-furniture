// app/products/dining/page.tsx
import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Dining Sets in Kerala | Teak & Glass Dining Tables | MAGNAT™",
  description:
    "Explore MAGNAT's handcrafted dining collection — 6-seater wooden dining tables, 8-seater luxury sets, and marble top tables. Manufactured in Kondotty, Kerala.",
  keywords: [
    "dining table Kondotty",
    "wooden dining Kerala",
    "6 seater dining table Malappuram",
    "marble dining set Kondotty",
    "luxury dining Kerala",
    "teak dining table Kondotty",
    "MAGNAT furniture dining",
  ],
  alternates: { canonical: "https://magnat.in/products/dining" },
  robots: { index: true, follow: true },
};

const diningProducts = [
  { slug: "kondotty-teak-6-seater", name: "Kondotty Teak 6-Seater", description: "Solid Kerala teakwood matching set with upholstered linen chairs.", image: "https://images.unsplash.com/photo-1617325247661-675eab2bdca6?q=80&w=1200", badge: "Best Seller", material: "Kerala Teak" },
  { slug: "marble-edge-8-seater", name: "Marble Edge 8-Seater", description: "Stunning Italian marble top supported by an architectural metallic frame. Includes 8 velvet chairs.", image: "https://images.unsplash.com/photo-1543881075-802521743fef?q=80&w=1200", badge: "Premium", material: "Marble & Metal" },
  { slug: "scandi-oak-table", name: "Scandi Oak Set", description: "Minimalist Scandinavian design featuring curved oak chairs and a bright natural grain table top.", image: "https://images.unsplash.com/photo-1620864388836-e62aaeaf8247?q=80&w=1200", badge: "New Arrival", material: "Solid Oak" },
  { slug: "heritage-carved-mahogany", name: "Heritage Carved Mahogany", description: "Traditional heavy carving on a 100% solid mahogany frame. Includes 6 high-back formal chairs.", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1200", badge: "Classic", material: "Mahogany Wood" },
  { slug: "glass-horizon-table", name: "Glass Horizon Set", description: "Tempered float glass atop a structured wooden pedestal. Accompanied by leatherETTE bucket chairs.", image: "https://images.unsplash.com/photo-1582283084852-c2e88a03caad?q=80&w=1200", badge: null, material: "Glass & Wood" },
  { slug: "walnut-drop-leaf", name: "Walnut Drop-Leaf", description: "A smart space-saving solution. Walnut finish table that expands to seat up to 8 diners.", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1200", badge: "Smart Space", material: "Walnut Finish" },
  { slug: "luxe-banquet-12-seater", name: "Luxe Banquet 12-Seater", description: "A massive, 12ft table crafted for grand dining rooms. High-gloss polyurethane polish.", image: "https://images.unsplash.com/photo-1574341996229-3b6099b244db?q=80&w=1200", badge: null, material: "Polished Teak" },
  { slug: "aurora-circular-dining", name: "Aurora Circular Dining", description: "A beautifully milled circular table perfect for intimate spaces and smaller families.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200", badge: null, material: "Ash Wood" },
  { slug: "farmhouse-trestle", name: "Farmhouse Trestle", description: "Rustic charm with X-base trestle legs and distressed natural finishing. Comes with a matching bench.", image: "https://images.unsplash.com/photo-1580047648348-18e385db1f94?q=80&w=1200", badge: "Popular", material: "Reclaimed Wood" },
  { slug: "bronze-canyon-set", name: "Bronze Canyon Set", description: "Industrial aesthetic with dark walnut wood strapped by heavy bronze braces.", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200", badge: null, material: "Walnut & Bronze" },
  { slug: "resin-river-table", name: "Resin River Table", description: "Bespoke live-edge wooden slabs joined by ocean-blue epoxy resin. True functional art.", image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1200", badge: "Custom", material: "Live Edge Acacia" },
  { slug: "minimal-plateau-4", name: "Minimal Plateau 4-Seater", description: "Sleek, unadorned surfaces for small apartments. Matte black wood finish.", image: "https://images.unsplash.com/photo-1595514605151-5facab355cfa?q=80&w=1200", badge: null, material: "Matte Black Wood" },
  { slug: "imperial-oval-dining", name: "Imperial Oval Dining", description: "Graceful swooping lines on an oval footprint. Supported by elegant fluted columns.", image: "https://images.unsplash.com/photo-1628100806461-825597951aae?q=80&w=1200", badge: null, material: "Mahogany Veneer" },
  { slug: "zen-floor-dining", name: "Zen Floor Dining", description: "A low-profile Japanese style dining table with plush patterned floor cushions.", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1200", badge: "Eco-Friendly", material: "Bamboo Frame" },
  { slug: "concrete-loft-table", name: "Concrete Loft Table", description: "Polished concrete composite top on a sturdy wooden base. Industrial chic at its best.", image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=1200", badge: "Industrial", material: "Concrete & Wood" },
  { slug: "veranda-rattan-set", name: "Veranda Rattan 6-Seater", description: "Weather-resistant dining set built for the Kerala patio or semi-outdoor dining space.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200", badge: "Outdoor", material: "Synthetic Rattan" },
];

const seoStats = [
  { num: "25+", label: "Years Manufacturing" },
  { num: "16", label: "Dining Collections" },
  { num: "100%", label: "Made in Kondotty" },
  { num: "Lifelong", label: "Wood Durability" },
];

const faqItems = [
  { q: "Can I buy just the dining chairs?", a: "Yes, our dining chairs can be purchased independently to match your existing table." },
  { q: "Do you offer custom dimensions for dining tables?", a: "We excel at custom sizes. Whether you need a 4-seater or a 14-seater banquet, our Kondotty facility crafts everything to order." },
  { q: "What glass thickness is used on glass top tables?", a: "We use 12mm to 19mm toughened safety glass for our dining tables to prevent shattering." },
  { q: "Do you deliver completely assembled?", a: "Large tables are generally assembled on-site securely by our delivery personnel to prevent transit damage." },
];



export default function DiningPage() {
  return (
    <main className="min-h-screen bg-white pt-[60px] md:pt-[80px]">
      <section className="relative px-6 py-20 bg-[#fafaf9] lg:px-16" aria-labelledby="hero-title">
        <div className="max-container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-[55%]">
              <span className="block text-[10px] tracking-[0.3em] font-bold uppercase text-[#C0001A] mb-4" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Dining Room Styling</span>
              <h1 id="hero-title" className="text-[44px] lg:text-[72px] font-normal leading-tight text-[#111] m-0 mb-5" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                The <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Dining</em> Collection.
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-[1.7] text-[#666] m-0 mb-10 max-w-xl" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Gather your family around bespoke solid wood, marble, and glass dining structures. Handcrafted in Kondotty to anchor your Kerala home organically.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919446516395" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3.5 rounded-[3px]">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-[#ddd] text-[#111] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-[3px] hover:bg-[#111] hover:text-white">
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-3.5 bg-[#f4f4f2] border-b border-[#ebebeb]">
        <div className="max-container px-6 lg:px-16">
          <p className="text-xs text-[#666] m-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Showing <strong className="text-[#111]">{diningProducts.length} dining sets</strong> — Crafted in Kondotty
          </p>
        </div>
      </div>

      <section className="py-12 px-6 lg:px-16">
        <div className="max-container">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {diningProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="hidden md:block bg-[#fafaf9] border-t border-[#f0f0f0] py-20 px-6 lg:px-16">
        <div className="max-container">
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-[#ebebeb]">
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C0001A] mb-3">Common Questions</span>
              <h2 className="text-[44px] font-normal text-[#111] m-0" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Frequently Asked <em style={{ fontStyle: "italic" }} className="text-[#C0001A]">Questions</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-16">
            {faqItems.map((item, i) => (
              <details key={item.q} className="group/faq border-b border-[#ebebeb] py-0 open:pb-2">
                <summary className="py-6 text-[15px] font-medium text-[#111] cursor-pointer flex justify-between gap-4 select-none hover:text-[#C0001A]">
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] text-[#C0001A] w-5">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </span>
                  <ChevronDown className="text-[#C0001A] transition-transform group-open/faq:rotate-180" size={16} />
                </summary>
                <div className="pb-6 pl-9 text-sm text-[#666]">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
