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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5CZVSVKT');
          `}
        </Script>


        
        {/* Google Tag Manager */}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18152390227"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18152390227');
  `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CZVSVKT"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {!is404 && <HeaderWrapper />}

        {children}

        <FloatingActions />

        {!is404 && <FooterSection />}

        {/* Razorpay SDK */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* Toast */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
