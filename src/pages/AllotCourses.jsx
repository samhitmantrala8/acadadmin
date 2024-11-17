import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import "../components/Tabs.css";
import { FaSave } from "react-icons/fa"; // Import the save icon

const AllotCourses = () => {
  const [activeSubTab, setActiveSubTab] = useState("Allot Student Courses");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [branchFilter, setBranchFilter] = useState("all");
  const [semesterFilter, setSemesterFilter] = useState("all");
  const [batchFilter, setBatchFilter] = useState("all"); // New filter for batch
  const [searchQuery, setSearchQuery] = useState("");
  const [totalCredits, setTotalCredits] = useState(0);

  const availableCourses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Computer Science",
      type: "Core",
      semester: 1,
      credits: 4,
      branch: "CSE",
      batch: "2021-25", // Added batch
    },
    {
      id: 2,
      code: "CS102",
      name: "Data Structures and Algorithms",
      type: "Core",
      semester: 2,
      credits: 4,
      branch: "CSE",
      batch: "2021-25",
    },
    {
      id: 3,
      code: "CS201",
      name: "Web Development",
      type: "Elective",
      semester: 3,
      credits: 3,
      branch: "CSE",
      batch: "2022-26",
    },
    {
      id: 4,
      code: "CS202",
      name: "Database Management Systems",
      type: "Core",
      semester: 4,
      credits: 4,
      branch: "CSE",
      batch: "2022-26",
    },
    {
      id: 5,
      code: "CS203",
      name: "Operating Systems",
      type: "Core",
      semester: 5,
      credits: 4,
      branch: "CSE",
      batch: "2023-27",
    },
    {
      id: 6,
      code: "EC101",
      name: "Basic Electronics",
      type: "Core",
      semester: 1,
      credits: 4,
      branch: "ECE",
      batch: "2021-25",
    },
    {
      id: 7,
      code: "EC102",
      name: "Digital Logic Design",
      type: "Core",
      semester: 2,
      credits: 4,
      branch: "ECE",
      batch: "2022-26",
    },
    {
      id: 8,
      code: "ME101",
      name: "Mechanics",
      type: "Core",
      semester: 1,
      credits: 4,
      branch: "ME",
      batch: "2023-27",
    },
    {
      id: 9,
      code: "SM101",
      name: "Structural Analysis",
      type: "Core",
      semester: 1,
      credits: 4,
      branch: "SM",
      batch: "2024-28",
    },
    {
      id: 10,
      code: "CS301",
      name: "Machine Learning",
      type: "Elective",
      semester: 5,
      credits: 3,
      branch: "CSE",
      batch: "2024-28",
    },
  ];

  // Calculate total credits when selectedCourses changes
  useEffect(() => {
    const total = selectedCourses.reduce((sum, courseId) => {
      const course = availableCourses.find((course) => course.id === courseId);
      return sum + (course ? course.credits : 0);
    }, 0);
    setTotalCredits(total);
  }, [selectedCourses]);

  const handleCourseToggle = (courseId) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSaveRegistration = () => {
    console.log("Saving registration for courses:", selectedCourses);
  };

  const filteredCourses = availableCourses.filter(
    (course) =>
      (branchFilter === "all" || course.branch === branchFilter) &&
      (semesterFilter === "all" || course.semester.toString() === semesterFilter) &&
      (batchFilter === "all" || course.batch === batchFilter) && // Filter by batch
      (course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
       course.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <Tabs />
      <div className="tabs-container">
        <button
          className={`sub-tab ${
            activeSubTab === "Allot Student Courses" ? "active-sub-tab" : ""
          }`}
          onClick={() => setActiveSubTab("Allot Student Courses")}
        >
          Allot Student Courses
        </button>
        <button
          className={`sub-tab ${
            activeSubTab === "Verify Final Sem Registration"
              ? "active-sub-tab"
              : ""
          }`}
          onClick={() => setActiveSubTab("Verify Final Sem Registration")}
        >
          Verify Final Sem Registration
        </button>
      </div>
      <div className="sub-tab-content">
        {activeSubTab === "Allot Student Courses" && (
          <p>Allot Student Courses Content Here</p>
        )}
        {activeSubTab === "Verify Final Sem Registration" && (
          <div className="container mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Course Registration</h1>
              <button
                onClick={handleSaveRegistration}
                className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                <FaSave className="mr-2 h-4 w-4" /> Save Registration
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <select
                className="border rounded p-2 w-44"
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
              >
                <option value="all">All Branches</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">ME</option>
                <option value="SM">SM</option>
              </select>

              <select
                className="border rounded p-2 w-44"
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
              >
                <option value="all">All Semesters</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
              </select>

              <select
                className="border rounded p-2 w-44"
                value={batchFilter}
                onChange={(e) => setBatchFilter(e.target.value)}
              >
                <option value="all">All Batches</option>
                <option value="2021-25">2021-25</option>
                <option value="2022-26">2022-26</option>
                <option value="2023-27">2023-27</option>
                <option value="2024-28">2024-28</option>
              </select>

              <input
                className="border rounded p-2 w-64"
                type="text"
                placeholder="Search by course code or name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Display Total Credits */}
            <div className="my-4">
              <strong>Total Credits:</strong> {totalCredits}
            </div>

            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-2 px-4">Select</th>
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Course Code</th>
                  <th className="py-2 px-4">Course Name</th>
                  <th className="py-2 px-4">Course Type</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4">Semester</th>
                  <th className="py-2 px-4">Credits</th>
                  <th className="py-2 px-4">Batch</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course.id)}
                        onChange={() => handleCourseToggle(course.id)}
                      />
                    </td>
                    <td className="py-2 px-4">{course.id}</td>
                    <td className="py-2 px-4">{course.code}</td>
                    <td className="py-2 px-4">{course.name}</td>
                    <td className="py-2 px-4">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {course.type}
                      </span>
                    </td>
                    <td className="py-2 px-4">{course.branch}</td>
                    <td className="py-2 px-4">{course.semester}</td>
                    <td className="py-2 px-4">{course.credits}</td>
                    <td className="py-2 px-4">{course.batch}</td> {/* Display batch */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllotCourses;
