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
<<<<<<< HEAD
    canonical: "https://www.frisbi.in/rate-calculator",
=======
    canonical: "https://frisbi.in/rate-calculator",
>>>>>>> 05ec78157e5935a34f1bc71bd3b0bb83359ecbea
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default async function Page({ searchParams }) {
  const params = await searchParams; // ⭐ IMPORTANT

  const pickup = params?.pickup ?? "";
  const drop = params?.drop ?? "";

  console.log("pickup, drop:", pickup, drop);

  return (
    <div>
      <RateCalculator
        pickupFromUrl={pickup}
        dropFromUrl={drop}
      />
    </div>
  );
}

