// src/pages/admin/Appointments.jsx

import { useEffect, useState } from "react";
import API from "../../services/api";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get("/admin/appointments")
      .then((res) => {
        setAppointments(res.data);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Appointments
      </h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.service}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;