"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    category: "Design",
    date: "April 2025",
    title: "The New Sofa Rules: Why Curves Are Dominating 2025 Interiors",
    excerpt:
      "From kidney-shaped conversation pieces to sinuous sectionals, the straight line is surrendering. We trace the arc of furniture's most significant shift in a generation.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=900&auto=format&fit=crop",
    href: "/news/sofa-curves-2025",
  },
  {
    id: 2,
    category: "Brand Spotlight",
    date: "March 2025",
    title: "Inside Minotti: Where Craft Meets the Contemporary Italian Ideal",
    excerpt:
      "A rare studio visit with the design team behind Minotti's celebrated Lawrence collection — and a look at what happens when tailoring meets upholstery.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop",
    href: "/news/minotti-studio-visit",
  },
  {
    id: 3,
    category: "Living Guide",
    date: "February 2025",
    title: "The Art of Doing Less: A Masterclass in Considered Living Rooms",
    excerpt:
      "Great rooms don't accumulate; they edit. Our stylist's guide to pairing one statement sofa with exactly the right three supporting pieces.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop",
    href: "/news/considered-living-rooms",
  },
];

export default function NewsTrendsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 130);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 lg:px-14 bg-[#ede9e3]"
    >
      {/* Header */}
      <div className="reveal mb-14">
        <span className="section-eyebrow">Editorial</span>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="section-title">News &amp; Trends</h2>
          <Link
            href="/news"
            className="arrow-link hidden md:inline-flex"
          >
            All Stories
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="mt-5 w-12 h-[1px] bg-[#c9a96e]" />
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <Link
            key={article.id}
            href={article.href}
            className="news-card reveal group block"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Image */}
            <div className="news-card-img-wrap aspect-[4/3] overflow-hidden bg-[#e0dbd3] mb-6">
              <Image
                src={article.image}
                alt={article.title}
                width={900}
                height={675}
                className="news-card-img w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[#c9a96e] text-[8px] font-bold tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {article.category}
              </span>
              <span className="text-[#5a5a5a]/40 text-[10px]">·</span>
              <span
                className="text-[#5a5a5a] text-[8px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-[#1a1a1a] text-xl font-semibold leading-snug mb-3 transition-colors duration-300 group-hover:text-[#c9a96e]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {article.title}
            </h3>

            {/* Excerpt */}
            <p
              className="text-[#5a5a5a] text-sm leading-relaxed font-light line-clamp-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {article.excerpt}
            </p>

            {/* Read more */}
            <div className="mt-5 flex items-center gap-2">
              <span
                className="text-[#c9a96e] text-[9px] font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Read More
              </span>
              <svg
                className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 text-center md:hidden">
        <Link href="/news" className="arrow-link">
          All Stories
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
