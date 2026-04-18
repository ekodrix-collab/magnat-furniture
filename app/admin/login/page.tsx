"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, User } from "lucide-react";

export default function AdminLoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-[#F7F4F0] flex items-center justify-center p-6 antialiased relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111111'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
         />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Top Edge Red Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C0001A]"></div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block mb-3"
            >
              <div className="flex flex-col items-center">
                <ShieldCheck size={28} strokeWidth={1} className="text-[#C0001A] mb-4" />
                <span className="font-playfair text-4xl font-bold tracking-tighter text-[#111]">
                  MAGNAT
                </span>
              </div>
            </motion.div>
            <h1 className="text-[#666666] text-[10px] font-bold uppercase tracking-[0.4em] mt-3">
              Executive Portal Access
            </h1>
          </div>

          <form action={action} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="text-[#111] text-[10px] font-bold uppercase tracking-widest ml-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#111]/40" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#f9f9f9] border border-[#eeeeee] pl-10 pr-4 py-3.5 text-[#111] placeholder:text-[#111]/30 focus:outline-none focus:border-[#C0001A]/30 focus:bg-white transition-all text-sm rounded-none"
                    placeholder="admin@magnat.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="password" 
                  className="text-[#111] text-[10px] font-bold uppercase tracking-widest ml-1"
                >
                  Password
                </label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-0.5 opacity-40">
                      <div className="w-1 h-1 rounded-full bg-[#111]" />
                      <div className="w-1 h-1 rounded-full bg-[#111]" />
                      <div className="w-1 h-1 rounded-full bg-[#111]" />
                   </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full bg-[#f9f9f9] border border-[#eeeeee] pl-10 pr-4 py-3.5 text-[#111] placeholder:text-[#111]/30 focus:outline-none focus:border-[#C0001A]/30 focus:bg-white transition-all text-sm rounded-none tracking-widest"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {state?.error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#C0001A]/5 text-[#C0001A] border border-[#C0001A]/20 py-2.5 px-4 text-xs font-semibold text-center"
              >
                {state.error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full group bg-[#111] text-white py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C0001A] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-[0.98] mt-4"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating
                </span>
              ) : (
                <>
                  Confirm Credentials 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[#666] text-[9px] uppercase tracking-widest leading-relaxed font-semibold">
            Magnat Premium Furniture & Interiors <br /> 
            © <span className="font-light tracking-wide">{new Date().getFullYear()}</span> Engineered for Production
          </p>
        </div>
      </motion.div>
    </div>
  );
}
