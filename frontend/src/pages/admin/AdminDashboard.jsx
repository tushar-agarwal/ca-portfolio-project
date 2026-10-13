import { useEffect, useState } from "react";
import { FiArrowUpRight, FiCalendar, FiMessageSquare, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    Promise.all([
      API.get("/admin/stats"),
      API.get("/admin/appointments"),
      API.get("/admin/contacts"),
    ])
      .then(([stats, appointments, contacts]) => {
        if (active) {
          setDashboard({
            ...stats.data,
            appointments: appointments.data,
            contacts: contacts.data,
          });
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(
            requestError.response?.data?.message ||
              "Dashboard data could not be loaded. Please try again.",
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
      title="Overview"
      description="A snapshot of your client inquiries and consultation bookings."
    >
      {error && (
        <p role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {loading ? (
        <p role="status" className="py-12 text-center text-sm text-slate-500">
          Loading your dashboard...
        </p>
      ) : dashboard ? (
        <>
          <section aria-label="Dashboard statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <StatCard
              label="Total inquiries"
              value={dashboard.totalContacts}
              icon={FiMessageSquare}
              accent="bg-blue-50 text-blue-700"
              to="/admin/contacts"
            />
            <StatCard
              label="Appointments"
              value={dashboard.totalAppointments}
              icon={FiCalendar}
              accent="bg-emerald-50 text-emerald-700"
              to="/admin/appointments"
            />
            <StatCard
              label="Total client records"
              value={dashboard.totalContacts + dashboard.totalAppointments}
              icon={FiUsers}
              accent="bg-violet-50 text-violet-700"
              to="/admin/contacts"
            />
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-2">
            <RecentSection
              title="Recent appointments"
              link="/admin/appointments"
              linkLabel="All appointments"
              emptyText="New bookings will appear here."
              records={dashboard.appointments.slice(0, 5)}
              renderRecord={(item) => (
                <div className="flex min-w-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-800">{item.name}</p>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {item.service || "Consultation"}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">
                    {item.date || "Date not set"}
                  </span>
                </div>
              )}
            />
            <RecentSection
              title="Recent inquiries"
              link="/admin/contacts"
              linkLabel="All inquiries"
              emptyText="New inquiries will appear here."
              records={dashboard.contacts.slice(0, 5)}
              renderRecord={(item) => (
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-800">{item.name}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {item.subject || item.email}
                  </p>
                </div>
              )}
            />
          </section>
        </>
      ) : null}
    </AdminLayout>
  );
}

function StatCard({ label, value, icon: Icon, accent, to }) {
  return (
    <Link
      to={to}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
    >
      <div className="flex items-start justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
          <Icon aria-hidden="true" size={19} />
        </span>
        <FiArrowUpRight
          aria-hidden="true"
          className="text-slate-400 transition group-hover:text-blue-700"
          size={18}
        />
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
    </Link>
  );
}

function RecentSection({ title, link, linkLabel, emptyText, records, renderRecord }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <Link to={link} className="text-xs font-semibold text-blue-700 hover:text-blue-900">
          {linkLabel}
        </Link>
      </div>
      {records.length ? (
        <ul className="divide-y divide-slate-100 px-5">
          {records.map((item) => (
            <li key={item.id} className="py-4">
              {renderRecord(item)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-5 py-10 text-center text-sm text-slate-500">{emptyText}</p>
      )}
    </section>
  );
}

export default AdminDashboard;
