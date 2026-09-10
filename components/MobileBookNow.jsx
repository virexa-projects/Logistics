"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileBookNow() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on book-shipment page
  if (pathname === "/book-shipment" || pathname?.startsWith("/book-shipment")) {
    return null;
  }

  return (
    <div
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 md:hidden ${
        isScrolled ? "bottom-5" : "bottom-0"
      }`}
    >
      <Link
        href="/book-shipment"
        className={`bg-[#013efe] text-white font-semibold shadow-lg rounded-xl flex items-center justify-center transition-all duration-300 ${
          isScrolled
            ? "w-[70%] h-12 text-base"
            : "w-[80%] h-14 text-lg"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
}