import "../styles/property.css";
import nest from "../assets/images/nnest.jpg";
import feather from "../assets/images/please.png";
import ongoing from "../assets/images/ongoing.jpg";

import florence from "../assets/images/florence.jpeg";
import venture from "../assets/images/ventura.jpg";
import blossom from "../assets/images/blossom.jpeg";

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
   
    location: "Sholinganallur, Chennai",
    img: ongoing,
     floors: 2,
    
  },
  {
    status: "completed",
    type: "Apartment",
    title: "NEST",
   
    location: "Mel Ayanambakkam, Chennai",
    img: nest,
    floors : 2,
    
  },
  {
    status: "ongoing",
    type: "Residence",
    title: "BLOSSOM",
   
    location: "Navalur, Chennai",
    img: blossom,
     floors : 2,
   
  },
   {
    status: "ongoing",
    type: "Residence",
    title: "FLORENCE",

    location: "Thoraipakkam, Chennai",
    img: florence,
     floors : 2,
    
  },
  
  {
    status: "ongoing",
    type: "Residence",
    title: "VENTURA ONE",
    
    location: "Mel Ayyanam bakkam, Chennai",
    img: venture,
     floors : 2,
    
  },


  {
    status: "completed",
    type: "Apartment",
    title: "FEATHER",
  
    location: "Thoraipakkam, Chennai",
    img: feather,
     floors : 3,
    
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
