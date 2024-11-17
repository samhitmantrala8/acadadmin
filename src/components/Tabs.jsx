import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css'; // Include your styles for tabs

const Tabs = () => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <NavLink to="/generate-student-roll-list" className="tab" activeClassName="active-tab">Generate Student Roll List</NavLink>
        <NavLink to="/student-courses" className="tab" activeClassName="active-tab">Student Courses</NavLink>
        <NavLink to="/allot-courses" className="tab" activeClassName="active-tab">Allot Courses</NavLink>
        <NavLink to="/allot-elective-swayam" className="tab" activeClassName="active-tab">Allot Elective and Swayam</NavLink>
        <NavLink to="/academic-calendar" className="tab" activeClassName="active-tab">Academic Calendar</NavLink>
        <NavLink to="/verify-registered-students" className="tab" activeClassName="active-tab">Verify Registered Students</NavLink>
        <NavLink to="/time-tables" className="tab" activeClassName="active-tab">Time Tables</NavLink>
        <NavLink to="/manage-students-profile" className="tab" activeClassName="active-tab">Manage Students Profile</NavLink>
        <NavLink to="/results" className="tab" activeClassName="active-tab">Results</NavLink>
        <NavLink to="/pre-registration-courses" className="tab" activeClassName="active-tab">Pre Registration Courses</NavLink>
        <NavLink to="/configure-pre-registration-courses" className="tab" activeClassName="active-tab">Configure Pre Registration Courses</NavLink>
        <NavLink to="/approve-branch-change" className="tab" activeClassName="active-tab">Approve Branch Change</NavLink>
        <NavLink to="/student-dashboard" className="tab" activeClassName="active-tab">Student Dashboard</NavLink>
        <NavLink to="/curriculum" className="tab" activeClassName="active-tab">Curriculum</NavLink>
        <NavLink to="/verify-assistantship" className="tab" activeClassName="active-tab">Verify Assistantship</NavLink>
      </div>
    </div>
  );
};

export default Tabs;
