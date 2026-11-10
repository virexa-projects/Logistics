import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterSection from "@/components/FooterSection";
import { Toaster } from "react-hot-toast";
import FloatingActions from "@/components/FloatingActions";
import Analytics from "@/components/Analytics";

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
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {/* Accessible skip link for keyboard & screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#013EFE] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Instant gtag / dataLayer queue stub so tracking calls anywhere never fail */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-CVY124PE8B', { send_page_view: true });
              gtag('config', 'AW-18152390227');
            `,
          }}
        />

        <HeaderWrapper />

        <main id="main-content">
          {children}
        </main>

        <FloatingActions />

        {/* Razorpay SDK */}
        {/* <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        /> */}


        <FooterSection />

        {/* Toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* Deferred Google Analytics 4 & Google Ads */}
        <Analytics />
      </body>
    </html>
  );
}
