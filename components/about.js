import Image from 'next/image';
export default function About() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Your Coach</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image 
            src="/api/placeholder/300/300" 
            alt="Coach portrait" 
            width={300}
            height={300}
            className="rounded-full w-48 h-48 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Sarah Johnson, PT, DPT</h3>
            <p className="text-gray-600 mb-4">
              With over 10 years of experience as a physical therapist specializing in women&apos;s health, 
              I&apos;m passionate about helping women safely return to exercise after pregnancy. As a mother 
              and athlete myself, I understand the unique challenges of this journey.
            </p>
            <p className="text-gray-600">
              My evidence-based approach combines clinical expertise with practical solutions, 
              helping you rebuild strength and confidence in your body&pos;s capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
