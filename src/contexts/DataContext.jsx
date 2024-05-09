import React, { createContext } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
