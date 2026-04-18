"use client";

import { useState } from "react";
import { Star, Edit2, Trash2 } from "lucide-react";
import { deleteTestimonial } from "@/app/actions/cms";
import { Testimonial } from "@/lib/types";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete the testimonial from ${testimonial.client_name}?`)) return;
    setIsDeleting(true);
    const result = await deleteTestimonial(testimonial.id);
    if (result?.error) {
      alert("Error: " + result.error);
      setIsDeleting(false);
    }
  };

  if (isDeleting) return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#F7F4F0]/20 border border-[#eeeeee] rounded-none p-8 hover:border-[#C0001A] transition-all group relative"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#C0001A] text-[#C0001A]" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a 
            href={`/admin/testimonials/${testimonial.id}`}
            className="p-1.5 text-body/40 hover:text-[#C0001A] transition-colors"
          >
            <Edit2 size={16} />
          </a>
          <button 
            onClick={handleDelete}
            className="p-1.5 text-body/40 hover:text-[#C0001A] transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <p className="text-sm text-body/80 leading-relaxed font-light italic mb-8">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-[#eeeeee]">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#111111] font-bold border border-brand/20">
          {testimonial.client_name?.charAt(0) || "C"}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#111111]">{testimonial.client_name}</h4>
          <p className="text-[0.6rem] text-body uppercase tracking-widest">{testimonial.client_role || "Valued Client"}</p>
        </div>
      </div>
    </motion.div>
  );
}
