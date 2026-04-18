"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

const galleryItems = [
   { img: "/images/bedroom-001.jpg", title: "Royal Living" },
   { img: "/images/dining-001.jpg", title: "Classic Dining" },
   { img: "/images/insta-post-001.jpg", title: "Studio Vibe" },
   { img: "/images/living-chairs.jpg", title: "Lounge Area" },
   { img: "/images/kids-room.jpg", title: "Kids Space" },
   { img: "/images/outdoor.jpg", title: "Outdoor Decor" },
   { img: "/images/sofa-002.jpg", title: "Modern Comfort" },
];

export default function KondottyGallery() {
   const [isPaused, setIsPaused] = useState(false);

   // Duplicate array for infinite seamless loop
   const displayItems = [...galleryItems, ...galleryItems];

   return (
      <section className="bg-[#FAF9F6] py-24 overflow-hidden">
         <div className="max-container px-6 lg:px-8 mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#111] text-center" style={{ fontFamily: "var(--font-playfair)" }}>
               We're on Instagram
            </h2>
            <p className="text-gray-500 text-center mt-4">@magnat_furniture.kondotty</p>
         </div>

         {/* Marquee Container */}
         <div
            className="relative w-full cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
         >
            <motion.div
               className="flex gap-6 px-6"
               animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
               transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
               }}
            >
               {displayItems.map((item, index) => (
                  <div
                     key={index}
                     className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5"
                  >
                     {/* Feed Header */}
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-600 p-[2px]">
                           <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-red-600">M</div>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[12px] font-bold tracking-tight">magnat_furniture</span>
                           <span className="text-[10px] text-gray-400">Kondotty, Kerala</span>
                        </div>
                     </div>

                     {/* Image */}
                     <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
                        <Image
                           src={item.img}
                           alt={item.title}
                           fill
                           className="object-cover"
                        />
                     </div>

                     {/* Feed Footer */}
                     <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-gray-500">
                           {item.title}
                        </span>
                        <a
                           href="https://instagram.com/magnat_furniture_.kondotty"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-400 hover:text-black transition-colors"
                        >
                           <Instagram size={18} />
                        </a>
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}