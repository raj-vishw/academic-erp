import { BookOpen, Calendar, Users, MapPin, Clock } from 'lucide-react';

export default function Courses() {
  const courses = [
    { code: 'CS201', name: 'Data Structures', prof: 'Dr. Sarah Johnson', time: 'Mon, Wed, Fri - 10:00 AM', room: 'Room 305', credits: 3, students: 45 },
    { code: 'CS301', name: 'Database Systems', prof: 'Prof. Michael Chen', time: 'Tue, Thu - 2:00 PM', room: 'Room 201', credits: 3, students: 38 },
    { code: 'CS302', name: 'Web Development', prof: 'Dr. Emily Davis', time: 'Mon, Wed - 1:00 PM', room: 'Lab 102', credits: 4, students: 32 },
    { code: 'MATH305', name: 'Discrete Mathematics', prof: 'Prof. Robert Wilson', time: 'Tue, Thu - 10:00 AM', room: 'Room 410', credits: 3, students: 50 },
    { code: 'CS401', name: 'Algorithm Analysis', prof: 'Dr. Lisa Martinez', time: 'Wed, Fri - 3:00 PM', room: 'Room 308', credits: 4, students: 28 },
    { code: 'CS350', name: 'Software Engineering', prof: 'Prof. James Anderson', time: 'Mon, Fri - 11:00 AM', room: 'Room 215', credits: 4, students: 35 },
  ];

  return (
    <div className="courses-page">
      <div className="page-header">
        <h2>Courses</h2>
        <p>Your enrolled courses for Spring 2026</p>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="s-icon"><BookOpen size={20} color="#3b82f6" /></div>
          <div className="s-info">
            <span className="s-label">Total Courses</span>
            <span className="s-val">6</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="s-icon"><Calendar size={20} color="#a855f7" /></div>
          <div className="s-info">
            <span className="s-label">Total Credits</span>
            <span className="s-val">21</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="s-icon"><Users size={20} color="#10b981" /></div>
          <div className="s-info">
            <span className="s-label">Avg Class Size</span>
            <span className="s-val">38</span>
          </div>
        </div>
      </div>

      <h3 className="section-title" style={{ marginTop: '2rem' }}>ALL COURSES</h3>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.code} className="course-card">
            <div className="course-card-bg">
              <BookOpen size={24} />
              <div className="c-code">{course.code}</div>
            </div>
            <div className="course-card-content">
              <h4>{course.name}</h4>
              <div className="c-detail"><Users size={14} /> <span>{course.prof}</span></div>
              <div className="c-detail"><Clock size={14} /> <span>{course.time}</span></div>
              <div className="c-detail"><MapPin size={14} /> <span>{course.room}</span></div>
            </div>
            <div className="course-card-footer">
              <span className="c-credits">{course.credits} Credits</span>
              <span className="c-students">{course.students} Students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
