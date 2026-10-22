import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import GiriProfile from "@/asset/profiles/giri.png";
import MosusProfile from "@/asset/profiles/mosus.jpg";
import TanyaProfile from "@/asset/profiles/tanya.jpg";
import ParulProfile from "@/asset/profiles/paurl.jpg";

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

export default function MobileTestimonials() {
  return (
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
  );
}
