import React, { useContext, useState } from "react";
import { dataContext } from "../contexts/DataContext";
import StarRating from "./StarRating";

const Product = ({
  product: {
    id,
    title,
    image,
    price,
    description,
    category,
    rating: { rate, count },
  },
}) => {
  const { addCart } = useContext(dataContext);
  const [added, setAdded] = useState(false);
  const handleAddToCartBtn = () => {
    const newCart = {
      product_id: id,
      title,
      image,
      price,
      quantity: 1,
      cost: price,
    };
    addCart(newCart);
    setAdded(true);
  };
  return (
    <div className="product-card group">
      <img
        className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        src={image}
      />
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <StarRating rate={rate} />
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button
          disabled={added}
          onClick={handleAddToCartBtn}
          className={`${
            added && "bg-neutral-600 text-white"
          } add-to-cart duration-100 active:scale-90 border border-neutral-600 block w-full h-12 font-heading select-none disabled:pointer-events-none`}
        >
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
