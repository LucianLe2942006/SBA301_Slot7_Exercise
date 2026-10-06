import { useSearchParams, Link } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const keyword = searchParams.get("q") || "";

  const visibleProducts = products.filter(product => {
    const matchCategory = category === "all" || product.category === category;
    const matchKeyword = product.name.toLowerCase().includes(keyword.toLowerCase());
    return matchCategory && matchKeyword;
  });

  function updateCategory(value) {
    const next = new URLSearchParams(searchParams);
    if (value === "all") next.delete("category");
    else next.set("category", value);
    setSearchParams(next);
  }

  function updateKeyword(value) {
    const next = new URLSearchParams(searchParams);
    if (!value.trim()) next.delete("q");
    else next.set("q", value);
    setSearchParams(next);
  }

  return (
    <section>
      <h1>Products</h1>
      <input
        value={keyword}
        onChange={e => updateKeyword(e.target.value)}
        placeholder="Search products"
      />
      <select value={category} onChange={e => updateCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="phone">Phone</option>
        <option value="laptop">Laptop</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{visibleProducts.length} product(s)</p>
      {visibleProducts.map(product => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category} • ${product.price}</p>
          <Link to={`/products/${product.id}`}>View detail</Link>
        </article>
      ))}
    </section>
  );
}
