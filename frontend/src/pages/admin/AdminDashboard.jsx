// src/pages/admin/AdminDashboard.jsx

import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/admin/appointments"
          className="p-6 bg-blue-600 text-white rounded-lg"
        >
          View Appointments
        </Link>

        <Link
          to="/admin/contacts"
          className="p-6 bg-green-600 text-white rounded-lg"
        >
          View Contacts
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;