"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6 antialiased">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8B1E1E]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C6A969]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="font-playfair text-4xl font-bold tracking-tighter text-white">
              MAGNAT<span className="text-[#8B1E1E]">.</span>
            </span>
          </motion.div>
          <h1 className="text-white/40 text-[0.65rem] font-bold uppercase tracking-[0.4em]">
            Executive CMS Access
          </h1>
        </div>

        <form action={action} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-white/60 text-[0.65rem] font-bold uppercase tracking-widest ml-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#C6A969]/50 transition-all text-sm"
                placeholder="admin@magnat.com"
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="text-white/60 text-[0.65rem] font-bold uppercase tracking-widest ml-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#C6A969]/50 transition-all text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {state?.error && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#8B1E1E] text-xs font-semibold text-center italic"
            >
              {state.error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-white text-[#1A1A1A] py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#C6A969] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin" />
                Authenticating...
              </span>
            ) : (
              <>
                Confirm Access <LogIn size={16} />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-white/20 text-[0.6rem] uppercase tracking-widest leading-relaxed">
            Magnat Premium Furniture & Interiors <br /> 
            © <span className="font-number font-light">2026</span> Crafted in Kondotty
          </p>
        </div>
      </motion.div>
    </div>
  );
}
