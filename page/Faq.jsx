"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

import MarqueeLogos from "@/components/MarqueeLogos";
import Testimonials from "@/components/Testimonials";

import faqbg from "@/asset/faqs.png";
import faqmobile from "@/asset/shippment/faq-banner.svg";
import bg from "@/asset/profiles/cta-banner.svg";

/* ---------------- MENU ITEMS ---------------- */
const menuItems = [
  "General FAQs",
  "Shippings",
  "Delivery",
  "Tracking & Support",
  "Billing & Documentation",
];

/* ---------------- FAQ DATA ---------------- */
const faqData = {
  "General FAQs": [
    {
      q: "What is Frisbi?",
      a: "Frisbi is a door-to-door luggage delivery service that ships your bags between cities across India, allowing you to travel hands-free.",
    },
    {
      q: "Which cities does Frisbi cover?",
      a: "We deliver across 25,000+ pincodes in India including metros, tier-2 cities, pilgrimage and tourist destinations.",
    },
    {
      q: "How is Frisbi different from courier services?",
      a: "Frisbi is built exclusively for luggage, with trained handling teams, secure packaging, and real-time tracking.",
    },
    {
      q: "Can I use Frisbi for items other than luggage?",
      a: "No. Frisbi is exclusively for heavy luggage and travel bags. We don't ship commercial goods, electronics as standalone items, or non-luggage parcels.",
    },
    {
      q: "Is Frisbi safe for valuable items in my luggage?",
      a: "Yes. We transport luggage securely with sealed pickup, tracking throughout transit, and verified handling teams. We recommend customers pack valuables carefully and keep bags locked. Additional insurance for high-value contents can be purchased during booking.",
    },
    {
      q: "Do I need to pack my luggage in a special way?",
      a: "Not required but recommended. Lock your bags, wrap fragile items properly, and avoid loose packing. Premium service includes free professional packaging if needed.",
    },
    {
      q: "Can senior citizens or elderly travelers use Frisbi?",
      a: "Absolutely. Many families book Frisbi specifically for elderly travelers so they don't have to lift or carry heavy bags during their journey.",
    },
    {
      q: "What payment methods does Frisbi accept?",
      a: "We accept UPI, credit cards, debit cards, and net banking. You get a custom quote tailored to your luggage delivery needs.",
    },
    {
      q: "Is there a minimum or maximum number of bags I can send?",
      a: "You can send one bag or multiple bags. The minimum weight per bag is 10 kg, and the maximum weight per bag is 25 kg. For bags exceeding 25 kg, please contact our support team for special arrangements.",
    },
    {
      q: "Does Frisbi operate on weekends and holidays?",
      a: "Yes. We operate 7 days a week including weekends and most holidays. Pickup and delivery schedules work throughout the week.",
    },
  ],

  Shippings: [
    {
      q: "How do I book a luggage shipment with Frisbi?",
      a: "Visit our website, use the rate calculator to get a quote, select your service level, enter pickup and delivery details, choose a time slot, and complete payment. Booking takes 3-5 minutes.",
    },
    {
      q: "How much does it cost to ship luggage?",
      a: "Cost depends on distance between cities, luggage weight, bag dimensions, and service speed. Use our rate calculator for instant quotes based on your specific requirements.",
    },
    {
      q: "What is the weight limit per bag?",
      a: "Each bag can weigh between 10 kg to 25 kg. If your bag weighs more than 25 kg, contact our support team for custom handling arrangements.",
    },
    {
      q: "Do you charge based on weight or size?",
      a: "Both. We calculate actual weight and dimensional weight, then charge based on whichever is higher to ensure fair pricing.",
    },
    {
      q: "Can I ship oversized luggage or sports equipment bags?",
      a: "Yes, but oversized items are charged based on dimensional weight. Enter exact dimensions in the rate calculator to see accurate pricing for large bags.",
    },
    {
      q: "What items are not allowed in luggage shipments?",
      a: "We don't ship hazardous materials, flammable items, explosives, perishable food, live animals, illegal substances, or items prohibited by Indian shipping regulations.",
    },
    {
      q: "Can I add more bags to an existing booking?",
      a: "No. Each booking is processed separately. If you need to ship additional bags, create a new booking with the new bag details.",
    },
    {
      q: "How far in advance should I book my shipment?",
      a: "For Standard Delivery, book at least 7-10 days before you need the bags. Express needs 3-5 days advance booking. Premium can accommodate bookings 1-2 days ahead based on availability.",
    },
    {
      q: "Can I ship luggage to hotel addresses?",
      a: "Yes. Enter the complete hotel address including hotel name, room number if available, and recipient contact details. Inform the hotel about the expected delivery.",
    },
    {
      q: "What if I'm shipping from a PG or hostel?",
      a: "Completely fine. Provide the full address with PG/hostel name, your room or floor details, and contact number. We pick up from residential accommodations regularly.",
    },
  ],

  Delivery: [
    {
      q: " How long does delivery take?",
      a: "Standard Delivery takes 5-7 days. Express Delivery takes 3-5 days. Premium Delivery takes 3 days. Timelines depend on distance and route between pickup and delivery cities.",
    },
    {
      q: "Do you deliver to remote areas or small towns?",
      a: "Yes. We cover 25,000+ pincodes including remote locations. Some distant areas may take 1-2 days longer than metro-to-metro routes, but we deliver there.",
    },
    {
      q: "Can I choose a specific delivery date and time?",
      a: "Express and Premium services allow you to select delivery date windows. Standard Delivery provides estimated delivery dates but exact time slots aren't guaranteed.",
    },
    {
      q: "What happens if nobody is home during delivery?",
      a: "Our delivery team calls before arriving. If nobody's available, we'll attempt delivery again or coordinate with you to reschedule at a convenient time.",
    },
    {
      q: "Can someone else receive my luggage on my behalf?",
      a: "Yes. Anyone at the delivery address can receive and sign for your luggage. Inform the recipient about the expected delivery timing.",
    },
    {
      q: "Do you provide proof of delivery?",
      a: "Yes. You receive digital delivery confirmation with recipient name, signature, date, and time once luggage is delivered. This is sent via SMS and email.",
    },
    {
      q: "What if my delivery gets delayed?",
      a: "We track every shipment and notify you immediately if there are delays. Your support contact provides updated delivery timelines and works to resolve the delay quickly.",
    },
    {
      q: "Can I change the delivery address after booking?",
      a: "No. Once a booking is confirmed, the delivery address cannot be changed. If you need to deliver to a different address, please create a new booking.",
    },
    {
      q: "Is delivery included in the price or charged separately?",
      a: "Door-to-door pickup and delivery are both included in the quoted price. No separate delivery charges apply unless you're in specific remote pincodes with surcharges.",
    },
    {
      q: "What if my luggage arrives damaged?",
      a: "Report damage immediately to the delivery team and contact support within 24 hours. We investigate all damage claims and process resolution based on our insurance coverage.",
    },
   
  ],

  "Tracking & Support": [
    {
      q: "How do I track my luggage shipment?",
      a: "Use the tracking ID sent via SMS and Email after pickup. Enter this ID on our tracking page to see real-time location and status updates.",
    },
    {
      q: "What tracking updates will I receive?",
      a: "You get notifications when bags are picked up, when they reach transit hubs, when they're out for delivery, and when delivery is completed. Updates come via SMS and Email.",
    },
    {
      q: "Can I track multiple bags separately?",
      a: "Yes. Each bag gets a unique tracking ID. You can monitor every bag individually to know the exact status of each piece of luggage.",
    },
    {
      q: "What if tracking shows no updates for days?",
      a: "Contact support immediately with your tracking ID. Occasional scanning delays happen, but our team can check the actual location and provide updates manually.",
    },
    {
      q: "How do I contact customer support?",
      a: "Call or WhatsApp +91 7418152531, email info@frisbi.in, or use the contact form on our website. Support is available 9 AM to 9 PM, 7 days a week.",
    },
    {
      q: "Do I get a dedicated contact person?",
      a: "Premium and Corporate services include dedicated account managers. Standard and Express customers contact our general support team who have access to all shipment details.",
    },
    {
      q: "What if I have an urgent issue with my shipment?",
      a: "Call our support number immediately. Urgent issues like missed pickups, delivery delays, or damaged luggage are prioritized and handled by senior team members.",
    },
    {
      q: "Can I reschedule my pickup after booking?",
      a: "No. Once a booking is confirmed, pickup schedules cannot be changed. If you need a different pickup date or slot, please create a new booking.",
    },
    {
      q: "What if I need to cancel my booking?",
      a: "Contact support as soon as possible. Cancellations before pickup are processed with refunds based on our cancellation policy. Refunds take 5-7 business days.",
    },
    {
      q: "Do you offer support in languages other than English?",
      a: "Yes. Our support team can assist in Hindi and several regional languages. Mention your preferred language when you call or message.",
    },
    
  ],

  "Billing & Documentation": [
    {
      q: " Do I get an invoice for my shipment?",
      a: "Yes. All bookings include a GST invoice, which is sent to your registered email address after payment.",
    },
    {
      q: " Is GST included in the quoted price?",
      a: "Yes. All prices shown in the rate calculator and during booking include GST. The quoted amount is the final amount you pay.",
    },
    {
      q: " Can I get a refund if I cancel my booking?",
      a: "Yes, but refund amounts depend on when you cancel. Cancellations before pickup get higher refunds than cancellations after pickup. Check our refund policy for exact percentages.",
    },
    {
      q: " How long do refunds take to process?",
      a: "Refunds are processed within 12-15 business days after cancellation approval. The amount is credited back to your original payment method.",
    },
    {
      q: "Can I pay at delivery instead of at booking?",
      a: "No. Payment is required either during online booking. We don't accept payment on delivery.",
    },
    {
      q: " Do you offer corporate billing or credit terms?",
      a: "No. All bookings must be paid in full at the time of booking. We do not offer corporate billing or credit terms at this time.",
    },
    {
      q: " What documents do I need to provide for booking?",
      a: "No documents required for booking. Just provide pickup address, delivery address, contact details, and bag information. ID verification may be needed at pickup for security.",
    },
    {
      q: " Can I claim luggage shipping costs for business travel reimbursement?",
      a: "Yes. Your GST invoice includes all necessary details for expense reimbursement including service description, amount breakdown, and tax information.",
    },
    {
      q: "What if the final cost is different from the calculator quote?",
      a: "The final cost usually matches the calculator quote. It may change if the actual bag weight or dimensions differ significantly from what you entered, or if a fuel surcharge applies. Minor differences typically do not affect the price.",
    },
    {
      q: "Do you provide delivery reports for corporate shipments?",
      a: "Yes. Corporate accounts receive detailed delivery reports including pickup dates, delivery dates, bag counts, and proof of delivery for all shipments in the billing period.",
    },
  ],
};

function Faq() {
  const [activeMenu, setActiveMenu] = useState("General FAQs");
  const [openIndex, setOpenIndex] = useState(-1);

  return (
  <div className="-mt-24 -mt-16">
      {/* ---------------- DESKTOP HERO ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full h-[460px] hidden md:block overflow-hidden"
      >
        <Image
          src={faqbg}
          alt="FAQ Background"
          fill
          priority
          className="object-contain"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-black mb-4">Frequently Asked Questions</h1>
          <p className="text-black mb-4 text-sm md:text-base">
            India’s trusted luggage delivery service built for stress-free travel.
          </p>

          <Link href="/contact-us" className="btn-primary">
            Contact Now
          </Link>
        </div>
      </motion.section>

      {/* ---------------- MOBILE HERO ---------------- */}
      <section className="md:hidden px-4 py-20">
        <div className="text-center">
          <h1 className="text-black mb-4">Frequently Asked Questions</h1>
          <p className="text-black mb-4 text-sm">
            India’s trusted luggage delivery service built for stress-free travel.
          </p>

          <Link href="/contact-us" className="btn-primary">
            Contact Now
          </Link>

          <div className="relative w-full h-[260px] mt-6">
            <Image src={faqmobile} alt="FAQ" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="w-full px-5 md:px-10 py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT MENU */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-3xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)] p-4 md:sticky md:top-24">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setActiveMenu(item);
                    setOpenIndex(-1);
                  }}
                  className={`flex items-center justify-between p-3 cursor-pointer rounded-lg mb-2 ${
                    activeMenu === item
                      ? "bg-blue-50 border border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      activeMenu === item ? "text-primary" : "text-black"
                    }`}
                  >
                    {item}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-6">{activeMenu}</h3>

            <div className="space-y-4">
              {faqData[activeMenu].map((faq, index) => (
                <div
                  key={faq.q}
                  className="bg-white p-4 rounded-xl border border-[#E6E8F0]"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex w-full justify-between text-left"
                  >
                    <span className="font-semibold text-black">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-600 mt-3"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
   

      {/* ---------------- CTA ---------------- */}
      <section className="w-full px-4 py-12 md:py-20 md:pb-0">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          <Image src={bg} alt="CTA" fill className="object-cover" />

          <div className="relative z-10 text-center py-16 px-6">
            <h2 className="text-white mb-4">From Your Door to Their Door</h2>
            <p className="text-white mb-6 text-sm">
              Fast, safe, and affordable luggage delivery across India.
            </p>

            <Link href="/contact-us" className="btn-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

         <MarqueeLogos />
    </div>
  );
}

export default Faq;
