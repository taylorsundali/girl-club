import Image from 'next/image';	
import { ArrowRight, Activity, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative pt-8 pb-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Return to Exercise</span>
            <span className="block text-blue-600">with Confidence</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
            Specialized coaching for athletic women navigating pregnancy and postpartum recovery. Get back to the activities you love with expert guidance and personalized support.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
              Learn More
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Expert Guidance</h3>
                <p className="mt-1 text-sm text-gray-500">Licensed PT</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personalized</h3>
                <p className="mt-1 text-sm text-gray-500">Custom Plans</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 lg:mt-0 lg:relative">
          <img 
            src="/api/placeholder/600/400" 
            alt="Physical therapist working with client" 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
