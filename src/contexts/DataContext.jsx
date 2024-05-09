import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <dataContext.Provider value={{ cartDrawer, toggleCartDrawer }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
