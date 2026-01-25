import "../styles/property.css";
import { useState } from "react";

const properties = [
  {
    status: "ongoing",
    type: "House",
    title: "Grand Galaxy",
    price: "$900,000",
    location: "Grand Galaxy Park Jl. Boulevard Raya",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    status: "completed",
    type: "Building",
    title: "Gulon Asri House",
    price: "$500,000",
    location: "326 Kenangan Avenue Blv, Kalimalang",
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    status: "ongoing",
    type: "Residence",
    title: "D’green SOC",
    price: "$650,000",
    location: "326 Kenangan Avenue Blv, Bekasi Blv",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    status: "completed",
    type: "Apartment",
    title: "Oslo Urbana",
    price: "$1,200,000",
    location: "326 Kenangan Avenue Blv, Bekasi Blv",
    img: "https://images.pexels.com/photos/4393914/pexels-photo-4393914.jpeg",
  },
];


export default function Property() {
  const [activeTab, setActiveTab] = useState("all");


const filteredProperties =
  activeTab === "all"
    ? properties
    : properties.filter((item) => item.status === activeTab);

  return (
    <section id="properties" className="property">

      {/* HEADER */}
      <div className="property-header">
        <h2>We Help You to Make Better Deals</h2>
        <p>
          Rely on our seasoned professionals who possess in-depth
          knowledge of the real estate landscape.
        </p>
      </div>

      {/* TABS */}
        {/* TABS */}
<div className="property-tabs">
  <div className={`slider ${activeTab}`}></div>

  <span
    className={activeTab === "all" ? "active" : ""}
    onClick={() => setActiveTab("all")}
  >
    All Projects
  </span>

  <span
    className={activeTab === "ongoing" ? "active" : ""}
    onClick={() => setActiveTab("ongoing")}
  >
    Ongoing Projects
  </span>

  <span
    className={activeTab === "completed" ? "active" : ""}
    onClick={() => setActiveTab("completed")}
  >
    Completed Projects
  </span>
</div>




      {/* GRID */}
      <div className="property-grid">
        {filteredProperties.map((item, index) => (
          <div className="property-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="card-body">
              <span className="badge">{item.type}</span>
              <span className="rating">
                ★★★★★ <small>4.8</small>
              </span>

              <h3>{item.title}</h3>

              <div className="price-row">
                <span className="price">{item.price}</span>
              </div>

              <p className="location">{item.location}</p>

              <div className="features">
                <span>🛏 3 Beds</span>
                <span>🛁 3 Baths</span>
                <span>📐 2+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="load-more">
        <button>Load More</button>
      </div>
    </section>
  );
}
