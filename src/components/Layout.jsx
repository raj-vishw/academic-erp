import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout() {
  const location = useLocation();
  // The login screen intentionally uses a separate, distraction-free layout.
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <Outlet />;
  }

  // Redirect to dashboard if on root
  if (location.pathname === '/') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
