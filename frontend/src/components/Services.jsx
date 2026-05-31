import {
  FaFileInvoiceDollar,
  FaPercentage,
  FaSearchDollar,
  FaBuilding,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaFileInvoiceDollar />,
    title: "Income Tax Filing",
    description:
      "Accurate and timely Income Tax Return filing for salaried individuals, professionals, freelancers, and businesses.",
  },
  {
    id: 2,
    icon: <FaPercentage />,
    title: "GST Services",
    description:
      "GST registration, return filing, compliance management, GST audits, and expert advisory services.",
  },
  {
    id: 3,
    icon: <FaSearchDollar />,
    title: "Audit Services",
    description:
      "Internal audits, statutory audits, tax audits, and financial reviews to ensure regulatory compliance.",
  },
  {
    id: 4,
    icon: <FaBuilding />,
    title: "Company Registration",
    description:
      "Private Limited, LLP, OPC, Partnership registration and complete startup compliance assistance.",
  },
  {
    id: 5,
    icon: <FaBalanceScale />,
    title: "ROC Compliance",
    description:
      "Annual filing, director compliance, MCA documentation, and ROC regulatory support.",
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Financial Advisory",
    description:
      "Business planning, tax optimization, investment guidance, and financial growth strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            My Services
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4">
            Professional Accounting & Tax Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial, taxation, compliance, and advisory
            services tailored for individuals, startups, SMEs, and growing
            businesses.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-700 rounded-3xl text-white p-10 lg:p-14 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Expert Financial Guidance?
          </h3>

          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're an individual taxpayer, startup founder, or business
            owner, get personalized accounting and taxation support from an
            experienced Chartered Accountant.
          </p>

          <a
            href="/appointment"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;