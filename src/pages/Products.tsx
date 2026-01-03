import { Cable, Battery, Smartphone, Headphones, Usb, Plug2, Shield, HardDrive, Mouse, Keyboard } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Cable,
      name: 'Charging Cables',
      description: 'High-quality USB-C, Lightning, and Micro USB cables for all devices',
      types: ['Lightning', 'USB-C', 'Micro USB', 'Multi-Cable'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Plug2,
      name: 'Power Adapters',
      description: 'Fast charging wall adapters and car chargers for all phone models',
      types: ['Wall Chargers', 'Car Chargers', 'Fast Charge', 'Wireless'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Smartphone,
      name: 'Phone Cases',
      description: 'Protective cases in various styles for iPhone, Samsung, and more',
      types: ['Slim Cases', 'Ring Cases', 'Leather', 'Clear Cases'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Shield,
      name: 'Tempered Glass',
      description: 'Premium screen protectors with 9H hardness and anti-fingerprint coating',
      types: ['Privacy Glass', 'Full Glue', 'Standard'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Usb,
      name: 'All Types of Connectors',
      description: 'Adapters and converters for USB, HDMI, DisplayPort, and more',
      types: ['USB Hub', 'HDMI', 'DisplayPort', 'VGA Adapter'],
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Cable,
      name: 'Extension Cables',
      description: 'Power extension cords and cable extenders for home and office',
      types: ['Power Strip', 'USB Extension', 'Audio Cable', 'Video Cable'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Battery,
      name: 'Power Banks',
      description: 'Portable chargers with high capacity for on-the-go charging',
      types: ['10000mAh', '20000mAh', 'Fast Charge', 'Wireless'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Plug2,
      name: 'Tourist Adapters',
      description: 'Universal travel adapters compatible with outlets worldwide',
      types: ['Universal', 'EU', 'UK Type', 'Multi-Country'],
      color: 'from-yellow-500 to-green-500',
    },
    {
      icon: Headphones,
      name: 'Audio Accessories',
      description: 'Headphones, earbuds, and audio cables for all devices',
      types: ['Wired Earbuds', 'Wireless', 'Headsets', 'AUX Cables'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Mouse,
      name: 'Computer Peripherals',
      description: 'Mice, keyboards, and other essential computer accessories',
      types: ['Wireless Mouse', 'Gaming Mouse', 'Keyboard', 'Mouse Pad'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: HardDrive,
      name: 'Storage Devices',
      description: 'External hard drives, SSDs, and flash drives for data storage',
      types: ['USB Drives', 'External HDD', 'SSD', 'Memory Cards'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Keyboard,
      name: 'Laptop Accessories',
      description: 'Cooling pads, laptop stands, and protective sleeves',
      types: ['Cooling Pad', 'Laptop Stand', 'Sleeves', 'Laptop Bag'],
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Quality mobile and computer accessories at competitive prices
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Browse Our Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium accessories from trusted brands for all your devices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${product.color} p-8 flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <product.icon size={40} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Available Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.types.map((type, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">All products are tested and verified for quality</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cable size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Wide Selection</h3>
              <p className="text-gray-600 text-sm">Extensive range of accessories for all devices</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Competitive Prices</h3>
              <p className="text-gray-600 text-sm">Best value for money with regular special offers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-lg mb-8 text-cyan-50">
            Contact us and we'll help you find the perfect accessory for your device
          </p>
          <a
            href="https://wa.me/+447867777311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
