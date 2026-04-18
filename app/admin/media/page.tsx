import { createClient } from "@/lib/supabase-server";
import { Image as ImageIcon, ExternalLink, Trash2, Plus, Info } from "lucide-react";
import Link from "next/link";

export default async function MediaAssetsPage() {
  const supabase = await createClient();

  // In a real storage-integrated app, we would list bucket files.
  // For now, we'll fetch unique images currently used across the database
  // to give them a "Library" feel of everything currently on the site.
  
  const [
    { data: productImages },
    { data: heroImages },
    { data: categoryImages },
    { data: testimonialImages }
  ] = await Promise.all([
    supabase.from("products").select("images"),
    supabase.from("hero_slides").select("image_url"),
    supabase.from("categories").select("image_url"),
    supabase.from("testimonials").select("client_image")
  ]);

  // Aggregate and de-duplicate images
  const allImages = new Set<string>();
  productImages?.forEach(p => p.images?.forEach((img: string) => allImages.add(img)));
  heroImages?.forEach(h => h.image_url && allImages.add(h.image_url));
  categoryImages?.forEach(c => c.image_url && allImages.add(c.image_url));
  testimonialImages?.forEach(t => t.client_image && allImages.add(t.client_image));

  const library = Array.from(allImages).map((url, i) => ({ id: i, url }));

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl  font-bold text-[#1A1A1A]">Media Assets</h2>
          <p className="text-xs text-body uppercase tracking-[0.2em] mt-2">Manage your premium collection imagery</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-[#C6A969]/10 text-[#C6A969] px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-[#C6A969]/20">
             <Info size={14} /> Library Sync Active
           </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {library.length > 0 ? library.map((item) => (
          <div key={item.id} className="group relative bg-[#F9F9F9] rounded-2xl border border-[#E5DED6] overflow-hidden aspect-square flex items-center justify-center hover:border-[#1A1A1A] transition-all">
            <img 
              src={item.url} 
              alt="Asset" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#C6A969] hover:text-white transition-all shadow-lg"
              >
                <ExternalLink size={18} />
              </a>
              <button 
                className="w-10 h-10 rounded-full bg-white text-[#8B1E1E] flex items-center justify-center hover:bg-[#8B1E1E] hover:text-white transition-all shadow-lg"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* URL Badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#E5DED6] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
               <p className="text-[9px] font-number text-body truncate opacity-80">{item.url}</p>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-32 text-center bg-[#F9F9F9] border border-dashed border-[#E5DED6] rounded-3xl">
             <ImageIcon className="mx-auto text-body/20 mb-4" size={48} />
             <p className="text-sm text-[#1A1A1A]/40 italic">Your media library is currently empty.</p>
          </div>
        )}
      </div>

      <div className="mt-12 p-8 bg-[#1A1A1A] rounded-3xl text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className=" text-2xl font-bold mb-4 italic">Integrating Direct Uploads</h3>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-6 opacity-80">Currently, your media library automatically tracks unique images used across the platform. For direct file uploads, please enable **Supabase Storage** and configure the bucket policies in your dashboard.</p>
          <a 
            href="https://supabase.com/docs/guides/storage" 
            target="_blank"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C6A969] hover:text-white transition-colors"
          >
            Read Storage Documentation <ExternalLink size={14} />
          </a>
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <ImageIcon size={200} />
        </div>
      </div>
    </div>
  );
}
