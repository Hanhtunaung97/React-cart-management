import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);
  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };
  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <dataContext.Provider value={{ cartDrawer, addCart,carts, toggleCartDrawer }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
