// src/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [someValue, setSomeValue] = useState('default value');

    return (
        <MyContext.Provider value={{ someValue, setSomeValue }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};

export default MyContext;
