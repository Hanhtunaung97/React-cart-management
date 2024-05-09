import React from "react";

const Category = ({ category }) => {
  return (
    <button className=" category-btn whitespace-nowrap border border-neutral-600 px-4 py-1 hover:bg-neutral-600 hover:text-white">
      {category}
    </button>
  );
};

export default Category;
