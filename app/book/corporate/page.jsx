import Corporate from '@/page/corporate';
import React from 'react';

export const metadata = {
  title: "Corporate Luggage Delivery Solutions in Bangalore | Frisbi",
  description:
    "Frisbi provides corporate luggage delivery solutions and parcel services in Bangalore for businesses, hotels, events, and employee travel logistics.",
  keywords: [
    "Corporate Luggage Delivery Solutions",
    "corporate parcel service",
    "corporate luggage movers in Bangalore",
  ],
  alternates: {
    canonical: 'https://frisbi.in/book/corporate',
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <Corporate />
    </div>
  );
}

export default page;