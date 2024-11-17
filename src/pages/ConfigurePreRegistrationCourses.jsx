import React, { useState } from "react";
import Tabs from "../components/Tabs"; 
import "../components/Tabs.css"; 
import Button from "../components/ui/button"; // Corrected import for default export
import Input from "../components/ui/input"; // Corrected import for default export
import Label from "../components/ui/label"; // Corrected import for default export
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"; 
import { CalendarDays } from "lucide-react"; 
import { format } from "date-fns"; 
import { Check, X } from "lucide-react"; // Import Check and X icons

const subTabs = [
  { id: 'configure', label: 'Configure Pre-Registration' },
  { id: 'management', label: 'Pre-Registration Management' }
];

const initialStudents = [
  { id: 1, name: 'Rithik Raj', course: 'Ethical Hacking', status: 'Pending' },
  { id: 2, name: 'Arnab Jain', course: 'Software Engineering', status: 'Pending' },
  { id: 3, name: 'Bindu Shajan', course: 'Hardware Security', status: 'Pending' },
];

const ConfigurePreRegistrationCourses = () => {
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0].id);
  const [batches, setBatches] = useState([]);
  const [batchName, setBatchName] = useState('');
  const [registrationStart, setRegistrationStart] = useState('');
  const [registrationEnd, setRegistrationEnd] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [students, setStudents] = useState(initialStudents);

  const addBatch = () => {
    if (!batchName || !registrationStart || !registrationEnd) {
      setError('Please fill in all batch details');
      return;
    }
    if (new Date(registrationStart) >= new Date(registrationEnd)) {
      setError('End time must be after start time');
      return;
    }
    const newBatch = {
      id: batches.length + 1,
      name: batchName,
      start: new Date(registrationStart),
      end: new Date(registrationEnd)
    };
    setBatches([...batches, newBatch]);
    setBatchName('');
    setRegistrationStart('');
    setRegistrationEnd('');
    setError(null);
  };

  const handleConfirmAndSave = () => {
    setSuccess(true);
  };

  const handleApprove = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, status: 'Approved' } : student
    ));
  };

  const handleDeny = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, status: 'Denied' } : student
    ));
  };

  return (
    <div>
      
    </div>
  );
};

export default ConfigurePreRegistrationCourses;
