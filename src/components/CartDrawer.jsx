import React, { useContext } from "react";
import { dataContext } from "../contexts/DataContext";

const CartDrawer = () => {
  const { toggleCartDrawer } = useContext(dataContext);
  const handleCloseBtn = () => {
    toggleCartDrawer();
  };
  return (
    <section
      className="cart-box flex flex-col border-s-2 border-neutral-600 fixed w-96 h-screen bg-white top-0 right-0 z-50 duration-300"
      id="cartBox"
    >
      <div className="cart-header px-3 border-b-2 border-neutral-600">
        <div className="flex justify-between items-center py-3">
          <div>
            <h1 className="font-heading font-bold text-2xl">Your Items</h1>
            <p className="text-neutral-500">
              Product in Cart
              <span
                id="cartBodyCount"
                className="text-xs w-4 h-4 bg-red-500 inline-flex justify-center items-center text-white"
              >
                1
              </span>
            </p>
          </div>
          <div className="control-btn flex gap-2">
            <button
              onClick={handleCloseBtn}
              className="border duration-100 active:scale-90 border-neutral-600 h-12 w-12 flex justify-center items-center"
              id="cartCloseBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="cart-body flex-grow flex flex-col overflow-scroll p-5">
        <div className="cart-empty-stage m-auto hidden last:block text-center w-3/4">
          <img src="./src/assets/emptyCart.png" />
          <p className="font-heading">There is no item in cart</p>
        </div>
        <div className="cart-item group">
          <div className="w-full mb-5">
            <img
              className="h-16 -mb-8 ms-3 cart-item-img relative z-10"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            />
            <div className="border bg-white border-neutral-600 p-3 relative">
              <button className="cart-item-del bg-red-100 text-red-600 p-1 duration-200 absolute pointer-events-none top-3 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 group-hover:pointer-events-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <p className="cart-item-title font-heading line-clamp-1 font-bold mt-7 mb-3">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </p>
              <div className="flex justify-between">
                <p className="text-neutral-500">
                  $ <span className="cart-item-price hidden">109.95</span>
                  <span className="cart-item-cost">109.55</span>
                </p>
                <div className="flex">
                  <button className="bg-neutral-300 duration-100 active:scale-90 cart-item-quantity-decrement p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <p className="cart-item-quantity w-8 text-end bg-neutral-100 pe-1">
                    1
                  </p>
                  <button className="bg-neutral-300 duration-100 active:scale-90 cart-item-quantity-increment p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-footer px-3 border-t-2 border-neutral-600">
        <div className="flex flex-col justify-start py-3">
          <div className="text-end">
            <p className="text-neutral-500">Total Cost</p>
            <h1 className="font-heading font-bold text-2xl">
              $ <span id="cartCostTotal">109.55</span>
            </h1>
          </div>
          <button
            className="border border-neutral-600 bg-neutral-600 text-white font-heading h-12 w-full flex justify-center items-center"
            id="cartCloseBtn"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartDrawer;
