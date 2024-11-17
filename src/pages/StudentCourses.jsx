import React, { useState } from "react";
import Tabs from "../components/Tabs";
import "../components/Tabs.css";

const StudentCourses = () => {
  const [activeSubTab, setActiveSubTab] = useState('Registered Course for Semester');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [showCourseList, setShowCourseList] = useState(false);

  const handleGenerateList = () => {
    setShowCourseList(true);
  };

  return (
    <div className="p-4">
      <Tabs />
      <div className="tabs-container flex space-x-4 my-4">
        <button
          className={`sub-tab px-4 py-2 rounded-md ${
            activeSubTab === 'Registered Course for Semester' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveSubTab('Registered Course for Semester')}
        >
          Registered Course for Semester
        </button>
        <button
          className={`sub-tab px-4 py-2 rounded-md ${
            activeSubTab === 'Generate Course List' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveSubTab('Generate Course List')}
        >
          Generate Course List
        </button>
      </div>

      {/* Content based on active sub-tab */}
      <div className="sub-tab-content mt-4 p-4 border border-gray-300 rounded-md bg-white shadow-md">
        {activeSubTab === 'Registered Course for Semester' && (
          <p>Registered Course for Semester Content Here</p>
        )}

        {activeSubTab === 'Generate Course List' && (
          <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Generate Course List</h1>

            <div className="space-y-4">
              <div>
                <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Batch
                </label>
                <select
                  id="batch"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                >
                  <option value="">Select Batch</option>
                  <option value="2024">Batch 2024</option>
                  <option value="2025">Batch 2025</option>
                  <option value="2026">Batch 2026</option>
                </select>
              </div>

              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Semester
                </label>
                <select
                  id="semester"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <option value="">Select Semester</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                </select>
              </div>

              <button
                onClick={handleGenerateList}
                className={`w-full py-2 rounded-md text-white ${
                  selectedBatch && selectedSemester ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!selectedBatch || !selectedSemester}
              >
                Generate List
              </button>
            </div>

            {showCourseList && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course List</h2>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        #
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        Course Code
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        Course Name
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        Course Type
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        Semester
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        Credits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">1</td>
                      <td className="px-4 py-2 border-b border-gray-200">CS101</td>
                      <td className="px-4 py-2 border-b border-gray-200">Introduction to Computer Science</td>
                      <td className="px-4 py-2 border-b border-gray-200">Core</td>
                      <td className="px-4 py-2 border-b border-gray-200">1</td>
                      <td className="px-4 py-2 border-b border-gray-200">4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">2</td>
                      <td className="px-4 py-2 border-b border-gray-200">CS102</td>
                      <td className="px-4 py-2 border-b border-gray-200">Data Structures and Algorithms</td>
                      <td className="px-4 py-2 border-b border-gray-200">Core</td>
                      <td className="px-4 py-2 border-b border-gray-200">2</td>
                      <td className="px-4 py-2 border-b border-gray-200">4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">3</td>
                      <td className="px-4 py-2 border-b border-gray-200">CS201</td>
                      <td className="px-4 py-2 border-b border-gray-200">Web Development</td>
                      <td className="px-4 py-2 border-b border-gray-200">Elective</td>
                      <td className="px-4 py-2 border-b border-gray-200">3</td>
                      <td className="px-4 py-2 border-b border-gray-200">3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">4</td>
                      <td className="px-4 py-2 border-b border-gray-200">CS202</td>
                      <td className="px-4 py-2 border-b border-gray-200">Database Management Systems</td>
                      <td className="px-4 py-2 border-b border-gray-200">Core</td>
                      <td className="px-4 py-2 border-b border-gray-200">4</td>
                      <td className="px-4 py-2 border-b border-gray-200">4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">5</td>
                      <td className="px-4 py-2">CS203</td>
                      <td className="px-4 py-2">Operating Systems</td>
                      <td className="px-4 py-2">Core</td>
                      <td className="px-4 py-2">5</td>
                      <td className="px-4 py-2">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCourses;
