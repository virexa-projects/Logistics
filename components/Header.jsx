"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoWhite from "@/asset/frisbi_white.png";
import LogoBlack from "@/asset/logo-black.svg";

const servicesList = ["Standard Delivery", "Express Delivery", "Premium Delivery"];
const booklist = ["Corporate", "Individual"];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [hoverService, setHoverService] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [hoverBook, setHoverBook] = useState(false);
  const [scroll, setScroll] = useState(false);

  const timeoutRef = useRef(null);

  const handleServiceMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverService(true);
  };

  const handleServiceMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverService(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header bg and text color logic
  const headerBg = scroll ? "bg-white shadow-md" : "bg-transparent";
  const textColor = isHome && !scroll ? "text-white" : "text-black";
  const mobileIconColor = isHome && !scroll ? "text-white" : "text-black";
  const logoSrc = isHome && !scroll ? LogoWhite : LogoBlack;

  const handleLinkClick = () => setIsOpen(false);

  const handleTrackClick = (e) => {
    if (pathname === "/track-your-package") {
      e.preventDefault();
      const el = document.getElementById("track-section");
      if (el) {
        const headerOffset = 90;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
      window.dispatchEvent(new Event("scroll-to-track"));
    }
    setIsOpen(false);
  };

  const handleRateCalcClick = (e) => {
    if (pathname === "/rate-calculator") {
      e.preventDefault();
      const el = document.getElementById("rate-calculator-section");
      if (el) {
        const headerOffset = 90;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
      window.dispatchEvent(new Event("scroll-to-rate-calc"));
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 w-full pointer-events-auto lg:pointer-events-none">
      {/* 🖥️ Desktop Header - Floating Pill Design (Matching Figma Reference) */}
      <div className="hidden lg:block w-full pt-4 pb-2 px-6 lg:px-8 pointer-events-auto">
        <div className="max-w-[1240px] mx-auto bg-white rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100/80 px-8 py-3 flex justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="font-bold shrink-0 flex items-center">
            <Image
              src={LogoBlack}
              alt="Frisbi Logo"
              width={140}
              height={40}
              className="object-contain w-auto h-8"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center space-x-6 xl:space-x-8 text-[14px] xl:text-[15px] font-semibold text-gray-800 whitespace-nowrap">
            <Link
              href="/about"
              className="hover:text-[#013efe] transition"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handleServiceMouseEnter}
              onMouseLeave={handleServiceMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#013efe] transition py-1"
              >
                Services{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${hoverService ? "rotate-180 text-[#013efe]" : ""
                    }`}
                />
              </button>
              {hoverService && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative w-52 bg-white shadow-xl rounded-2xl py-3 border border-gray-100 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  >
                    {servicesList.map((item, index) => (
                      <Link
                        key={index}
                        href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                        onClick={() => setHoverService(false)}
                        className="block px-5 py-2.5 text-black hover:bg-blue-50 hover:text-[#013efe] transition whitespace-nowrap text-sm"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>

            <Link
              href="/rate-calculator"
              onClick={handleRateCalcClick}
              className="hover:text-[#013efe] transition"
            >
              Rate Calculator
            </Link>
            <Link
              href="/track-your-package"
              onClick={handleTrackClick}
              className="hover:text-[#013efe] transition"
            >
              Track Now
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#013efe] transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Track Now Button */}
          <div className="flex items-center justify-center shrink-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Button */}
              <Link
                href="/book-shipment"
                className="
                  relative
                  overflow-hidden
                  px-5
                  py-2
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-blue-600
                  to-blue-700
                  text-white
                  font-semibold
                  text-[14px]
                  flex
                  items-center
                  gap-2
                  hover:scale-105
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                {/* Moving Light Effect */}
                <motion.span
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-20
                    h-full
                    bg-white/20
                    skew-x-12
                    blur-md
                  "
                />

                {/* Text */}
                <span className="relative z-10 text-[14px]">Book Now</span>

                {/* Arrow Animation */}
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="relative z-10 font-bold"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Header Bar */}
      <div className="lg:hidden bg-white px-4 sm:px-6 py-3.5 flex justify-between items-center border-b border-gray-100 shadow-sm pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="font-bold shrink-0 flex items-center">
          <Image
            src={LogoBlack}
            alt="Frisbi Logo"
            width={140}
            height={40}
            className="object-contain w-auto h-8 sm:h-9"
            priority
          />
        </Link>

        {/* Mobile Menu Button & Book Now button */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Link
            href="/book-shipment"
            className="bg-[#013EFE] hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition active:scale-95"
          >
            Book Now
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-1.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-800 bg-white"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 transition" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 transition" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden bg-white overflow-hidden shadow-lg border-t border-gray-100 pointer-events-auto"
        >
          <div className="flex flex-col px-6 py-4 space-y-3 font-medium text-base text-gray-800">
            <Link href="/" onClick={handleLinkClick} className="hover:text-[#013efe] py-1 transition">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-[#013efe] py-1 transition">About Us</Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full flex justify-between items-center py-1 text-gray-800 hover:text-[#013efe] transition"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`} />
              </button>
              {serviceOpen && (
                <div className="pl-4 pt-2 flex flex-col space-y-2 border-l-2 border-blue-100 ml-1">
                  {servicesList.map((item, i) => (
                    <Link
                      key={i}
                      href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleLinkClick}
                      className="text-gray-600 hover:text-[#013efe] py-0.5 text-sm transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/rate-calculator" onClick={handleRateCalcClick} className="hover:text-[#013efe] py-1 transition">Rate Calculator</Link>
            <Link href="/faq" onClick={handleLinkClick} className="hover:text-[#013efe] py-1 transition">FAQs</Link>
            <Link href="/contact-us" onClick={handleLinkClick} className="hover:text-[#013efe] py-1 transition">Contact Us</Link>

            {/* Track Now CTA Button */}
            <div className="pt-2">
              <Link
                href="/track-your-package"
                onClick={handleTrackClick}
                className="w-full bg-[#013EFE] hover:bg-blue-700 text-white py-2.5 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/15 transition active:scale-95"
              >
                Track Now
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
