import { Smartphone, Laptop, Tablet, Wrench, Shield, DollarSign, Clock, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Smartphone,
      title: 'Phone Repair',
      description: 'Expert repair for all smartphone brands including iPhone and Android devices',
    },
    {
      icon: Laptop,
      title: 'Laptop & Computer',
      description: 'Complete repair solutions for laptops, desktops, and all PC components',
    },
    {
      icon: Tablet,
      title: 'iPad & Tablets',
      description: 'Professional tablet repair services with genuine replacement parts',
    },
    {
      icon: Wrench,
      title: 'MacBook Services',
      description: 'Specialized MacBook repair and maintenance by certified technicians',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Repair',
      description: 'Most repairs completed within 24 hours',
    },
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'Only authentic, high-quality replacement parts',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing',
    },
    {
      icon: CheckCircle,
      title: 'Warranty Included',
      description: 'Warranty available on repairs',
    },
  ];

  const products = [
    { name: 'Charging Cables', image: '📱' },
    { name: 'Power Banks', image: '🔋' },
    { name: 'Phone Cases', image: '📱' },
    { name: 'Accessories', image: '🎧' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 text-white pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Expert Phone & Computer Repair Services
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-cyan-50 leading-relaxed max-w-2xl mx-auto">
              Professional repair solutions for all your devices. From smartphones to MacBooks, we've got you covered with fast, reliable service.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Get Repair Service
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Repairing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive repair solutions for all your devices with expert technicians and quality parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('services')}
              className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best repair experience with quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={28} className="text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality accessories for all your devices at competitive prices
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-200"
                onClick={() => onNavigate('products')}
              >
                <div className="text-5xl mb-4">{product.image}</div>
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('products')}
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>


      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Image — 2/3 width */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/shopFront.jpeg" //
                alt="Our Shop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text — 1/3 width */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Visit Our Shop
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Visit our store for professional repairs, passport photos, printing,
                DHL services, and cyber cafe facilities — all in one place.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>• Walk-in service available</li>
                <li>• Fast turnaround time</li>
                <li>• Certified technicians</li>
                <li>• Friendly local service</li>
              </ul>
            </div>

          </div>
        </div>
      </section>




      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Fix Your Device?</h2>
          <p className="text-lg mb-8 text-cyan-50">
            Get in touch with us today and let our experts take care of your repair needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Contact Us Now
          </button>
        </div>
      </section>








        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                Customer Reviews
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What our customers say about our services
              </p>
            </div>

            {/* Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Review Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-3">
                  ★★★★★
                </div>
                <p className="text-gray-600 mb-4">
                  “I have replaced my Samsung s23 ultra screen from them. My screen was completely broken. They fixed it very quickly and the screen quality is really good. And thanks to the repair man rezuan for fixing this perfectly.
I can definitely suggested this shop for any phone and laptop repair.
I also saw many gadget and accessories for mobile phones and computers, can check out guys.”
                </p>
                <h4 className="font-semibold text-gray-800">Arthur Roy Begumisa</h4>
                <span className="text-sm text-gray-500">Screen Repair</span>
              </div>

              

              {/* Review Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-3">
                  ★★★★★
                </div>
                <p className="text-gray-600 mb-4">
                  “I recently bought a wireless keyboard suggested by Sajon Bhai from Shah Cybertech, and I couldn’t be happier with my experience! The product quality is excellent. The staff was knowledgeable, friendly, and helped me choose the right model for my needs. Pricing was very fair, and the overall service was fast and professional.
Highly recommended for anyone looking for genuine tech products and top-notch customer service. I’ll definitely be coming back for future purchases!”
                </p>
                <h4 className="font-semibold text-gray-800">Siyana Choudhury</h4>
                <span className="text-sm text-gray-500">Keyboard</span>
              </div>


              {/* Review Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-3">
                  ★★★★★
                </div>
                <p className="text-gray-600 mb-4">
                  “One of the best shop in east London for any service or anything .they give you fair price and they make it onspot if you ask . My man Ryan he gave me very good deal for both laptop and my mobile service they did it in a hour.”
                </p>
                <h4 className="font-semibold text-gray-800">Vijay Sai Kiran Siripurapu</h4>
                <span className="text-sm text-gray-500">iPhone & Laptop Repair</span>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/+447867777311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-95 transition"
              >
                Leave Us a Review
              </a>
            </div>

          </div>
        </section>




      
    </div>
  );
}
