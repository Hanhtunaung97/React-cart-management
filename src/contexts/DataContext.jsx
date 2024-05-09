import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);
  const [cartBtnInfo,setCartBtnInfo]=useState({})
  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };
  const deleteCart = (id) => {
    setCarts(carts.filter((cart) => cart.product_id !== id));
  };
  const updateCart = (id, addQuantity) => {
    setCarts(
      carts.map((cart) => {
        if (cart.product_id === id) {
          const newQuantity = cart.quantity + addQuantity;
          const newCost = cart.price * newQuantity;
          return {
            ...cart,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return cart;
      })
    );
  };
  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <dataContext.Provider
      value={{ cartDrawer, addCart, carts, toggleCartDrawer, deleteCart,updateCart,cartBtnInfo,setCartBtnInfo }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
