import React from "react";
import Container from "./Container";

const CategoryGroup = () => {
  return (
    <section className="category-list mb-10 py-3">
      <Container>
      <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-scroll"
        >
          <button className="category-btn active border border-neutral-600 px-4 py-1">
            All
          </button>
          <div className="hidden last:flex gap-3 animate-pulse">
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
          </div>
          <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
            electronics
          </button>
          <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
            jewelery
          </button>
          <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
            men's clothing
          </button>
          <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
            women's clothing
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;
