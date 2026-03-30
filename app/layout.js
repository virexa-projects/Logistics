"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterSection from "@/components/FooterSection";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import FloatingActions from "@/components/FloatingActions";
import Script from "next/script"; // ✅ THIS WAS MISSING

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const is404 = pathname === "/not-found";

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {!is404 && <HeaderWrapper />}
        {children}
        <FloatingActions />
        <FooterSection />

        {/* ✅ Razorpay SDK */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* ✅ Toast */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
