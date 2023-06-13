"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [name, setName] = React.useState("Adi");
  const [user, setUser] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, darkMode, toggleDarkMode, name, setName }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
