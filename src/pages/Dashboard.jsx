import { Book, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  // Dashboard content is intentionally concise so students can scan it quickly.
  const recentlyVisited = [
    { code: 'CS201', name: 'Data Structures' },
    { code: 'CS301', name: 'Database Systems' },
    { code: 'CS302', name: 'Web Development' },
  ];

  const notifications = [
    { title: 'Assignment Submission Reminder', time: '2 hours ago', type: 'warning' },
    { title: 'New announcement in Database Systems', time: '5 hours ago', type: 'info' },
    { title: 'Class cancelled: Web Development - Oct 15', time: '1 day ago', type: 'alert' },
    { title: 'Exam scheduled: Algorithm Analysis', time: '2 days ago', type: 'success' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'warning': return <Clock size={16} color="#eab308" />;
      case 'info': return <Book size={16} color="#3b82f6" />;
      case 'alert': return <AlertCircle size={16} color="#ef4444" />;
      case 'success': return <CheckCircle size={16} color="#10b981" />;
      default: return <AlertCircle size={16} />
    }
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Welcome back! Here's your academic overview</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          <div className="section">
            <h3 className="section-title">Pick up where you left off</h3>
            <div className="recent-cards">
              {recentlyVisited.map(course => (
                <div key={course.code} className="recent-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/courses')}>
                  <div className="recent-icon"><Book size={24} /></div>
                  <div className="recent-code">{course.code}</div>
                  <div className="recent-name">{course.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">Your semester at a glance</h3>
            <div className="details-card">
              <div className="details-header">
                <strong>Current Semester</strong>
                <span className="text-muted">Semester 2 - Spring 2026</span>
              </div>
              <div className="details-stats">
                <div className="stat-item">
                  <span className="stat-label">Total Courses</span>
                  <span className="stat-value">7</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Total Credits</span>
                  <span className="stat-value">21</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Avg Class Size</span>
                  <span className="stat-value">38</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Attendance</span>
                  <span className="stat-value">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="section">
            <h3 className="section-title">Latest updates</h3>
            <div className="notifications-list">
              {notifications.map((notif, idx) => (
                <div key={idx} className="notification-item">
                  <div className="notif-icon">{getIcon(notif.type)}</div>
                  <div className="notif-content">
                    <div className="notif-title">{notif.title}</div>
                    <div className="notif-time">{notif.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
