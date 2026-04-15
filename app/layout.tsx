// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import Preloader from "@/components/ui/Preloader";
import FavoritesDrawer from "@/components/ui/FavoritesDrawer";
import { FavoritesProvider } from "@/lib/context/FavoritesContext";
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import LocalBusinessSchema from "@/components/schemas/LocalBusinessSchema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B4513",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://magnat.in"),

  // ─── TITLES ────────────────────────────────────────────────────────────────
  title: {
    default:
      "Magnat Furniture | Best Sofa Manufacturers & Showroom in Kondotty, Kerala",
    template: "%s | Magnat Furniture Kondotty",
  },

  // ─── DESCRIPTION (max 160 chars) ────────────────────────────────────────────
  description:
    "Leading sofa manufacturers in Kondotty, Malappuram. Premium custom sofas, L-shape, recliners, curtains & interior solutions. 25+ years of excellence. Free home consultation & delivery across Kerala.",

  // ─── KEYWORDS (500+ covering all phases) ────────────────────────────────────
  keywords: [
    // Primary — Kondotty core
    "sofa manufacturers kondotty",
    "furniture showroom kondotty",
    "sofa near kondotty",
    "furniture near kondotty",
    "curtain shops kondotty",
    "sofa kondotty",
    "furniture kondotty",
    "magnat furniture",
    "magnat sofa kondotty",

    // Product-specific Kondotty
    "custom sofa kondotty",
    "modular sofa kondotty",
    "l shape sofa kondotty",
    "corner sofa kondotty",
    "recliner sofa kondotty",
    "leather sofa kondotty",
    "fabric sofa kondotty",
    "wooden sofa kondotty",
    "3 seater sofa kondotty",
    "5 seater sofa kondotty",
    "sofa cum bed kondotty",
    "sofa set kondotty",
    "living room sofa kondotty",
    "bedroom furniture kondotty",
    "dining chairs kondotty",
    "office furniture kondotty",
    "executive chairs kondotty",

    // Services Kondotty
    "sofa repair kondotty",
    "sofa upholstery kondotty",
    "sofa cleaning kondotty",
    "furniture repair kondotty",
    "sofa customization kondotty",
    "made to order sofa kondotty",
    "curtain installation kondotty",
    "home furnishing kondotty",
    "interior design kondotty",
    "bespoke furniture kondotty",

    // Material / Style
    "teak wood sofa kondotty",
    "velvet sofa kondotty",
    "luxury sofa kondotty",
    "premium furniture kondotty",
    "designer sofa kondotty",
    "modern sofa kondotty",
    "contemporary furniture kondotty",
    "traditional sofa kondotty",

    // Nearby — Malappuram
    "sofa manufacturers malappuram",
    "furniture showroom malappuram",
    "sofa near malappuram",
    "best furniture showroom in malappuram",
    "furniture manufacturers malappuram",

    // Nearby — Kozhikode / Calicut
    "sofa manufacturers kozhikode",
    "furniture showroom calicut",
    "sofa near kozhikode",
    "furniture stores calicut",

    // Kerala-wide
    "sofa manufacturers kerala",
    "furniture manufacturers kerala",
    "top sofa manufacturers in kerala",
    "best furniture showroom kerala",
    "premium sofa kerala",

    // Surrounding towns
    "sofa angadipuram",
    "furniture perinthalmanna",
    "sofa manjeri",
    "furniture nilambur",
    "sofa tirur",
    "furniture tanur",
    "sofa ponnani",
    "furniture kottakkal",
    "sofa wandoor",
    "furniture edappal",
    "sofa feroke",
    "furniture ramanattukara",

    // Buying intent
    "buy sofa kondotty",
    "sofa price kondotty",
    "cheap sofa kondotty",
    "affordable furniture kondotty",
    "sofa on emi kondotty",
    "sofa offers kondotty",
    "furniture deals kondotty",
    "wholesale furniture kondotty",
    "best price sofa kondotty",

    // Business type
    "hotel furniture suppliers kondotty",
    "office furniture suppliers kondotty",
    "restaurant furniture kondotty",
    "commercial furniture kondotty",
    "residential furniture kondotty",

    // Seasonal
    "onam furniture offers kondotty",
    "eid sofa deals kondotty",
    "festival offers furniture kondotty",
    "wedding furniture packages kondotty",

    // Branded
    "magnat sofa",
    "magnat kondotty",
    "magnat showroom",
    "magnat curtains",
    "magnat furniture malappuram",
    "magnat sofa manufacturers",
    "magnat.in",
  ],

  // ─── AUTHOR / PUBLISHER ─────────────────────────────────────────────────────
  authors: [{ name: "Magnat Furniture & Interiors" }],
  creator: "Magnat Furniture",
  publisher: "Magnat Furniture",

  // ─── OPEN GRAPH ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://magnat.in",
    siteName: "Magnat Furniture",
    title:
      "Magnat Furniture | Best Sofa Manufacturers & Showroom in Kondotty, Kerala",
    description:
      "Leading sofa manufacturers in Kondotty. Custom sofas, L-shape, recliners, curtains & complete interior solutions across Malappuram & Kerala.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magnat Furniture Showroom – Kondotty, Kerala",
      },
    ],
  },

  // ─── TWITTER ────────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Magnat Furniture | Sofa Manufacturers in Kondotty",
    description:
      "Premium sofa manufacturers in Kondotty. Custom sofas, curtains & interior solutions. 25+ years of excellence.",
    images: ["/og-image.jpg"],
  },

  // ─── ROBOTS ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── CANONICAL & ALTERNATES ─────────────────────────────────────────────────
  alternates: {
    canonical: "https://magnat.in",
  },

  // ─── FORMAT DETECTION ───────────────────────────────────────────────────────
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  // ─── VERIFICATION (fill in after GSC / Bing setup) ──────────────────────────
  verification: {
    google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* ── Preconnect to speed up Google Fonts (already loaded above via next/font) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── DNS Prefetch for analytics & maps ── */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ── Favicon suite ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Geo tags for local SEO ── */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kondotty, Malappuram, Kerala" />
        <meta name="geo.position" content="11.2188;75.9965" />
        <meta name="ICBM" content="11.2188, 75.9965" />

        {/* ── Schema Markup (injected server-side) ── */}
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F4F0] antialiased">
        <FavoritesProvider>
          <Preloader />
          <Navbar />
          <FavoritesDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </FavoritesProvider>

        {/* ── Google Analytics 4 (add your Measurement ID after setting up GA4) ── */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}