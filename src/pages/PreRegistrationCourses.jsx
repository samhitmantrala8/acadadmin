import React, { useState } from "react";
import Tabs from "../components/Tabs";
import "../components/Tabs.css";

const PreRegistrationCourses = () => {
  const [activeSubTab, setActiveSubTab] = useState('Pre Registration Courses Info');

  return (
    <div>
      <Tabs />
      <div className="tabs-container">
        <button
          className={`sub-tab ${activeSubTab === 'Pre Registration Courses Info' ? 'active-sub-tab' : ''}`}
          onClick={() => setActiveSubTab('Pre Registration Courses Info')}
        >
          Pre Registration Courses Info
        </button>
        <button
          className={`sub-tab ${activeSubTab === 'Update Course in Course-Slot' ? 'active-sub-tab' : ''}`}
          onClick={() => setActiveSubTab('Update Course in Course-Slot')}
        >
          Update Course in Course-Slot
        </button>
      </div>

      {/* Content based on active sub-tab */}
      <div className="sub-tab-content">
        {activeSubTab === 'Pre Registration Courses Info' && <p>Pre Registration Courses Info Content Here</p>}
        {activeSubTab === 'Update Course in Course-Slot' && <UpdateCourseSlot />}
      </div>
    </div>
  );
};

const UpdateCourseSlot = () => {
  const [courseSlot, setCourseSlot] = useState('');
  const [courseCode, setCourseCode] = useState('');

  const handleAddCourse = () => {
    console.log('Adding course:', { courseSlot, courseCode });
    // Implement course addition logic here
  };

  const handleRemoveCourse = () => {
    console.log('Removing course:', { courseSlot, courseCode });
    // Implement course removal logic here
  };

  return (
    <div className="container mx-auto p-4 space-y-6 bg-[#F5F5F5]">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Update Courses in Course-Slot for Upcoming Semester
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Course Slot Here"
            value={courseSlot}
            onChange={(e) => setCourseSlot(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Course Code Here"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex space-x-4">
            <button
              onClick={handleAddCourse}
              className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-md"
            >
              Add Course in Slot
            </button>
            <button
              onClick={handleRemoveCourse}
              className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-md"
            >
              Remove Course from Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegistrationCourses;
