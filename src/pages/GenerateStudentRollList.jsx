import React, { useState } from "react";
import Tabs from "../components/Tabs";
import "../components/Tabs.css";
import * as XLSX from "xlsx";

const GenerateStudentRollList = () => {
  const [activeSubTab, setActiveSubTab] = useState("Roll List");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [studentStatus, setStudentStatus] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [showOnlyPaid, setShowOnlyPaid] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoursePage, setCurrentCoursePage] = useState(1); // For course pagination

  const studentsPerPage = 5;
  const coursesPerPage = 4; // Number of courses to show per page

  const mockStudentData = {
    CSE: [
      { rollNo: "22BCSD01", name: "Alice Johnson", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD02", name: "Charlie Brown", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD03", name: "David Gray", paymentStatus: "Pending", semester: 1 },
      { rollNo: "22BCSD04", name: "Eva Green", paymentStatus: "Paid", semester: 2 },
      { rollNo: "22BCSD05", name: "Frank Black", paymentStatus: "Unpaid", semester: 3 },
      { rollNo: "22BCSD06", name: "Gina White", paymentStatus: "Paid", semester: 4 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD26", name: "Amitabh bachan", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BCSD07", name: "Henry Adams", paymentStatus: "Paid", semester: 1 },
      // Add more mock data to reach 278
    ],
    ECE: [
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC101", name: "Franklin Stone", paymentStatus: "Paid", semester: 1 },
      { rollNo: "22BEC102", name: "George Blake", paymentStatus: "Pending", semester: 2 },
      { rollNo: "22BEC103", name: "Hannah Long", paymentStatus: "Paid", semester: 3 },
      { rollNo: "22BEC104", name: "Ivy West", paymentStatus: "Unpaid", semester: 1 },
      { rollNo: "22BEC105", name: "Jack Ford", paymentStatus: "Paid", semester: 2 },
      // Add more mock data to reach 278
    ],
  };

  const mockCourseData = [];
  const totalCourses = 25;
  const rollNumbers = Array.from({ length: Math.ceil(totalCourses / 4) }, (_, i) => `Roll-${i + 1}`);

  for (let i = 0; i < totalCourses; i++) {
    const rollNumber = rollNumbers[Math.floor(i / 4)]; // Assign the same roll number for four courses
    mockCourseData.push({
      rollNumber: rollNumber,
      courseId: `CSE${101 + (i % 10)}`, // Course IDs cycling through CSE101 to CSE110
      courseName: `Course Name ${i + 1}`,
      credits: 4,
      branch: i < 13 ? "CSE" : "ECE", // First 13 courses are CSE, the rest are ECE
      semester: (i % 8) + 1, // Semesters cycling from 1 to 8
    });
  }

  const generateRollList = () => {
    const mockData = selectedBranch
      ? mockStudentData[selectedBranch].filter(
        (student) => !selectedSemester || student.semester === parseInt(selectedSemester)
      )
      : [];
    setStudentStatus(mockData);
    setCurrentPage(1); // Reset pagination when new data is generated
  };

  const filteredStudents = showOnlyPaid
    ? studentStatus.filter((student) => student.paymentStatus === "Paid")
    : studentStatus;

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredStudents);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "student_list.xlsx");
  };

  // Pagination logic for students
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  // Pagination logic for courses
  const totalCoursePages = Math.ceil(availableCourses.length / coursesPerPage);
  const indexOfLastCourse = currentCoursePage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = availableCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const generatePreRegistrationReport = () => {
    const filteredCourses = mockCourseData.filter(course =>
      (course.rollNo === selectedBranch || selectedBranch === "") // Simulate filtering by branch or some criteria
    ).flatMap(course => course.courses.filter(c =>
      (c.semester === parseInt(selectedSemester) || selectedSemester === "")
    ));
    setAvailableCourses(filteredCourses);
  };

  const generateAndDownloadExcel = (courses) => {
    const worksheet = XLSX.utils.json_to_sheet(courses);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");
    XLSX.writeFile(workbook, "pre_registration_courses.xlsx");
  };

  return (
    <div>
      <Tabs />
      <div className="tabs-container">
        <button
          className={`sub-tab ${activeSubTab === "Roll List" ? "active-sub-tab" : ""}`}
          onClick={() => setActiveSubTab("Roll List")}
        >
          Roll List
        </button>
        <button
          className={`sub-tab ${activeSubTab === "Pre-Registration Report" ? "active-sub-tab" : ""}`}
          onClick={() => setActiveSubTab("Pre-Registration Report")}
        >
          Pre-Registration Report
        </button>
      </div>

      <div className="sub-tab-content">
        {activeSubTab === "Roll List" && (
          <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-semibold mb-6">Generate Student Roll List</h1>
              <div className="mb-4">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="mr-2"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                </select>

                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="mr-2"
                >
                  <option value="">Select Semester</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
                <button
                  onClick={generateRollList}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Generate Roll List
                </button>
              </div>

              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={showOnlyPaid}
                  onChange={(e) => setShowOnlyPaid(e.target.checked)}
                />
                <span className="ml-2">Show Only Paid Students</span>
              </label>

              {currentStudents.length > 0 ? (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Roll List</h2>
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Roll No</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Payment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentStudents.map((student) => (
                        <tr key={student.rollNo}>
                          <td className="border border-gray-300 px-4 py-2">{student.rollNo}</td>
                          <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{student.paymentStatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 mr-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={downloadExcel}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                  >
                    Download Excel
                  </button>
                </div>
              ) : (
                <p>No students found.</p>
              )}
            </div>
          </div>
        )}

        {activeSubTab === "Pre-Registration Report" && (
          <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-semibold mb-6">Generate Pre-Registration Report</h1>
              <div className="mb-4">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="mr-2"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                </select>

                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="mr-2"
                >
                  <option value="">Select Semester</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
                <button
                  onClick={generatePreRegistrationReport}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Generate Pre-Registration Report
                </button>
              </div>

              {availableCourses.length > 0 ? (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Course Code</th>
                        <th className="border border-gray-300 px-4 py-2">Course Name</th>
                        <th className="border border-gray-300 px-4 py-2">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCourses.map((course) => (
                        <tr key={course.id}>
                          <td className="border border-gray-300 px-4 py-2">{course.code}</td>
                          <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{course.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4">
                    {Array.from({ length: totalCoursePages }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentCoursePage(index + 1)}
                        className={`px-3 py-1 mr-2 rounded ${currentCoursePage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => generateAndDownloadExcel(currentCourses)}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                  >
                    Download Excel
                  </button>
                </div>
              ) : (
                <p>No courses available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateStudentRollList;
