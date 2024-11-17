import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';
import {
  FaAngleLeft,
  FaHome,
  FaClipboardList,
  FaUserGraduate,
  FaCalendarAlt,
  FaUserCheck,
  FaTable,
  FaUsersCog,
  FaFileAlt,
  FaGraduationCap,
  FaProjectDiagram,
  FaCheck,
  FaUniversity,
  FaBook,
  FaHandsHelping,
  FaUserCircle,
  FaCog,
  FaLifeRing,
} from 'react-icons/fa'; // Import all needed icons

const Sidebar = ({ onSidebarToggle }) => { // Add a prop for communication with the main page
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar collapse

  // Toggle the Academics submenu
  const toggleAcademicsMenu = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  // Toggle sidebar collapse and communicate with the main page
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onSidebarToggle(!isCollapsed); // Notify parent component about the collapse change
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-[#FEFEFF] text-gray-800 p-4 overflow-y-auto transition-all duration-300 border-r border-gray-300 ${isCollapsed ? 'w-[80px]' : 'w-[255px]'}`}>
      {/* Logo and Arrow */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="Logo" className={`w-[80%] transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`} /> {/* Adjust width for logo */}
        <button onClick={toggleSidebar} className="ml-2">
          <FaAngleLeft className={`text-gray-800 text-4xl transition-all duration-300 ${isCollapsed ? 'rotate-180' : ''}`} /> {/* Increased arrow size */}
        </button>
      </div>

      {/* Menu Items */}
      <ul>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaHome className="mr-2" /> {!isCollapsed && (
            <Link to="/home" className="block">Home</Link>
          )}
        </li>

        {/* Academics with Submenu */}
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center" onClick={toggleAcademicsMenu}>
          <FaBook className="mr-2" /> {!isCollapsed && 'Academics'}
        </li>
        {/* Submenu */}
        {!isCollapsed && isAcademicsOpen && (
          <ul className="ml-6">
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaClipboardList className="mr-2" /> 
              <Link to="/generate-student-roll-list" className="block">Generate Student Roll List</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUserGraduate className="mr-2" /> 
              <Link to="/student-courses" className="block">Student Courses</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUsersCog className="mr-2" /> 
              <Link to="/allot-courses" className="block">Allot Courses</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUsersCog className="mr-2" /> 
              <Link to="/allot-elective-swayam" className="block">Allot Elective and Swayam</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaCalendarAlt className="mr-2" /> 
              <Link to="/academic-calendar" className="block">Academic Calendar</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUserCheck className="mr-2" /> 
              <Link to="/verify-registered-students" className="block">Verify Registered Students</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaTable className="mr-2" /> 
              <Link to="/timetables" className="block">Time Tables</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUsersCog className="mr-2" /> 
              <Link to="/manage-students-profile" className="block">Manage Students Profile</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaGraduationCap className="mr-2" /> 
              <Link to="/results" className="block">Results</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaProjectDiagram className="mr-2" /> 
              <Link to="/pre-registration-courses" className="block">Pre Registration Courses</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaCheck className="mr-2" /> 
              <Link to="/configure-pre-registration-courses" className="block">Configure Pre Registration Courses</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaHandsHelping className="mr-2" /> 
              <Link to="/approve-branch-change" className="block">Approve Branch Change</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUniversity className="mr-2" /> 
              <Link to="/student-dashboard" className="block">Student Dashboard</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaClipboardList className="mr-2" /> 
              <Link to="/curriculum" className="block">Curriculum</Link>
            </li>
            <li className="mb-3 cursor-pointer hover:text-blue-500 flex items-center">
              <FaUserCheck className="mr-2" /> 
              <Link to="/verify-assistantship" className="block">Verify Assistantship</Link>
            </li>
          </ul>
        )}

        {/* Other Menu Items */}
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> {!isCollapsed && (
            <Link to="/program-curriculum" className="block">Program and Curriculum</Link>
          )}
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> {!isCollapsed && (
            <Link to="/examination" className="block">Examination</Link>
          )}
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaFileAlt className="mr-2" /> {!isCollapsed && (
            <Link to="/file-tracking" className="block">File Tracking</Link>
          )}
        </li>
      </ul>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Profile and Settings as separate items at the bottom */}
      <ul>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaUserCircle className="mr-2" /> {!isCollapsed && (
            <Link to="/profile" className="block">Profile</Link>
          )}
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaCog className="mr-2" /> {!isCollapsed && (
            <Link to="/settings" className="block">Settings</Link>
          )}
        </li>
        <li className="mb-4 cursor-pointer hover:text-blue-500 flex items-center">
          <FaLifeRing className="mr-2" /> {!isCollapsed && (
            <Link to="/help" className="block">Help</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
