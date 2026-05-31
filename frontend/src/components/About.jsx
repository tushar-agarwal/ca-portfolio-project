import { FaUserTie, FaAward, FaBriefcase, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Chartered Accountant & Financial Consultant
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Helping individuals, startups, and businesses manage taxation,
            compliance, auditing, and financial planning with professional
            expertise and trusted advisory services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div>
            <img
              src="/payal_img.jpg"
              alt="CA Profile"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              CA Payal Mittal
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am a qualified Chartered Accountant with over 8 years of
              professional experience in Income Tax, GST Compliance, Auditing,
              Financial Reporting, Business Registration, and Corporate
              Advisory Services.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              My mission is to provide practical financial solutions that help
              clients stay compliant, minimize tax liabilities, and achieve
              long-term business growth. I have successfully assisted hundreds
              of clients across various industries.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white p-5 rounded-xl shadow-md">
                <FaBriefcase className="text-blue-600 text-3xl mb-3" />
                <h4 className="font-semibold text-lg">
                  8+ Years Experience
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Extensive experience in taxation, auditing and consulting.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md">
                <FaUserTie className="text-blue-600 text-3xl mb-3" />
                <h4 className="font-semibold text-lg">
                  400+ Clients
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Trusted by businesses, professionals and startups.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md">
                <FaAward className="text-blue-600 text-3xl mb-3" />
                <h4 className="font-semibold text-lg">
                  Professional Excellence
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Dedicated to quality, ethics and client satisfaction.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md">
                <FaChartLine className="text-blue-600 text-3xl mb-3" />
                <h4 className="font-semibold text-lg">
                  Business Growth
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Strategic financial guidance for sustainable growth.
                </p>
              </div>

            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Core Expertise
              </h4>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Income Tax Return Filing</li>
                <li>✓ GST Registration & Compliance</li>
                <li>✓ Internal & Statutory Audit</li>
                <li>✓ ROC & Company Compliance</li>
                <li>✓ Financial Planning & Advisory</li>
                <li>✓ Business Registration Services</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;