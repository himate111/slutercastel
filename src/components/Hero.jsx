import "../styles/hero.css";
import { useState } from "react";
import frontimagenew from "../assets/images/firstimagenew.jpg";
import { properties } from "../data/properties";

export default function Hero({ onSearch }) {
   const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    const results = properties.filter((item) => {
      return (
        (location === "" || item.location === location) &&
        (type === "" || item.type === type)
      );
    });

    onSearch(results);
  };




  return (
    <section className="hero-wrapper">
      {/* HERO IMAGE */}
      <div className="hero-image">
        <img
          src={frontimagenew}
          alt="Modern Building"
          className="hero-img"
        />
      </div>

      {/* HERO CONTENT (REPLACED) */}
      <div className="hero-content">
        <h1>
          Find A House <br /> That Suits You
        </h1>

        <p>
          Want to find a home? We are ready to help you find
          <br />
          one that suits your lifestyle and needs
        </p>

      

        {/* STATS */}
        <div className="hero-stats">
          <div>
            <h3>1200+</h3>
            <span>Listed Properties</span>
          </div>

          <div>
            <h3>4500+</h3>
            <span>Happy Customers</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Awards</span>
          </div>
        </div>
      </div>

      {/* SEARCH CARD (UNCHANGED) */}
      <div className="search-card">
        <div className="tab">
          <span className="active">Buy</span>
          <span>Rent</span>
        </div>

      <div className="filters">
  <div>
    <label>Location</label>
    <select value={location} onChange={(e) => setLocation(e.target.value)}>
      <option value="">All Locations</option>
      <option value="New York City">New York City</option>
      <option value="California">California</option>
    </select>
  </div>

  <div>
    <label>Property Type</label>
    <select value={type} onChange={(e) => setType(e.target.value)}>
      <option value="">All Types</option>
      <option value="House">House</option>
      <option value="Duplex House">Duplex House</option>
    </select>
  </div>

  <button className="search-btn" onClick={handleSearch}>
    Search
  </button>
</div>


      </div>
    </section>
  );
}
