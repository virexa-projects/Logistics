import BaggageChargesIndia from '@/page/blogs/baggageChargesIndia'
import React from 'react'

export const metadata = {
  title: "How to Avoid Excess Baggage Charges in India | Frisbi Guide",
  description:
    "Discover smart tips and hacks to avoid heavy excess baggage fees at Indian airports. Learn how door-to-door luggage delivery saves you money when traveling.",
  keywords: [
    "avoid excess baggage charges india, airline baggage fees india, cheap luggage shipping india, avoid airline baggage fees"
  ],
  alternates: {
    canonical: "https://www.frisbi.in/blog/how-to-avoid-excess-baggage-charges-india",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <BaggageChargesIndia />
    </div>
  )
}

export default page