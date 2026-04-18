"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Star, Quote } from "lucide-react";
import { saveTestimonial } from "@/app/actions/cms";
import { Testimonial } from "@/lib/types";

interface TestimonialFormProps {
  testimonial?: Testimonial;
}

export default function TestimonialForm({ testimonial }: TestimonialFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(testimonial?.rating || 5);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await saveTestimonial(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/admin/testimonials");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-body hover:text-[#111111] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Reviews
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#111111] text-white px-8 py-3 rounded-none flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:bg-[#C0001A] transition-all disabled:opacity-50"
        >
          <Save size={16} /> {loading ? "Saving..." : "Save Review"}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-[#C0001A]/5 border border-[#C0001A]/20 text-[#C0001A] rounded-none text-sm font-medium">
          {error}
        </div>
      )}

      <input type="hidden" name="id" value={testimonial?.id || "new"} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Review Content Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-none border border-[#eeeeee] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <Quote size={120} />
            </div>
            
            <h3 className="text-xl font-playfair font-bold text-[#111111] mb-6">Client Perspective</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">The Review Content</label>
                <textarea
                  name="quote"
                  defaultValue={testimonial?.quote}
                  rows={5}
                  required
                  placeholder="e.g., The craftsmanship and attention to detail is exceptional..."
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#eeeeee] rounded-none focus:outline-none focus:border-[#C0001A] transition-all text-sm resize-none relative z-10"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-3">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="group transition-transform active:scale-90"
                    >
                      <Star 
                        size={24} 
                        className={`${star <= rating ? "fill-[#C0001A] text-[#C0001A]" : "text-[#eeeeee]"} transition-colors`}
                      />
                    </button>
                  ))}
                  <span className="ml-4 text-sm font-bold text-[#C0001A]">{rating}/5 Stars</span>
                  <input type="hidden" name="rating" value={rating} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none border border-[#eeeeee] shadow-sm">
            <h3 className="text-xl font-playfair font-bold text-[#111111] mb-6">Client Identity</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Full Name</label>
                <input
                  type="text"
                  name="client_name"
                  defaultValue={testimonial?.client_name}
                  required
                  placeholder="e.g., Abdul Rahman"
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#eeeeee] rounded-none focus:outline-none focus:border-[#C0001A] transition-all text-sm"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Role/Location</label>
                <input
                  type="text"
                  name="client_role"
                  defaultValue={testimonial?.client_role || ""}
                  placeholder="e.g., Kondotty"
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#eeeeee] rounded-none focus:outline-none focus:border-[#C0001A] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-body mb-2">Portrait URL (Optional)</label>
              <input
                type="text"
                name="client_image"
                defaultValue={testimonial?.client_image || ""}
                placeholder="https://..."
                className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#eeeeee] rounded-none focus:outline-none focus:border-[#C0001A] transition-all text-sm font-mono"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings Column */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-none border border-[#eeeeee] shadow-sm sticky top-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C0001A] mb-6">Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="is_active_check" 
                      defaultChecked={testimonial?.is_active ?? true}
                      className="sr-only peer"
                      onChange={(e) => {
                        const hiddenInput = document.getElementById('is_active_hidden') as HTMLInputElement;
                        hiddenInput.value = e.target.checked ? "true" : "false";
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C0001A]"></div>
                  </div>
                  <input type="hidden" id="is_active_hidden" name="is_active" value={testimonial ? String(testimonial.is_active) : "true"} />
                  <span className="text-xs font-bold uppercase tracking-widest text-body group-hover:text-[#111111] transition-colors">Visible on Site</span>
                </label>
              </div>

              <div className="pt-6 border-t border-[#F0F2F5]">
                <p className="text-[10px] text-body/50 italic leading-relaxed">
                  Testimonials with 5-star ratings are automatically prioritized in the homepage carousel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
