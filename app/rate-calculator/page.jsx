import RateCalculator from '@/page/RateCalculator'
import React from 'react'


export const metadata = {
  title: "Luggage Delivery Cost Calculator in India | Frisbi",
  description:
    "Know your luggage parcel price in 60 seconds with Frisbi’s luggage delivery cost calculator. Calculate now, book when ready, and travel lighter. ",
  keywords: [
    "luggage delivery cost calculator, baggage delivery pricing, luggage parcel price calculator"
  ],
  alternates: {
    canonical: "https://frisbi.in/rate-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
};


import { Suspense } from "react";
import RateCalculatorClient from "./RateCalculatorClient";

export default function Page() {
  return (
    <div>
      <Suspense fallback={null}>
        <RateCalculatorClient />
      </Suspense>
    </div>
  );
}

