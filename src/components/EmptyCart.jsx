import React from 'react'

const EmptyCart = () => {
  return (
    <div className="cart-empty-stage m-auto hidden last:block text-center w-3/4">
    <img src="./src/assets/emptyCart.png" />
    <p className="font-heading">There is no item in cart</p>
  </div>
  )
}

export default EmptyCart