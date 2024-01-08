import { Product } from "./@types/product";

type ProductRowProps = {
  product: Product;
};

function ProductRow(props: ProductRowProps) {
  const { product } = props;

  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export { ProductRow };
