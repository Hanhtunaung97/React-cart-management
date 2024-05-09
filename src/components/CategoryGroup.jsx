import React, { useEffect, useState } from "react";
import Container from "./Container";
import Category from "./Category";
import { categoryApi } from "../api/category";
import CategoryLoader from "./CategoryLoader";

const CategoryGroup = () => {
  const [categories, setCategory] = useState([]);
  const [ready, setReady] = useState(false);
  const loaderArray = Array.from({ length: 5 }, (_, index) => index);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoryApi.get("/");
      setCategory(res.data);
      setReady(true);
      //   console.log(res.data);
    };
    fetchCategory();
  }, []);
  return (
    <section className="category-list mb-10 py-3">
      <Container>
        <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-x-auto"
        >
          {ready && <Category category="All" />}
          {!ready &&
            loaderArray.map((el, index) => <CategoryLoader key={index} />)}

          {ready &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;
