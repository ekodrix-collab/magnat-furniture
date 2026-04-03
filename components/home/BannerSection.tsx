"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";

export default function BannerSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {" "}
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Living Space"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Centered Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <FadeInView direction="up" duration={1} className="max-w-4xl">
          <SectionHeading
            label="Exclusive Experience"
            title="Design Your Dream Interior"
            subtitle="Consult with our master designers to create a bespoke living environment that reflects your unique personality and lifestyle. Every piece is a testament to your taste."
            align="center"
            light
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="/contact"
              variant="gold"
              className="px-12 py-5 text-sm"
            >
              Book Consultation
            </Button>
            <Button
              href="/about"
              variant="outline"
              className="px-12 py-5 text-sm border-white text-white hover:bg-white hover:text-[#1A1A1A]"
            >
              Our Story
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
