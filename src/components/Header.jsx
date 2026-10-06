import { NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";
  return (
    <header>
      <nav>
        <NavLink to="/" end className={navClass}>Home</NavLink>
        <NavLink to="/products" className={navClass}>Products</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
        <NavLink to="/dashboard" className={navClass}>Dashboard</NavLink>
      </nav>
    </header>
  );
}
