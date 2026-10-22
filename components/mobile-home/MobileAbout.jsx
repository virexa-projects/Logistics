import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import AboutImg from "@/asset/home/about-frisbi.png";

const features = [
  "Door step pickup and delivery",
  "Dedicated point of contact for every shipment",
  "Live tracking from pickup to delivery",
  "Service available across 25,000+ pincodes in India",
  "24/7 support, Live tracking from pickup to delivery",
  "Professional packing using sturdy boxes",
];

export default function MobileAbout() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white border-t border-gray-100">
      <div>
        <span className="text-[11px] font-bold text-[#013EFE] uppercase tracking-wider">
          About Frisbi
        </span>
        <h2 className="text-xl font-bold text-gray-900 leading-tight mt-1 mb-3">
          Built for worry-free luggage delivery across cities
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed mb-5">
          We started because dragging 20kg through airports didn’t make sense.
          Neither did paying ₹2,000 in excess baggage fees or leaving behind
          things you actually need. So we built a reliable luggage delivery
          service made for real travel. Your luggage now travels just as safely
          as you do.
        </p>

        {/* Checklist */}
        <ul className="space-y-2.5 text-xs text-gray-800 font-medium mb-6">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#013EFE] stroke-[3]" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/about"
          className="inline-block bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow transition-transform active:scale-95"
        >
          Know More
        </Link>

        {/* Image */}
        <div className="flex justify-center lg:justify-end mt-6">
          <div className="relative w-full max-w-xl h-[280px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={AboutImg}
              alt="Frisbi luggage delivery illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
