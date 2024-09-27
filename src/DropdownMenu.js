import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation
import { motion } from "framer-motion";
import Home from "./assets/images/icons/accueil.png";
import Code from "./assets/images/icons/code.png";
import Stage from "./assets/images/icons/stage.png";
import Projet from "./assets/images/icons/coding.png";
import Certification from "./assets/images/icons/certification.png";
import Veille from "./assets/images/icons/veille.png";
import Github from "./assets/images/icons/github.png";
import Telephone from "./assets/images/icons/telephone.png";
import Mail from "./assets/images/icons/mail.png";

const DropdownMenu = () => {
  const [isOn, setIsOn] = useState(false); // État pour gérer l'affichage du menu

  // Fonction pour basculer l'affichage du menu
  const toggleMenu = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 300, // Réduit la raideur pour un mouvement plus fluide
    damping: 20, // Amortit le mouvement pour le rendre plus doux
  };

  return (
    <div>
      {/* Bouton qui déclenche le menu déroulant */}
      <div
        className={`absolute top-8 right-8 w-20 h-10 flex items-center 
        ${isOn ? "justify-end" : "justify-start"} + ${
          isOn ? "bg-sky-400" : "bg-gray-200"
        }        
      rounded-full p-2 cursor-pointer`}
        onClick={toggleMenu}
      >
        {/* La poignée du switch, animée avec Framer Motion */}
        <motion.div
          className="bg-white w-10 h-10 rounded-full shadow-md" // Taille et style de la poignée
          layout
          transition={spring} // Animation fluide
        />
      </div>

      {/* Menu déroulant qui s'affiche ou non en fonction de l'état `isOn` */}
      {isOn && (
        <div className="absolute top-0 bg-white h-full opacity-75 rounded-md p-4">
          <p className="font-bold text-3xl">Matteo PISELLI</p>
          <p className="italic text-lg">Etudiant Développeur Web</p>
          <br />
          <ul className="space-y-4">
            <li>
              <div className="flex space-x-4">
                <img 
                  src={Home} 
                  alt="accueil" 
                  className="w-[25px] h-[25px]" 
                />
                <Link 
                  to="/" 
                  className="text-gray-800 hover:text-sky-600"
                >
                  Accueil
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img
                  src={Code}
                  alt="compétences professionnelles"
                  className="w-[25px] h-[25px]"
                />
                <Link
                  to="/competences"
                  className="text-gray-800 hover:text-sky-600"
                >
                  Compétences Dév. & OS
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img
                  src={Stage}
                  alt="expériences & diplomes"
                  className="w-[25px] h-[25px]"
                />
                <Link
                  to="/expDiplomes"
                  className="text-gray-800 hover:text-sky-600"
                >
                  Expériences professionnelles et Diplômes
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img
                  src={Projet}
                  alt="mes projets"
                  className="w-[25px] h-[25px]"
                />
                <Link
                  to="/projets"
                  className="text-gray-800 hover:text-sky-600"
                >
                  Mes projets
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img
                  src={Certification}
                  alt="certifications"
                  className="w-[25px] h-[25px]"
                />
                <Link
                  to="/certifications"
                  className="text-gray-800 hover:text-sky-600"
                >
                  Certifications
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img
                  src={Veille}
                  alt="veille technologie"
                  className="w-[25px] h-[25px]"
                />
                <Link to="/veille" className="text-gray-800 hover:text-sky-600">
                  Veille technologique
                </Link>
              </div>
            </li>
            <li>
              <div className="flex space-x-4">
                <img 
                  src={Github}
                  alt="github"
                  className="w-[25px] h-[25px]"
                />
                  <a 
                    href="https://github.com/MatteoPiselli"
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Github
                  </a>
              </div>
            </li>
          </ul>
          {/*left-1/2 place le bord gauche de l'élément au centre du conteneur (50% de la largeur).
          -translate-x-1/2 décale cet élément vers la gauche de la moitié de sa largeur, alignant ainsi son centre sur le centre du conteneur. 
          */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">CONTACT</div>
              <div className="absolute bottom-5 flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={Telephone}
                    alt="téléphone"
                    className="w-[25px] h-[25px]"
                  />
                    06 48 35 73 19
                </div>
                
                <div className="flex items-center space-x-2">
                  <img
                    src={Mail}
                    alt="mail"
                    className="w-[25px] h-[25px]"
                  />
                    pro.matteo.piselli@gmail.com
                </div>

              </div>
          </div>
        )}
    </div>
  );
};

export default DropdownMenu;