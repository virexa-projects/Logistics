import Termsofservice from '@/page/Termsofservice';
import React from 'react';

export const metadata = {
  title: 'Terms and Conditions | Frisbi',
  description:
    'Read Frisbi’s Terms and Conditions to understand the terms, rules, and policies governing the use of our website and services.',
  alternates: {
    canonical: 'https://frisbi.in/terms-and-conditions',
  },
};

function Page() {
  return (
    <div>
      <Termsofservice />
    </div>
  );
}

export default Page;
