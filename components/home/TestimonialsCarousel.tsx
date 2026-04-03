"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const testimonials = [
  {
    name: "Riya Roy",
    quote: "Recently ordered a custom made furniture set for my living room from Vilangadan furnitures and couldn’t be more impressed with the results. Every detail was tailored to my preferences.",
    rating: 5,
    role: "Architect",
  },
  {
    name: "Sreenath Menon",
    quote: "We had a very diverse and warm experience when we bought a single door almirah and a queen size mattress from Vilangadan. The showroom has many options which are beautifully presented.",
    rating: 5,
    role: "Home Owner",
  },
  {
    name: "Anjali Sharma",
    quote: "The quality of the wood and the precision of the polish is simply unmatched. It has been 5 years since my first purchase, and the piece still looks brand new. Truly premium service.",
    rating: 5,
    role: "Interior Designer",
  },
  {
    name: "David Wilson",
    quote: "White-glove delivery service was impeccable. They handled the heavy teak dining table with such care. Magnat is definitely the brand you trust for luxury furniture.",
    rating: 5,
    role: "VIP Guest",
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-brand-secondary py-32 px-6 lg:px-12 border-y border-brand">
      <div className="container mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Client Experiences"
          subtitle="Hear from those who have transformed their houses into homes with Magnat Furniture. Our commitment is your satisfaction."
          align="center"
          className="mb-20"
        />

        <FadeInView direction="up">
          <div className="relative group">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                  >
                    <div className="h-full bg-white p-12 shadow-sm border border-brand transition-all hover:border-[#C6A969] group/card">
                      <div className="mb-8 text-[#C6A969]">
                        <Quote size={40} fill="currentColor" opacity={0.2} />
                      </div>
                      
                      <div className="flex mb-6 text-[#C6A969] gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>

                      <p className="mb-10 text-body leading-8 font-light italic text-sm line-clamp-4">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="h-[1px] w-8 bg-[#8B1E1E]" />
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
                            {testimonial.name}
                          </h4>
                          <span className="text-[0.65rem] uppercase tracking-widest text-[#C6A969]">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-[-20px] md:left-[-40px] -translate-y-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={scrollPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-brand text-[#1A1A1A] hover:bg-[#8B1E1E] hover:text-white hover:border-transparent transition-all"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 right-[-20px] md:right-[-40px] -translate-y-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={scrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-brand text-[#1A1A1A] hover:bg-[#8B1E1E] hover:text-white hover:border-transparent transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
