import { createClient } from "@/lib/supabase-server";
import { Image as ImageIcon, Plus } from "lucide-react";
import Link from "next/link";
import HeroSlideCard from "./HeroSlideCard";

export default async function AdminHeroPage() {
  const supabase = await createClient();
  const { data: slides, error } = await supabase
    .from("hero_slides")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching hero slides:", error);
  }

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-playfair font-bold text-[#1A1A1A]">Homepage Hero Slides</h2>
          <p className="text-xs text-body uppercase tracking-widest mt-1">Manage cinematic intro imagery</p>
        </div>
        <Link 
          href="/admin/hero-slides/new"
          className="bg-[#1A1A1A] text-white px-6 py-3 text-[0.65rem] font-bold uppercase tracking-widest rounded-lg hover:bg-[#8B1E1E] transition-all flex items-center gap-2 shadow-md"
        >
          <Plus size={14} /> Add Slide
        </Link>
      </div>

      <div className="space-y-6">
        {slides && slides.length > 0 ? (
          slides.map((slide) => (
            <HeroSlideCard key={slide.id} slide={slide} />
          ))
        ) : (
          <div className="py-24 text-center border-2 border-dashed border-[#E5DED6] rounded-3xl bg-[#F9F9F9]/50">
            <ImageIcon size={48} className="mx-auto text-body/20 mb-6" />
            <h3 className="text-xl font-playfair font-bold text-[#1A1A1A] mb-2">No Custom Slides</h3>
            <p className="text-xs text-body uppercase tracking-widest">You are currently using the hardcoded cinematic slides.</p>
          </div>
        )}
      </div>
    </div>
  );
}
