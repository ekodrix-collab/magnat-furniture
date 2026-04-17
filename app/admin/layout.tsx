"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ListTree, MessageSquare, Image as ImageIcon, Users, Settings, LogOut, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: ListTree },
  { label: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { label: "Testimonials", href: "/admin/testimonials", icon: Users },
  { label: "Media Assets", href: "/admin/media", icon: ImageIcon },
];

import { handleLogout } from "@/app/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6">
        {children}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F0F2F5] font-inter">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1A1A1A] text-white flex flex-col fixed inset-y-0 z-50">
        <div className="p-8 pb-12">
          <Link href="/" className="flex items-center gap-2 mb-10 group">
            <span className="font-playfair text-2xl font-bold tracking-tighter text-white">
              MAGNAT<span className="text-[#8B1E1E]">.</span>
            </span>
            <span className="bg-[#C6A969] text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 text-[#1A1A1A] rounded-sm">Admin</span>
          </Link>
          
          <nav className="space-y-1">
            {adminNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all rounded-lg ${
                    isActive 
                      ? "bg-[#C6A969] text-[#1A1A1A]" 
                      : "text-[#EFE7DF]/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-8 space-y-4">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
            <p className="text-[0.6rem] uppercase tracking-widest text-[#C6A969] mb-2 font-bold">Premium Support</p>
            <p className="text-xs text-white/50 leading-relaxed font-light mb-4 italic">Need assistance with your CMS? Contact development.</p>
            <a href="mailto:dev@magnat.com" className="text-[0.65rem] font-bold text-white hover:underline flex items-center gap-2">
              Help Center <ExternalLink size={12} />
            </a>
          </div>
          
          <button 
            onClick={() => handleLogout()}
            className="flex items-center gap-4 px-4 py-4 w-full text-xs font-bold uppercase tracking-[0.15em] text-[#8B1E1E] hover:bg-[#8B1E1E]/10 rounded-lg transition-all border border-transparent hover:border-[#8B1E1E]/20"
          >
            <LogOut size={18} />
            Logout Account
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12">
        <header className="flex items-center justify-between mb-12 font-inter">
          <div>
            <h1 className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[#C6A969] mb-2">Back-office Management</h1>
            <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A]">Admin Control Panel</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end text-right">
              <span className="text-xs font-bold text-[#1A1A1A]">Anwar Hossain</span>
              <span className="text-[0.6rem] text-body uppercase tracking-widest opacity-60">Master Admin</span>
            </div>
            <div className="h-12 w-12 rounded-full border-2 border-[#C6A969] bg-[#1A1A1A]" />
          </div>
        </header>

        <section className="bg-white rounded-3xl shadow-sm border border-[#E5DED6] overflow-hidden min-h-[calc(100vh-250px)]">
          {children}
        </section>
      </main>
    </div>
  );
}
