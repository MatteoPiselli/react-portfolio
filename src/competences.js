import React from "react";
import vscode from "./assets/images/competences/vscode.webp";
import htmlcssjs from "./assets/images/competences/htmlCssJs.webp";
import github from "./assets/images/competences/github.webp";
import java from "./assets/images/competences/java.webp";
import mySQL from "./assets/images/competences/mySQL.webp";
import php from "./assets/images/competences/php.webp";
import python from "./assets/images/competences/python.webp";
import bash from "./assets/images/competences/bash.png";
import react from "./assets/images/competences/reactjs.png";
import windows from "./assets/images/competences/w10.webp";
import ubuntu from "./assets/images/competences/ubuntu.webp";
import macos from "./assets/images/competences/macOS.jpg";
import figma from "./assets/images/competences/Figma-logo.svg";
import tailwind from "./assets/images/competences/tailwind.png";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

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
    <div ref={competencesRef}>
      <h1>Compétences Développement</h1>
      <img src={htmlcssjs} alt="html css js" width="15%" height="auto" />
      Langages Web
      <br />
      FRONT-END : HTML5 | CSS3 | JavaScript Initiation
      <br />
      <img src={php} alt="php" width="15%" height="auto" />
      Langage Web
      <br />
      BACK-END : Initiation à la programmation avec PHP
      <br />
      <img src={react} alt="react" width="15%" height="auto" />
      React iniation débutant
      <br />
      <img src={tailwind} alt="tailwind css" width="15%" height="auto" />
      Tailwind CSS iniation débutant
      <br />
      <img src={java} alt="java" width="15%" height="auto" />
      Initiation
      <br />
      <img src={mySQL} alt="mySQL" width="15%" height="auto" />
      Initiation
      <br />
      <img src={python} alt="python" width="15%" height="auto" />
      Iniation à python pour l'algorithmie
      <br />
      <img src={bash} alt="bash" width="15%" height="auto" />
      Iniation
      <br />
      <img src={github} alt="github" width="15%" height="auto" />
      Gestion des sources Initiation
      <br />
      <img src={figma} alt="figma" width="8%" height="auto" />
      UX/UI Design : Initiation à Figma pour le prototypage et le design
      <br />
      <img src={vscode} alt="vsCode" width="15%" height="auto" />
      IDE
      <br />
      Programmation avec Visual Studio Code & Netbeans pour java
      <br />
      <h1>Compétences OS</h1>
      <img src={windows} alt="windows" width="15%" height="auto" />
      <img src={ubuntu} alt="ubuntu" width="15%" height="auto" />
      <img src={macos} alt="macOS" width="15%" height="auto" />
    </div>
  );
}

export default Competences;
