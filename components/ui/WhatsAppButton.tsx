"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919074477358"; // Reference phone number
  const message = "Hello Magnat Furniture, I'd like to enquire about your collections.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
}
