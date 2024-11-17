// src/components/ui/tooltip.jsx
import React from "react";

export const Tooltip = ({ children, content }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                {content}
            </div>
        </div>
    );
};

export const TooltipContent = ({ content }) => <>{content}</>;
export const TooltipTrigger = ({ children }) => <>{children}</>;
