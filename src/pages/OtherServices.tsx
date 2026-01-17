import { Camera, Printer, Copy, Layers, Truck, Globe, Clock, CheckCircle2 } from "lucide-react";

export default function OtherServices() {
  const services = [
    {
      icon: Camera,
      title: "Passport Photo",
      description:
        "Professional passport & visa photos with correct sizing and clear quality—ready for UK and international requirements.",
      highlights: ["Passport", "Visa", "ID Photos", "Fast Delivery"],
    },
    {
      icon: Printer,
      title: "Printing",
      description:
        "High-quality printing and photocopy services for documents and images—available in color and black & white.",
      highlights: ["A4 / A3", "Color", "Black & White", "Bulk Available"],
    },
    {
      icon: Copy,
      title: "Photocopy (Quick Service)",
      description:
        "Fast, clean photocopies for forms, applications, certificates, and everyday documents.",
      highlights: ["Clear Copies", "Fast", "A4 / A3", "Affordable"],
    },
    {
      icon: Layers,
      title: "Laminating",
      description:
        "Protect your documents with durable lamination—perfect for certificates, IDs, menus, and important papers.",
      highlights: ["A4 / A3", "Gloss Finish", "Durable", "Professional"],
    },
    {
      icon: Truck,
      title: "DHL Services",
      description:
        "Send parcels and documents securely with DHL service support—drop-off, assistance, and guidance available.",
      highlights: ["Parcel Drop-off", "International", "Support"],
    },
    {
      icon: Globe,
      title: "Cyber Cafe",
      description:
        "Computer access for email, printing, job applications, online forms, and more—charged per hour.",
      highlights: ["Per Hour", "Internet", "Scanning/Printing"],
    },
  ];

  const quickInfo = [
    "Color & B/W printing available",
    "Paper sizes: A4 and A3",
    "Lamination: A4 and A3",
    "Cyber Cafe: per hour charge",
    "Ask in-store for latest pricing",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Other Services</h1>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto">
            Convenient in-store services including passport photos, printing, lamination, DHL support,
            and cyber cafe access.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast, reliable, and affordable services to help you get things done quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  {service.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                <CheckCircle2 className="text-cyan-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quick Info</h3>
                <p className="text-gray-600 mb-6">
                  Here’s a quick overview of sizes and service options available.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quickInfo.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Clock size={14} className="text-cyan-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  For exact pricing, please contact us (pricing can vary by quantity and requirements).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Help Today?</h2>
            <p className="text-lg mb-8 text-cyan-50 max-w-2xl mx-auto">
              Call us or message on WhatsApp and we’ll guide you for passport photo, printing, DHL, or cyber cafe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+442034892446"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us: 020 3489 2446
              </a>
              <a
                href="https://wa.me/+447867777311"
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
