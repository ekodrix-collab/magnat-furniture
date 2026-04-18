import { createClient } from "@/lib/supabase-server";
import { Users, Plus } from "lucide-react";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

export default async function AdminTestimonialsPage() {
  const supabase = await createClient();
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl  font-bold text-[#1A1A1A]">Client Testimonials</h2>
          <p className="text-xs text-body uppercase tracking-widest mt-1">Manage public reviews and feedback</p>
        </div>
        <Link 
          href="/admin/testimonials/new"
          className="bg-[#1A1A1A] text-white px-6 py-3 text-[0.65rem] font-bold uppercase tracking-widest rounded-lg hover:bg-[#8B1E1E] transition-all flex items-center gap-2 shadow-md"
        >
          <Plus size={14} /> Add Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))
        ) : (
          <div className="col-span-full py-24 text-center border-2 border-dashed border-[#E5DED6] rounded-3xl">
            <Users size={48} className="mx-auto text-body/20 mb-6" />
            <h3 className="text-xl  font-bold text-[#1A1A1A] mb-2">No Testimonials Yet</h3>
            <p className="text-xs text-body uppercase tracking-widest">Share customer feedback on your homepage.</p>
          </div>
        )}
      </div>
    </div>
  );
}
