"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export const packagingItems = [
  {
    id: 1,
    title: "Heavy-Duty Box Packaging",
    desc: "Reinforced double-wall cartons protect against stacking pressure in transit.",
    img: "/packaging/labeled-transit.jpg",
  },
  {
    id: 2,
    title: "Bubble Wrap Cushioning",
    desc: "Multi-layer bubble wrap absorbs shocks and protects delicate contents.",
    img: "/packaging/pack_4.jpg",
  },
  {
    id: 3,
    title: "Zip lock Sealing",
    desc: "Tamper-evident zip locks prevent accidental opening or unauthorized access.",
    img: "/packaging/pack_6.jpg",
  },
  {
    id: 4,
    title: "360° Industrial Shrink Wrap",
    desc: "Tight multi-layer stretch wrap seals out moisture, dust, and scratches.",
    img: "/packaging/pack_8.jpg",
  },
  {
    id: 5,
    title: "Foam Base & Corner Armor",
    desc: "High-density foam base cushions trolley bottoms from ground impacts.",
    img: "/packaging/pack_2.jpg",
  },
  {
    id: 6,
    title: "Corner & Wheel guards",
    desc: "Reinforced edge caps and wheel sleeves safeguard vulnerable spinner wheels.",
    img: "/packaging/pack_9.jpg",
  },
];

export default function HowYourBagsTravel({ variant = "both" }) {
  const desktopSwiperRef = useRef(null);

  const showDesktop = variant === "both" || variant === "desktop";
  const showMobile = variant === "both" || variant === "mobile";

  // Doubled array for seamless infinite looping
  const allSlides = [...packagingItems, ...packagingItems];

  return (
    <section className="bg-white">
      {/* Hide scrollbars completely */}
      <style>{`
        .bags-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .bags-swiper::-webkit-scrollbar {
          display: none !important;
          width: 0px !important;
          height: 0px !important;
        }
      `}</style>

      {/* ============================================================
          DESKTOP VIEW
          - Shows EXACTLY THREE cards side-by-side
          - All cards have identical height and width
          - Navigation arrows (< and >) in header
          - Auto-scrolls right to left one card fully like a swipe
          - No white shadow, no image padding, matches user screenshot
         ============================================================ */}
      {showDesktop && (
        <div className={`${variant === "both" ? "hidden md:block" : ""} py-12 lg:py-16 overflow-hidden`}>
          <div className="container max-w-[1220px] mx-auto px-6 sm:px-8 lg:px-10">
            {/* Header with Title and Left/Right Arrows */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  How Your Bags Travel
                </h2>
                <p className="text-second text-sm mt-1.5">
                  Real photos of multi-layer protection and sealed baggage in transit.
                </p>
              </div>

              {/* Navigation Arrows matching screenshot */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => desktopSwiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs transition-transform active:scale-95 cursor-pointer"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => desktopSwiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs transition-transform active:scale-95 cursor-pointer"
                  aria-label="Next card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Exactly 3 cards track */}
            <div className="w-full">
              <Swiper
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
                direction="horizontal"
                loop={true}
                speed={700}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={24}
                className="bags-swiper w-full"
              >
                {allSlides.map((item, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    {/* Fixed uniform card: exact same height and width for all cards */}
                    <div className="w-full h-[510px] bg-white rounded-3xl border border-gray-200/90 overflow-hidden flex flex-col justify-between shadow-xs select-none">
                      {/* Fixed height image with NO padding, flush to top, left, right */}
                      <div className="relative w-full h-[370px] bg-gray-100 overflow-hidden shrink-0">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 33vw, 420px"
                        />
                      </div>
                      {/* Fixed height text container so all 3 cards align perfectly */}
                      <div className="p-5 sm:p-6 bg-white flex flex-col justify-start flex-1">
                        <h3 className="text-[18px] font-bold text-gray-900 leading-snug line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed mt-1.5 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MOBILE VIEW
          Auto-scrolls continuously one card fully like a swipe (bottom to top),
          user can swipe vertically, NO scroll indicator,
          NO white shadows, NO padding around image
         ============================================================ */}
      {showMobile && (
        <div className={`${variant === "both" ? "block md:hidden" : ""} py-8 px-4`}>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              How Your Bags Travel
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Real photos of multi-layer protection and sealed baggage in transit.
            </p>
          </div>

          {/* Mobile vertical Swiper container */}
          <div className="w-full" style={{ height: "460px" }}>
            <Swiper
              modules={[Autoplay]}
              direction="vertical"
              loop={true}
              speed={700}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              className="bags-swiper w-full h-full"
            >
              {allSlides.map((item, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col select-none">
                    {/* Large photo with NO padding around image */}
                    <div className="relative w-full h-[340px] bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority={idx < 2}
                      />
                    </div>
                    {/* Card text content with standard padding */}
                    <div className="p-4 sm:p-5 bg-white flex-1 flex flex-col justify-center">
                      <h3 className="text-[18px] font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
