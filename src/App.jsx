import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Newhero from "./components/Newhero.jsx";
import Property from "./components/Property.jsx";
import About from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Technologies from "./components/Technologies.jsx";

function Home() {
  return (
    <>
      <Newhero />
      <Property />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home page with navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* Technologies page without navbar */}
      <Route path="/project/:id" element={<Technologies />} />
    </Routes>
  );
}


export default App;
