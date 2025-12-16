import { MapPin, Shield, Smartphone, Clock, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Doorstep Pickup & Delivery',
    description: 'From your home, hotel, or stay—straight to your destination.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure Handling',
    description: 'Sealed, tracked, and handled with care at every step.',
  },
  {
    icon: Smartphone,
    title: 'Real-Time Tracking',
    description: 'Know exactly where your luggage is, anytime.',
  },
  {
    icon: Clock,
    title: 'Flexible Time Slots',
    description: 'Choose pickup and delivery times that fit your schedule.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Pay only for the distance and number of bags—no surprises.',
  },
];

export function WhyChoose() {
  return (
    <section className="lg:py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4 ">Why Choose Frisbi?</h2>
        <p className="text-center text-second mb-12 max-w-2xl mx-auto">
          Experience hassle-free travel with our comprehensive luggage delivery service
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">{benefit.title}</h4>
                  <p className="text-second">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
