"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

const trustStats = [
   {
      icon: (
         <svg viewBox="0 0 24 24" fill="none" stroke="#C0001A" strokeWidth={1.8} width={18} height={18}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
         </svg>
      ),
      number: "25",
      suffix: "+ Yrs",
      label: "Manufacturing Experience",
   },
   {
      icon: (
         <svg viewBox="0 0 24 24" fill="none" stroke="#C0001A" strokeWidth={1.8} width={18} height={18}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
         </svg>
      ),
      number: "5000",
      suffix: "+",
      label: "Homes Transformed",
   },
   {
      icon: (
         <svg viewBox="0 0 24 24" fill="none" stroke="#C0001A" strokeWidth={1.8} width={18} height={18}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
         </svg>
      ),
      number: "10",
      suffix: "yr",
      label: "Product Warranty",
   },
   {
      icon: (
         <svg viewBox="0 0 24 24" fill="none" stroke="#C0001A" strokeWidth={1.8} width={18} height={18}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
         </svg>
      ),
      number: "100",
      suffix: "%",
      label: "Real Wood Guaranteed",
   },
];

export default function HeritageSection() {
   return (
      <section className="mt-5 py-5 sm:py-10 overflow-hidden bg-[#FAF9F6] relative border-b border-black/5">


         <div className="max-container flex flex-col items-center text-center relative z-10">
            <div className="max-w-4xl space-y-12 w-full">


               {/* ── Trust Stats Row ── */}
               <FadeInView className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[#eee] pt-10">
                     {trustStats.map((stat, i) => (
                        <div
                           key={i}
                           className={`
                    flex items-center gap-4 text-left px-7
                    ${i === 0 ? "pl-0" : ""}
                    ${i === trustStats.length - 1 ? "pr-0" : ""}
                    ${i !== 0 ? "border-l border-[#eee]" : ""}
                  `}
                        >
                           {/* Icon */}
                           <div
                              className="w-[42px] h-[42px] min-w-[42px] rounded-full flex items-center justify-center"
                              style={{
                                 background: "#fff5f5",
                                 border: "1px solid rgba(192,0,26,0.15)",
                              }}
                           >
                              {stat.icon}
                           </div>

                           {/* Text */}
                           <div>
                              <p
                                 className="text-[#111] leading-tight"
                                 style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontSize: "22px",
                                    fontWeight: 900,
                                    letterSpacing: "-0.02em",
                                 }}
                              >
                                 {stat.number}
                                 <span
                                    className="text-[#C0001A]"
                                    style={{ fontSize: "15px", fontWeight: 700 }}
                                 >
                                    {stat.suffix}
                                 </span>
                              </p>
                              <p
                                 className="text-[#666] mt-0.5"
                                 style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "11px",
                                    lineHeight: "1.4",
                                 }}
                              >
                                 {stat.label}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </FadeInView>

            </div>
         </div>
      </section>
   );
}