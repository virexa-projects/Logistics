"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt, FaCalculator } from "react-icons/fa";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden md:flex fixed bottom-28 right-6 z-50 flex-col items-center gap-4">
      {/* 📞 CALL */}
      <a
        href="tel:7418152531"
        aria-label="Call Frisbi"
        className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* 🧮 RATE CALCULATOR */}
      <a
        href="/rate-calculator"
        aria-label="Rate Calculator"
        className="w-14 h-14 rounded-full bg-yellow-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaCalculator size={22} />
      </a>

      {/* 💬 WhatsApp */}
      <a
        href="https://wa.me/917418152531"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* 🔼 Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
