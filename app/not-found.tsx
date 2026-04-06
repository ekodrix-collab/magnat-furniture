import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F3EF] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Large decorative number */}
        <div className="relative inline-block mb-8 select-none">
          <span
            className="font-playfair font-black text-[180px] md:text-[220px] leading-none"
            style={{
              background: "linear-gradient(160deg, #B82222 0%, #8B1E1E 55%, #5C1010 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
            }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
                Page Not Found
              </h1>
              <div className="h-[2px] w-16 bg-[#C6A969] mx-auto" />
            </div>
          </div>
        </div>

        <p className="text-[#5A5A5A] font-light text-lg leading-relaxed mb-12 max-w-md mx-auto">
          The page you&apos;re looking for has been moved, renamed, or may never have existed. Let us guide you back to our world of premium furniture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#8B1E1E] active:scale-95"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/collections"
            className="flex items-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#1A1A1A] hover:text-white active:scale-95"
          >
            Explore Collections
          </Link>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#C6A969] opacity-40" />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#C6A969]">
            Magnat Furniture
          </span>
          <span className="h-[1px] w-12 bg-[#C6A969] opacity-40" />
        </div>
      </div>
    </div>
  );
}
