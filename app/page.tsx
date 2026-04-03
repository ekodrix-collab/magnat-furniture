import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductShowcase from "@/components/home/ProductShowcase";
import BannerSection from "@/components/home/BannerSection";
import HighlightCards from "@/components/home/HighlightCards";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ClientLogos from "@/components/home/ClientLogos";
import InstagramSection from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <FeaturedCategories />
      <ProductShowcase />
      <BannerSection />
      <HighlightCards />
      <VideoSection />
      <TestimonialsCarousel />
      <ClientLogos />
      <InstagramSection />
    </>
  );
}
