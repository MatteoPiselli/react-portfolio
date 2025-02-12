import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AboutMe from "./pages/aboutMe";
import DropdownMenu from "./components/DropdownMenu";
import Competences from "./pages/competences";
import Formation from "./pages/formation";
import Experiences from "./pages/experiences";
import Projets from "./pages/projets";
import Certifications from "./pages/certifications";
import Footer from "./components/Footer";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <DropdownMenu />
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
