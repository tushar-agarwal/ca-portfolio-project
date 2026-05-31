import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/admin/dashboard`)
      .then((response) => {
        setStats(response.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Contact Inquiries
          </h2>

          <p className="text-4xl text-blue-600 mt-4">
            {stats.totalContacts || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Appointment Requests
          </h2>

          <p className="text-4xl text-green-600 mt-4">
            {stats.totalAppointments || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;