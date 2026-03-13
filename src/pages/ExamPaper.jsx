import { FileText, Download, Eye, Calendar, Clock } from 'lucide-react';

export default function ExamPaper() {
  const upcomingExams = [
    { name: 'Data Structures', code: 'CS201', date: '2026-05-12', time: '10:00 AM - 1:00 PM', type: 'Midterm', location: 'Hall A' },
    { name: 'Database Systems', code: 'CS301', date: '2026-05-15', time: '2:00 PM - 5:00 PM', type: 'Final', location: 'Hall B' },
    { name: 'Web Development', code: 'CS302', date: '2026-05-18', time: '10:00 AM - 1:00 PM', type: 'Practical', location: 'Lab 102' },
  ];

  const previousResults = [
    { name: 'Software Engineering', code: 'CS350', semester: 'Fall 2025', grade: 'A' },
    { name: 'Discrete Mathematics', code: 'MATH305', semester: 'Fall 2025', grade: 'B+' },
  ];

  const pastPapers = [
    { name: 'Data Structures - Midterm', year: '2025', size: '2.4 MB' },
    { name: 'Database Systems - Final', year: '2025', size: '3.1 MB' },
    { name: 'Algorithm Analysis - Final', year: '2024', size: '1.8 MB' },
  ];

  const handleViewDetails = (examName) => {
    alert(`Showing details for ${examName} exam.`);
  };

  const handleDownload = (paperName) => {
    alert(`Started downloading: ${paperName}.pdf`);
  };

  const handlePreview = (paperName) => {
    alert(`Opening preview for: ${paperName}.pdf`);
  };

  return (
    <div className="exam-page">
      <div className="page-header">
        <h2>Exam Paper</h2>
        <p>Upcoming exams and past papers</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          <h3 className="section-title">UPCOMING EXAMS</h3>
          <div className="upcoming-list">
            {upcomingExams.map((exam, idx) => (
              <div key={idx} className="exam-card">
                <div className="exam-card-left">
                  <div className="exam-badge">{exam.type}</div>
                  <div className="exam-details">
                    <div className="e-code">{exam.code}</div>
                    <h4>{exam.name}</h4>
                    <div className="e-meta">
                      <span><Calendar size={14}/> {exam.date}</span>
                      <span><Clock size={14}/> {exam.time}</span>
                    </div>
                  </div>
                </div>
                <div className="exam-card-right">
                  <div className="e-loc">{exam.location}</div>
                  <button className="primary-btn outline" onClick={() => handleViewDetails(exam.name)}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-right">
          <h3 className="section-title">PREVIOUS RESULTS</h3>
          <div className="results-list" style={{ marginBottom: '2rem' }}>
            {previousResults.map((res, idx) => (
              <div key={idx} className="result-item">
                <div className="r-info">
                  <div className="e-code">{res.code}</div>
                  <div className="r-name">{res.name}</div>
                  <div className="r-sem">{res.semester}</div>
                </div>
                <div className="r-grade">{res.grade}</div>
              </div>
            ))}
          </div>

          <h3 className="section-title">PREVIOUS YEAR PAPERS</h3>
          <div className="papers-list">
            {pastPapers.map((paper, idx) => (
              <div key={idx} className="paper-item">
                <div className="p-icon"><FileText size={24} color="#586c99" /></div>
                <div className="p-info">
                  <div className="p-name">{paper.name}</div>
                  <div className="p-meta">{paper.year} • {paper.size}</div>
                </div>
                <div className="p-actions">
                  <button className="icon-btn-secondary" title="Download" onClick={() => handleDownload(paper.name)}>
                    <Download size={16}/>
                  </button>
                  <button className="icon-btn-secondary" title="Preview" onClick={() => handlePreview(paper.name)}>
                    <Eye size={16}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
