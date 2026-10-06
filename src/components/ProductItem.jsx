import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.category} • ${product.price}</p>
      <Link to={`/products/${product.id}`}>View detail</Link>
    </article>
  );
}
