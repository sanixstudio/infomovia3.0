"use client";
import { createContext, useEffect, useState } from "react";

type DataContext = {
  data?: [] | null,
};

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("../utils/data.json");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
