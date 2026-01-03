import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'Repairing Services', page: 'services' },
    { name: 'Products', page: 'products' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
              <img
                src="../ShahLogo.jpg"
                alt="Shah Cyber Tech Zone Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Shah Cyber Tech Zone</h1>
              <p className="text-xs text-gray-600">Repair & Accessories</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-cyan-600 border-b-2 border-cyan-600'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
