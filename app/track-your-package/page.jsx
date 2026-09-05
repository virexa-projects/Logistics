import Trackyourpackage from '@/page/Trackyourpackage'
import React from 'react'

export const metadata = {
  title: "Track Your Luggage Delivery | Real-Time Baggage Tracking India | Frisbi",
  description:
    "Track your luggage shipment in real-time with Frisbi. Enter your tracking ID to see live updates, current location, and estimated delivery time for your baggage across India. ",
  keywords: [
    "track luggage delivery india, baggage tracking online, real-time luggage tracking, track my baggage shipment, luggage courier tracking india, baggage delivery status, track luggage online india, frisbi tracking number, luggage shipment tracking, live baggage tracking india"
  ],
  alternates: {
<<<<<<< HEAD
    canonical: "https://www.frisbi.in/track-your-package",
=======
    canonical: "https://frisbi.in/track-your-package",
>>>>>>> 05ec78157e5935a34f1bc71bd3b0bb83359ecbea
  },
  robots: {
    index: true,
    follow: true,
  },
};


function page() {
  return (
    <div>
      <Trackyourpackage/>
    </div>
  )
}

export default page
