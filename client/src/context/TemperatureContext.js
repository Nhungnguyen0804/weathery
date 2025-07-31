import React, { createContext, useContext, useState } from "react";

const TemperatureContext = createContext();

// Provider bao bọc toàn app
export const TemperatureProvider = ({ children }) => {
  const [tempUnit, setTempUnit] = useState("C"); // đơn vị C,F

  return (
    <TemperatureContext.Provider value={{ tempUnit, setTempUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

// Hook để dùng context ở mọi component
// export const useTemperature = () => useContext(TemperatureContext);

export function useTemp() {
  return useContext(TemperatureContext);
}
