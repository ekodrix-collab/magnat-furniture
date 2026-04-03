import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magnatfurniture.com"),
  title: {
    default: "Magnat Furniture — Premium Luxury Furniture & Interior Design",
    template: "%s | Magnat Furniture",
  },
  description:
    "Discover Magnat Furniture — over 25 years of crafting premium luxury furniture. Explore our exclusive collections of sofas, chairs, dining sets, and bespoke interior design pieces.",
  keywords: [
    "luxury furniture",
    "premium furniture",
    "interior design",
    "bespoke furniture",
    "sofa",
    "dining table",
    "bedroom furniture",
    "home decor",
    "Magnat Furniture",
  ],
  authors: [{ name: "Magnat Furniture" }],
  creator: "Magnat Furniture",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://magnatfurniture.com",
    siteName: "Magnat Furniture",
    title: "Magnat Furniture — Premium Luxury Furniture & Interior Design",
    description:
      "Explore our exclusive collection of luxury furniture designed to elevate your living spaces. 25+ years of excellence in craftsmanship.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magnat Furniture — Premium Luxury Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnat Furniture — Premium Luxury Furniture",
    description: "25+ years of crafting luxury furniture. Explore our exclusive collections.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F3EF]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
