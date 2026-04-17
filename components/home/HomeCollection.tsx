"use client";

import { useState, useEffect, useRef } from "react";
import { FeaturedItem } from "@/lib/types";

const FALLBACK_PRODUCTS: FeaturedItem[] = [
  {
    id: "1",
    category: "Living Area",
    name: "Nordic Chair",
    subtitle: "A stylish and comfortable Nordic chair designed with minimal aesthetics.",
    image_url: "/images/singlesofa.png",
    sort_order: 0,
    is_active: true
  },
  {
    id: "2",
    category: "Living Area",
    name: "Skyline Sofa",
    subtitle:
      "A premium skyline sofa offering superior comfort and elegant design, ideal for relaxing and entertaining guests.",
    image_url: "/images/singlesofa4.png",
    sort_order: 1,
    is_active: true
  },
  {
    id: "3",
    category: "Living Area",
    name: "Bloom Sofa",
    subtitle:
      "A cozy and compact bloom sofa that blends softness with contemporary design for small and large spaces.",
    image_url: "/images/singlesofa3.png",
    sort_order: 2,
    is_active: true
  },
  {
    id: "4",
    category: "Bedroom",
    name: "Luna Armchair",
    subtitle:
      "A luxurious armchair crafted for bedroom comfort, featuring soft cushioning and a sleek modern look.",
    image_url: "/images/sofa3d1.png",
    sort_order: 3,
    is_active: true
  },
  {
    id: "5",
    category: "Office",
    name: "Crest Desk Chair",
    subtitle:
      "An ergonomic office chair designed for long working hours, providing excellent back support and comfort.",
    image_url: "/images/chair.png",
    sort_order: 4,
    is_active: true
  },
];

const CARD_GAP = 32;

// Always show 3 cards on tablet and above
const getCardWidth = () => {
  if (typeof window === "undefined") return 300;
  if (window.innerWidth < 640) return Math.min(window.innerWidth - 48, 320); // mobile: near full width
  if (window.innerWidth < 1024) return 240; // tablet: 3 cards
  return 300; // desktop: 3 cards
};

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1; // mobile: 1 card
  return 3; // tablet + desktop: always 3
};

export default function FurnitureCarousel({ items }: { items?: FeaturedItem[] }) {
  const activeProducts = items && items.length > 0 ? items : FALLBACK_PRODUCTS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Touch/swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setVisibleCount(getVisibleCount());
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (cardWidth === null || visibleCount === null) return null;

  const STEP = cardWidth + CARD_GAP;
  const maxIndex = activeProducts.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i: number) => setCurrentIndex(i);

  // Touch handlers for swipe (mobile only)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getTransform = (isCenter: boolean, index: number) => {
    // On mobile, all visible cards treated the same
    if (isMobile) return "scale(1)";
    const isHovered = hoveredIndex === index;
    if (isCenter) return isHovered ? "scale(1.05)" : "scale(1)";
    return isHovered ? "scale(0.95)" : "scale(0.9)";
  };

  const getCardHeight = (isCenter: boolean) => {
    if (isMobile) return "480px";
    return isCenter ? "500px" : "450px";
  };

  return (
    <section className="min-h-screen bg-[#faf8f6] flex flex-col items-center justify-center py-10 lg:py-20 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center lg:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 md:text-nowrap">
          Top Selling Furniture{" "}
          <span className="text-[#C0001A] block sm:inline text-[22px] sm:text-4xl md:text-5xl ">
            At Unbeatable Prices
          </span>
        </h1>
        <p className="text-gray-500 hidden md:block text-sm">
          Explore our best-selling furniture at great prices. Stylish,
          comfortable, <br /> and perfect for every home
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1050px] mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute -left-2 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 !bg-[#C0001A] rounded-full flex items-center justify-center shadow-lg disabled:opacity-20 hover:!bg-[#62010e] transition-opacity duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slider Viewport */}
        <div
          className="overflow-hidden py-10"
          style={{
            width: isMobile
              ? `${cardWidth}px`
              : `${cardWidth * visibleCount + CARD_GAP * (visibleCount - 1)}px`,
          }}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          <div
            className="flex items-end will-change-transform"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${currentIndex * STEP}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {activeProducts.map((product, index) => {
              const relIndex = index - currentIndex;
              // On desktop/tablet: center card is middle of 3 visible
              // On mobile: only 1 visible, that one is "center"
              const isCenter = isMobile
                ? relIndex === 0
                : relIndex === Math.floor(visibleCount / 2);
              const isVisible = relIndex >= 0 && relIndex < visibleCount;

              return (
                <div
                  key={product.id}
                  className="relative flex flex-col items-center justify-end flex-shrink-0  cursor-pointer"
                  style={{
                    width: `${cardWidth}px`,
                    height: getCardHeight(isCenter),
                    opacity: isVisible ? 1 : 0.3,
                    transform: getTransform(isCenter, index),
                    transformOrigin: "bottom center",
                    zIndex: isCenter ? 20 : 10,
                    transition:
                      "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
                  }}
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                >
                  {/* Image */}
                  <div
                    className="absolute w-full z-20 flex items-center justify-center pointer-events-none"
                    style={{
                      top: 0,
                      height: isCenter ? "290px" : "260px",
                    }}
                  >
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl mx-auto"
                    />
                  </div>

                  {/* Card Box */}
                  <div
                    className="bg-white w-full h-[75%] rounded-[5px] shadow-sm flex flex-col justify-center transition-shadow duration-300 hover:shadow-xl"
                    style={{ paddingTop: "50px" }}
                  >
                    <div className="flex flex-col pt-20 ">
                      <div className="px-4 ">
                        <span className="block text-[10px] uppercase tracking-widest text-[#C0001A] font-[900] text-left">
                          {product.category}
                        </span>
                        <h3 className="text-md font-bold text-gray-800 mt-1 text-left">
                          {product.name}
                        </h3>
                        <p
                          className="text-xs text-gray-500 text-left pt-2 line-clamp-2  overflow-hidden"
                          style={{ marginTop: isCenter ? "5px" : "" }}
                        >
                          {product.subtitle}
                        </p>
                      </div>
                      <div
                        className="px-10"
                        style={{ marginTop: isCenter ? "15px" : "" }}
                      >
                        <button className="mt-4 px-4 py-3 bg-black text-white text-sm rounded-[50px] w-full transition-transform duration-200 ease-out hover:scale-[1.04] active:scale-[0.98]">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="absolute -right-2 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 !bg-[#C0001A] rounded-full flex items-center justify-center shadow-lg disabled:opacity-20 hover:!bg-[#62010e] transition-opacity duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full h-1 ${i === currentIndex ? "w-2 bg-[#C0001A]" : "w-2 bg-gray-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
