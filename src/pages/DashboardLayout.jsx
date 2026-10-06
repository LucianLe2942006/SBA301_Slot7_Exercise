import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <section>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to=".">Overview</NavLink>{" | "}
        <NavLink to="profile">Profile</NavLink>{" | "}
        <NavLink to="orders">Orders</NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
