import { Smartphone, Laptop, Tablet, Monitor, Battery, Wrench, Droplets, Download, Zap, HardDrive } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      icon: Smartphone,
      title: 'Screen Replacement',
      description: 'High-quality screen replacements for all phone and tablet models with original-grade displays',
      devices: ['iPhone', 'Samsung', 'iPad', 'All Smartphones'],
    },
    {
      icon: Battery,
      title: 'Battery Replacement',
      description: 'Restore your device\'s battery life with genuine, long-lasting battery replacements',
      devices: ['iPhone', 'Android', 'Laptops', 'MacBook'],
    },
    {
      icon: Zap,
      title: 'Charging Port Repair',
      description: 'Fix charging issues with professional port cleaning and replacement services',
      devices: ['All Phones', 'Tablets', 'Laptops'],
    },
    {
      icon: HardDrive,
      title: 'Motherboard Repair',
      description: 'Expert-level motherboard diagnostics and repair for complex hardware issues',
      devices: ['Computers', 'Laptops', 'Phones'],
    },
    {
      icon: Droplets,
      title: 'Water Damage Treatment',
      description: 'Emergency water damage repair with professional cleaning and component restoration',
      devices: ['All Devices'],
    },
    {
      icon: Download,
      title: 'Software Installation',
      description: 'Operating system installation, updates, and software troubleshooting',
      devices: ['Windows', 'macOS', 'Linux'],
    },
  ];

  const deviceTypes = [
    {
      icon: Smartphone,
      name: 'iPhone & Smartphones',
      services: ['Screen Repair', 'Battery', 'Charging Port', 'Camera', 'Speaker', 'Water Damage'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Tablet,
      name: 'iPad & Tablets',
      services: ['Display Repair', 'Battery', 'Charging Port', 'Home Button', 'Touch Issues'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Laptop,
      name: 'Laptop & Computers',
      services: ['Hardware Repair', 'Upgrades', 'Data Recovery', 'Virus Removal', 'OS Install'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Monitor,
      name: 'MacBook',
      services: ['Screen Repair', 'Keyboard', 'Battery', 'Logic Board', 'Trackpad', 'Data Transfer'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Repairing Services</h1>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Comprehensive repair solutions for all your devices with certified technicians and quality parts
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional repair services with genuine parts and expert care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.devices.map((device, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Devices We Repair</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in repairing all major brands and device types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deviceTypes.map((device, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${device.color} p-6 text-white`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <device.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">{device.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Available Services</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {device.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <Wrench size={14} className="text-cyan-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Repair?</h2>
            <p className="text-lg mb-8 text-cyan-50 max-w-2xl mx-auto">
              Our expert technicians are ready to help. Get a free quote for your device repair today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us: +1 (555) 123-4567
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
