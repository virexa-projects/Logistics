"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  MapPin,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Calendar,
  Radar,
  CheckCircle,
  Home as HomeIcon,
  Calculator as CalcIcon,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

// Assets
import AboutImg from "@/asset/home/about-frisbi.png";
import StandardImg from "@/asset/service/standard-banner-img.svg";
import ExpressImg from "@/asset/service/express.svg";
import PremiumImg from "@/asset/service/premium-banner-img.svg";
import CorporateImg from "@/asset/service/corporate.svg";
import IndividualImg from "@/asset/home/individual.png";

// Why choose images
import SupportImg from "@/asset/why-choose/support.png";
import SafeSecureImg from "@/asset/why-choose/safe-secure.png";
import DoorToDoorImg from "@/asset/why-choose/door-to-door.png";
import OnTimeImg from "@/asset/why-choose/on-time-delivery.png";
import LiveTrackingImg from "@/asset/why-choose/live-tracking.png";
import TierImg from "@/asset/why-choose/tier.png";

// Profile reviews
import GiriProfile from "@/asset/profiles/giri.png";
import MosusProfile from "@/asset/profiles/mosus.jpg";
import TanyaProfile from "@/asset/profiles/tanya.jpg";
import ParulProfile from "@/asset/profiles/paurl.jpg";

import MarqueeLogos from "@/components/MarqueeLogos";
import HowYourBagsTravel from "@/components/HowYourBagsTravel";

export default function MobileHome() {
  const router = useRouter();

  // Quote PIN code inputs
  const [pickupPin, setPickupPin] = useState("");
  const [dropPin, setDropPin] = useState("");
  const [pinError, setPinError] = useState("");

  const handleCheckPrice = (e) => {
    e.preventDefault();
    if (!pickupPin.trim() || !/^\d{6}$/.test(pickupPin.trim())) {
      setPinError("Please enter a valid 6-digit Pickup PIN code");
      toast.error("Please enter a valid 6-digit Pickup PIN code");
      return;
    }
    if (!dropPin.trim() || !/^\d{6}$/.test(dropPin.trim())) {
      setPinError("Please enter a valid 6-digit Drop PIN code");
      toast.error("Please enter a valid 6-digit Drop PIN code");
      return;
    }
    setPinError("");
    router.push(
      `/rate-calculator?pickup=${encodeURIComponent(
        pickupPin.trim()
      )}&drop=${encodeURIComponent(dropPin.trim())}`
    );
  };

  // 1. Packaging photos (How Your Bags Travel)
  const packagingList = [
    {
      img: "/packaging/ziplock-seal.jpg",
      title: "Zip lock Sealing",
      desc: "High-density shock-absorbing wrap protects fragile contents.",
    },
    {
      img: "/packaging/corner-guard-wrap.jpg",
      title: "360° Foam & Wrap",
      desc: "Multi-layer protective film guards against scratches and moisture.",
    },
    {
      img: "/packaging/multi-layer-wrap.jpg",
      title: "Multi-Layer Protection",
      desc: "Reinforced shrink wrap to prevent tampering and weather damage.",
    },
    {
      img: "/packaging/labeled-transit.jpg",
      title: "Barcode Tracking",
      desc: "Clear courier transit labels for instant live tracking updates.",
    },
    {
      img: "/packaging/reinforced-seal.jpg",
      title: "Tamper-Evident Seals",
      desc: "Heavy-duty security tape applied before dispatch.",
    },
  ];

  // 2. Services data (Five ways to move your luggage)
  const servicesList = [
    {
      title: "Standard Delivery",
      desc: "For trips and moves planned ahead. A reliable, cost-effective way to send your packages with care.",
      bg: "bg-white",
      text: "text-gray-900",
      descColor: "text-gray-600",
      link: "/services/standard-delivery",
      img: StandardImg,
    },
    {
      title: "Express Delivery",
      desc: "Faster delivery without cutting corners on safety. With added flexibility and priority handling.",
      bg: "bg-[#EAB308]",
      text: "text-gray-900",
      descColor: "text-gray-900",
      link: "/services/express-delivery",
      img: ExpressImg,
    },
    {
      title: "Premium Delivery",
      desc: "White glove care, end to end. For deliveries you would rather not think twice about.",
      bg: "bg-[#013EFE]",
      text: "text-white",
      descColor: "text-white/90",
      link: "/services/premium-delivery",
      img: PremiumImg,
    },
    {
      title: "Corporate",
      desc: "Business delivery that handles it all. From employee moves to event travel, we handle baggage so work keeps moving.",
      bg: "bg-white",
      text: "text-gray-900",
      descColor: "text-gray-600",
      link: "/corporate",
      img: CorporateImg,
    },
    {
      title: "Individual",
      desc: "When life requires extra bags, longer stays, or city transfers, we step in to make sure your luggage reaches safely.",
      bg: "bg-white",
      text: "text-gray-900",
      descColor: "text-gray-600",
      link: "/individual",
      img: IndividualImg,
    },
  ];

  // 3. How to ship steps
  const steps = [
    {
      num: 1,
      icon: MessageSquare,
      title: "Get an Instant Quote",
      desc: "See the price upfront before you book.",
    },
    {
      num: 2,
      icon: FileText,
      title: "Schedule Your Pickup",
      desc: "Choose a time and place that works.",
    },
    {
      num: 3,
      icon: Calendar,
      title: "Handover Your Luggage",
      desc: "We scan, seal, and confirm pickup.",
    },
    {
      num: 4,
      icon: Radar,
      title: "Track Your Delivery",
      desc: "Follow your luggage in real time.",
    },
    {
      num: 5,
      icon: CheckCircle,
      title: "Receive at Destination",
      desc: "Door-to-door delivery safely done.",
    },
  ];

  // 4. Why choose slider
  const whyChooseFeatures = [
    {
      title: "Dedicated Support Throughout",
      desc: "No chatbots. No waiting three days for an email reply. Get a dedicated contact who knows your shipment.",
      img: SupportImg,
    },
    {
      title: "Costs Less Than Carrying It",
      desc: "Excess baggage fees add up fast, so you can ship 20 kg or more for far less and pay once, without surprises.",
      img: SafeSecureImg,
    },
    {
      title: "No More Weight Limits",
      desc: "Pack what you actually need instead of packing around limits, and let us handle the weight.",
      img: DoorToDoorImg,
    },
    {
      title: "Built for Last-Minute Plans Too",
      desc: "Forgot to ship earlier? Express and Premium services get your luggage moving fast. Same day pickups available. Delivered in 3-5 days or less.",
      img: OnTimeImg,
    },
    {
      title: "Live Updates Keep You in the Loop",
      desc: "Real time tracking plus SMS and WhatsApp alerts at every step. You always know where your luggage is. No more guess games.",
      img: LiveTrackingImg,
    },
    {
      title: "Nationwide Luggage Delivery Network",
      desc: "Not just metros. We deliver across 25,000+ pincodes. From big cities to smaller towns, we deliver wherever your journey takes you.",
      img: TierImg,
    },
  ];
  const [whyIndex, setWhyIndex] = useState(0);

  const prevWhy = () => {
    setWhyIndex((prev) => (prev === 0 ? whyChooseFeatures.length - 1 : prev - 1));
  };
  const nextWhy = () => {
    setWhyIndex((prev) => (prev === whyChooseFeatures.length - 1 ? 0 : prev + 1));
  };

  // 5. Testimonials
  const reviews = [
    {
      name: "Giri",
      city: "Chennai",
      rating: 5,
      text: "Booked it Sunday night. They picked up Monday morning. Tracked it the whole way. Delivered Thursday afternoon. Exactly as promised.",
      img: GiriProfile,
    },
    {
      name: "Mosus",
      city: "Pune",
      rating: 5,
      text: "Their service is incredibly reliable and professional. Delivery was faster than expected, and the costs were much lower.",
      img: MosusProfile,
    },
    {
      name: "Tanya",
      city: "Indore",
      rating: 4,
      text: "Moving hostel to home for semester break. Sent 3 bags for what I'd pay for one extra bag on a flight. Plus I didn't have to carry anything on the train.",
      img: TanyaProfile,
    },
    {
      name: "Parul",
      city: "Bangalore",
      rating: 5,
      text: "Had a packaging question at 11 PM. Called support. Got a person immediately. Not transferred. Not put on hold. Straight answers in 2 minutes.",
      img: ParulProfile,
    },
  ];

  // 6. FAQs
  const faqs = [
    {
      q: "Can Frisbi handle bulk luggage shipments for corporate events?",
      a: "Yes. Frisbi specializes in bulk luggage handling for corporate events, conferences, offsites, and relocations. We coordinate pickups from multiple locations and deliver to single or multiple destinations based on your requirements.",
    },
    {
      q: "Do we get a dedicated account manager for corporate bookings?",
      a: "Yes. Every corporate account is assigned a dedicated account manager who serves as your single point of contact from planning through delivery.",
    },
    {
      q: "How does pricing work for corporate luggage delivery?",
      a: "Corporate pricing is customized based on shipment volume, distance, pickup and delivery locations, service speed, and any special requirements.",
    },
    {
      q: "Can Frisbi coordinate luggage pickup and delivery with flight schedules?",
      a: "Yes. We schedule pickups and deliveries aligned with your flight times, event check-ins, hotel bookings, and conference schedules.",
    },
    {
      q: "Is insurance available for corporate luggage shipments?",
      a: "Yes. Insurance coverage is available for corporate shipments based on declared luggage value. Discuss coverage limits with your account manager.",
    },
    {
      q: "Can we track all bags in a corporate shipment separately?",
      a: "Yes. Each bag receives individual tracking so you can monitor every piece of luggage separately with live real-time status updates.",
    },
    {
      q: "Does Frisbi handle employee relocation luggage?",
      a: "Yes. Frisbi manages employee relocation luggage across cities with door-to-door pickup and delivery.",
    },
    {
      q: "What cities does Frisbi cover for luggage delivery?",
      a: "Frisbi covers 25,000+ pincodes across India, including all major metros, tier-2 cities, and smaller towns.",
    },
  ];
  const [openFaq, setOpenFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // 7. Contact form state
  const [deliveryType, setDeliveryType] = useState("Individual");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Quote request submitted! Our team will contact you shortly.");
      setContactForm({
        name: "",
        email: "",
        service: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 pb-24">
      {/* ============================================================
          1. HERO SECTION (Portrait Luggage Image + Top Floating Card)
         ============================================================ */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Background Portrait Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-mobile.jpg"
            alt="Luggage at airport ready for delivery"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/75" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-4 pt-4 pb-8 flex flex-col justify-between flex-1">
          {/* TOP CARD: Send Your Luggage Across India */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white/95 backdrop-blur-md rounded-[28px] p-5 shadow-2xl border border-white/60 mx-auto max-w-sm"
          >
            <h2 className="text-[19px] font-bold text-center text-gray-900 mb-4 tracking-tight">
              Send Your Luggage Across India
            </h2>

            <form onSubmit={handleCheckPrice} className="space-y-3.5">
              {/* Pickup PIN */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                  Pickup PIN code
                </label>
                <div className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200 rounded-2xl px-3.5 py-2.5 focus-within:border-[#013EFE] focus-within:bg-white transition-all shadow-inner">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#013EFE]" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={pickupPin}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                      setPickupPin(val);
                      if (pinError) setPinError("");
                    }}
                    placeholder="Enter pickup PIN code"
                    className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Drop PIN */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                  Drop PIN code
                </label>
                <div className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200 rounded-2xl px-3.5 py-2.5 focus-within:border-[#013EFE] focus-within:bg-white transition-all shadow-inner">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#013EFE]" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={dropPin}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                      setDropPin(val);
                      if (pinError) setPinError("");
                    }}
                    placeholder="Enter drop PIN code"
                    className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              {pinError && (
                <p className="text-red-500 text-xs font-medium text-center">
                  {pinError}
                </p>
              )}

              {/* Button */}
              <div className="text-center pt-1">
                <button
                  type="submit"
                  className="w-full bg-[#013EFE] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-transform active:scale-95 text-sm"
                >
                  Check Price
                </button>
              </div>
            </form>
          </motion.div>

          {/* BOTTOM HERO TEXT OVER IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-white text-left px-1"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-2 tracking-tight">
              Door-to-Door Luggage Delivery for Stress-Free Travel
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 line-clamp-3">
              Skip the heavy bags and travel hands-free. Frisbi picks up your
              luggage from your doorstep and delivers it safely to your
              destination.
            </p>
            <Link
              href="/rate-calculator"
              className="inline-flex items-center gap-2 bg-[#013EFE] hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-transform active:scale-95"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ============================================================
          2. HOW YOUR BAGS TRAVEL (Bottom-to-Top Auto-scroll, Swipable, Large Cards)
         ============================================================ */}
      <HowYourBagsTravel variant="mobile" />

      {/* ============================================================
          3. ABOUT FRISBI
         ============================================================ */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div>
          <span className="text-[11px] font-bold text-[#013EFE] uppercase tracking-wider">
            About Frisbi
          </span>
          <h2 className="text-xl font-bold text-gray-900 leading-tight mt-1 mb-3">
            Built for worry-free luggage delivery across cities
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed mb-5">
            We started because dragging 20kg through airports didn’t make
            sense. Neither did paying ₹2,000 in excess baggage fees or leaving
            behind things you actually need. So we built a reliable luggage
            delivery service made for real travel. Your luggage now travels just
            as safely as you do.
          </p>

          {/* Checklist */}
          <ul className="space-y-2.5 text-xs text-gray-800 font-medium mb-6">
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>Door step pickup and delivery</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>Dedicated point of contact for every shipment</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>Live tracking from pickup to delivery</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>Service available across 25,000+ pincodes in India</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>24/7 support, Live tracking from pickup to delivery</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>Professional packing using sturdy boxes</span>
            </li>
          </ul>

          <Link
            href="/about"
            className="inline-block bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow transition-transform active:scale-95"
          >
            Know More
          </Link>
        </div>
      </section>

      {/* ============================================================
          4. FIVE WAYS TO MOVE YOUR LUGGAGE (Sticky Stacking Cards)
         ============================================================ */}
      <section className="py-10 px-4 bg-[#F1F2F6] pb-16">
        <div className="mb-6">
          <span className="text-[11px] font-bold text-[#013EFE] uppercase tracking-wider block mb-1">
            Our Services
          </span>
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            Five ways to move your luggage. One way to travel lighter.
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Scroll to see each service stack smoothly in sequence.
          </p>
        </div>

        {/* Sticky Stacking Cards Container: 5 -> 4 -> 3 -> 2 -> 1 with reverse unstacking */}
        <div className="relative pb-6">
          {servicesList.map((svc, i) => (
            <div
              key={i}
              style={{
                position: "sticky",
                top: `${72 + i * 14}px`,
                zIndex: i + 10,
              }}
              className={`${svc.bg} rounded-[28px] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden flex flex-col justify-between mb-8 last:mb-0 min-h-[320px] transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      svc.text === "text-white"
                        ? "bg-white/20 text-white"
                        : "bg-black/5 text-gray-700"
                    }`}
                  >
                    0{i + 1} / 05
                  </span>
                  <span
                    className={`text-[11px] font-semibold tracking-wide ${
                      svc.text === "text-white"
                        ? "text-white/80"
                        : "text-[#013EFE]"
                    }`}
                  >
                    {svc.title}
                  </span>
                </div>
                <h3 className={`text-base font-bold ${svc.text} mb-1.5`}>
                  {svc.title}
                </h3>
                <p className={`text-xs ${svc.descColor} leading-relaxed mb-3`}>
                  {svc.desc}
                </p>
                <Link
                  href={svc.link}
                  className={`inline-flex items-center gap-1 text-xs font-bold ${
                    svc.text === "text-white"
                      ? "text-white underline"
                      : "text-[#013EFE]"
                  } hover:opacity-80 transition`}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="relative w-full h-[160px] mt-3 flex items-center justify-center">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-contain"
                  sizes="320px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="text-center mt-8 pt-2">
          <Link
            href="/rate-calculator"
            className="inline-block bg-[#013EFE] hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg transition-transform active:scale-95"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* ============================================================
          5. HOW WE MOVE YOUR LUGGAGE (Steps)
         ============================================================ */}
      <section className="py-10 px-4 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Here’s how we move your luggage
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Five quick steps to stress-free delivery.
          </p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          {steps.map((st, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#013EFE] flex items-center justify-center text-white shadow-md mb-2.5">
                <st.icon className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">{st.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5 max-w-xs">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          6. WHY PEOPLE CHOOSE FRISBI (Vibrant Blue Card Slider)
         ============================================================ */}
      <section className="py-10 px-4 bg-[#013EFE] text-white">
        <h2 className="text-xl font-bold text-center leading-tight mb-6 px-2">
          Why people choose frisbi for luggage delivery
        </h2>

        {/* Feature Card */}
        <div className="max-w-sm mx-auto bg-white rounded-[26px] p-5 text-gray-900 shadow-xl min-h-[360px] flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">
              {whyChooseFeatures[whyIndex].title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {whyChooseFeatures[whyIndex].desc}
            </p>
          </div>

          <div className="relative w-full h-[180px] my-3">
            <Image
              src={whyChooseFeatures[whyIndex].img}
              alt={whyChooseFeatures[whyIndex].title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Nav Controls */}
        <div className="flex justify-center items-center gap-4 mt-5">
          <button
            onClick={prevWhy}
            aria-label="Previous feature"
            className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow hover:bg-gray-100 active:scale-95 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {whyChooseFeatures.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`w-2 h-2 rounded-full transition-all ${
                  dotIdx === whyIndex ? "bg-white w-4" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextWhy}
            aria-label="Next feature"
            className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow hover:bg-gray-100 active:scale-95 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ============================================================
          7. TESTIMONIALS (What customers actually say)
         ============================================================ */}
      <section className="py-10 px-4 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            What customers actually say
          </h2>
          <p className="text-xs text-gray-500 mt-1">Real feedback. Unedited.</p>
        </div>

        {/* Horizontal scroll reviews */}
        <div className="flex gap-3.5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="min-w-[270px] max-w-[270px] bg-white rounded-2xl border border-gray-150 p-4 shadow-sm snap-start shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={rev.img}
                        alt={rev.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">{rev.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <FaStar key={rIdx} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          8. FREQUENTLY ASKED QUESTIONS
         ============================================================ */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {(showAllFaqs ? faqs : faqs.slice(0, 5)).map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-3.5 pt-1"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-start text-left gap-3 focus:outline-none"
              >
                <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5 text-gray-500">
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-[#013EFE]" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-2 text-xs text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllFaqs(!showAllFaqs)}
            className="bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow transition"
          >
            {showAllFaqs ? "Show Less" : "View More"}
          </button>
        </div>
      </section>

      {/* ============================================================
          9. CONTACT SECTION ("Heavy baggage? Not your problem anymore.")
         ============================================================ */}
      <section className="py-8 px-4 bg-[#F1F2F6] rounded-3xl mx-3 my-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight mb-2">
            Heavy baggage? Not your problem anymore.
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed mb-5">
            Send it with Frisbi and enjoy traveling hands-free while we take care
            of your luggage.
          </p>

          {/* Quick contact buttons */}
          <div className="space-y-2 mb-6">
            <a
              href="tel:+917418152531"
              className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#013EFE]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500">Call us</p>
                <p className="text-xs font-bold text-gray-900">+91 7418152531</p>
              </div>
            </a>

            <a
              href="mailto:info@frisbi.in"
              className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#013EFE]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500">Drop us a line</p>
                <p className="text-xs font-bold text-gray-900">info@frisbi.in</p>
              </div>
            </a>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-5 shadow-md border border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Plan Your Delivery
            </h3>

            {/* Individual vs Corporate Toggle */}
            <div className="flex gap-2 mb-3.5">
              <button
                type="button"
                onClick={() => setDeliveryType("Individual")}
                className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold border transition ${
                  deliveryType === "Individual"
                    ? "border-[#013EFE] bg-blue-50/50 text-[#013EFE]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {deliveryType === "Individual" ? "◉" : "○"} Individual
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType("Corporate")}
                className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold border transition ${
                  deliveryType === "Corporate"
                    ? "border-[#013EFE] bg-blue-50/50 text-[#013EFE]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {deliveryType === "Corporate" ? "◉" : "○"} Corporate
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
              />

              <input
                type="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
              />

              <select
                value={contactForm.service}
                onChange={(e) =>
                  setContactForm({ ...contactForm, service: e.target.value })
                }
                className="w-full bg-[#f5f5f5] text-xs text-gray-700 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
              >
                <option value="">Select Service</option>
                <option value="Standard Delivery">Standard Delivery</option>
                <option value="Express Delivery">Express Delivery</option>
                <option value="Premium Delivery">Premium Delivery</option>
                <option value="Corporate Moving">Corporate Moving</option>
              </select>

              <input
                type="tel"
                placeholder="Phone Number"
                value={contactForm.phone}
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
                className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
              />

              <textarea
                rows={3}
                placeholder="Write your message"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-full shadow transition-transform active:scale-95"
              >
                {submitting ? "Submitting..." : "Get a Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. BLUE CTA BANNER
         ============================================================ */}
      <section className="px-4 py-4">
        <div className="bg-[#013EFE] rounded-3xl p-6 text-white text-center shadow-lg">
          <h2 className="text-lg font-bold leading-tight mb-2">
            On-Time Luggage Delivery You Can Plan Around
          </h2>
          <p className="text-xs text-white/90 leading-relaxed mb-5 max-w-xs mx-auto">
            We know your world does not fit into a 7 kg suitcase. That’s why we
            move your baggage for you, so you can carry everything you want
            without worrying about weight or limits.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold px-7 py-2.5 rounded-full shadow transition-transform active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ============================================================
          11. POWERED BY MARQUEE
         ============================================================ */}
      <section className="py-2">
        <MarqueeLogos />
      </section>

      {/* ============================================================
          12. FIXED BOTTOM NAVIGATION BAR (Exact Match to Figma)
         ============================================================ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-2 px-6 flex justify-between items-center max-w-lg mx-auto">
        {/* Home Tab */}
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-[#013EFE] group"
        >
          <div className="w-10 h-10 rounded-full bg-[#013EFE] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <HomeIcon className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold">Home</span>
        </Link>

        {/* Calculator Tab */}
        <Link
          href="/rate-calculator"
          className="flex flex-col items-center gap-1 text-gray-700 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            <CalcIcon className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-medium text-gray-600">Calculator</span>
        </Link>

        {/* Call Tab */}
        <a
          href="tel:+917418152531"
          className="flex flex-col items-center gap-1 text-gray-700 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#013EFE] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-medium text-gray-600">Call</span>
        </a>

        {/* WhatsApp Tab */}
        <a
          href="https://wa.me/917418152531"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-gray-700 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
            <FaWhatsapp className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-medium text-gray-600">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
