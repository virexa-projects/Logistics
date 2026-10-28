"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import bg from "@/asset/profiles/cta-banner.svg";
import { motion } from "framer-motion";
import ShipmentCostCalculator from "@/components/ShipmentCostCalculator";
import ratecalculator from "@/asset/rate-calculator.png";
import lugggaevariations from "@/asset/rate-lugggae-mobie.svg";

const FAQ = dynamic(() => import("@/components/RateAccordion"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const MarqueeLogos = dynamic(() => import("@/components/MarqueeLogos"), { ssr: true });

function RateCalculator({ pickupFromUrl, dropFromUrl }) {
  const calculatorSectionRef = useRef(null);

  const scrollToCalculator = () => {
    const el = calculatorSectionRef.current || document.getElementById("rate-calculator-section");
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // 1. Initial scroll when landing on page
    const timer = setTimeout(scrollToCalculator, 200);

    // 2. Global listener: when staying on this page and clicking any link to rate-calculator
    const handleDocumentClick = (e) => {
      const anchor = e.target?.closest ? e.target.closest("a") : null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const cleanHref = href.split("?")[0].split("#")[0];
      if (
        cleanHref === "/rate-calculator" ||
        cleanHref.endsWith("/rate-calculator") ||
        href === "#rate-calculator-section" ||
        href.startsWith("#rate-calculator-section")
      ) {
        e.preventDefault();
        scrollToCalculator();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", scrollToCalculator);
    window.addEventListener("scroll-to-rate-calc", scrollToCalculator);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("hashchange", scrollToCalculator);
      window.removeEventListener("scroll-to-rate-calc", scrollToCalculator);
    };
  }, []);
  return (
    <div>
      <div className="-mt-24 -mt-16 ">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden  md:block hidden"
        >
          {/* Background Image */}
          <Image
            src={ratecalculator} // your hero image path
            alt="About Background"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="md:object-contain object-cover bg-center"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black mb-4">Calculate Your Luggage Delivery Cost</h1>
            <p className="text-black mb-4 text-sm md:text-base">
              Calculate now. Book when ready. Travel lighter tomorrow.
            </p>

            {/* CTA */}
            <button
              onClick={() =>
                calculatorSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="btn-primary hover:scale-105 transition-all cursor-pointer"
            >
              Calculate Your Cost
            </button>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h2
                  className="text-black font-semibold mb-4"
                  style={{ fontSize: "32px", lineHeight: "1.40" }}
                >
                  Instant Luggage Shipping Cost & Rate Calculator in Bangalore
                </h2>
                <p className="text-black mb-4 text-sm md:text-base">
                  Calculate now. Book when ready. Travel lighter tomorrow.
                </p>

                {/* CTA */}
                <button
                  onClick={() =>
                    calculatorSectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="btn-primary hover:scale-105 transition-all cursor-pointer"
                >
                  Calculate Your Cost
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>


      <section
        ref={calculatorSectionRef}
        id="rate-calculator-section"
        className="py-12 md:pt-0 md:pb-0 scroll-mt-24"
      >
        <ShipmentCostCalculator
          pickupFromUrl={pickupFromUrl}
          dropFromUrl={dropFromUrl}
        />
      </section>
      <section className="container mx-auto relative px-4 py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* 40 / 60 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 items-center">
            {/* LEFT CONTENT – SMALL */}
            <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
              <h2 className="md:text-left text-center mb-4 text-2xl md:text-3xl font-semibold">
                Smart luggage delivery, built for every size.
              </h2>

              <p className="text-second text-center md:text-left leading-relaxed">
                A 10 kg compact suitcase costs less than a 10 kg oversized bag.
              </p>
            </div>

            {/* RIGHT IMAGE – BIG */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-[160px] md:h-[480px] lg:h-[full]">
                <Image
                  src={lugggaevariations}
                  alt="Frisbi luggage delivery illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      <section className="w-full px-4 py-12   md:py-20 md:pb-0 ">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            sizes="(max-width: 1220px) 100vw, 1220px"
            className="object-cover"
          />

          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-[#003BE3] " /> */}

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center py-16 md:py-20 px-6"
          >
            <h2 className=" text-white mb-4">From Your Door to Their Door.</h2>

            <p className="text-white mb-8 text-sm md:text-base">
              Fast, safe, and affordable – trusted by thousands across India.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeLogos />
    </div>
  );
}

export default RateCalculator;
