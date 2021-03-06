import React from "react";
import HomePage from "./routes/home";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./routes/products";
import FilterProductsPage from "./routes/filterProducts";
import ProductPage from "./routes/product";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/personalize">
          <FilterProductsPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ScrollToTop>
  );
}

export default App;
