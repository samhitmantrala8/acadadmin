import React, { useState } from "react";
import Tabs from "../components/Tabs";

import "../components/Tabs.css";
// Import your UI components
import Button from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Check, X, Download } from "lucide-react";

const initialStudents = [
  {
    id: "1",
    name: "Alice Johnson",
    studentId: "CSE001",
    batch: "2021-25",
    semester: 5,
    courses: [
      {
        name: "Hardware Security",
        code: "CS8028",
        credits: 3,
        type: "Elective",
        backlog: false,
      },
      {
        name: "Ethical Hacking",
        code: "SWAYAM001",
        credits: 3,
        type: "SWAYAM",
        backlog: false,
      },
    ],
  },
  {
    id: "2",
    name: "Bob Smith",
    studentId: "CSE002",
    batch: "2021-25",
    semester: 5,
    courses: [
      {
        name: "Advanced Algorithms",
        code: "CS8029",
        credits: 4,
        type: "Elective",
        backlog: true,
      },
      {
        name: "Responsible AI and Systems",
        code: "SWAYAM002",
        credits: 3,
        type: "SWAYAM",
        backlog: false,
      },
    ],
  },
  {
    id: "3",
    name: "Charlie Brown",
    studentId: "ECE003",
    batch: "2022-26",
    semester: 4,
    courses: [
      {
        name: "Embedded Systems",
        code: "ECE7012",
        credits: 3,
        type: "Core",
        backlog: false,
      },
      {
        name: "Signal Processing",
        code: "ECE8014",
        credits: 3,
        type: "Core",
        backlog: true,
      },
    ],
  },
];

const AllotElectiveandSwayam = () => {
  const [activeSubTab, setActiveSubTab] = useState("Allot Elective and Swayam");
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [semesterFilter, setSemesterFilter] = useState("all");
  const [batchFilter, setBatchFilter] = useState("all");

  const handleSelectStudent = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredStudents.map((student) => student.id));
    }
  };

  const handleApprove = () => {
    console.log("Approving:", selectedStudents);
    // Implement approval logic here
  };

  const handleDeny = () => {
    console.log("Denying:", selectedStudents);
    // Implement denial logic here
  };

  const handleExport = () => {
    console.log("Exporting selections");
    // Implement export logic here
  };

  const filteredStudents = students.filter(
    (student) =>
      (semesterFilter === "all" ||
        student.semester.toString() === semesterFilter) &&
      (batchFilter === "all" || student.batch === batchFilter)
  );

  return (
    <div>
      <Tabs />
      <div className="tabs-container">
        <button
          className={`sub-tab ${activeSubTab === "Allot Elective and Swayam" ? "active-sub-tab" : ""
            }`}
          onClick={() => setActiveSubTab("Allot Elective and Swayam")}
        >
          Allot Elective and Swayam
        </button>
      </div>
      {/* Content based on active sub-tab */}
      <div className="sub-tab-content">
        {activeSubTab === "Allot Elective and Swayam" && (
          <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Elective and SWAYAM Course Approval
            </h1>

            <div className="flex flex-wrap gap-4">
              <Select onValueChange={(value) => {
                setSemesterFilter(value);
                console.log("Selected Semester:", value);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {[...Array(8)].map((_, index) => (
                    <SelectItem key={index} value={`${index + 1}`}>
                      Semester {index + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => {
                setBatchFilter(value);
                console.log("Selected Batch:", value);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  {["2021-25", "2022-26", "2023-27", "2024-28"].map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleApprove}
                className="bg-gray-500 hover:bg-gray-600 text-white"
                disabled={selectedStudents.length === 0}
              >
                <Check className="mr-2 h-4 w-4" /> Approve Selected
              </Button>
              <Button
                onClick={handleDeny}
                className="bg-red-400 hover:bg-red-500 text-white"
                disabled={selectedStudents.length === 0}
              >
                <X className="mr-2 h-4 w-4" /> Deny Selected
              </Button>
              <Button
                onClick={handleExport}
                variant="outline"
                className="ml-auto"
              >
                <Download className="mr-2 h-4 w-4" /> Export Selections
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedStudents.length === filteredStudents.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Course Selections</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedStudents.includes(student.id)}
                        onCheckedChange={() => handleSelectStudent(student.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div>{student.name}</div>
                      <div className="text-sm text-gray-500">
                        {student.studentId}
                      </div>
                    </TableCell>
                    <TableCell>{student.batch}</TableCell>
                    <TableCell>{student.semester}</TableCell>
                    <TableCell>
                      {student.courses.map((course, index) => (
                        <div key={index} className="mb-2">
                          <div>{course.name}</div>
                          <div className="text-sm text-gray-500">
                            {course.code} - {course.credits} credits
                          </div>
                          <span
                            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${course.type === "Elective"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                              }`}
                          >
                            {course.type}
                          </span>
                          {course.backlog && (
                            <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              Backlog
                            </span>
                          )}
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllotElectiveandSwayam;
