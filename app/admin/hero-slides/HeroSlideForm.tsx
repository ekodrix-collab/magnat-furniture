"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { saveHeroSlide } from "@/app/actions/cms";
import { HeroSlide } from "@/lib/types";

interface HeroSlideFormProps {
  slide?: HeroSlide;
}

export default function HeroSlideForm({ slide }: HeroSlideFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await saveHeroSlide(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/admin/hero-slides");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-body hover:text-[#1A1A1A] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Slides
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:bg-[#8B1E1E] transition-all disabled:opacity-50"
        >
          <Save size={16} /> {loading ? "Saving..." : "Save Slide"}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 text-[#8B1E1E] rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      <input type="hidden" name="id" value={slide?.id || "new"} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Visual Content Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E5DED6] shadow-sm">
            <h3 className="text-xl  font-bold text-[#1A1A1A] mb-6">Cinematic Content</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Headline</label>
                <input
                  type="text"
                  name="heading"
                  defaultValue={slide?.heading}
                  required
                  placeholder="e.g., Living Architecture"
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5DED6] rounded-xl focus:outline-none focus:border-[#C6A969] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Cinematic Description</label>
                <textarea
                  name="description"
                  defaultValue={slide?.description || ""}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5DED6] rounded-xl focus:outline-none focus:border-[#C6A969] transition-all text-sm resize-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E5DED6] shadow-sm">
            <h3 className="text-xl  font-bold text-[#1A1A1A] mb-6">Imagery</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  defaultValue={slide?.image_url}
                  required
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5DED6] rounded-xl focus:outline-none focus:border-[#C6A969] transition-all text-sm font-mono"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Image Alt Text (SEO)</label>
                <input
                  type="text"
                  name="alt_text"
                  defaultValue={slide?.alt_text || ""}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5DED6] rounded-xl focus:outline-none focus:border-[#C6A969] transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings Column */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E5DED6] shadow-sm sticky top-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A969] mb-6">Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Sort Order</label>
                <input
                  type="number"
                  name="sort_order"
                  defaultValue={slide?.sort_order || 0}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E5DED6] rounded-xl focus:outline-none focus:border-[#C6A969] transition-all text-sm"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="is_active_check" 
                      defaultChecked={slide?.is_active ?? true}
                      className="sr-only peer"
                      onChange={(e) => {
                        const hiddenInput = document.getElementById('is_active_hidden') as HTMLInputElement;
                        hiddenInput.value = e.target.checked ? "true" : "false";
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8B1E1E]"></div>
                  </div>
                  <input type="hidden" id="is_active_hidden" name="is_active" value={slide ? String(slide.is_active) : "true"} />
                  <span className="text-xs font-bold uppercase tracking-widest text-body group-hover:text-[#1A1A1A] transition-colors">Visible in Intro</span>
                </label>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#F9F9F9] rounded-2xl border border-dashed border-[#E5DED6] text-center">
            <ImageIcon className="mx-auto text-body/20 mb-3" size={32} />
            <p className="text-[10px] text-body/60 font-medium">Recommended size:<br/>2600 x 1400px (16:9)</p>
          </div>
        </div>
      </div>
    </form>
  );
}
