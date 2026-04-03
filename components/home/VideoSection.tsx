"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";

const storyVideos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    title: "Master Craftsmanship",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1616137422495-1e96aadd3461?q=80&w=2000&auto=format&fit=crop",
    title: "Premium Materials",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1964&auto=format&fit=crop",
    title: "Design Philosophy",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-brand-primary py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <SectionHeading
          label="The Magnat Way"
          title="Stories Behind the Design"
          subtitle="Watch how we transform raw, natural materials into pieces of timeless art. Experience the dedication of our master artisans."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyVideos.map((video, index) => (
            <FadeInView key={video.title} delay={index * 0.2} className="group relative h-[600px] overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <button 
                  onClick={() => setSelectedVideo(video.videoUrl)}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all hover:scale-110 hover:bg-[#8B1E1E] hover:border-transparent"
                >
                  <Play size={28} fill="currentColor" className="ml-1" />
                </button>
                <h3 className="font-playfair text-2xl font-bold text-white tracking-wide">
                  {video.title}
                </h3>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-6 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white"
            >
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-[#1A1A1A] shadow-2xl"
            >
              <iframe
                src={selectedVideo}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
