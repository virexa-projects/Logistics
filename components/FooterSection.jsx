"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import Logo from "@/asset/logo-black.svg";
import MobileBookNow from "./MobileBookNow";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-black pt-16 pb-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
      >
        {/* LOGO + DESCRIPTION */}
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Frisbi" width={180} height={40} />
          </div>

          <p className="text-black">India’s Smart Luggage Delivery Solution</p>

          <div>
            <h4 className="font-semibold mb-2">Social Media</h4>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              {/* YouTube */}
              <Link href="https://youtube.com/@frisbi-luggage-delivery?si=sfdhhiZOjdpNhNTs">
                <div className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition">
                  <FaYoutube className="w-5 h-5 text-white" />
                </div>
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/frisbi.in?igsh=ZTlrYWp3aGRjNnE5">
                <div className="p-3 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 rounded-full hover:opacity-90 transition">
                  <FaInstagram className="w-5 h-5 text-white" />
                </div>
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/profile.php?id=61590439647922">
                <div className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                  <FaFacebookF className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col items-center md:items-start">
          <div>
            <h4 className="font-semibold mb-5 text-lg">Book Pickup</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link href="/book/corporate" className="hover:text-blue-900">
                  • Corporate
                </Link>
              </li>
              <li>
                <Link href="/book/individual" className="hover:text-blue-900">
                  • Individual
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link
                  href="/services/standard-delivery"
                  className="hover:text-blue-900"
                >
                  • Standard Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/express-delivery"
                  className="hover:text-blue-900"
                >
                  • Express Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/premium-delivery"
                  className="hover:text-blue-900"
                >
                  • Premium Transfer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-5 text-lg">Company</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <Link href="/about" className="hover:text-blue-900">
                • About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-900">
                • Services
              </Link>
            </li>
            <li>
              <Link href="/track-your-package" className="hover:text-blue-900">
                • Tracking
              </Link>
            </li>
            <li>
              <Link href="/rate-calculator" className="hover:text-blue-900">
                • Rate Calculator
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-blue-900">
                • Faqs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-blue-900">
                • Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-900">
                • Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-5">Support</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <Link href="tel:9878798298" className="hover:text-blue-900">
                • +91 7418152531
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@frisbi.in"
                className="hover:text-blue-900"
              >
                • info@frisbi.in
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 mt-5">
            <Link
              href="https://wa.me/919878798298"
              target="_blank"
              className="btn-primary hover:scale-105 transition-all"
            >
              Contact Support Team
            </Link>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between text-sm text-gray-400 gap-4 items-center">
          <span className="text-[14px] text-black text-sm font-medium">
            Copyright © 2026 – All Right Reserved
          </span>

          <div className="flex items-center text-black text-sm font-medium gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/terms-and-conditions" className="hover:text-blue-900">Terms and Condition</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-blue-900">Privacy Policy</Link>
            <span>|</span>
            <Link href="/shipping-policy" className="hover:text-blue-900">Shipping Policy</Link>
            <span>|</span>
            <Link href="/sitemap.xml" className="hover:text-primary-900">Sitemap</Link>
          </div>
        </div>
      </div>

      <MobileBookNow />
    </footer>
  );
}
