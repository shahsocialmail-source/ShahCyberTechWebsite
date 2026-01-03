import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="../ShahLogo.jpg"
                  alt="Shah Cyber Tech Zone Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Shah Cyber Tech Zone</h3>
                <p className="text-xs text-gray-400">Your Trusted Repair Partner</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Professional repair services for all your devices. Quality parts, expert technicians, and customer satisfaction guaranteed.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'products', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-sm hover:text-cyan-400 transition-colors capitalize"
                  >
                    {page === 'services' ? 'Repairing Services' : page === 'about' ? 'About Us' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-cyan-400" />
                <p className="text-sm">182 Mile End Rd, Stepney Green, London E1 4LJ</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-cyan-400" />
                <p className="text-sm">020 3489 2446</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-cyan-400" />
                <p className="text-sm">printnowuk@gmail.com</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1FJCFfhs4x/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/+447867777311"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Rezuan & Shah Cyber Tech Zone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
