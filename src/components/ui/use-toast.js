// src/components/ui/use-toast.js
import { useState } from "react";

export const useToast = () => {
    const [toast, setToast] = useState({ message: "", isVisible: false });

    const showToast = (message) => {
        setToast({ message, isVisible: true });
        setTimeout(() => setToast({ message: "", isVisible: false }), 3000);
    };

    return { toast, showToast };
};
