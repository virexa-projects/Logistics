"use client";

import { useState } from "react";
import Image from "next/image";

/* ✅ City Images */
import Delhi from "@/asset/cities/Delhi.webp";
import Mumbai from "@/asset/cities/Mumbai.webp";
import Bengaluru from "@/asset/cities/Bangalore.webp";
import Chennai from "@/asset/cities/Chennai.webp";
import Hyderabad from "@/asset/cities/Hyderabad.webp";
import Kolkata from "@/asset/cities/Kolkata.webp";
import Pune from "@/asset/cities/Pune.webp";
import Goa from "@/asset/cities/Surat.webp";
import Agra from "@/asset/cities/Agra.webp";
import Ladakh from "@/asset/cities/Kanpur.webp"; // Leh–Ladakh fallback
import Rishikesh from "@/asset/cities/Dehradun.webp"; // Rishikesh & Haridwar
import Varanasi from "@/asset/cities/Varanasi.webp"; // Kashi
import Rameshwaram from "@/asset/cities/Madurai.webp";
import Amritsar from "@/asset/cities/Amritsar.webp";
import Ahmedabad from "@/asset/cities/Ahmedabad.webp";
import Jaipur from "@/asset/cities/Jaipur.webp";
import Chandigarh from "@/asset/cities/Chandigarh.webp";
import Coimbatore from "@/asset/cities/Coimbatore.webp";
import Indore from "@/asset/cities/Indore.webp";
import Kochi from "@/asset/cities/Kochi.webp";
import Nagpur from "@/asset/cities/Nagpur.webp";
import Bhubaneswar from "@/asset/cities/Bhubaneswar.webp";
import Lucknow from "@/asset/cities/Lucknow.webp";
import Visakhapatnam from "@/asset/cities/Visakhapatnam.webp";
import Surat from "@/asset/cities/Surat.webp";
import Vadodara from "@/asset/cities/Vadodara.webp";
import Trivandrum from "@/asset/cities/Thiruvananthapuram.webp";
import Madurai from "@/asset/cities/Madurai.webp";
import Vijayawada from "@/asset/cities/Vijayawada.webp";

/* ✅ Fallback */
import DefaultCity from "@/asset/cities/Bangalore.webp";

export default function TransformingCities() {
  const [showAll, setShowAll] = useState(false);

  /* ✅ ONLY your city names */
  const cities = [
    "Delhi (NCR)",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Goa",
    "Agra",
    "Leh–Ladakh",
    "Rishikesh & Haridwar",
    "Kashi",
    "Rameshwaram",
    "Amritsar",
    "Varanasi",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Coimbatore",
    "Indore",
    "Kochi",
    "Nagpur",
    "Bhubaneswar",
    "Lucknow",
    "Visakhapatnam",
    "Surat",
    "Vadodara",
    "Trivandrum",
    "Madurai",
    "Vijayawada",
  ];

  /* ✅ Name → Image mapping */
  const cityImages = {
    "Delhi (NCR)": Delhi,
    Mumbai,
    Bengaluru,
    Chennai,
    Hyderabad,
    Kolkata,
    Pune,
    Goa,
    Agra,
    "Leh–Ladakh": Ladakh,
    "Rishikesh & Haridwar": Rishikesh,
    Kashi: Varanasi,
    Rameshwaram,
    Amritsar,
    Varanasi,
    Ahmedabad,
    Jaipur,
    Chandigarh,
    Coimbatore,
    Indore,
    Kochi,
    Nagpur,
    Bhubaneswar,
    Lucknow,
    Visakhapatnam,
    Surat,
    Vadodara,
    Trivandrum,
    Madurai,
    Vijayawada,
  };

  const visibleCities = showAll ? cities : cities.slice(0, 21);

  return (
    <section className="relative w-full bg-primary py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white">Connecting Cities, Made Simple</h2>

        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-12 gap-x-6 place-items-center">
          {visibleCities.map((city) => (
            <div key={city} className="flex flex-col items-center">
              <Image
                src={cityImages[city] || DefaultCity}
                alt={city}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="mt-2 text-white text-xs font-medium text-center">
                {city}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-white hover:scale-105 transition-all"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
