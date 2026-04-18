"use client";

import { useState } from "react";
import { Edit2, Trash2, ListTree } from "lucide-react";
import { deleteCategory } from "@/app/actions/cms";
import { Category } from "@/lib/types";
import { motion } from "framer-motion";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete the "${category.name}" collection? This will orphaned any products assigned to it.`)) return;
    setIsDeleting(true);
    const result = await deleteCategory(category.id);
    if (result?.error) {
      alert("Error: " + result.error);
      setIsDeleting(false);
    }
  };

  if (isDeleting) return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#E5DED6] rounded-2xl overflow-hidden hover:border-[#8B1E1E] transition-all group shadow-sm flex flex-col h-full"
    >
      <div className="relative h-48 bg-[#EFE7DF]">
        {category.image_url ? (
          <img src={category.image_url} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-body/20">
            <ListTree size={48} />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-[#1A1A1A] text-white text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Order: {category.sort_order}
          </span>
        </div>
        {category.is_featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#C6A969] text-white text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className=" text-xl font-bold text-[#1A1A1A] mb-2">{category.name}</h3>
        <p className="text-xs text-body leading-relaxed font-light mb-6 opacity-60 italic line-clamp-2">
          {category.description || "No description provided for this collection."}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#F0F2F5]">
          <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A969] font-mono">
            /{category.slug}
          </span>
          <div className="flex items-center gap-2">
            <a 
              href={`/admin/categories/${category.id}`}
              className="p-2 text-body/40 hover:text-[#C6A969] transition-colors"
            >
              <Edit2 size={16} />
            </a>
            <button 
              onClick={handleDelete}
              className="p-2 text-body/40 hover:text-[#8B1E1E] transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
