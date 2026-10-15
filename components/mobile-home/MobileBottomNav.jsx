import React from "react";
import Link from "next/link";
import { Home as HomeIcon, Calculator as CalcIcon, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileBottomNav() {
  return (
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
  );
}
