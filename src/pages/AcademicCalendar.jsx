import React, { useState } from "react";
import Tabs from "../components/Tabs";
import "../components/Tabs.css";

const AcademicCalendar = () => {
  const [activeSubTab, setActiveSubTab] = useState('Academic Calendar');
  const [events, setEvents] = useState([
    { id: 1, description: "Last Date for Adding/Dropping of course", startDate: "May 6, 2024 09:00 AM", endDate: "July 27, 2024 11:59 PM", timestamp: new Date().toISOString() },
    { id: 2, description: "Sem 2024-2025", startDate: "June 1, 2024 12:00 PM", endDate: "April 30, 2025 04:59 PM", timestamp: new Date().toISOString() },
    { id: 3, description: "Physical Reporting at the Institute", startDate: "July 6, 2024 09:00 AM", endDate: "July 31, 2024 11:59 PM", timestamp: new Date().toISOString() },
    { id: 4, description: "Course verification date", startDate: "July 6, 2024 12:00 PM", endDate: "July 31, 2024 04:59 PM", timestamp: new Date().toISOString() },
    { id: 5, description: "Pre Registration 3 2024", startDate: "June 1, 2024 12:00 AM", endDate: "July 17, 2024 11:59 PM", timestamp: new Date().toISOString() },
    { id: 6, description: "Pre Registration 7 2024", startDate: "July 18, 2024 09:00 AM", endDate: "July 20, 2024 04:59 PM", timestamp: new Date().toISOString() },
    { id: 7, description: "Pre Registration 5 2024", startDate: "July 21, 2024 12:00 PM", endDate: "July 22, 2024 04:59 PM", timestamp: new Date().toISOString() },
  ]);
  
  const [editingEvent, setEditingEvent] = useState(null);

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleSaveEdit = (updatedEvent) => {
    setEvents(events.map(e => (e.id === updatedEvent.id ? updatedEvent : e)));
    setEditingEvent(null);
  };

  const handleAddMore = () => {
    const newEvent = {
      id: events.length + 1,
      description: "New Event",
      startDate: "Jan 1, 2025 09:00 AM",
      endDate: "Jan 31, 2025 11:59 PM",
      timestamp: new Date().toISOString(),
    };
    setEvents([...events, newEvent]);
  };

  // Format the timestamp for display
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <Tabs />
      <div className="tabs-container">
        <button
          className={`sub-tab ${activeSubTab === 'Academic Calendar' ? 'active-sub-tab' : ''}`}
          onClick={() => setActiveSubTab('Academic Calendar')}
        >
          Academic Calendar
        </button>
      </div>
      <div className="sub-tab-content">
        {activeSubTab === 'Academic Calendar' && (
          <div className="container mx-auto p-4 space-y-6 bg-[#F5F5F5]">
            <h1 className="text-3xl font-bold text-gray-800">Academic Calendar :</h1>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#E6F3FF]">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-black">Description</th>
                    <th className="px-6 py-3 text-left font-bold text-black">Start Date</th>
                    <th className="px-6 py-3 text-left font-bold text-black">End Date</th>
                    <th className="px-6 py-3 text-left font-bold text-black">Timestamp</th>
                    <th className="px-6 py-3 text-left font-bold text-black">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event) => (
                    <tr key={event.id} className="border-b">
                      <td className="px-6 py-4">{event.description}</td>
                      <td className="px-6 py-4">{event.startDate}</td>
                      <td className="px-6 py-4">{event.endDate}</td>
                      <td className="px-6 py-4">{formatTimestamp(event.timestamp)}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleEdit(event)}
                          className="text-[#E74C3C] hover:text-[#C0392B] hover:bg-transparent"
                        >
                          Edit
                        </button>
                        {editingEvent === event && (
                          <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
                            <input
                              type="text"
                              defaultValue={event.description}
                              onChange={(e) => (event.description = e.target.value)}
                              className="w-full p-2 mb-2 border rounded"
                            />
                            <input
                              type="text"
                              defaultValue={event.startDate}
                              onChange={(e) => (event.startDate = e.target.value)}
                              className="w-full p-2 mb-2 border rounded"
                            />
                            <input
                              type="text"
                              defaultValue={event.endDate}
                              onChange={(e) => (event.endDate = e.target.value)}
                              className="w-full p-2 mb-2 border rounded"
                            />
                            <button
                              onClick={() => handleSaveEdit(event)}
                              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                              Save changes
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleAddMore}
                className="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 px-6 rounded-md text-lg"
              >
                Add More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCalendar;
