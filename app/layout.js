import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterSection from "@/components/FooterSection";
import { Toaster } from "react-hot-toast";
import FloatingActions from "@/components/FloatingActions";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {/* Google Ads Tag Link - deferred to avoid blocking main thread */}
        <Script id="google-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', 'AW-18152390227');
          `}
        </Script>

        <HeaderWrapper />

        {children}

        <FloatingActions />

        {/* Razorpay SDK */}
        {/* <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        /> */}


        <FooterSection />

        {/* Toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-CVY124PE8B" />
      </body>
    </html>
  );
}
