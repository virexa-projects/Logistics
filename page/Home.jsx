"use client";
import React from "react";
import bg from "@/asset/profiles/cta-banner.svg";
import About from "@/asset/home/about-frisbi.png";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("@/components/HeroSlider"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/ServiceCard"), { ssr: true });
const CustomSlider = dynamic(() => import("@/components/Slider"), { ssr: true });
const MarqueeLogos = dynamic(() => import("@/components/MarqueeLogos"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/AccordionCorporate"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });
const HowToShip = dynamic(() => import("@/components/HowToShip"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const HowYourBagsTravel = dynamic(() => import("@/components/HowYourBagsTravel"), { ssr: true });
const MobileHome = dynamic(() => import("@/components/MobileHome"), { ssr: true });

function Home() {
  return (
    <div className="pb-20 md:pb-0">
      {/* DESKTOP-SPECIFIC TOP SECTIONS */}
      <div className="hidden md:block">
        <HeroSlider />

        {/* HOW YOUR BAGS TRAVEL (Desktop right-to-left auto-scroll) */}
        <HowYourBagsTravel variant="desktop" />

        <section className="container mx-auto relative px-4 py-12 md:py-16 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="!text-[18px] md:!text-[20px] font-bold leading-[1.2em] text-center md:text-start mb-4">
                  About Frisbi
                </h2>
                <h2 className="md:text-left text-center mb-4">
                  Built for worry-free luggage delivery across cities
                </h2>
                <p className="text-second mb-8 text-center md:text-left max-w-xl leading-relaxed">
                  We started because dragging 20kg through airports didn’t make
                  sense. Neither did paying ₹2,000 in excess baggage fees or
                  leaving behind things you actually need. So we built a reliable
                  luggage delivery service made for real travel. Your luggage now
                  travels just as safely as you do.
                </p>

                <ul className="space-y-3 font-medium text-[15px] mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    Door step pickup and delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    Dedicated point of contact for every shipment
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    Live tracking from pickup to delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    Service available across 25,000+ pincodes in India
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    24/7 support, Live tracking from pickup to delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    Professional packing using sturdy boxes
                  </li>
                </ul>

                {/* CTA */}
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="/about"
                    className="btn-primary transition-transform hover:scale-105"
                  >
                    Know More
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl h-[280px] md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={About}
                    alt="Frisbi luggage delivery illustration"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F1F2F6] overflow-x-hidden">
          <ServicesSection
            heading="Three ways to move your luggage. One way to travel lighter."
            showFeatures={false}
          />
        </section>
      </div>

      {/* MOBILE-SPECIFIC TOP SECTIONS */}
      <div className="block md:hidden">
        <MobileHome />
      </div>

      {/* SHARED SECTIONS (RENDERED ONCE FOR BOTH DESKTOP AND MOBILE) */}
      <HowToShip />

      <section className="relative bg-primary overflow-x-hidden">
        <CustomSlider />
      </section>

      <section className="container mx-auto relative px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      <section className="overflow-x-hidden">
        <div>
          <FAQSection />
        </div>
      </section>

      <section className="bg-[#F1F2F6] mx-auto overflow-x-hidden">
        <ContactSection />
      </section>

      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            className="object-cover"
            sizes="(max-width: 1220px) 100vw, 1220px"
          />

          {/* CONTENT */}
          <div className="relative z-10 text-center py-16 md:py-20 px-6">
            <h2 className="text-white mb-4">
              On-Time Luggage Delivery You Can Plan Around
            </h2>

            <p className="text-white mb-8 max-w-2xl mx-auto text-sm md:text-base">
              We know your world does not fit into a 7 kg suitcase. That’s why
              we move your baggage for you, so you can carry everything you want
              without worrying about weight or limits.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarqueeLogos />
    </div>
  );
}

export default Home;
