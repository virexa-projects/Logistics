'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or any icon set

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import iconone from "@/asset/icon1.svg";
import icontwo from "@/asset/icon2.svg";
import iconthree from "@/asset/icon3.svg";

const testimonials = [
  {
    id: 1,
    name: 'Kathryn Murphy',
    avatar: '/avatar1.png',
    content:
      'Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content.',
    tag: 'Travisia - Study Abroad',
    icon: iconone,
    stars: 4,
  },
  {
    id: 2,
    name: 'Savannah Nguyen',
    avatar: '/avatar2.png',
    content:
      "I had an instant connection with Dani, and loved talking to her! We talked about Worklife balance.",
    tag: 'Travisia - Holiday Package',
    icon: icontwo,
    stars: 5,
  },
  {
    id: 3,
    name: 'Jane Cooper',
    avatar: '/avatar3.png',
    content:
      'Great mentorship, we had really common topics on our ways of working. He gave me pretty nice insight.',
    tag: 'Travisia - Immigration',
    icon: iconthree,
    stars: 4,
  },
  {
    id: 4,
    name: 'Ralph Edwards',
    avatar: '/avatar3.png',
    content:
      'Super helpful session and great energy throughout. I got more clarity about my next steps.',
    tag: 'Travisia - Study Abroad',
    icon: iconone,
    stars: 5,
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-red-100"
  >
    <ChevronLeft className="w-5 h-5 text-red-500" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-red-100"
  >
    <ChevronRight className="w-5 h-5 text-red-500" />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function TestimonialSlider() {
  return (
    <section className="relative bg-gradient-to-br from-white to-[#fff5f5] py-16 px-4 text-center overflow-hidden">
      <p className="text-sm text-red-500 tracking-widest font-semibold mb-2">
        TESTIMONIALS
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Happy Clients Reflect on Their
      </h2>
      <h3 className="text-2xl md:text-3xl text-red-500 font-semibold mb-10">
        Journey with Us
      </h3>

      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white shadow-lg p-6 mx-4 rounded-2xl border">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p className="font-semibold">{item.name}</p>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{item.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src={item.icon} alt="icon" width={35} height={35} />
                    <div>

                    <span className="text-sm text-gray-600">{item.tag}</span>
                     <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-red-500">
                        {i < item.stars ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                    </div>

                  </div>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
