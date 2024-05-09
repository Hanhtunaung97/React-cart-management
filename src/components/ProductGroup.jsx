import React, { useEffect, useState } from "react";
import Container from "./Container";
import { productApi } from "../api/product";
import Product from "./Product";
import ProductLoader from "./ProductLoader";

const ProductGroup = () => {
  const [products, setProduct] = useState([]);
  const [ready, setReady] = useState(false);
  const productArray = Array.from({ length: 6 }, (_, index) => index);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.get("/");
      setProduct(res.data);
      setReady(true);
    };
    fetchProducts();
  }, []);
  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        >
          {!ready &&
            productArray.map((product, index) => <ProductLoader key={index} />)}
          {ready &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
