import { Lock, Umbrella, UserCheck, FileText } from 'lucide-react';

export function Safety() {
  const features = [
    { icon: Lock, text: 'Tamper-proof seals' },
    { icon: Umbrella, text: 'Insurance coverage available' },
    { icon: UserCheck, text: 'Trained & verified staff' },
    { icon: FileText, text: 'Delivery confirmation & audit logs' }
  ];

  return (
    <div className="pt-20  pb-0 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">
          Safety, Security & Compliance
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-second">
          Your luggage is handled with the same care as your people.
        </p>
      </div>
    </div>
  );
}
