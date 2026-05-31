import { Link } from "react-router-dom";
import { FaDownload, FaCalendarCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
              Chartered Accountant
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              CA Payal Mittal
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
              Chartered Accountant | DISA Qualified | Statutory Audit & Taxation Expert
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Experienced Chartered Accountant with 8+ years of expertise in
              Income Tax, GST Compliance, Auditing, Financial Planning,
              Company Registration, and Business Advisory Services.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Payal_Mittal_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                <FaDownload />
                Download Resume
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-medium transition"
              >
                <FaCalendarCheck />
                Book Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">8+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">50+</h3>
                <p className="text-gray-300">Audit Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">150+</h3>
                <p className="text-gray-300">ITR Filings</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">100+</h3>
                <p className="text-gray-300">GST Clients Managed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">100%</h3>
                <p className="text-gray-300">Compliance Support</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md">
              <h3 className="text-white text-2xl font-bold mb-6">
                Professional Services
              </h3>

              <ul className="space-y-4 text-gray-200">
                <li>✓ Income Tax Return Filing</li>
                <li>✓ GST Registration & Filing</li>
                <li>✓ Company Incorporation</li>
                <li>✓ Tax Planning & Advisory</li>
                <li>✓ Internal & Statutory Audit</li>
                <li>✓ ROC Compliance</li>
                <li>✓ Financial Consultancy</li>
              </ul>

              <Link
                to="/services"
                className="block text-center mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;