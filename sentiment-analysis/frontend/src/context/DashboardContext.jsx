import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addHistory = (item) => {
    setHistory(prev => [item, ...prev].slice(0, 10)); // Keep last 10
  };

  return (
    <DashboardContext.Provider value={{ history, addHistory }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
