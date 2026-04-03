"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, Eye, MessageSquare, ArrowUpRight, ArrowDownRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Total Products", value: "84", icon: ShoppingBag, change: "+4 this month", isPositive: true },
  { label: "Active Inquiries", value: "12", icon: MessageSquare, change: "+2 today", isPositive: true },
  { label: "Client Views", value: "2.4k", icon: Eye, change: "-12% vs last week", isPositive: false },
  { label: "Testimonials", value: "18", icon: Users, change: "All active", isPositive: true },
];

const recentInquiries = [
  { name: "John Doe", interest: "Living Room Sofa", date: "2 mins ago", status: "New" },
  { name: "Sarah Smith", interest: "Dining Table", date: "1 hour ago", status: "Contacted" },
  { name: "Robert Fox", interest: "Executive Desk", date: "3 hours ago", status: "New" },
  { name: "Emily Blanch", interest: "Custom Bedroom", date: "5 hours ago", status: "Resolved" },
];

export default function AdminDashboard() {
  return (
    <div className="p-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#EFE7DF]/30 p-8 rounded-2xl border border-brand/50 group hover:border-[#C6A969] transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white transition-all shadow-sm">
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-tighter ${stat.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                {stat.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.change}
              </div>
            </div>
            <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-body mb-1">{stat.label}</span>
            <span className="text-4xl font-playfair font-bold text-[#1A1A1A]">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Inquiries List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">Recent Lead Inquiries</h3>
            <button className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#8B1E1E] hover:underline">View All Inquiries</button>
          </div>
          
          <div className="space-y-4">
            {recentInquiries.map((inquiry, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-6 rounded-xl border border-brand flex items-center justify-between hover:border-[#1A1A1A] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-full bg-[#EFE7DF] flex items-center justify-center text-[#1A1A1A] font-bold text-sm">
                    {inquiry.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#8B1E1E] transition-colors">{inquiry.name}</h4>
                    <span className="text-xs text-body font-light italic">{inquiry.interest}</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-[0.6rem] uppercase tracking-widest text-body/50">{inquiry.date}</span>
                  <span className={`px-4 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest ${
                    inquiry.status === "New" ? "bg-[#8B1E1E] text-white" : 
                    inquiry.status === "Contacted" ? "bg-[#C6A969] text-white" : "bg-green-100 text-green-700"
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions / System Status */}
        <div className="space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">Quick Actions</h3>
          <div className="grid gap-4">
            <button className="flex items-center gap-4 bg-[#1A1A1A] text-white px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#8B1E1E] transition-all shadow-md">
              <ShoppingBag size={18} />
              Add New Product
            </button>
            <button className="flex items-center gap-4 bg-white border border-brand text-[#1A1A1A] px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#EFE7DF] transition-all">
              <ImageIcon size={18} />
              Upload Collection Imagery
            </button>
            <button className="flex items-center gap-4 bg-white border border-brand text-[#1A1A1A] px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-[#EFE7DF] transition-all">
              <Users size={18} />
              Manage Testimonials
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-[#1A1A1A] text-white overflow-hidden relative group">
            <div className="relative z-10">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#C6A969] mb-4">System Update</span>
              <h4 className="font-playfair text-xl font-bold mb-4 italic italic">Next.js 16 + Tailwind v4 is live.</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light mb-6 opacity-70">Experience the latest in performant CMS architecture and premium brand aesthetics.</p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-[#C6A969]" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Image as ImageIcon } from "lucide-react";
