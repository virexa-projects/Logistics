import { MousePointer, Calendar, Radar, PackageCheck } from 'lucide-react';
import Link from 'next/link';
const steps = [
  {
    icon: MousePointer,
    number: '1',
    title: 'Book online in minutes',
    description: 'Simple and quick booking process.',
  },
  {
    icon: Calendar,
    number: '2',
    title: 'Schedule pickup at your preferred location',
    description: 'Choose a time that works for you.',
  },
  {
    icon: Radar,
    number: '3',
    title: 'Track your luggage in real time',
    description: 'Stay informed every step of the way.',
  },
  {
    icon: PackageCheck,
    number: '4',
    title: 'Receive it safely at your destination',
    description: 'Delivered with care and on time.',
  },
];

export function HowItWorks() {
  return (
    <section className="md:py-16  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4 text-gray-900">Four steps to baggage-free travel</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get your luggage delivered in four simple steps.

        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold">{step.number}</span>
                    </div> */}
                  </div>
                  
                  <h5 className="mb-2">{step.title}</h5>
                  <p className="text-second ">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
        
       
      </div>
    </section>
  );
}
