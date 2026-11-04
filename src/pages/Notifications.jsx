import { useState } from 'react';
import { Bell, ShieldAlert, FileText, Calendar, CloudLightning } from 'lucide-react';

export default function Notifications() {
  // Local state keeps the notification interactions usable without an API.
  const [activeTab, setActiveTab] = useState('All');
  const [readNotifs, setReadNotifs] = useState([]);

  const notifications = [
    {
      id: 1,
      title: "Campus Closure Alert",
      description: "Due to severe weather conditions, the campus will remain closed tomorrow. All classes are cancelled.",
      time: "1 hour ago",
      type: "alert",
      priority: "High Priority",
      category: "General"
    },
    {
      id: 2,
      title: "Semester Fee Payment Due",
      description: "Reminder to clear your semester fee dues by February 28, 2026. Please check the payment section for details.",
      time: "2 hours ago",
      type: "billing",
      category: "Due/Payments"
    },
    {
      id: 3,
      title: "Midterm Exam Schedule Released",
      description: "The midterm examination schedule for Spring 2026 has been released. Check the exam paper section for details.",
      time: "5 hours ago",
      type: "exam",
      category: "Exams"
    },
    {
      id: 4,
      title: "Attendance Warning",
      description: "Your attendance in Database Systems is currently below 75%. Please ensure you attend the next classes to meet the minimum criteria.",
      time: "2 days ago",
      type: "warning",
      priority: "High Priority",
      category: "General"
    },
    {
      id: 5,
      title: "Library Book Return Due",
      description: "The book 'Clean Code' is due for return by February 5, 2026. Late fees will apply after this date.",
      time: "3 days ago",
      type: "alert",
      priority: "High Priority",
      category: "Due/Payments"
    },
    {
      id: 6,
      title: "Assignment Submission Deadline",
      description: "Data Structures assignment 3 is due tomorrow at 11:59 PM. Make sure to submit before the deadline.",
      time: "4 days ago",
      type: "warning",
      category: "General"
    },
    {
      id: 7,
      title: "New Course Material Available",
      description: "Prof. Michael Chen has uploaded new study materials for Database Systems course.",
      time: "5 days ago",
      type: "info",
      category: "General"
    },
    {
      id: 8,
      title: "Grades Posted",
      description: "Your grades for Algorithm Analysis midterm exam have been posted. Check the exam paper section for details.",
      time: "1 week ago",
      type: "info",
      category: "Exams"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'alert': return <CloudLightning size={20} color="#ef4444" />;
      case 'billing': return <FileText size={20} color="#3b82f6" />;
      case 'exam': return <Calendar size={20} color="#a855f7" />;
      case 'warning': return <ShieldAlert size={20} color="#eab308" />;
      case 'info': return <Bell size={20} color="#10b981" />;
      default: return <Bell size={20} />;
    }
  };

  const handleMarkAllRead = () => {
    setReadNotifs(notifications.map(n => n.id));
  };

  const filteredNotifications = notifications.filter(n => activeTab === 'All' || n.category === activeTab);

  return (
    <div className="notifications-page">
      <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>NOTIFICATIONS</h2>
          <p>You have {notifications.length - readNotifs.length} unread notifications</p>
        </div>
        <button className="primary-btn outline" style={{ background: 'white', border: 'none' }} onClick={handleMarkAllRead}>
          Mark all as read
        </button>
      </div>

      <div className="filter-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button className="menu-tab">Filter by category:</button>
        {['All', 'Due/Payments', 'Exams', 'General'].map(tab => (
          <button 
            key={tab} 
            className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="notifications-list" style={{ padding: '0', background: 'transparent', boxShadow: 'none' }}>
        {filteredNotifications.map((notif) => (
          <div key={notif.id} className="card" style={{ 
            display: 'flex', gap: '1.5rem', padding: '1.5rem', marginBottom: '1rem', alignItems: 'flex-start',
            opacity: readNotifs.includes(notif.id) ? 0.6 : 1
          }}>
            <div className="notif-icon-large" style={{ background: '#f1f4f8', padding: '1rem', borderRadius: '50%' }}>
              {getIcon(notif.type)}
            </div>
            
            <div className="notif-body" style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{notif.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {notif.priority && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 600 }}>{notif.priority}</span>}
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{notif.time}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                {notif.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
