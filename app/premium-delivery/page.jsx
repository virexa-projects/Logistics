import PremiumServices from "@/page/PremiumServices";
import React from "react";

export const metadata = {
  title: "Premium Luggage Delivery Service in India | White-Glove Handling",
  description:
    "Frisbi offers premium luggage delivery with white-glove handling for valuable baggage, heavy gear, and sensitive items across India.",
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
