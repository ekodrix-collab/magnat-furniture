"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveProduct } from "@/app/actions/cms";
import { Product, Category } from "@/lib/types";
import { X, Plus, Save, ArrowLeft, Image as ImageIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import ImageUpload from "@/components/ui/ImageUpload";

interface ProductFormProps {
  product?: Partial<Product>;
  categories: Category[];
}

export default function ProductForm({ product, categories }: ProductFormProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State for dynamic lists
  const [images, setImages] = useState<string[]>(product?.images || [""]);
  const [features, setFeatures] = useState<string[]>(product?.features || [""]);
  const [specifications, setSpecifications] = useState<{ label: string; value: string }[]>(
    product?.specifications || [{ label: "", value: "" }]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Add dynamic lists as JSON strings
    formData.append("features", JSON.stringify(features.filter(f => f.trim())));
    formData.append("specifications", JSON.stringify(specifications.filter(s => s.label.trim())));
    
    // Handle images (if using simple input fields)
    images.forEach(img => {
      if (img.trim()) formData.append("images", img.trim());
    });

    try {
      const result = await saveProduct(formData);
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/admin/products");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred while saving.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#F0F2F5]/80 backdrop-blur-md py-6 border-b border-[#eeeeee]">
        <div className="flex items-center gap-6">
          <Link href="/admin/products" className="p-2 hover:bg-white rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-xl font-playfair font-bold text-[#111111]">
              {product?.id ? `Edit: ${product.name}` : "Create New Product"}
            </h2>
          </div>
        </div>
        <button
          type="submit"
          disabled={isPending || isUploadingImage}
          className="bg-[#111111] text-white px-8 py-3 text-[0.7rem] font-bold uppercase tracking-widest rounded-none hover:bg-[#C0001A] transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
        >
          {isPending ? "Saving..." : isUploadingImage ? "Upload in Progress..." : <><Save size={16} /> Save Product</>}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-none text-sm italic">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: General Info */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-none shadow-sm border border-[#eeeeee] space-y-6">
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C0001A] mb-4">Core Essentials</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <input type="hidden" name="id" value={product?.id || "new"} />
              
              <div className="space-y-2 col-span-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Product Title</label>
                <input
                  name="name"
                  defaultValue={product?.name}
                  required
                  placeholder="e.g. Nordic Lounge Chair"
                  className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">URL Slug</label>
                <input
                  name="slug"
                  defaultValue={product?.slug}
                  required
                  placeholder="nordic-lounge-chair"
                  className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A] transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Category</label>
                <select
                  name="category_id"
                  defaultValue={product?.category_id || ""}
                  className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A] transition-all appearance-none"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Detailed Description</label>
              <textarea
                name="description"
                defaultValue={product?.description || ""}
                rows={6}
                className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A] transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Excerpt (Short Description)</label>
              <textarea
                name="short_description"
                defaultValue={product?.short_description || ""}
                rows={2}
                className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A] transition-all resize-none"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white p-8 rounded-none shadow-sm border border-[#eeeeee]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C0001A]">Distinctive Features</h3>
              <button 
                type="button"
                onClick={() => setFeatures([...features, ""])}
                className="text-[0.6rem] font-bold uppercase tracking-widest text-[#C0001A] flex items-center gap-1 hover:underline"
              >
                <Plus size={12} /> Add Feature
              </button>
            </div>
            <div className="space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <input
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[idx] = e.target.value;
                      setFeatures(newFeatures);
                    }}
                    placeholder="e.g. Hand-carved teak wood base"
                    className="flex-1 bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setFeatures(features.filter((_, i) => i !== idx))}
                    className="p-3 text-body/30 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Panels */}
        <div className="space-y-8">
          {/* Images Section */}
          <section className="bg-white p-8 rounded-none shadow-sm border border-[#eeeeee] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C0001A]">Visual Assets</h3>
            </div>
            
            <ImageUpload 
              isUploading={isUploadingImage}
              setIsUploading={setIsUploadingImage}
              onUploadSuccess={(url) => setImages(prev => [...prev.filter(img => img !== ""), url])}
            />
            
            <div className="space-y-4 pt-2">
              {images.filter(img => img).map((img, idx) => (
                <div key={idx} className="relative group border border-[#eeeeee] bg-[#F9F9F9] p-2 flex items-center justify-between">
                  <div className="h-12 w-12 overflow-hidden bg-gray-50 border border-[#eeeeee] flex-shrink-0">
                    <img src={img} className="w-full h-full object-cover" alt="Preview" />
                  </div>
                  <span className="text-[9px] font-mono text-[#666] truncate mx-4 flex-1">{img.split('/').pop()}</span>
                  <button 
                    type="button"
                    onClick={() => setImages(images.filter((_, i) => i !== idx))}
                    className="p-2 text-[#666] hover:text-[#C0001A] hover:bg-white transition-colors border border-transparent hover:border-[#eeeeee]"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing & Status */}
          <section className="bg-white p-8 rounded-none shadow-sm border border-[#eeeeee] space-y-6">
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C0001A]">Market Positioning</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Base Price</label>
                <input
                  name="price"
                  defaultValue={product?.price || ""}
                  placeholder="e.g. ₹85,000 or Start from..."
                  className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-body/60 pl-1">Badge / Tag</label>
                <input
                  name="badge"
                  defaultValue={product?.badge || ""}
                  placeholder="e.g. Signature Series"
                  className="w-full bg-[#F9F9F9] border border-[#eeeeee] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C0001A]"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input type="checkbox" name="is_new" defaultChecked={product?.is_new} value="true" className="w-4 h-4 accent-[#C0001A]" />
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#111111]">New Arrival</label>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" name="is_bestseller" defaultChecked={product?.is_bestseller} value="true" className="w-4 h-4 accent-[#C0001A]" />
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#111111]">Bestseller</label>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" name="is_active" defaultChecked={product?.is_active ?? true} value="true" className="w-4 h-4 accent-[#C0001A]" />
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#111111]">Published / Live</label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
