"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Eye, MessageSquare, Users, ArrowUpRight, ArrowDownRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

interface AdminDashboardClientProps {
  stats: any[];
  recentInquiries: any[];
}

const IconMap: Record<string, any> = {
  ShoppingBag,
  Eye,
  MessageSquare,
  Users,
};

export default function AdminDashboardClient({ stats, recentInquiries }: AdminDashboardClientProps) {
  return (
    <div className="p-12 font-inter">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#EFE7DF]/30 p-8 rounded-2xl border border-[#DCD3C9] group hover:border-[#C6A969] transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white transition-all shadow-sm">
                {(() => {
                  const Icon = IconMap[stat.icon] || ShoppingBag;
                  return <Icon size={20} />;
                })()}
              </div>
              <div className={`flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-tighter font-number ${stat.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                {stat.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.change}
              </div>
            </div>
            <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-[#1A1A1A]/60 mb-1">{stat.label}</span>
            <span className="text-4xl font-number font-bold text-[#1A1A1A]">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Inquiries List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1A1A1A] font-inter">Recent Lead Inquiries</h3>
            <Link href="/admin/inquiries" className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#8B1E1E] hover:underline font-inter">View All Inquiries</Link>
          </div>
          
          <div className="space-y-4">
            {recentInquiries.length > 0 ? (
              recentInquiries.map((inquiry, i) => (
                <motion.div 
                  key={inquiry.id} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="bg-white p-6 rounded-xl border border-[#E5DED6] flex items-center justify-between hover:border-[#1A1A1A] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-[#EFE7DF] flex items-center justify-center text-[#1A1A1A] font-bold text-sm font-number">
                      {inquiry.full_name?.charAt(0) || "Q"}
                    </div>
                    <div className="font-inter">
                      <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#8B1E1E] transition-colors">{inquiry.full_name}</h4>
                      <span className="text-xs text-[#1A1A1A]/50 font-light italic">{inquiry.subject || inquiry.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-[0.6rem] uppercase tracking-widest text-[#1A1A1A]/40 font-number">
                      {new Date(inquiry.created_at).toLocaleDateString()}
                    </span>
                    <span className={`px-4 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest font-number ${
                      inquiry.status === "new" ? "bg-[#8B1E1E] text-white" : 
                      inquiry.status === "contacted" ? "bg-[#C6A969] text-white" : "bg-green-100 text-green-700"
                    }`}>
                      {inquiry.status || "New"}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-12 text-center bg-white border border-dashed border-[#E5DED6] rounded-xl text-[#1A1A1A]/40 text-xs italic font-inter">
                No recent inquiries found.
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions / System Status */}
        <div className="space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1A1A1A] font-inter">Quick Actions</h3>
          <div className="grid gap-4">
            <Link href="/admin/products/new" className="flex items-center gap-4 bg-[#1A1A1A] text-white px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#8B1E1E] transition-all shadow-md font-inter">
              <ShoppingBag size={18} />
              Add New Product
            </Link>
            <Link href="/admin/media" className="flex items-center gap-4 bg-white border border-[#E5DED6] text-[#1A1A1A] px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#EFE7DF] transition-all font-inter">
              <ImageIcon size={18} />
              Upload Collection Imagery
            </Link>
            <Link href="/admin/testimonials" className="flex items-center gap-4 bg-white border border-[#E5DED6] text-[#1A1A1A] px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#EFE7DF] transition-all font-inter">
              <Users size={18} />
              Manage Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
