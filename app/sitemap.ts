import { MetadataRoute } from "next";

const BASE = "https://magnat.in";
const NOW = new Date();

// ─── Location slugs ──────────────────────────────────────────────────────────
const LOCATIONS = [
  "kondotty", "malappuram", "kozhikode", "calicut", "manjeri",
  "perinthalmanna", "angadipuram", "nilambur", "tirur", "tanur",
  "ponnani", "kottakkal", "wandoor", "edappal", "feroke",
  "ramanattukara", "beypore", "chaliyam", "parappanangadi",
  "tirurangadi", "valanchery",
];

// ─── Product category slugs ──────────────────────────────────────────────────
const CATEGORIES = [
  "sofas", "chairs", "curtains", "dining",
  "l-shape-sofa", "corner-sofa", "recliner", "sofa-cum-bed",
  "leather-sofa", "fabric-sofa", "wooden-sofa",
  "office-furniture", "bedroom-furniture", "living-room",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: NOW, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/about`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,            lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products`,           lastModified: NOW, changeFrequency: "daily",   priority: 0.95 },
    { url: `${BASE}/design`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`,            lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,              lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
    // High-value sofa-specific pages
    { url: `${BASE}/products/sofas`,     lastModified: NOW, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/products/curtains`,  lastModified: NOW, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/products/chairs`,    lastModified: NOW, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/products/dining`,    lastModified: NOW, changeFrequency: "weekly",  priority: 0.85 },
    // Showroom page (high local SEO value)
    { url: `${BASE}/showroom`,           lastModified: NOW, changeFrequency: "weekly",  priority: 0.95 },
    // Blog (to be created)
    { url: `${BASE}/blog`,              lastModified: NOW, changeFrequency: "daily",   priority: 0.8  },
  ];

  // ── Product category pages ───────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/products/${cat}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // ── Location landing pages (high local SEO value) ────────────────────────────
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE}/locations/${loc}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ── Location × category combination pages ────────────────────────────────────
  const primaryLocations = ["kondotty", "malappuram", "kozhikode", "calicut", "manjeri"];
  const primaryCategories = ["sofas", "curtains", "chairs", "dining"];
  const locationCategoryPages: MetadataRoute.Sitemap = primaryLocations.flatMap((loc) =>
    primaryCategories.map((cat) => ({
      url: `${BASE}/locations/${loc}/${cat}`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.85,
    }))
  );

  return [
    ...staticPages,
    ...categoryPages,
    ...locationPages,
    ...locationCategoryPages,
  ];
}
