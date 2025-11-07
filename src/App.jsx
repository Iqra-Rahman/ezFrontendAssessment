import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import AboutTeam from "./pages/AboutTeam";
import AboutUs from "./pages/AboutUs.jsx";
import Varnan from "./pages/Varnan";
import Contact from "./pages/Contact";
import FilmProduction from "./pages/services/FilmProduction";
import Branding from "./pages/services/Branding";
import ArtCuration from "./pages/services/ArtCuration";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8e7df]">
        <Navbar />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/film-production" element={<FilmProduction />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/art-curation" element={<ArtCuration />} />
            <Route path="/team" element={<AboutTeam />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/varnan" element={<Varnan />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
