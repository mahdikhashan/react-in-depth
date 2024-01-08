import { Product } from "./@types/product";

import { ProductTable } from "./product-table";
import { SearchBar } from "./search-bar";

type FilterableProductTableProps = {
  products: Product[];
};

function FilterableProductTable(props: FilterableProductTableProps) {
  const { products } = props;

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export { FilterableProductTable };
