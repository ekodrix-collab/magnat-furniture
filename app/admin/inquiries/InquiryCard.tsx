"use client";

import { useState } from "react";
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";
import { updateInquiryStatus } from "@/app/actions/cms";
import { motion, AnimatePresence } from "framer-motion";

interface InquiryCardProps {
  inquiry: any;
}

export default function InquiryCard({ inquiry }: InquiryCardProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(inquiry.status || "new");

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true);
    const result = await updateInquiryStatus(inquiry.id, newStatus);
    if (result.success) {
      setCurrentStatus(newStatus);
    }
    setIsUpdating(false);
  };

  if (currentStatus === "archived") return null;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white border border-[#E5DED6] rounded-2xl p-8 hover:border-[#8B1E1E] transition-all group shadow-sm font-inter"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-[#EFE7DF] flex items-center justify-center text-[#1A1A1A] font-bold font-number">
              {inquiry.full_name?.charAt(0) || "Q"}
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] font-inter">{inquiry.full_name}</h3>
              <p className="text-[0.65rem] text-[#1A1A1A]/50 uppercase tracking-widest font-bold">{inquiry.subject || "General Inquiry"}</p>
            </div>
          </div>
          
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-light italic bg-[#F9F9F9] p-6 rounded-xl border border-[#E5DED6]">
            "{inquiry.message}"
          </p>

          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center gap-2 text-[#666]">
              <Mail size={14} className="text-[#C6A969]" />
              <span className="text-[0.7rem] font-medium">{inquiry.email}</span>
            </div>
            {inquiry.phone && (
              <div className="flex items-center gap-2 text-[#666]">
                <Phone size={14} className="text-[#C6A969]" />
                <span className="text-[0.7rem] font-medium font-number">{inquiry.phone}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-[#666]">
              <Calendar size={14} className="text-[#C6A969]" />
              <span className="text-[0.7rem] font-medium font-number">{new Date(inquiry.created_at).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          <div className={`px-4 py-2 rounded-lg text-center text-[0.65rem] font-bold uppercase tracking-widest transition-colors font-number ${
            currentStatus === "new" ? "bg-[#8B1E1E] text-white" : 
            currentStatus === "contacted" ? "bg-[#C6A969] text-white" : "bg-green-100 text-green-700"
          }`}>
            {isUpdating ? "Updating..." : currentStatus}
          </div>
          
          {currentStatus === "new" && (
            <button 
              onClick={() => handleStatusChange("contacted")}
              disabled={isUpdating}
              className="w-full py-3 border border-[#E5DED6] text-[#1A1A1A] text-[0.65rem] font-bold uppercase tracking-widest rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-all disabled:opacity-50 font-inter"
            >
              Mark as Contacted
            </button>
          )}

          {currentStatus === "contacted" && (
            <button 
              onClick={() => handleStatusChange("resolved")}
              disabled={isUpdating}
              className="w-full py-3 border border-green-100 text-green-700 text-[0.65rem] font-bold uppercase tracking-widest rounded-lg hover:bg-green-600 hover:text-white transition-all disabled:opacity-50 font-inter"
            >
              Mark as Resolved
            </button>
          )}

          <button 
            onClick={() => handleStatusChange("archived")}
            disabled={isUpdating}
            className="w-full py-3 border border-[#8B1E1E]/20 text-[#8B1E1E] text-[0.65rem] font-bold uppercase tracking-widest rounded-lg hover:bg-[#8B1E1E] hover:text-white transition-all disabled:opacity-50 font-inter"
          >
            Archive Inquiry
          </button>
        </div>
      </div>
    </motion.div>
  );
}
