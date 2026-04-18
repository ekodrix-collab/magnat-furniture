"use client";

import { useState } from "react";
import { Edit2, Trash2, Save, X, Eye, EyeOff } from "lucide-react";
import { deleteHeroSlide, saveHeroSlide } from "@/app/actions/cms";
import { HeroSlide } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlideCardProps {
  slide: HeroSlide;
}

export default function HeroSlideCard({ slide }: HeroSlideCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isActive, setIsActive] = useState(slide.is_active);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete the "${slide.heading}" slide?`)) return;
    setIsDeleting(true);
    await deleteHeroSlide(slide.id);
  };

  const toggleStatus = async () => {
    const formData = new FormData();
    formData.append("id", slide.id);
    formData.append("heading", slide.heading);
    formData.append("description", slide.description || "");
    formData.append("image_url", slide.image_url);
    formData.append("is_active", (!isActive).toString());
    
    setIsActive(!isActive);
    await saveHeroSlide(formData);
  };

  if (isDeleting) return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white border border-[#E5DED6] rounded-2zl overflow-hidden hover:border-[#8B1E1E] transition-all group flex h-48 relative shadow-sm"
    >
      <div className="w-80 relative shrink-0">
        <img src={slide.image_url} alt={slide.heading} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 transition-colors ${isActive ? "bg-black/10" : "bg-black/60 backdrop-blur-[1px]"}`} />
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white bg-black/40 px-3 py-1 rounded-full border border-white/20">Hidden Slide</span>
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col justify-center flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#C6A969]">Slide Order: {slide.sort_order + 1}</span>
        </div>
        <h3 className=" text-2xl font-bold text-[#1A1A1A] mb-2">{slide.heading}</h3>
        <p className="text-xs text-body line-clamp-2 max-w-xl font-light italic opacity-60">
          {slide.description}
        </p>
      </div>

      <div className="px-8 flex items-center gap-4 border-l border-[#F0F2F5]">
        <button 
          onClick={toggleStatus}
          className={`p-3 transition-colors rounded-xl ${isActive ? "text-body/40 hover:text-[#1A1A1A] bg-[#F9F9F9]" : "text-white bg-[#8B1E1E]"}`}
          title={isActive ? "Hide Slide" : "Show Slide"}
        >
          {isActive ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        
        <a 
          href={`/admin/hero-slides/${slide.id}`}
          className="p-3 text-body/40 hover:text-[#C6A969] transition-colors bg-[#F9F9F9] rounded-xl"
          title="Edit Slide"
        >
          <Edit2 size={18} />
        </a>
        
        <button 
          onClick={handleDelete}
          className="p-3 text-body/40 hover:text-[#8B1E1E] transition-colors bg-[#F9F9F9] rounded-xl"
          title="Delete Slide"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}
