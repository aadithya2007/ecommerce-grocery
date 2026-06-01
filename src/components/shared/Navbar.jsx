import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/categories" },
  { label: "Offers", to: "/offers" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="logo" to="/">
        VegiMart
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <input type="search" placeholder="Search Products..." />
        <NavLink className="login-link" to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
