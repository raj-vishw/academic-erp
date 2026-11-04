import { Calendar, Target } from 'lucide-react';

export default function Attendance() {
  // Attendance is currently represented with local prototype data.
  const subjects = [
    { name: 'Data Structures', code: 'CS201', attended: 32, total: 35, percentage: 91 },
    { name: 'Database Systems', code: 'CS301', attended: 28, total: 30, percentage: 93 },
    { name: 'Web Development', code: 'CS302', attended: 25, total: 32, percentage: 78 },
    { name: 'Discrete Mathematics', code: 'MATH305', attended: 30, total: 45, percentage: 67 },
    { name: 'Algorithm Analysis', code: 'CS401', attended: 26, total: 28, percentage: 92 },
    { name: 'Software Engineering', code: 'CS350', attended: 34, total: 35, percentage: 97 },
  ];

  return (
    <div className="attendance-page">
      <div className="page-header">
        <h2>Attendance</h2>
        <p>Your attendance records and statistics</p>
      </div>

      <div className="summary-cards" style={{ marginBottom: '2rem' }}>
        <div className="summary-card" style={{ background: '#495e86', color: 'white' }}>
          <div className="s-info" style={{ flex: 1 }}>
            <span className="s-val" style={{ color: 'white' }}>84%</span>
            <span className="s-label" style={{ color: '#e2e8f0', marginTop: '0.25rem' }}>Overall Attendance</span>
          </div>
          <Calendar size={48} opacity={0.2} />
        </div>
        <div className="summary-card" style={{ background: '#495e86', color: 'white' }}>
          <div className="s-info" style={{ flex: 1 }}>
            <span className="s-val" style={{ color: 'white' }}>75%</span>
            <span className="s-label" style={{ color: '#e2e8f0', marginTop: '0.25rem' }}>Required Minimum</span>
          </div>
          <Target size={48} opacity={0.2} />
        </div>
      </div>

      <h3 className="section-title">COURSE-WISE ATTENDANCE</h3>
      <div className="attendance-grid">
        {subjects.map(sub => (
          <div key={sub.code} className="attendance-card">
            <div className="att-header">
              <div>
                <div className="att-code">{sub.code}</div>
                <div className="att-name">{sub.name}</div>
              </div>
              <div className={`att-perc ${sub.percentage < 75 ? 'danger' : 'success'}`}>
                {sub.percentage}%
              </div>
            </div>
            <div className="att-stats">
              <div className="att-stat">
                <span className="att-stat-label">Classes Attended</span>
                <span className="att-stat-val">{sub.attended}</span>
              </div>
              <div className="att-stat">
                <span className="att-stat-label">Total Classes</span>
                <span className="att-stat-val">{sub.total}</span>
              </div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${sub.percentage < 75 ? 'danger-bg' : 'success-bg'}`} 
                  style={{ width: `${sub.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
