import MovingToBangalore from '@/page/blogs/movingToBangalore'
import React from 'react'

export const metadata = {
  title: "Moving to Bangalore? Easy Luggage Transport & Relocation Guide | Frisbi",
  description:
    "Planning a move to Bangalore? Discover hassle-free luggage transport and baggage shipping options with Frisbi to send your bags safely before you arrive.",
  keywords: [
    "moving to bangalore luggage transport, baggage shipping bangalore, luggage delivery bangalore, relocation luggage service"
  ],
  alternates: {
    canonical: "https://www.frisbi.in/blog/moving-to-bangalore-luggage-transport",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <MovingToBangalore />
    </div>
  )
}

export default page