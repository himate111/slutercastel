import heroImg from "../assets/images/frontpageimage.png";
import "../styles/newhero.css";

export default function Hero() {

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
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
  <div className="logo">Homesco</div>

  <ul className="nav-links">
    <li onClick={() => scrollToSection("home")}>Home</li>
    <li onClick={() => scrollToSection("properties")}>Properties</li>
    <li onClick={() => scrollToSection("contact")}>Contact</li>
  </ul>
</nav>


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
