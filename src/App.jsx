import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// Public Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Indigenous from "./pages/Indigenous";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Environment from "./pages/Environment";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Components
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import ManageNews from "./admin/pages/ManageNews";
import AddNews from "./admin/pages/AddNews";
import EditNews from "./admin/pages/EditNews";
import ContactMessages from "./admin/pages/ContactMessages";
import MembershipApplications from "./admin/pages/MembershipApplications";
import AdminLayout from "./admin/components/AdminLayout";
import ProtectedRoute from "./admin/components/ProtectedRoute";

// Public Website Layout
const PublicLayout = () => {
  return (
    <>
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

// Main App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* =========================
            PUBLIC WEBSITE ROUTES
        ========================= */}

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/archive" element={<Archive />} />

          <Route path="/indigenous" element={<Indigenous />} />

          <Route path="/news" element={<News />} />

          <Route
            path="/news/:slug"
            element={<NewsDetail />}
          />

          <Route
            path="/environment"
            element={<Environment />}
          />

          <Route
            path="/membership"
            element={<Membership />}
          />

          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* =========================
            ADMIN LOGIN
        ========================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* =========================
            PROTECTED ADMIN ROUTES
        ========================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/admin/dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="news"
            element={<ManageNews />}
          />

          <Route
            path="news/add"
            element={<AddNews />}
          />

          <Route
            path="news/edit/:id"
            element={<EditNews />}
          />

          <Route
            path="contact-messages"
            element={<ContactMessages />}
          />

          <Route
            path="membership-applications"
            element={<MembershipApplications />}
          />
        </Route>

        {/* =========================
            404 PAGE
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
