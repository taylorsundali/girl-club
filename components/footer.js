import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Strong Mama PT</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@strongmamapt.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Wellness Street<br />Portland, OR 97201</span>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/" className="block hover:text-blue-400">Home</a>
              <a href="/about" className="block hover:text-blue-400">About</a>
              <a href="/services" className="block hover:text-blue-400">Services</a>
              <a href="/pricing" className="block hover:text-blue-400">Pricing</a>
              <a href="/contact" className="block hover:text-blue-400">Contact Us</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Postpartum Recovery</li>
              <li>Return to Exercise</li>
              <li>Pregnancy Preparation</li>
              <li>Athletic Training</li>
              <li>1:1 Coaching</li>
            </ul>
          </div>

          {/* Social and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div>
              <h4 className="font-medium mb-2">Join our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded text-gray-900 flex-1"
                />
                <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Strong Mama PT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
