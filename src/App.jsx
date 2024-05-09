import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Spacer from "./components/Spacer";
import ProductGroup from "./components/ProductGroup";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

const App = () => {
  return (
    <Layout>
      <Header />
      <Spacer size={100} />
      <ProductGroup />
      <CartDrawer />
      <Footer />
    </Layout>
  );
};

export default App;
