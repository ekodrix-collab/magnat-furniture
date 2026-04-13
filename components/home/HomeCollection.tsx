"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  category: string;
  name: string;
  subtitle: string;
  image: string;
 
}

const products: Product[] = [
  {
    id: 1,
    category: "Living Area",
    name: "Nordic Chair",
    subtitle: "A stylish and comfortable Nordic chair designed with minimal aesthetics, perfect for modern living rooms.",
    image: "/images/singlesofa.png"
  },
  {
    id: 2,
    category: "Living Area",
    name: "Skyline Sofa",
    subtitle: "A premium skyline sofa offering superior comfort and elegant design, ideal for relaxing and entertaining guests.",
    image: "/images/sofa3d1.png"
  },
  {
    id: 3,
    category: "Living Area",
    name: "Bloom Sofa",
    subtitle: "A cozy and compact bloom sofa that blends softness with contemporary design for small and large spaces.",
    image: "/images/singlesofa.png"
  },
  {
    id: 4,
    category: "Bedroom",
    name: "Luna Armchair",
    subtitle: "A luxurious armchair crafted for bedroom comfort, featuring soft cushioning and a sleek modern look.",
    image: "/images/sofa3d1.png"
  },
  {
    id: 5,
    category: "Office",
    name: "Crest Desk Chair",
    subtitle: "An ergonomic office chair designed for long working hours, providing excellent back support and comfort.",
    image: "/images/singlesofa.png"
  }
];
const CARD_GAP = 32;

const getCardWidth = () => {
  if (typeof window === "undefined") return 300;
  if (window.innerWidth < 640) return 260;
  if (window.innerWidth < 1024) return 280;
  return 300;
};

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function FurnitureCarousel() {
  const [items, setItems] = useState<Product[]>(products);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const STEP = cardWidth + CARD_GAP;
  const maxIndex = items.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i: number) => setCurrentIndex(i);

  return (
    <section className="min-h-screen bg-[#f0eeec] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* Header */}
      <div className="text-center lg:mb-10 max-w-xl ">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          style={{ fontFamily: "-apple-system" }}
        >
          Top Selling Furniture <br />
          <span className="text-[#C0001A]">
            At Unbeatable Prices
          </span>
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1050px] mx-auto flex items-center justify-center">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute -left-2 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 !bg-[#C0001A] rounded-full flex items-center justify-center shadow-lg disabled:opacity-20 hover:!bg-[#62010e] transition-opacity duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slider Viewport */}
        <div 
          className="overflow-hidden py-10 px-2"
          style={{ width: `${(cardWidth * visibleCount) + (CARD_GAP * (visibleCount - 1))}px` }}
        >
          <div
            className="flex items-end will-change-transform"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${currentIndex * STEP}px)`,
              // NORMAL SLIDING ANIMATION (Smooth Ease)
              transition: "transform 0.5s ease-in-out", 
            }}
          >
            {items.map((product, index) => {
              const relIndex = index - currentIndex;
              const isCenter = relIndex === Math.floor(visibleCount / 2);
              const isVisible = relIndex >= 0 && relIndex < visibleCount;

              return (
                <div
                  key={product.id}
                  className="relative flex flex-col items-center justify-end flex-shrink-0 cursor-pointer"
                  style={{
                    width: `${cardWidth}px`,
                    height: isCenter ? "500px" : "450px",
                    opacity: isVisible ? 1 : 0.3,
                    transform: isCenter ? "scale(1)" : "scale(0.9)",
                    transformOrigin: "bottom center",
                    zIndex: isCenter ? 20 : 10,
                    // NORMAL TRANSITION
                    transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    // ZOOM IN BOX ON HOVER
                    (e.currentTarget as HTMLDivElement).style.transform = isCenter 
                      ? "scale(1.05)" 
                      : "scale(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = isCenter 
                      ? "scale(1)" 
                      : "scale(0.9)";
                  }}
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
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl mx-auto"
                    />
                  </div>

                  {/* Card Box */}
                  
                  <div
                    className="bg-white w-full h-[65%] rounded-[5px] shadow-sm flex flex-col justify-center transition-shadow duration-300 hover:shadow-xl"
                    style={{
                      paddingTop: isCenter ? "50px" : "50px",
                    }}
                  >
                    <div className="flex flex-col justify-between h-full pt-20">

               
                    <div className="px-2">
                        <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold text-left">
                      {product.category}
                    </span>

                    <h3 className="text-md font-bold text-gray-800 mt-1 text-left" style={{ fontFamily: "monospace" }}>
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-400 text-left">
                      {product.subtitle}
                    </p>
                    </div>
                    
                    <div className="w-full">
                      <button className="mt-4 px-4 py-4 w-full bg-[#000000] text-white text-sm rounded-b-[5px] hover:bg-[#000000] transition-colors duration-300">
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
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
            className={`transition-all duration-300 rounded-full h-2 ${
              i === currentIndex
                ? "w-8 bg-[#C0001A]"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}