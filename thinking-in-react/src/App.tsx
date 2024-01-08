import "./App.css";

import APIResult from "./api.json";

import { Product } from "./@types/product";

import { FilterableProductTable } from "./filterable-product-table";

const PRODUCTS = APIResult as Product[];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
