"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" }
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Interior Design"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-6 lg:px-12">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="mb-4 block text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[#C6A969]"
          >
            Est. 1999 — Crafting Heritage
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="mb-8 font-playfair text-5xl font-semibold leading-[1.1] text-white md:text-7xl lg:text-8xl"
          >
            Elevate Your <br />
            <span className="italic text-[#C6A969]">Living Spaces</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mb-12 max-w-xl text-lg font-light leading-relaxed text-[#EFE7DF]/80"
          >
            Discover a curated collection of premium furniture designed for those who appreciate the finer details of life. Experience 25 years of excellence in every stitch and curve.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <Button href="/collections" variant="gold" className="px-10 py-5 text-sm">
              Discover Collections
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1A1A] px-10 py-5 text-sm">
              Visit Showroom
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em]">Explore</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </section>
  );
}
