import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function PricingCard({ title, price, features, isPopular }) {
  return (
    <Card className={`relative ${isPopular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <CardHeader>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-blue-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-8 w-full py-3 px-6 rounded-md font-medium 
          ${isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
          Get Started
        </button>
      </CardContent>
    </Card>
  );
}
