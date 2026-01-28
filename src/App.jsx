import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PropertyList from "./components/PropertyList.jsx";
import TrustSection from "./components/Trusted.jsx";
import Contact from "./components/Contact.jsx";
import Property from "./components/Property.jsx";
import Newhero from "./components/Newhero.jsx";
import About from "./components/AboutUs.jsx";

import { properties } from "./data/properties";

function App() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  return (
    <>
      <Navbar />
      
      <Newhero />
      <Property />
      <About />
      <Contact />
      {/* <Hero onSearch={setFilteredProperties} /> */}
    </>
  );
}

export default App;
