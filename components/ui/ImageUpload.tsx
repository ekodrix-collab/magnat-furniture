"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { UploadCloud, X, Loader2, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
  onUploadSuccess: (url: string) => void;
  isUploading: boolean;
  setIsUploading: (uploading: boolean) => void;
}

export default function ImageUpload({ onUploadSuccess, isUploading, setIsUploading }: ImageUploadProps) {
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB Limit
      setError("Image size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    setError(null);

    // Create unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `products/${fileName}`;

    try {
      const { data, error: uploadError } = await supabase.storage
        .from("magnat-media")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("magnat-media")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        onUploadSuccess(publicUrlData.publicUrl);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-3 font-inter">
      <div 
        onClick={() => !isUploading && fileInputRef.current?.click()}
        className={`w-full border-2 border-dashed border-[#eeeeee] bg-[#F9F9F9] p-8 text-center cursor-pointer hover:border-[#C0001A] transition-all flex flex-col items-center justify-center min-h-[160px] ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/jpeg,image/png,image/webp" 
          onChange={handleUpload}
          disabled={isUploading}
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center gap-3 text-[#111]">
            <Loader2 size={24} className="animate-spin text-[#C0001A]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Uploading Media...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
             <div className="w-10 h-10 bg-[#111] text-white flex items-center justify-center">
                <UploadCloud size={20} />
             </div>
             <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111] block mb-1">Click to Upload Image</span>
                <span className="text-[9px] text-[#666] uppercase tracking-widest">JPEG, PNG, WEBP (Max 5MB)</span>
             </div>
          </div>
        )}
      </div>

      {error && (
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#C0001A] flex items-center gap-2">
           <X size={12} /> {error}
        </div>
      )}
    </div>
  );
}
