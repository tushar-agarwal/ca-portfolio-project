import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";
import AppointmentPage from "../pages/AppointmentPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Appointments from "../pages/admin/Appointments";
import Contacts from "../pages/admin/Contacts";
import Login from "../pages/admin/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;