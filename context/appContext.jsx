import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("Adi");
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchFakeData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setFakeData(data);
    };
    fetchFakeData();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, fakeData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
