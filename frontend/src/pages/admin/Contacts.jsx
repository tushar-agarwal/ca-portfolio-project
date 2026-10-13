import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminTable from "../../components/admin/AdminTable";
import API from "../../services/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    API.get("/admin/contacts")
      .then((response) => {
        if (active) setContacts(response.data);
      })
      .catch((requestError) => {
        if (active) {
          setError(
            requestError.response?.data?.message ||
              "Inquiries could not be loaded. Please try again.",
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <AdminLayout
      title="Inquiries"
      description="Review messages sent through the website contact form."
    >
      {error && (
        <p role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {loading ? (
        <p role="status" className="py-12 text-center text-sm text-slate-500">
          Loading inquiries...
        </p>
      ) : (
        <AdminTable
          rows={contacts}
          emptyText="There are no inquiries in the database yet."
          searchPlaceholder="Search inquiries..."
          columns={[
            { key: "name", label: "Name" },
            {
              key: "email",
              label: "Email",
              render: (item) => (
                <a className="text-blue-700 hover:underline" href={`mailto:${item.email}`}>
                  {item.email || "—"}
                </a>
              ),
            },
            { key: "phone", label: "Phone" },
            { key: "subject", label: "Subject" },
            {
              key: "message",
              label: "Message",
              render: (item) => (
                <span className="block max-w-xs whitespace-pre-wrap break-words">
                  {item.message || "—"}
                </span>
              ),
            },
          ]}
        />
      )}
    </AdminLayout>
  );
}

export default Contacts;
