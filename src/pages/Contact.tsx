import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['182 Mile End Road, Stepney Green', 'London, E1 4LJ'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Telephone: 020 3489 2446', 'WhatsApp: +44 7867777311'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['printnowuk@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 10:00 PM', 'Sat - Sun: 10:00AM - 10:00PM'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Get in touch with us for repairs, inquiries, or any assistance you need
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your device issue or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Contact</h2>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? Reach out to us directly:
                </p>

                <div className="space-y-4">
                  <a
                    href="tel: 020 3489 2446"
                    className="flex items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call us at</div>
                      <div className="text-lg font-semibold text-gray-800">020 3489 2446</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/+447867777311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp us</div>
                      <div className="text-lg font-semibold text-gray-800">07867777311</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@shahcybertech.com"
                    className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email us at</div>
                      <div className="text-lg font-semibold text-gray-800">printnowuk@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Visit Our Store</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Shah Cyber Tech Zone</p>
                      <p className="text-cyan-50 text-sm">182 Mile End Rd, Stepney Green</p>
                      <p className="text-cyan-50 text-sm">London E1 4LJ</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-cyan-50 text-sm">Mon - Fri: 9:00 AM - 10:00 PM</p>
                      <p className="text-cyan-50 text-sm">Sat - Sun: 10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-100 rounded-xl overflow-hidden" style={{ height: "400px" }}>
              <div className="w-full h-full">
                <iframe
                  title="Shah Cyber Tech Zone Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.565781140428!2d-0.051203023871585!3d51.521181809697076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cd66b7f6e1b%3A0x3c4a4163cdff4326!2sShah%20Cyber%20Tech%20%26%20Internet%20Cafe!5e0!3m2!1sen!2suk!4v1767474896203!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
      </section>

      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-xl overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gray-500 mb-2" />
                <p className="text-gray-600">Map location placeholder</p>
                <p className="text-sm text-gray-500">map</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
