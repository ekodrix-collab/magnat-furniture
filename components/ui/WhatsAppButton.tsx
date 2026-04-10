"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919446516395"; 
  const message = "Hello MAGNAT Furniture Kondotty, I'd like to enquire about your furniture and interior solutions.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-10 left-10 z-[101] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
}
