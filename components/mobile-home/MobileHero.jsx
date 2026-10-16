"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { MapPin } from "lucide-react";
import { heroSlides } from "@/components/HeroSlider";

export default function MobileHero() {
  const router = useRouter();

  // Quote PIN code inputs
  const [pickupPin, setPickupPin] = useState("");
  const [dropPin, setDropPin] = useState("");
  const [pinError, setPinError] = useState("");

  // Slide index for rotating hero text
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!heroSlides || heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckPrice = (e) => {
    e.preventDefault();
    if (!pickupPin.trim() || !/^\d{6}$/.test(pickupPin.trim())) {
      setPinError("Please enter a valid 6-digit Pickup PIN code");
      toast.error("Please enter a valid 6-digit Pickup PIN code");
      return;
    }
    if (!dropPin.trim() || !/^\d{6}$/.test(dropPin.trim())) {
      setPinError("Please enter a valid 6-digit Drop PIN code");
      toast.error("Please enter a valid 6-digit Drop PIN code");
      return;
    }
    setPinError("");
    router.push(
      `/rate-calculator?pickup=${encodeURIComponent(
        pickupPin.trim()
      )}&drop=${encodeURIComponent(dropPin.trim())}`
    );
  };

  const currentSlide = heroSlides[slideIndex] || heroSlides[0];

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden">
      {/* Background Portrait Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mobile.jpg"
          alt="Luggage at airport ready for delivery"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 pt-4 pb-24 flex flex-col justify-between flex-1">
        {/* TOP CARD: Send Your Luggage Across India */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white/95 backdrop-blur-md rounded-[28px] p-5 shadow-2xl border border-white/60 mx-auto max-w-sm mt-3.5 sm:mt-5"
        >
          <h2 className="text-[19px] font-bold text-center text-gray-900 mb-4 tracking-tight">
            Send Your Luggage Across India
          </h2>

          <form onSubmit={handleCheckPrice} className="space-y-3.5">
            {/* Pickup PIN */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                Pickup PIN code
              </label>
              <div className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200 rounded-2xl px-3.5 py-2.5 focus-within:border-[#013EFE] focus-within:bg-white transition-all shadow-inner">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#013EFE]" />
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={pickupPin}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setPickupPin(val);
                    if (pinError) setPinError("");
                  }}
                  placeholder="Enter pickup PIN code"
                  className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Drop PIN */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                Drop PIN code
              </label>
              <div className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200 rounded-2xl px-3.5 py-2.5 focus-within:border-[#013EFE] focus-within:bg-white transition-all shadow-inner">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#013EFE]" />
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={dropPin}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setDropPin(val);
                    if (pinError) setPinError("");
                  }}
                  placeholder="Enter drop PIN code"
                  className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {pinError && (
              <p className="text-red-500 text-xs font-medium text-center">
                {pinError}
              </p>
            )}

            {/* Button */}
            <div className="text-center pt-1">
              <button
                type="submit"
                className="w-full bg-[#013EFE] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-transform active:scale-95 text-sm"
              >
                Check Price
              </button>
            </div>
          </form>
        </motion.div>

        {/* BOTTOM HERO TEXT OVER IMAGE - Slides Title & Desc from HeroSlider */}
        <div className="mt-8 text-white text-left px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="min-h-[110px]"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-2 tracking-tight drop-shadow-md">
                {currentSlide.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-100 leading-relaxed mb-4 line-clamp-3 drop-shadow">
                {currentSlide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <Link
            href="/rate-calculator"
            className="inline-flex items-center gap-2 bg-[#013EFE] hover:bg-blue-700 mt-4 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-transform active:scale-95"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
