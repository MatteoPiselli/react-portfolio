import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import AboutMe from "./aboutMe";
import DropdownMenu from "./DropdownMenu";
import Competences from "./competences";
import ExperiencesDiplômes from "./expDiplomes";
import Projets from "./projets";
import Certifications from "./certifications";
import Veille from "./veille";

function App() {
  return (
    <Router>
      <Header />
      <DropdownMenu />

      {/* Les différentes routes de l'application */}
      <Routes>
        <Route path="/competences" element={<Competences />} />
        <Route path="/expDiplomes" element={<ExperiencesDiplômes />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>

      <AboutMe />      
    </Router>
  );
  
}

export default App;
