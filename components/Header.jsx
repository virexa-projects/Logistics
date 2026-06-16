"use client";

import { useState, useEffect } from "react";
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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold">
          <Image src={logoSrc} alt="Logo" width={140} height={40} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 text-[15px] font-semibold transition-all duration-300 ${textColor}`}>
          {/* Book Dropdown */}
          {/* <div className="relative" onMouseEnter={() => setHoverBook(true)} onMouseLeave={() => setHoverBook(false)}>
            <button className="flex items-center gap-1 transition hover:text-[#013efe]">
              Book <ChevronDown className="h-4 w-4" />
            </button>
            {hoverBook && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-0 w-52 bg-white shadow-lg rounded-lg py-3 z-50"
              >
                {booklist.map((item, index) => (
                  <Link
                    key={index}
                    href={`/book/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div> */}

          <Link href="/about" className="hover:text-[#013efe] transition">About Us</Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setHoverService(true)} onMouseLeave={() => setHoverService(false)}>
            <button className="flex items-center gap-1 transition hover:text-[#013efe]">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {hoverService && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-0 w-52 bg-white shadow-lg rounded-lg py-3 z-50"
              >
                {servicesList.map((item, index) => (
                  <Link
                    key={index}
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link href="/rate-calculator" className="hover:text-[#013efe]">Rate Calculator</Link>
          <Link href="/faq" className="hover:text-[#013efe]">FAQs</Link>
          <Link href="/contact-us" className="hover:text-[#013efe]">Contact Us</Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Pulse Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-blue-500 blur-2xl"
            />

            {/* Main Button */}
            <Link
              href="/track-your-package"
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
            text-lg
            shadow-[0_10px_35px_rgba(37,99,235,0.5)]
            flex
            items-center
            gap-2
            hover:scale-105
            transition-all
            duration-300
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
              <span className="relative z-10 text-[14px]">Track Now</span>

              {/* Arrow Animation */}
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="relative z-10"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden flex gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative w-full">

              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-blue-500 blur-2xl rounded-full"
              />

              <Link
                href="/track-your-package"
                onClick={handleLinkClick}
                className="
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        gap-2
        w-full
        bg-gradient-to-r
        from-blue-500
        via-blue-600
        to-blue-700
        px-5
        py-3
        rounded-full
        text-white
        text-sm
        md:text-base
        font-semibold
        shadow-[0_10px_30px_rgba(37,99,235,0.45)]
        transition-all
        duration-300
        hover:scale-105
      "
              >
                {/* Moving Shine */}
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
          w-16
          h-full
          bg-white/20
          skew-x-12
          blur-md
        "
                />

                {/* Text */}
                <span className="relative z-10">
                  Track Now
                </span>

                {/* Arrow */}
                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="relative z-10"
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-9 w-9 text-black transition" /> // Menu open -> show X icon
            ) : (
              <Menu className={`h-9 w-9 transition ${textColor}`} /> // Menu closed -> show Hamburger
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white overflow-hidden shadow-lg h-full"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" onClick={handleLinkClick} className="hover:text-[#013efe]">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-[#013efe]">About Us</Link>

            {/* Mobile Services */}
            <button onClick={() => setServiceOpen(!serviceOpen)} className="flex justify-between items-center text-gray-800 font-medium">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                {servicesList.map((item, i) => (
                  <Link
                    key={i}
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/rate-calculator" onClick={handleLinkClick} className="hover:text-[#013efe]">Rate Calculator</Link>
            <Link href="/faq" onClick={handleLinkClick} className="hover:text-[#013efe]">FAQs</Link>
            <Link href="/contact-us" onClick={handleLinkClick} className="hover:text-[#013efe]">Contact Us</Link>

            <Link href="/track-your-package" onClick={handleLinkClick} className="btn-primary hidden md:block hover:scale-105 transition-all">Track Now</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
