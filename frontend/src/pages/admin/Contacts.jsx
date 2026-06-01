// src/pages/admin/Contacts.jsx

import { useEffect, useState } from "react";
import API from "../../services/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/admin/contacts")
      .then((res) => {
        setContacts(res.data);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Contacts
      </h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;