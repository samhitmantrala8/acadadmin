import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GenerateRollList from './pages/GenerateStudentRollList'; 
import PreRegistrationCourses from './pages/PreRegistrationCourses';
import ConfigurePreRegistrationCourses from './pages/ConfigurePreRegistrationCourses';
import AcademicCalendar from './pages/AcademicCalendar';
import AllotElectiveandSwayam from './pages/AllotElectiveandSwayam';
import AllotCourses from './pages/AllotCourses';
import StudentCourses from './pages/StudentCourses';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (isCollapsed) => {
    setIsSidebarCollapsed(isCollapsed);
  };

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar onSidebarToggle={handleSidebarToggle} />

        {/* Main Content */}
        <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-[80px]' : 'ml-[255px]'} w-full p-4`}>
          <Routes>
            <Route path="/generate-student-roll-list" element={<GenerateRollList />} />
            <Route path="/pre-registration-courses" element={<PreRegistrationCourses />} />
            <Route path="/configure-pre-registration-courses" element={<ConfigurePreRegistrationCourses />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/allot-elective-swayam" element={<AllotElectiveandSwayam />} />
            <Route path="/allot-courses" element={<AllotCourses />} />
            <Route path="/student-courses" element={<StudentCourses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
