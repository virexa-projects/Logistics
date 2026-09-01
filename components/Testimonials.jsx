
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import profile from "@/asset/profiles/giri.png";
import Mosus from "@/asset/profiles/mosus.jpg";
import Tanya from "@/asset/profiles/tanya.jpg";
import Parul from "@/asset/profiles/paurl.jpg";

export default function Testimonials() {
  const marqueeReviews = [
    {
      img: profile,
      name: "Giri",
      title: "Chennai",
      rating: 5,
      text: "Booked it Sunday night. They picked up Monday morning. Tracked it the whole way. Delivered Thursday afternoon. Exactly as promised.",
    },
    {
      img: Mosus,
      name: "Mosus",
      title: "Pune",
      rating: 5,
      text: "Their service is incredibly reliable and professional. Delivery was faster than expected, and the costs were much lower.",
    },
    {
      img: Tanya,
      name: "Tanya",
      title: "Indore",
      rating: 4,
      text: "Moving hostel to home for semester break. Sent 3 bags for what I'd pay for one extra bag on a flight. Plus I didn't have to carry anything on the train.",
    },
    {
      img: Parul,
      name: "Parul",
      title: "Bangalore",
      rating: 5,
      text: "Had a packaging question at 11 PM. Called support. Got a person immediately. Not transferred. Not put on hold. Straight answers in 2 minutes.",
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-4">What customers actually say</h2>
      <p className="mb-6 text-center text-second">Real feedback. Unedited.</p>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="overflow-hidden mt-16 w-full space-y-6">
        <div
          className="flex gap-6 w-max"
          style={{ animation: "marqueeScroll 20s linear infinite" }}
        >
          {[...marqueeReviews, ...marqueeReviews].map((item, i) => (
            <div
              key={i}
              className="w-[400px] bg-white p-10 rounded-3xl flex-shrink-0"
              style={{ border: "2px solid #f5f5f5" }}
            >
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="ml-4 w-full">
                  {/* Name + Stars */}
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold">{item.name}</h5>

                    <div className="flex">
                      {[...Array(item.rating)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-[#f79029] ml-1"
                          size={18}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-second text-sm">{item.title}</p>
                </div>
              </div>

              <p className="text-second mt-4">
                <q>{item.text}</q>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

