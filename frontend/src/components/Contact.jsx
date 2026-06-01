import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import API from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit inquiry");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4">
            Let's Discuss Your Financial Needs
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Need help with Income Tax, GST, Audit, Company Registration,
            Financial Planning, or Compliance? Get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left Side */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Phone
                    </h4>
                    <p className="text-gray-600">
                      +91 70173 87121
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      cpmittal@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      Aligarh, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      WhatsApp
                    </h4>

                    <a
                      href="https://wa.me/917017387121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 border-t pt-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Office Hours
                </h4>

                <p className="text-gray-600">
                  Monday - Saturday
                </p>

                <p className="text-gray-600">
                  10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Send an Inquiry
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <textarea
                  rows="6"
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Aligarh,Uttar%20Pradesh&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;