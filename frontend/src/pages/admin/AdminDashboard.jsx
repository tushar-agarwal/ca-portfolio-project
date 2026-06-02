import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalAppointments: 0,
  });

  useEffect(() => {
    API.get("/admin/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <h2 className="text-xl">Total Inquiries</h2>
          <p className="text-4xl font-bold">
            {stats.totalContacts}
          </p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg">
          <h2 className="text-xl">Total Appointments</h2>
          <p className="text-4xl font-bold">
            {stats.totalAppointments}
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;