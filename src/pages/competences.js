import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ImageLoader from "../components/ImageLoader";
import vscode from "../assets/images/competences/vscode.svg";
import html from "../assets/images/competences/html.svg";
import css from "../assets/images/competences/css.svg";
import js from "../assets/images/competences/js.svg";
import github from "../assets/images/competences/github.svg";
//import java from "../assets/images/competences/java.svg";
import mySQL from "../assets/images/competences/mySQL.svg";
//import php from "../assets/images/competences/php.svg";
//import python from "../assets/images/competences/python.svg";
import bash from "../assets/images/competences/bash.svg";
import react from "../assets/images/competences/reactjs.svg";
import windows from "../assets/images/competences/windows.svg";
import ubuntu from "../assets/images/competences/ubuntu.svg";
import macos from "../assets/images/competences/macOS.svg";
import figma from "../assets/images/competences/figma.png";
import tailwind from "../assets/images/competences/tailwind.svg";
//import uml from "../assets/images/competences/uml.svg";
import node from "../assets/images/competences/Node.js.svg";

const Competences = () => {
  const competencesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && competencesRef.current) {
      setTimeout(() => {
        competencesRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <ImageLoader>
      <div ref={competencesRef} className="relative bg-gray-900 text-white">
        <h1 className="text-center text-3xl p-8 mb-12">
          Mes Compétences / Découvertes
        </h1>

        <div className="ml-[10%] mr-[10%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={html} alt="html" className="rounded-lg h-auto" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Front-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">HTML5</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={css} alt="css" className="rounded-lg" />

            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Front-End</span>
            </div>

            {/* Superposition centrale au survol */}
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">CSS3</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={js} alt="js" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Front-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">JAVASCRIPT</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={react} alt="react" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Front-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">REACT</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={tailwind} alt="tailwind css" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Front-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">TAILWIND</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={node} alt="node-js" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Back-end</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">NODE</span>
            </div>
          </div>

          {/*<div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={php} alt="php" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Back-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">PHP</span>
            </div>
          </div>*/}

          {/*<div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={java} alt="java" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Back-End</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">JAVA</span>
            </div>
          </div>*/}

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={mySQL} alt="MySQL" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Base de Donées</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">MYSQL</span>
            </div>
          </div>

          {/*<div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={python} alt="python" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Algo</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">PYTHON</span>
            </div>
          </div>*/}

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={bash} alt="bash" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Script</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">BASH</span>
            </div>
          </div>

          {/*<div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={uml} alt="uml" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Modélisation</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">UML</span>
            </div>
          </div>*/}

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={github} alt="github" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">Outils Dév</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">GITHUB</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={figma} alt="figma" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">UX/UI Design</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">FIGMA</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={vscode} alt="vscode" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">IDE</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">VSCODE</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={windows} alt="windows" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">OS</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">WINDOWS</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={ubuntu} alt="ubuntu" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">OS</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">UBUNTU</span>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-lg p-5">
            <img src={macos} alt="macOS" />
            <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <span className="text-white">OS</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white">MACOS</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <ScrollToTopButton />
      </div>
    </ImageLoader>
  );
};

export default Competences;
