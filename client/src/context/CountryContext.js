import React, { createContext, useContext, useState } from "react";

const CountryContext = createContext();

// Provider bao bọc toàn app
export const CountryProvider = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState("Vietnam"); // default

  return (
    <CountryContext.Provider value={{ currentCountry, setCurrentCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export function useCurrentCountry() {
  return useContext(CountryContext);
}
