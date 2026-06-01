import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import API from "../services/api";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/api/appointment",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit appointment");
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10">
            Book Consultation
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <select
                name="service"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              >
                <option>Select Service</option>
                <option>Income Tax</option>
                <option>GST</option>
                <option>Audit</option>
                <option>Company Registration</option>
              </select>

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg"
              >
                Submit Appointment
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AppointmentPage;