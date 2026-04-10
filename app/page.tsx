"use client";

import HomeHero from "@/components/home/HomeHero";
import HeritageSection from "@/components/home/HeritageSection";
import SpecialModels from "@/components/home/SpecialModels";
import HomeCollection from "@/components/home/HomeCollection";
import HomeCurtains from "@/components/home/HomeCurtains";
import HomeShowroom from "@/components/home/HomeShowroom";
import KondottyGallery from "@/components/home/KondottyGallery";
import HomeTestimonials from "@/components/home/HomeTestimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── 1. Cinematic Hero (Premium Standards) ── */}
      <HomeHero />

      {/* ── 2. Signature Showcase (Special Models) ── */}
      <SpecialModels />

      {/* ── 3. The 25-Year Heritage (Legacy) ── */}
      <HeritageSection />

      {/* ── 4. Main Portfolio Grid (Full Color) ── */}
      <HomeCollection />

      {/* ── 5. Editorial Curtains & Blinds ── */}
      <HomeCurtains />

      {/* ── 6. The Studio Engagement (Physical Showroom) ── */}
      <HomeShowroom />

      {/* ── 7. Visual Journey of Craft (Gallery) ── */}
      <KondottyGallery />

      {/* ── 8. Trusted Chronicles (Testimonials) ── */}
      <HomeTestimonials />
    </main>
  );
}
