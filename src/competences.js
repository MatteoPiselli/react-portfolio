import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import vscode from "./assets/images/competences/vscode.svg";
import html from "./assets/images/competences/html.svg"
import css from "./assets/images/competences/css.svg"
import js from "./assets/images/competences/js.svg"
import github from "./assets/images/competences/github.svg";
import java from "./assets/images/competences/java.svg";
import mySQL from "./assets/images/competences/mySQL.svg";
import php from "./assets/images/competences/php.svg";
import python from "./assets/images/competences/python.svg";
import bash from "./assets/images/competences/bash.svg";
import react from "./assets/images/competences/reactjs.svg";
import windows from "./assets/images/competences/windows.svg";
import ubuntu from "./assets/images/competences/ubuntu.svg";
import macos from "./assets/images/competences/macOS.svg";
import figma from "./assets/images/competences/Figma-logo.svg";
import tailwind from "./assets/images/competences/tailwind.svg";

const Competences = () => {
  const competencesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && competencesRef.current) {
      competencesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <div 
      ref={competencesRef}
      className="bg-gray-900 text-white"
    >
      <h1>Mes Compétences</h1>
      <span>Front-End</span>
      <img src={html} alt="html css js" width="5%" height="auto" />
      <img src={css} alt="html css js" width="5%" height="auto" />
      <img src={js} alt="html css js" width="5%" height="auto" />
      <img src={react} alt="react" width="5%" height="auto" />
      <img src={tailwind} alt="tailwind css" width="5%" height="auto" />
      <span>Back-End</span>
      <img src={php} alt="php" width="5%" height="auto" />
      <img src={java} alt="java" width="5%" height="auto" />
      <span>Base de Données</span>
      <img src={mySQL} alt="mySQL" width="5%" height="auto" />
      <span>Algorithmie et Scripting</span>
      <img src={python} alt="python" width="5%" height="auto" />
      <img src={bash} alt="bash" width="5%" height="auto" />
      <span>Outils de Développement et Systèmes d'Exploitation</span>
      <img src={github} alt="github" width="5%" height="auto" />
      <img src={figma} alt="figma" width="5%" height="auto" />
      <img src={vscode} alt="vsCode" width="5%" height="auto" />
      <img src={windows} alt="windows" width="5%" height="auto" />
      <img src={ubuntu} alt="ubuntu" width="5%" height="auto" />
      <img src={macos} alt="macOS" width="5%" height="auto" />
    </div>
  );
}

export default Competences;
