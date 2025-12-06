import { Award, Users, Clock, Heart, Target, Zap, Shield, ThumbsUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every repair with meticulous attention to detail',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We treat every device like our own',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Transparent pricing and honest service you can rely on',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Using the latest tools and techniques for superior repairs',
    },
  ];

  const highlights = [
    {
      icon: Clock,
      stat: '12+',
      label: 'Years of Experience',
    },
    {
      icon: Users,
      stat: '15,000+',
      label: 'Happy Customers',
    },
    {
      icon: Award,
      stat: '50,000+',
      label: 'Devices Repaired',
    },
    {
      icon: ThumbsUp,
      stat: '98%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Your trusted partner for device repair and accessories since 2014
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Welcome to Shah Cyber Tech Zone
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shah Cyber Tech Zone is a leading repair center specializing in iPhone, phones, iPad, computers, laptops, and MacBooks. With over a decade of experience, we have established ourselves as the go-to destination for all your device repair needs.
                </p>
                <p>
                  Our journey began with a simple mission: to provide fast, reliable, and affordable repair services to our community. Today, we're proud to have served thousands of satisfied customers and repaired tens of thousands of devices.
                </p>
                <p>
                  Beyond repairs, we offer a comprehensive selection of mobile and computer accessories, ensuring you have everything you need to keep your devices protected and functioning at their best.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{highlight.stat}</div>
                  <div className="text-sm text-gray-600">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To provide exceptional repair services and quality products while building lasting relationships with our customers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-start mb-6">
              <Target size={32} className="text-cyan-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and reliable device repair center in the region, known for our expertise, customer service, and commitment to quality. We envision a future where every customer leaves our shop satisfied, knowing their devices are in the best hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Technicians</h3>
              <p className="text-cyan-50 text-sm leading-relaxed">
                Our team consists of highly trained and certified technicians with years of hands-on experience in device repair.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Genuine Parts</h3>
              <p className="text-cyan-50 text-sm leading-relaxed">
                We use only authentic, high-quality replacement parts to ensure your device functions like new.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-cyan-50 text-sm leading-relaxed">
                Most repairs are completed within 24 hours, so you can get back to using your device quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of satisfied customers who trust Shah Cyber Tech Zone for their repair needs
          </p>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
