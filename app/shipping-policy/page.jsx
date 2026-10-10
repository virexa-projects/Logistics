import Shippingpolicy from '@/page/Shippingpolicy';
import React from 'react';

export const metadata = {
  title: 'Shipping Policy | Frisbi',
  description:
    'Read Frisbi’s Shipping Policy to learn about shipping methods, delivery timelines, order processing, and delivery terms.',
  alternates: {
    canonical: 'https://frisbi.in/shipping-policy',
  },
};

function Page() {
  return (
    <div>
      <Shippingpolicy />
    </div>
  );
}

export default Page;