'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/asset/frisbi_white.png"; // change path if needed
import LogoBlack from "@/asset/logo-black.svg"; // change path if needed

const servicesList = [
  "Standard Delivery",
  "Express Delivery",
  "Premium Delivery",
 
];

const booklist = [
  "Corporate",
"Individual"
];


export default function Header({ mode = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [hoverService, setHoverService] = useState(false);

   const [bookopen, setBookeOpen] = useState(false);
  const [hoverBook, setHoverBook] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force white header for these pages
  const isDarkHeader = mode === "black";
  // Mobile Menu Link Click -> Close Menu
  const handleLinkClick = () => setIsOpen(false);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${
          isDarkHeader
            ? "bg-white"
            : scroll
            ? "bg-white shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-bold">
          <Image
            src={isDarkHeader || scroll ? LogoBlack : Logo}
            alt="Frisbi"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex space-x-8 text-[15px] font-semibold transition-all duration-300
            ${isDarkHeader || scroll ? "text-black" : "text-white"}
          `}
        >
            <div
            className="relative"
            onMouseEnter={() => setHoverBook(true)}
            onMouseLeave={() => setHoverBook(false)}
          >
            <button
              className={`flex items-center gap-1 transition 
                ${isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"}
              `}
            >
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
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          

          <Link
            href="/about"
            className={`${
              isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"
            } transition`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoverService(true)}
            onMouseLeave={() => setHoverService(false)}
          >
            <button
              className={`flex items-center gap-1 transition 
                ${isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"}
              `}
            >
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
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link
            href="/rate-calculator"
            className={`${
              isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"
            } transition`}
          >
            Rate Calculator
          </Link>

          <Link
            href="/faq"
            className={`${
              isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"
            } transition`}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            className={`${
              isDarkHeader || scroll ? "hover:text-blue-600" : "hover:text-blue-300"
            } transition`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <Link href='/track-your-package' className="bg-primary text-[16px] text-white font-semibold py-3 px-10 rounded-full transition">
            Track Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className={`h-6 w-6 transition ${isDarkHeader || scroll ? "text-black" : "text-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white overflow-hidden shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" onClick={handleLinkClick} className="hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-blue-600">About Us</Link>

            {/* Mobile Service Dropdown */}
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex justify-between items-center text-gray-800 font-medium"
            >
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
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/rate-calculator" onClick={handleLinkClick} className="hover:text-blue-600">Rate Calculator</Link>
            <Link href="/faq" onClick={handleLinkClick} className="hover:text-blue-600">FAQs</Link>
            <Link href="/contact" onClick={handleLinkClick} className="hover:text-blue-600">Contact Us</Link>

            <Link href="/track-your-package" onClick={handleLinkClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full">
              Track Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
