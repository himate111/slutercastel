import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [authActive, setAuthActive] = useState("SignUp");

  const handleNavClick = (section) => {
    setActiveNav(section);

    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">Urban<span>.</span></div>

      {/* CENTER LINKS */}
      <ul className="nav-links">
        {["Home", "Property", "Contact"].map((item) => (
          <li
            key={item}
            className={activeNav === item ? "active" : ""}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* RIGHT ACTIONS */}
      <div className="nav-actions">
        <span
          className={`login ${authActive === "Login" ? "auth-active" : ""}`}
          onClick={() => setAuthActive("Login")}
        >
          Login
        </span>

        <button
          className={`signup ${authActive === "SignUp" ? "auth-active" : ""}`}
          onClick={() => setAuthActive("SignUp")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

