import PricingCard from './pricing-card';

export default function PricingSection() {
  const packages = [
    {
      title: "Starter",
      price: "99",
      features: [
        "Initial Assessment",
        "Monthly Check-ins",
        "Basic Exercise Program",
        "Email Support"
      ]
    },
    {
      title: "Pro",
      price: "199",
      features: [
        "Comprehensive Assessment",
        "Weekly Check-ins",
        "Customized Exercise Program",
        "Priority Email Support",
        "Video Form Analysis",
        "Nutrition Guidelines"
      ],
      isPopular: true
    },
    {
      title: "Elite",
      price: "349",
      features: [
        "All Pro Features",
        "2x Weekly Check-ins",
        "Direct Message Access",
        "24/7 Support",
        "Personalized Meal Plans",
        "Monthly Progress Review"
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coaching Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect level of support for your postpartum fitness journey. 
            All packages include personalized attention and evidence-based programming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
