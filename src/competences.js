import React from "react";

import vscode from "./assets/images/competences/vscode.svg";
import html from "./assets/images/competences/html.svg";
import css from "./assets/images/competences/css.svg";
import js from "./assets/images/competences/js.svg";
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
import figma from "./assets/images/competences/figma.png";
import tailwind from "./assets/images/competences/tailwind.svg";

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
    <div ref={competencesRef} className="bg-gray-900 text-white">
      <br />
      <h1 className="text-center text-3xl mb-12">Mes Compétences</h1>
      {/*<p className="text-center">Front-End</p>*/}
      <div className="ml-[10%] mr-[10%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <img
          src={html}
          alt="html"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={css}
          alt="css"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={js}
          alt="js"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={react}
          alt="react"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={tailwind}
          alt="tailwind css"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        {/*<p className="text-center">Back-End</p>*/}
        <img
          src={php}
          alt="php"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={java}
          alt="java"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        {/*<p className="text-center">Base de Données</p>*/}
        <img
          src={mySQL}
          alt="mySQL"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        {/*<p className="text-center">Algorithmie et Scripting</p>*/}
        <img
          src={python}
          alt="python"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={bash}
          alt="bash"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        {/*<p className="text-center">Outils de Développement et Systèmes d'Exploitation</p>*/}
        <img
          src={github}
          alt="github"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={figma}
          alt="figma"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={vscode}
          alt="vsCode"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={windows}
          alt="windows"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={ubuntu}
          alt="ubuntu"
          className="bg-gray-800 rounded-lg p-5 h-auto"
        />
        <img
          src={macos}
          alt="macOS"
          className="bg-gray-800 rounded-lg p-5 h-auto mb-8"
        />
      </div>
    </div>
  );
};

export default Competences;
