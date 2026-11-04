import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, CalendarCheck, FileText, Coffee, Settings, GraduationCap, LogOut } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();

  // Keeping navigation as data makes adding a new portal section straightforward.
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/courses', icon: BookOpen, label: 'Courses' },
    { path: '/attendance', icon: CalendarCheck, label: 'Attendance' },
    { path: '/exam-paper', icon: FileText, label: 'Exam Paper' },
    { path: '/cafeteria', icon: Coffee, label: 'Cafeteria' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="brand-mark"><GraduationCap size={22} /></div>
        <div>
          <strong>CampusHub</strong>
          <span>Student portal</span>
        </div>
      </div>

      <nav className="nav-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <a href="#learn-more">Need help? Learn more</a>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
