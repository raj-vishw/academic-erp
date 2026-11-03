import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-welcome">
        <span>Tuesday, November 3, 2026</span>
        <strong>Good evening, John</strong>
      </div>
      <div className="topbar-icons">
        <Link to="/notifications" className="icon-btn">
          <Bell size={20} />
          <span className="badge">1</span>
        </Link>
        <button className="profile-button" aria-label="Open profile">
          <span className="avatar">JD</span>
          <span className="profile-name">John Doe</span>
        </button>
      </div>
    </header>
  );
}
