import heroImg from "../assets/images/frontpageimage.png";
import logoImg from "../assets/images/logo.png";
import "../styles/newhero.css";
import { useState } from "react";

export default function Hero() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  }
};

  return (
    <section
  id="home"
  className="hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>

      {/* NAVBAR OVER IMAGE */}
       <nav className="hero-nav">

  {/* MOBILE MENU ICON */}
  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </div>

  {/* LOGO (centered on mobile) */}
  <div className="logo">
    <img src={logoImg} alt="Homesco Logo" />
  </div>

  {/* DESKTOP LINKS */}
  <ul className="nav-links">
    <li onClick={() => scrollToSection("home")}>Home</li>
    <li onClick={() => scrollToSection("aboutus")}>About Us</li>
    <li onClick={() => scrollToSection("properties")}>Properties</li>
    <li onClick={() => scrollToSection("contact")}>Contact</li>
  </ul>

   <button
    className="nav-cta"
    onClick={() => scrollToSection("contact")}
  >
    Let’s Talk
  </button>
  
</nav>


 {menuOpen && (
  <div className="mobile-menu">
    <li onClick={() => scrollToSection("home")}>Home</li>
    <li onClick={() => scrollToSection("aboutus")}>About Us</li>
    <li onClick={() => scrollToSection("properties")}>Properties</li>
    <li onClick={() => scrollToSection("contact")}>Contact</li>
  </div>
)}



      {/* HERO CONTENT */}
      <div className="hero-content">
<h1 className="hero-title">
  Your Next Home,<br />
  Just a Click Away
</h1>


        <p>
          Find homes that suit your vibe, your budget, and your future.
          Whether you're buying, renting, or just exploring.
        </p>

        <button className="hero-btn" onClick={() => scrollToSection("properties")}>
          View All Properties →
        </button>
      </div>
    </section>
  );
}
