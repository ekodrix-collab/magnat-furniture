// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating"; // ✅ NEW
import ContactQuickActions from "@/components/ui/ContactQuickActions";
import Preloader from "@/components/ui/Preloader";
import FavoritesDrawer from "@/components/ui/FavoritesDrawer";
import { FavoritesProvider } from "@/lib/context/FavoritesContext";
import AdminExclusionWrapper from "@/components/layout/AdminExclusionWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magnatfurniture.com"),
  title: {
    default: "MAGNAT™ | Premium Furniture Manufacturing | Kondotty, Kerala",
    template: "%s | MAGNAT™ Furniture",
  },
  description:
    "25 Years of Manufacturing Excellence. MAGNAT Furniture Kondotty — Premium sofas, dining sets, curtains, and bespoke interior solutions. Crafted for Kerala, built to last.",
  keywords: [
    "luxury furniture Kondotty",
    "premium sofas Kerala",
    "interior design Kondotty",
    "custom dining sets Kerala",
    "curtains and blinds Kondotty",
    "Magnat Furniture",
    "furniture manufacturing Kerala",
  ],
  authors: [{ name: "MAGNAT Furniture & Interiors" }],
  creator: "MAGNAT Furniture",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "MAGNAT™ Furniture",
    title: "MAGNAT™ | Premium Furniture Manufacturing | Kondotty",
    description:
      "25 Years of Excellence. Manufacturing premium sofas, dining sets, and curtains in Kondotty. Kerala's finest furniture.",
    images: [
      {
        url: "/images/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "MAGNAT Furniture Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGNAT™ Furniture | Kondotty",
    description: "25 Years of Manufacturing Excellence",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F4F0] antialiased">
        <FavoritesProvider>
          <Preloader />
          
          <AdminExclusionWrapper>
            <Navbar />
            <FavoritesDrawer />
          </AdminExclusionWrapper>

          <main className="flex-1">{children}</main>
          
          <AdminExclusionWrapper>
            <Footer />
            <WhatsAppFloating />
          </AdminExclusionWrapper>
        </FavoritesProvider>
      </body>
    </html>
  );
}