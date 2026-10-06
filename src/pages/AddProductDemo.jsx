import { useNavigate } from "react-router-dom";

export default function AddProductDemo() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Product name" />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)}>Cancel</button>
    </form>
  );
}
