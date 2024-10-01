import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import AboutMe from "./aboutMe";
import DropdownMenu from "./DropdownMenu";
import Competences from "./competences";
import Formation from "./formation";
import Experiences from "./experiences";
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
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>     
    </Router>
  );
  
}

export default App;
