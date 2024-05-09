import React, { useContext } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Spacer from "./components/Spacer";
import ProductGroup from "./components/ProductGroup";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { dataContext } from "./contexts/DataContext";
import CategoryGroup from "./components/CategoryGroup";

const App = () => {
  const { cartDrawer } = useContext(dataContext);
  return (
    <Layout>
      <Header />
      <Spacer size={100} />
      <CategoryGroup/>
      <ProductGroup />
      {cartDrawer && <CartDrawer />}
      <Footer />
    </Layout>
  );
};

export default App;
