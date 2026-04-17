import { createClient } from "@/lib/supabase-server";
import { MessageSquare } from "lucide-react";
import InquiryCard from "./InquiryCard";

export default async function AdminInquiriesPage() {
  const supabase = await createClient();
  const { data: inquiries } = await supabase
    .from("inquiries")
    .select("*")
    .neq("status", "archived")
    .order("created_at", { ascending: false });

  return (
    <div className="p-10 font-inter">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-playfair font-bold text-[#1A1A1A]">Customer Inquiries</h2>
          <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest mt-1 font-bold">Track and respond to lead requests</p>
        </div>
      </div>

      <div className="grid gap-6">
        {inquiries && inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <InquiryCard key={inquiry.id} inquiry={inquiry} />
          ))
        ) : (
          <div className="py-24 text-center border-2 border-dashed border-[#E5DED6] rounded-3xl">
            <MessageSquare size={48} className="mx-auto text-body/20 mb-6" />
            <h3 className="text-xl font-playfair font-bold text-[#1A1A1A] mb-2">No Inquiries Yet</h3>
            <p className="text-xs text-body uppercase tracking-widest">When customers contact you, they'll appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
