import React from "react";
import dynamic from "next/dynamic";

import MobileHero from "./mobile-home/MobileHero";
import MobileAbout from "./mobile-home/MobileAbout";
import MobileServices from "./mobile-home/MobileServices";

const HowYourBagsTravel = dynamic(() => import("@/components/HowYourBagsTravel"), { ssr: true });

export default function MobileHome() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Hero with PIN calculator & rotating slides title/desc */}
      <MobileHero />

      {/* 2. Packaging / How Your Bags Travel */}
      <HowYourBagsTravel variant="mobile" />

      {/* 3. About Frisbi */}
      <MobileAbout />

      {/* 4. Three ways to move your luggage (Sticky stacking cards) */}
      <MobileServices />
    </div>
  );
}
