import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              CA Payal Mittal
            </h2>

            <p className="leading-relaxed mb-6">
              Providing professional Income Tax, GST, Audit,
              Company Registration, ROC Compliance and Financial
              Advisory services with accuracy and trust.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/payal-mittal-/"
                target="_blank"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917017387121"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/appointment"
                  className="hover:text-white transition"
                >
                  Appointment
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Income Tax Filing</li>
              <li>GST Registration</li>
              <li>GST Return Filing</li>
              <li>Audit Services</li>
              <li>Company Registration</li>
              <li>ROC Compliance</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-400" />
                <span>+91 70173 87121</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-400" />
                <span>cpmittal@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span>
                  Aligarh, Uttar Pradesh,
                  India
                </span>
              </div>
            </div>

            <a
              href="/Payal_Mittal_Resume.pdf"
              download
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {year} CA Payal Mittal. All Rights Reserved.
            </p>

            <p>
              Designed & Developed with React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;