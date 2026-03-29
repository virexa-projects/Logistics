"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt, FaCalculator } from "react-icons/fa";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

      {/* 🔼 Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 📞 CALL */}
      <motion.a
        href="tel:7418152531"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.1, type: "spring" }}
        className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-xl flex items-center justify-center"
      >
        <FaPhoneAlt size={22} />
      </motion.a>

      {/* 🧮 RATE CALCULATOR */}
      <motion.a
        href="/rate-calculator"   // 👈 change route if needed
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-14 h-14 rounded-full bg-yellow-500 text-white shadow-xl flex items-center justify-center"
      >
        <FaCalculator size={22} />
      </motion.a>

      {/* 💬 WhatsApp */}
      <motion.a
        href="https://wa.me/917418152531"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </motion.a>

    </div>
  );
}