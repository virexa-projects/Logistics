"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const packagingItems = [
  {
    id: 1,
    title: "Bubble Wrap Cushioning",
    desc: "High-density shock-absorbing wrap protects fragile contents.",
    img: "/packaging/pack_4.jpg",
  },
  {
    id: 2,
    title: "Zip lock Sealing",
    desc: "Tamper-evident sealing and protective wrap for complete luggage safety.",
    img: "/packaging/pack_2.jpg",
  },
  {
    id: 3,
    title: "360° Foam & Wrap",
    desc: "Multi-layer protective film against scratches and moisture.",
    img: "/packaging/pack_8.jpg",
  },
  {
    id: 4,
    title: "Foam Base & Corner Armor",
    desc: "Shock-absorbing foam cradles trolley wheels and vulnerable corners before dispatch.",
    img: "/packaging/pack_6.jpg",
  },
  {
    id: 5,
    title: "Heavy-Duty Box Packaging",
    desc: "Reinforced double-wall carton with cross-band security tape and direct route waybill.",
    img: "/packaging/pack_5.jpg",
  },
  {
    id: 6,
    title: "Barcode Tracking",
    desc: "Clear courier transit labels for instant live tracking updates.",
    img: "/packaging/labeled-transit.jpg",
  },
  {
    id: 7,
    title: "Tamper-Evident Seals",
    desc: "Heavy-duty security tape applied before dispatch.",
    img: "/packaging/reinforced-seal.jpg",
  },
];

export default function HowYourBagsTravel({ variant = "both" }) {
  // Mobile vertical bottom-to-top auto-scroll with swipe support
  const mobileRef = useRef(null);
  const isMobileInteractingRef = useRef(false);
  const mobileTimeoutRef = useRef(null);

  // Desktop horizontal right-to-left auto-scroll with swipe/hover support
  const desktopRef = useRef(null);
  const isDesktopInteractingRef = useRef(false);
  const desktopTimeoutRef = useRef(null);

  // Mobile auto-scroll (bottom to top)
  useEffect(() => {
    if (variant === "desktop") return;
    const el = mobileRef.current;
    if (!el) return;

    let animId;
    const speed = 0.85; // smooth upward pace

    const step = () => {
      if (!isMobileInteractingRef.current && el) {
        el.scrollTop += speed;
        const half = el.scrollHeight / 2;
        if (half > 0 && el.scrollTop >= half) {
          el.scrollTop -= half;
        } else if (half > 0 && el.scrollTop < 0) {
          el.scrollTop += half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [variant]);

  // Desktop auto-scroll (right to left)
  useEffect(() => {
    if (variant === "mobile") return;
    const el = desktopRef.current;
    if (!el) return;

    let animId;
    const speed = 1.0; // smooth horizontal pace

    const step = () => {
      if (!isDesktopInteractingRef.current && el) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (half > 0 && el.scrollLeft < 0) {
          el.scrollLeft += half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [variant]);

  const pauseMobile = () => {
    isMobileInteractingRef.current = true;
    if (mobileTimeoutRef.current) clearTimeout(mobileTimeoutRef.current);
  };

  const resumeMobile = (delay = 2000) => {
    if (mobileTimeoutRef.current) clearTimeout(mobileTimeoutRef.current);
    mobileTimeoutRef.current = setTimeout(() => {
      isMobileInteractingRef.current = false;
    }, delay);
  };

  const pauseDesktop = () => {
    isDesktopInteractingRef.current = true;
    if (desktopTimeoutRef.current) clearTimeout(desktopTimeoutRef.current);
  };

  const resumeDesktop = (delay = 1500) => {
    if (desktopTimeoutRef.current) clearTimeout(desktopTimeoutRef.current);
    desktopTimeoutRef.current = setTimeout(() => {
      isDesktopInteractingRef.current = false;
    }, delay);
  };

  const showDesktop = variant === "both" || variant === "desktop";
  const showMobile = variant === "both" || variant === "mobile";

  return (
    <section className="bg-white">
      {/* Hide scrollbars completely - no scroll indicator on mobile or desktop */}
      <style>{`
        .bags-scroll-track::-webkit-scrollbar {
          display: none !important;
          width: 0px !important;
          height: 0px !important;
        }
        .bags-scroll-track {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* ============================================================
          DESKTOP VIEW
          Auto-scroll from RIGHT to LEFT, user can hover/swipe, no scrollbar
         ============================================================ */}
      {showDesktop && (
        <div className={`${variant === "both" ? "hidden md:block" : ""} py-14 overflow-hidden border-b border-gray-100`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                How Your Bags Travel
              </h2>
              <p className="text-second text-sm mt-1.5">
                Real photos of multi-layer protection and sealed baggage in transit.
              </p>
            </div>
          </div>

          {/* Desktop horizontal track */}
          <div className="relative w-full">
            {/* Subtle edge fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

            <div
              ref={desktopRef}
              onMouseEnter={pauseDesktop}
              onMouseLeave={() => resumeDesktop(800)}
              onTouchStart={pauseDesktop}
              onTouchEnd={() => resumeDesktop(2000)}
              onMouseDown={pauseDesktop}
              onMouseUp={() => resumeDesktop(1000)}
              className="flex gap-6 overflow-x-auto bags-scroll-track py-4 px-8 cursor-grab active:cursor-grabbing select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[...packagingItems, ...packagingItems].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[360px] shrink-0 bg-white rounded-3xl border border-gray-200/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative w-full h-[270px] rounded-2xl overflow-hidden bg-gray-100 mb-3.5">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  </div>
                  <div className="px-1.5 pb-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MOBILE VIEW
          Auto-scroll from BOTTOM to TOP, user can swipe, NO scroll indicator,
          large card size matching reference Figma screenshot & video
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

          {/* Mobile vertical reel container with subtle gradient edges */}
          <div className="relative h-[530px] overflow-hidden rounded-3xl">
            {/* Subtle top & bottom edge fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

            {/* Upward auto-scrolling stream */}
            <div
              ref={mobileRef}
              onTouchStart={pauseMobile}
              onTouchMove={pauseMobile}
              onTouchEnd={() => resumeMobile(2000)}
              onMouseDown={pauseMobile}
              onMouseUp={() => resumeMobile(1500)}
              onWheel={() => {
                pauseMobile();
                resumeMobile(2000);
              }}
              className="h-full overflow-y-auto bags-scroll-track flex flex-col gap-4 py-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[...packagingItems, ...packagingItems].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white rounded-3xl border border-gray-200/80 p-3.5 shadow-md flex flex-col shrink-0"
                >
                  {/* Large prominent photo (matching Figma Image 2) */}
                  <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-gray-100 mb-3.5">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="px-1.5 pb-1">
                    <h3 className="text-[18px] font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
