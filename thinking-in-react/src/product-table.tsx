import { ReactElement } from "react";

import { Product } from "./@types/product";

import { ProductCategoryRow } from "./product-category-row";
import { ProductRow } from "./product-row";

type ProductTableProps = {
  products: Product[];
};

function ProductTable(props: ProductTableProps) {
  const { products } = props;

  const rows: ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export { ProductTable };
