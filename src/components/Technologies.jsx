import "../styles/technologies.css";
import { BrickWall, Home, Triangle, Square } from "lucide-react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

import topimage from "../assets/images/techno.png";

import tulip from "../assets/images/ventura.jpg";
import tulipright from "../assets/images/tulipright.png";


import tulipPlan from "../assets/images/tulipfllorplan.png";
import nestPlan from "../assets/images/nestplan1.jpeg";
import blossomPlan from "../assets/images/blossomplan.png";
import florencePlan from "../assets/images/venturaplan.png";
import venturaPlan from "../assets/images/venturaplan.png";
import featherPlan from "../assets/images/featherplan.jpeg";



import nest from "../assets/images/nnest.jpg";
import nestright from "../assets/images/nestno.jpg";

import blossom from "../assets/images/blossom.jpeg";
import blossomright from "../assets/images/blossomright.jpg";

import florence from "../assets/images/florence.jpeg";
import florenceright from "../assets/images/venture.jpeg";


import ventura from "../assets/images/florence.jpeg";
import venturaright from "../assets/images/venture.jpeg";

import feather from "../assets/images/please.png";
import featherright from "../assets/images/featherright.png";





export default function Technologies() {
  const { id } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Project-wise data */
const plans = {


 tulip: {
  title: "TULIP",
  image: tulipPlan,
  flats: [
    {
      name: "Flat A1",
      size: "1027 sq.ft",
      features: ["2 Bedrooms",
  "Spacious living & dining area",
  "Master bedroom",
  "Common bedroom",
  "Kitchen with utility",
  "2 Toilets",
  "Private balcony",
  "Well-ventilated layout",
  "Dedicated car parking",],
      description: "A spacious 2BHK home designed for comfortable family living. With a large living and dining area, well-planned bedrooms, and excellent ventilation, this layout offers both functionality and everyday comfort.",
      extraImage:
        tulipright,
        extraImage2:
        tulip

    },
  ],
},

nest: {
  title: "NEST",
  image: nestPlan,
  flats: [
    {
      name: "Flat B1",
      size: "934 sq.ft",
      features: ["2 Bedrooms", "Spacious living & dining", "Master bedroom", "Common bedroom", "Kitchen", "2 Toilets", "Dedicated car parking",],
      description: "A smartly planned 2BHK layout that balances space and practicality. The spacious living area and well-defined bedrooms make it ideal for modern families seeking comfort and efficient design.",
      extraImage:
       nest,
        extraImage2:
       nestright
    },
  ],
},

blossom: {
  title: "BLOSSOM",
  image: blossomPlan,
  flats: [
    {
      name: "Flat C1",
      size: "900 sq.ft",
      features: ["2 Bedrooms", "Living & dining area", "Kitchen with utility", "2 Toilets (attached + common)", "Balcony", "Well-ventilated layout", "Dedicated car parking",],
      description: "A smartly planned 2BHK layout that balances space and practicality. The spacious living area and well-defined bedrooms make it ideal for modern families seeking comfort and efficient design.",
      extraImage:
        blossom,
        extraImage2:
        blossomright

    },
  ],
},

florence: {
  title: "FLORENCE",
  image: florencePlan,
  flats: [
    {
      name: "Flat D1",
      size: "906 sq.ft",
      features: ["2 Bedrooms", "Living & dining area", "Kitchen with utility", "2 Toilets", "Balcony",],
      description: "A well-balanced 2BHK home featuring comfortable bedrooms, a dedicated living and dining zone, and ample natural ventilation, making it perfect for everyday family life.",
      extraImage:
       florence,
       extraImage2:
        florenceright
    },
  ],
},

ventura: {
  title: "VENTURA ONE",
  image: venturaPlan,
  flats: [
    {
      name: "Stilt Floor",
      size: "Parking Level",
      features: ["Covered car parking", "Wide driveway", "Lift access", "Common toilet", "Staircase access", "30-ft road frontage",],
      description: "A thoughtfully designed 2BHK residence offering a practical layout, comfortable bedrooms, and a bright living space, ensuring a relaxed and convenient lifestyle.",
      extraImage:
       ventura,
        extraImage2:
        venturaright
    },
  ],
},

feather: {
  title: "FEATHER",
  image: featherPlan,
  flats: [
    {
      name: "Flat F1",
      size: "467 sq.ft",
      features: ["1 Bedroom", "Spacious living area", "Kitchen with utility", "1 Toilet", "Balcony", "Well-ventilated layout",],
      description: "A compact and efficient 1BHK layout, ideal for singles or couples. The smart space planning ensures comfort, functionality, and easy maintenance.",
      extraImage:
        feather,
    },
    {
      name: "Flat F2",
      size: "883 sq.ft",
      features: ["2 Bedrooms", "Living & dining", "Kitchen with utility", "2 Toilets", "Sit-out / balcony",],
      description: "A comfortable 2BHK home with well-zoned private and common spaces. The spacious living area and sit-out provide a perfect balance of relaxation and practicality.",
      extraImage:
        featherright,
    },
  ],
},



};




  const activePlan = plans[id?.toLowerCase()];


  /* If wrong URL */
  if (!activePlan) {
    return <h2 style={{ padding: "80px", textAlign: "center" }}>Project not found</h2>;
  }

  return (
    <section className="technologies">


      {/* Banner */}

      <button
  className="back-button"
  onClick={() => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("properties");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }}
>
  ← Back to Projects
</button>




      <div className="tech-banner">
        <img
          src={topimage}
          alt="Technologies"
        />
        <h1>{activePlan.title} TECHNOLOGIES</h1>
      </div>

      {/* Features */}
      {/* <div className="tech-features">
        <div className="tech-item">
          <BrickWall size={28} />
          <h3>Walls</h3>
          <p>Premium blocks for strength and durability.</p>
        </div>

        <div className="tech-item">
          <Home size={28} />
          <h3>Facade</h3>
          <p>Durable exterior finishes for long life.</p>
        </div>

        <div className="tech-item">
          <Triangle size={28} />
          <h3>Roof</h3>
          <p>Thermal insulated roofing system.</p>
        </div>

        <div className="tech-item">
          <Square size={28} />
          <h3>Window</h3>
          <p>Energy-efficient double-glazed windows.</p>
        </div>
      </div> */}

      {/* HOUSE PLAN SECTION */}
      <div className="house-plan">
        <h2 className="plan-title">HOUSE PLAN</h2>

        <div className="plan-container">
          {/* Left side */}
          <div className="plan-details">
            {activePlan.flats.map((flat, index) => (
              <div className="flat-block" key={index}>
                <h3>{flat.name}</h3>
                <p className="flat-size">Approx. {flat.size}</p>
                <ul>
                  {flat.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <p className="flat-description">
        {flat.description}
      </p>

     <div className="flat-extra-images">
  {flat.extraImage && (
    <img
      src={flat.extraImage}
      alt={flat.name}
      className="flat-extra-image"
    />
  )}

  {flat.extraImage2 && (
    <img
      src={flat.extraImage2}
      alt={flat.name}
      className="flat-extra-image"
    />
  )}
</div>



              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="plan-image">
            <img src={activePlan.image} alt={activePlan.title} />

          </div>
        </div>
{/* 
        <div className="plan-button">
          <button>▶ View All Projects</button>
        </div> */}
      </div>
    </section>
  );
}
