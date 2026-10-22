import React from "react";
import Link from "next/link";

export default function MobileCtaBanner() {
  return (
    <section className="px-4 py-4">
      <div className="bg-[#013EFE] rounded-3xl p-6 text-white text-center shadow-lg">
        <h2 className="text-lg font-bold leading-tight mb-2">
          On-Time Luggage Delivery You Can Plan Around
        </h2>
        <p className="text-xs text-white/90 leading-relaxed mb-5 max-w-xs mx-auto">
          We know your world does not fit into a 7 kg suitcase. That’s why we
          move your baggage for you, so you can carry everything you want without
          worrying about weight or limits.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold px-7 py-2.5 rounded-full shadow transition-transform active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
