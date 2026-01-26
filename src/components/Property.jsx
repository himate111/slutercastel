import "../styles/property.css";
import nest from "../assets/images/nest.jpeg";
import feather from "../assets/images/fether.jpeg";

import { useState } from "react";
import { 
   Building2,
  MapPin, 
  Ruler 
} from "lucide-react";



const properties = [
  {
    status: "ongoing",
    type: "House",
    title: "TULIP",
    price: "$900,000",
    location: "Semanchery, Chennai",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
     floors: 2,
    totalSqft: "9,500 sqft",
  },
  {
    status: "completed",
    type: "Apartment",
    title: "NEST",
    price: "$500,000",
    location: "Mel Ayanambakkam, Chennai",
    img: nest,
    floors : 2,
    totalSqft: "4,000 sqft",
  },
  {
    status: "ongoing",
    type: "Residence",
    title: "BLOSSOM",
    price: "$650,000",
    location: "Semanchery, Chennai",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
     floors : 2,
    totalSqft: "4,000 sqft",
  },
   

  {
    status: "completed",
    type: "Apartment",
    title: "FEATHER",
    price: "$1,200,000",
    location: "Thoraipakkam, Chennai",
    img: feather,
     floors : 3,
    totalSqft: "4,000 sqft",
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
    <div className="price">{item.price}</div>

    <h3 className="title">{item.title}</h3>

    <p className="location">
  <MapPin size={14} />
  {item.location}
</p>


<div className="features">
  <span>
    <Ruler size={16} /> {item.totalSqft}
  </span>
  <span>
    <Building2 size={16} /> {item.floors} Floors
  </span>
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
