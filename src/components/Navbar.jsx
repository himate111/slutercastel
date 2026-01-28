import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "aboutus" },
  { label: "Properties", id: "properties" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("home");   // ✅ FIX
  const [menuOpen, setMenuOpen] = useState(false);     // ✅ FIX

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMenuOpen(false); // close mobile menu after click

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}

      {/* LOGO */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeNav === item.id ? "active" : ""}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* RIGHT ACTION */}
      <div className="nav-actions">
        <button onClick={() => handleNavClick("contact")}>
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
  
