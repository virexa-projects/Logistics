// components/TestimonialCard.js

import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, index }) => {
  // Simple fade-in/scale-up for initial render
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, delay: 0.1 * index } 
    },
  };

  return (
    <motion.div
      className="bg-black text-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-800 flex-shrink-0 w-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      // Added max-w-sm for the smaller, separate card shown in the design
      // Remove this line if you only want the large version
      // max-w-sm: The small card seems to be shown separately/in a different state
    >
      <blockquote className="italic text-2xl font-semibold leading-relaxed">
        <span className="text-4xl font-extrabold text-blue-500 mr-2">“</span>
        {quote}
      </blockquote>
      <p className="mt-6 text-sm font-medium text-gray-400">
        {author}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;