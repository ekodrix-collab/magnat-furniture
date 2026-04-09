import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magnat_furniture_kondotty.com"), // Placeholder domain
  title: {
    default: "MAGNAT Furniture & Interior Manufacturing | Kondotty, Kerala",
    template: "%s | MAGNAT Furniture",
  },
  description:
    "MAGNAT Furniture Kondotty — Manufacturing and showroom excellence for sofas, dining sets, curtains, and full interior solutions in Kerala. Crafted for Kerala, built to last.",
  keywords: [
    "furniture manufacturing Kondotty",
    "sofas Kerala",
    "interior design Kondotty",
    "dining sets Kerala",
    "curtains and blinds Kondotty",
    "Magnat Furniture",
  ],
  authors: [{ name: "MAGNAT Furniture & Interiors" }],
  creator: "MAGNAT Furniture",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "MAGNAT Furniture",
    title: "MAGNAT Furniture & Interior Manufacturing | Kondotty, Kerala",
    description:
      "Manufacturing sofas, dining sets, and curtains in Kondotty. Kerala's own quality furniture.",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F4F0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}