import {
  FiCalendar,
  FiGrid,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { to: "/admin", label: "Overview", icon: FiGrid, end: true },
  { to: "/admin/appointments", label: "Appointments", icon: FiCalendar },
  { to: "/admin/contacts", label: "Inquiries", icon: FiMessageSquare },
];

function AdminLayout({ title, description, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-slate-200 bg-white px-5 py-7 lg:flex">
        <NavLink to="/admin" className="mb-10 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
            CA
          </span>
          <span>
            <span className="block text-sm font-bold">CA Portfolio</span>
            <span className="text-xs text-slate-500">Admin workspace</span>
          </span>
        </NavLink>

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Workspace
        </p>
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <Icon aria-hidden="true" size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-700"
          >
            <FiLogOut aria-hidden="true" size={18} />
            Sign out
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-medium text-slate-500">
                CA Portfolio / Admin
              </p>
              <h1 className="mt-1 text-xl font-semibold tracking-tight">
                {title}
              </h1>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800">
                A
              </span>
              <span className="text-sm font-medium text-slate-700">
                Administrator
              </span>
            </div>
          </div>

          <nav
            aria-label="Admin navigation"
            className="mt-4 flex gap-2 overflow-x-auto lg:hidden"
          >
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`
                }
              >
                <Icon aria-hidden="true" size={16} />
                {label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="ml-auto flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-700"
            >
              <FiLogOut aria-hidden="true" size={16} />
              Sign out
            </button>
          </nav>
        </header>

        <main className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
