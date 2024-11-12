import React from "react";
import { motion } from "framer-motion";

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
import uml from "./assets/images/competences/uml.svg";

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
      <br />
      <h1 className="text-center text-3xl mb-12">Mes Compétences</h1>

      <div className="ml-[10%] mr-[10%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={html} alt="html" className="rounded-lg h-auto" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Front-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={css} alt="css" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Front-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={js} alt="js" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Front-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={react} alt="react" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Front-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={tailwind} alt="tailwind css" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Front-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={php} alt="php" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Back-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={java} alt="java" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Back-End</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={mySQL} alt="MySQL" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Base de Donées</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={python} alt="python" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Algo</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={bash} alt="bash" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Script</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={uml} alt="uml" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Modélisation</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={github} alt="github" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">Outils Dév</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={figma} alt="figma" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">UX/UI Design</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={vscode} alt="vscode" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">IDE</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={windows} alt="windows" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">OS</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={ubuntu} alt="ubuntu" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">OS</span>
          </div>
        </div>

        <div className="relative bg-gray-800 rounded-lg p-5">
          <img src={macos} alt="macOS" />
          <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
            <span className="text-white">OS</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Competences;
