import { Link, useParams } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(item => String(item.id) === id);

  if (!product) {
    return (
      <section>
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <Link to="/products">Back to products</Link>
    </section>
  );
}
