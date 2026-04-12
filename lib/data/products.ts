export interface Product {
  slug: string;
  name: string;
  category: string;
  price: string;
  deliveryTime: string;
  short_description: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  badge: string | null;
  material: string;
  isNew: boolean;
  isBestseller: boolean;
}

export const allProducts: Product[] = [
  // ── SOFAS ──
  {
    slug: "milano-modular-sofa",
    name: "Milano Modular Sofa",
    category: "Sofas",
    price: "₹1,85,000",
    deliveryTime: "4-6 weeks",
    short_description: "Architectural comfort with premium fabric upholstery.",
    description: "Architectural comfort with premium fabric upholstery. Fully customizable in size and fabric. Handstitched in our Kondotty workshop.",
    image: "/images/sofa3d.png",
    images: ["/images/sofa3d.png", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2600&auto=format&fit=crop"],
    badge: "Best Seller",
    material: "Premium Fabric",
    isNew: false,
    isBestseller: true,
    features: [
      "Modular Configurations Available",
      "Premium Foam Core Cushioning",
      "Solid Wood Internal Frame",
      "5-Year Structural Warranty"
    ],
    specifications: [
      { label: "Width", value: "280 cm" },
      { label: "Depth", value: "110 cm" },
      { label: "Seating", value: "3-4 Persons" },
      { label: "Upholstery", value: "Premium Fabric (Customizable)" }
    ]
  },
  {
    slug: "royal-l-shaped-sofa",
    name: "Royal L-Shaped Sofa",
    category: "Sofas",
    price: "₹2,10,000",
    deliveryTime: "4-6 weeks",
    short_description: "Space-maximizing L-design with deep cushioning.",
    description: "Space-maximizing L-design with deep cushioning. Available in fabric and velvet options. Ideal for Kerala living rooms.",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"],
    badge: "New Arrival",
    material: "Velvet / Fabric",
    isNew: true,
    isBestseller: false,
    features: [
      "Spacious L-Shaped Sectional",
      "High Density Foam Padding",
      "Premium Velvet Options",
      "Customizable Orientation"
    ],
    specifications: [
      { label: "Dimensions", value: "310 x 220 cm" },
      { label: "Seat Depth", value: "65 cm" },
      { label: "Leg Material", value: "Polished Hardwood" }
    ]
  },
  {
    slug: "heritage-wooden-sofa-set",
    name: "Heritage Wooden Sofa Set",
    category: "Sofas",
    price: "₹1,45,000",
    deliveryTime: "3-5 weeks",
    short_description: "Kerala teak frame with handwoven cushions.",
    description: "Kerala teak frame with handwoven cushions. A timeless 3+1+1 set built to last generations. Polished with premium lacquer.",
    images: ["/images/sofa3d1.png"],
    badge: null,
    material: "Kerala Teak",
    isNew: false,
    isBestseller: false,
    features: [
      "Solid Kerala Teak Frame",
      "Handwoven Cushions",
      "Traditional Joinery Techniques",
      "10-Year Wood Warranty"
    ],
    specifications: [
      { label: "Configuration", value: "3 + 1 + 1" },
      { label: "Wood Polish", value: "Premium Lacquer" },
      { label: "Cushions", value: "Removable Covers" }
    ]
  },
  {
    slug: "zen-single-seater",
    name: "Zen Single Seater",
    category: "Chairs",
    price: "₹35,000",
    deliveryTime: "2-4 weeks",
    short_description: "Minimalist silhouette, maximum comfort.",
    description: "Minimalist silhouette, maximum comfort. Perfect accent sofa for bedroom or reading nook. Solid wood legs, removable cover.",
    images: ["/images/singlesofa.png"],
    badge: null,
    material: "Leather / Fabric",
    isNew: false,
    isBestseller: false,
    features: [
      "Ergonomic Back Support",
      "Compact Minimalist Design",
      "Removable Upholstery",
      "Solid Wood Legs"
    ],
    specifications: [
      { label: "Width", value: "85 cm" },
      { label: "Height", value: "92 cm" },
      { label: "Weight Capacity", value: "150 kg" }
    ]
  },
  {
    slug: "luxe-recliner-sofa",
    name: "Luxe Recliner Sofa",
    category: "Sofas",
    price: "₹1,65,000",
    deliveryTime: "4-6 weeks",
    short_description: "Full manual recliner mechanism with plush padding.",
    description: "Full manual recliner mechanism with plush padding. Available in 3-seater configuration. Premium leatherette finish.",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop"],
    badge: "Popular",
    material: "Leatherette",
    isNew: false,
    isBestseller: true,
    features: [
      "Smooth Recliner Mechanism",
      "Lumbar Support Cushioning",
      "Premium Leatherette",
      "Durable Steel Frame"
    ],
    specifications: [
      { label: "Configuration", value: "3-Seater Recliner" },
      { label: "Upholstery", value: "Performance Leatherette" },
      { label: "Mechanism", value: "Manual Glide" }
    ]
  },
  {
    slug: "kochi-sectional-sofa",
    name: "Kochi Sectional Sofa",
    category: "Sofas",
    price: "₹2,45,000",
    deliveryTime: "6-8 weeks",
    short_description: "Contemporary sectional design with modular options.",
    description: "Contemporary sectional design with modular configuration options. Deep-seat cushions with pocket spring support.",
    images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"],
    badge: null,
    material: "Premium Fabric",
    isNew: false,
    isBestseller: false,
    features: [
      "Deep Pocket Spring Seats",
      "Modular Configurations",
      "Performance Stain-Resistant Fabric",
      "5-Year Cushion Warranty"
    ],
    specifications: [
      { label: "Dimensions", value: "320 x 240 cm" },
      { label: "Seat Depth", value: "75 cm" },
      { label: "Frame", value: "Kiln-Dried Hardwood" }
    ]
  },
  // ── NON-SOFAS AND OTHER PRODUCTS ──
  {
    slug: "oxide-chair",
    name: "Oxide Accent Chair",
    category: "Chairs",
    price: "₹42,000",
    deliveryTime: "2-4 weeks",
    short_description: "A sculptural masterpiece blending velvet and matte steel. Limited edition.",
    description: "A sculptural masterpiece blending velvet and matte steel. Limited edition design perfect for modern architectural profiles. Handcrafted in Kondotty.",
    images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2600&auto=format&fit=crop"],
    badge: "Best Seller",
    material: "Velvet & Steel",
    isNew: false,
    isBestseller: true,
    features: [
      "Matte Black Steel Frame",
      "Plush Velvet Cushioning",
      "Sculptural Modernist Design",
      "Rust-Resistant Finish"
    ],
    specifications: [
      { label: "Width", value: "70 cm" },
      { label: "Height", value: "105 cm" },
      { label: "Base", value: "Powder Coated Steel" }
    ]
  },
  {
    slug: "kondotty-table",
    name: "Kondotty Heritage Table",
    category: "Dining",
    price: "₹95,000",
    deliveryTime: "4-6 weeks",
    short_description: "Hand-finished Kerala teak with minimalist glass inlay. 25-year warranty.",
    description: "Hand-finished Kerala teak with minimalist glass inlay. Designed to gracefully accompany any modern dining chair. Backed by our signature 25-year wood warranty.",
    images: ["https://images.unsplash.com/photo-1574621100236-d25b64cf5615?q=80&w=2600&auto=format&fit=crop"],
    badge: null,
    material: "Teak & Glass",
    isNew: false,
    isBestseller: true,
    features: [
      "Solid Kerala Teak",
      "Toughened Glass Inlay",
      "Seating capacity for 6-8",
      "Traditional Mortise & Tenon Joinery"
    ],
    specifications: [
      { label: "Length", value: "220 cm" },
      { label: "Width", value: "100 cm" },
      { label: "Wood", value: "Seasoned Teak" }
    ]
  },
  {
    slug: "zenith-curtains",
    name: "Zenith Sheer Series",
    category: "Curtains",
    price: "Custom Quote",
    deliveryTime: "2-3 weeks",
    short_description: "Light-filtering sheers designed for tropical ventilation. Custom-measured for your space.",
    description: "Light-filtering sheers designed for tropical ventilation. Custom-measured for your space. These curtains maintain privacy while allowing natural airflow, perfectly suited for the Kerala climate.",
    images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2600&auto=format&fit=crop"],
    badge: "New Arrival",
    material: "Sheer Fabric",
    isNew: true,
    isBestseller: false,
    features: [
      "Maximized Airflow",
      "Dust Resistant Core",
      "Custom Measurements",
      "Machine Washable"
    ],
    specifications: [
      { label: "Fabric", value: "Premium Voile Blend" },
      { label: "Opacity", value: "Semi-Sheer" },
      { label: "Hardware", value: "Hidden Track System" }
    ]
  },
  {
    slug: "monolith-bed",
    name: "Monolith Master Bed",
    category: "Bedroom",
    price: "₹1,45,000",
    deliveryTime: "5-7 weeks",
    short_description: "Upholstered luxury with integrated ambient lighting. King size perfection.",
    description: "Upholstered luxury with integrated ambient lighting. King size perfection built around a reinforced solid wood chassis ensuring zero creaks over a lifetime.",
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2600&auto=format&fit=crop"],
    badge: null,
    material: "Fabric & Wood",
    isNew: false,
    isBestseller: false,
    features: [
      "Integrated Ambient LED Lighting",
      "Plush Tufted Headboard",
      "Heavy-Duty Slat Support",
      "Premium Stain-Resistant Upholstery"
    ],
    specifications: [
      { label: "Size", value: "King Size (72x78 inches)" },
      { label: "Headboard Height", value: "140 cm" },
      { label: "Support", value: "Solid Hardwood Slats" }
    ]
  },
  {
    slug: "vector-recliner",
    name: "Vector Ergonomic Recliner",
    category: "Chairs",
    price: "₹68,000",
    deliveryTime: "3-5 weeks",
    short_description: "Precision-engineered support for the modern executive. Italian leather option available.",
    description: "Precision-engineered support for the modern executive. Offering superior lumbar tracking and multiple resting angles. Available with Italian leather or premium performance fabric.",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop"],
    badge: "Popular",
    material: "Italian Leather",
    isNew: false,
    isBestseller: true,
    features: [
      "Precision Lumbar Tracking",
      "Multi-Angle Recline Lock",
      "Genuine Top-Grain Italian Leather",
      "Swivel Base"
    ],
    specifications: [
      { label: "Recline Range", value: "90° to 165°" },
      { label: "Weight Capacity", value: "160 kg" },
      { label: "Mechanism", value: "Heavy-Duty Steel Base" }
    ]
  },
  {
    slug: "classic-velvet-sofa",
    name: "Classic Velvet Sofa",
    category: "Living Room",
    price: "₹1,85,000",
    deliveryTime: "4-6 weeks",
    short_description: "A statement of refined taste, hand-tufted by master craftsmen.",
    description: "Our Classic Velvet Sofa isn't just furniture—it's a statement of refined taste. Hand-tufted by master craftsmen in our Kondotty workshop, each piece takes over 120 hours to complete. The premium velvet we use is sourced from Italian mills, chosen for its exceptional softness and durability. The walnut legs are hand-finished with traditional Kerala woodworking techniques passed down through generations.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
    badge: null,
    material: "Italian Velvet",
    isNew: true,
    isBestseller: false,
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
    ]
  }
];

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const result = allProducts.find(product => product.slug === slug);
  if (result) return result;

  // Auto-generate fallback data if not found so the detail page never crashes 
  // and dynamically handles any product URL for the unified component demo.
  const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    slug,
    name: formattedName,
    category: "Preview Collection",
    price: "Custom Quote",
    deliveryTime: "3-5 weeks",
    short_description: `Here is a beautiful ${formattedName} crafted with precision.`,
    description: `Here is a beautiful ${formattedName} crafted with precision. Hand-tufted and built to last generations, this piece uses premium materials sourced specifically for longevity and style in modern Kerala homes.`,
    images: ["/images/placeholder-furniture.jpg", "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop"],
    badge: "New Arrival",
    material: "Premium Material",
    isNew: true,
    isBestseller: false,
    features: [
      "Custom Built in Kondotty",
      "Premium Upholstery Options",
      "Solid Wood Internal Framework",
      "5-Year Manufacturer Warranty"
    ],
    specifications: [
      { label: "Dimensions", value: "Customizable" },
      { label: "Weight Capacity", value: "Standard" },
      { label: "Warranty", value: "5 Years" }
    ]
  };
}

export async function getRelatedProducts(category: string, excludeSlug: string): Promise<Product[]> {
  return allProducts
    .filter(p => p.category === category && p.slug !== excludeSlug)
    .slice(0, 3);
}

export async function getAllProducts(): Promise<Product[]> {
  return allProducts;
}
