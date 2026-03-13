import { Bell, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-icons">
        <Link to="/notifications" className="icon-btn">
          <Bell size={20} />
          <span className="badge">1</span>
        </Link>
        <button className="icon-btn">
          <GraduationCap size={20} />
        </button>
      </div>
    </header>
  );
}
