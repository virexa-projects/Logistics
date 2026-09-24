import PremiumServices from "@/page/PremiumServices";
import React from "react";

export const metadata = {
  title: "Premium Luggage Delivery in Bangalore | VIP Baggage Transport | Frisbi",
  description:
    "Looking for VIP treatment for your bags? Frisbi offers secure, white-glove premium luggage delivery and custom handling across Bangalore. Book your priority service today!.",
  keywords: [
    "premium luggage delivery service, white glove luggage delivery, secure baggage handling"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/premium-delivery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <PremiumServices />
    </div>
  );
}

export default page;
