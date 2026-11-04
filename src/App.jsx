import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Attendance from './pages/Attendance';
import ExamPaper from './pages/ExamPaper';
import Cafeteria from './pages/Cafeteria';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';

function App() {
  // Routes define the page-level navigation while Layout provides shared chrome.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="exam-paper" element={<ExamPaper />} />
          <Route path="cafeteria" element={<Cafeteria />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
