// src/components/Tabs.jsx
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        <div>
            <div className="flex space-x-4 border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`py-2 px-4 ${activeTab === tab.label ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs.find((tab) => tab.label === activeTab).content}
            </div>
        </div>
    );
};

export default Tabs;
