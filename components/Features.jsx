import { UserCheck, Calendar, MapPin, Shield, DollarSign } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: UserCheck,
      title: 'Dedicated Account Manager',
      description: 'One point of contact from planning to delivery.'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Pickups and drops aligned with flights, events & check-ins.'
    },
    {
      icon: MapPin,
      title: 'Multi-City & Bulk Handling',
      description: 'Single or multiple locations—handled seamlessly.'
    },
    {
      icon: Shield,
      title: 'Secure & Insured',
      description: 'Tamper-sealed, tracked, and insured from start to finish.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Corporate Pricing',
      description: 'Custom quotes based on volume, distance & service level.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Why Corporate Teams Choose Frisbi
          </h2>
          <p className="text-second">
            🎯 Built for Corporate Use (Not Generic Courier)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-3xl mx-auto border-1 border-[#f5f5f5] transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-3xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-black">{feature.title}</h4>
              <p className="text-second">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
