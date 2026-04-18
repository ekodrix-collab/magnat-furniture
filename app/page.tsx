import { getHeroSlides } from "@/lib/api/hero";
import { getTestimonials } from "@/lib/api/testimonials";
import { getFeaturedItems } from "@/lib/api/featured";
import { getProcessSteps } from "@/lib/api/process-steps";
import { getClientLogos } from "@/lib/api/client-logos";
import { getInstagramPosts } from "@/lib/api/instagram";
import { createClient } from "@/lib/supabase-server";

import HomeHero from "@/components/home/HomeHero";
import HeritageSection from "@/components/home/HeritageSection";
import SpecialModels from "@/components/home/SpecialModels";
import HomeCollection from "@/components/home/HomeCollection";
import HomeCurtains from "@/components/home/HomeCurtains";
import HomeShowroom from "@/components/home/HomeShowroom";
import KondottyGallery from "@/components/home/KondottyGallery";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import FAQSchema, { HOMEPAGE_FAQS } from "@/components/schemas/FAQSchema";

export default async function HomePage() {
  // Fetch everything in parallel
  const [
    heroSlides,
    testimonials,
    featuredItems,
    processSteps,
    clientLogos,
    instagramPosts
  ] = await Promise.all([
    getHeroSlides(),
    getTestimonials(),
    getFeaturedItems(),
    getProcessSteps(),
    getClientLogos(),
    getInstagramPosts()
  ]);

  // For categories in SpecialModels, we'll fetch from categories table
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("is_featured", true)
    .order("sort_order", { ascending: true })
    .limit(6);

  return (
    <main className="min-h-screen bg-white">
      {/* ── SEO Schema Injections (Invisible to users) ── */}
      <FAQSchema faqs={HOMEPAGE_FAQS} />

      {/* ── 1. Cinematic Hero (Premium Standards) ── */}
      <HomeHero slides={heroSlides} />

      {/* ── 3. The 25-Year Heritage (Legacy) ── */}
      <HeritageSection />

      {/* ── 2. Signature Showcase (Special Models) ── */}
      <SpecialModels categories={categories || undefined} />

      {/* ── 4. Main Portfolio Grid (Full Color) ── */}
      <HomeCollection items={featuredItems} />

      {/* ── 5. Editorial Curtains & Blinds ── */}
      <HomeCurtains steps={processSteps} />

      {/* ── 7. Visual Journey of Craft (Gallery) ── */}
      <KondottyGallery />

      {/* ── 8. Trusted Chronicles (Testimonials) ── */}
      {/* <HomeTestimonials reviews={testimonials} /> */}
    </main>
  );
}
