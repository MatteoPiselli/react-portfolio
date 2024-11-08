import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Copyright from "./copyright";
//images
import Home from "../assets/images/icons/accueil.png";
import Code from "../assets/images/icons/code.png";
import Stage from "../assets/images/icons/stage.png";
import Projet from "../assets/images/icons/coding.png";
import Certification from "../assets/images/icons/certification.png";
import Veille from "../assets/images/icons/veille.png";
import Github from "../assets/images/icons/github.png";
import Telephone from "../assets/images/icons/telephone.png";
import Mail from "../assets/images/icons/mail.png";
import Linkedin from "../assets/images/icons/linkedin.png";
import Information from "../assets/images/icons/about-me.png";
import Formation from "../assets/images/icons/formation.png";
import { type } from "@testing-library/user-event/dist/type";

const DropdownMenu = () => {
  const [isOn, setIsOn] = useState(false); // État pour gérer l'affichage du menu

  const toggleMenu = () => setIsOn(!isOn); // Fonction pour basculer l'affichage du menu

  const spring = {
    type: "spring",
    stiffness: 300, // Réduit la raideur pour un mouvement plus fluide
    damping: 20, // Amortit le mouvement pour le rendre plus doux
  };

  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (e, path, anchor) => {
    e.preventDefault(); // Empêcher la redirection immédiate
    setIsAnimating(true); // Déclencher l'animation

    setTimeout(() => {
      navigate(path, { state: { scrollTo: anchor } }); // Transmettre l'ancre en état
    }, 500); // Délai correspondant à la durée de l'animation
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
        {/* La poignée du menu, animée avec Framer Motion */}
        <motion.div
          className="bg-white w-10 h-10 rounded-full shadow-md" // Taille et style de la poignée
          layout
          transition={spring} // Animation fluide
        />
      </div>

      <AnimatePresence>
        {/* Menu déroulant qui s'affiche ou non en fonction de l'état `isOn` */}
        {isOn && (
          <motion.div
            className="absolute top-0 bg-white h-full opacity-75 rounded-md p-4"
            initial={{ x: "-100%" }} // Le menu commence hors de l'écran à gauche
            animate={{ x: "0%" }} // Le menu glisse vers la position finale
            exit={{ x: "-100%" }} // Le menu glisse hors de l'écran quand il disparaît
            transition={spring} // Transition avec effet de ressort
          >
            <p className="font-bold text-3xl">Matteo PISELLI</p>
            <p className="italic text-lg">Etudiant Développeur Web</p>
            <br />
            <ul className="space-y-4">
              <li>
                <div className="flex space-x-4">
                  <img src={Home} alt="accueil" className="w-[25px] h-[25px]" />
                  <Link to="/" className="text-gray-800 hover:text-sky-600">
                    Accueil
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <img
                    src={Information}
                    alt="information"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    href="/aboutMe"
                    onClick={(e) => handleNavigation(e, "/aboutMe", "#aboutMe")}
                    className="text-gray-800 hover:text-sky-600"
                  >
                    À propos
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <img
                    src={Formation}
                    alt="formation"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    to="/formation"
                    onClick={(e) => handleNavigation(e, "/formation", "#formation")}
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Formation
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <img
                    src={Stage}
                    alt="expériences"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    to="/experiences"
                    onClick={(e) => handleNavigation(e, "/experiences", "#experiences")}
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Expériences professionnelles
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
                    onClick={(e) => handleNavigation(e, "/projets", "#projets")}
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Mes projets
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
                    onClick={(e) => handleNavigation(e, "/competences", "#competences")}
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Compétences Dév. & OS
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
                    onClick={(e) => handleNavigation(e, "/certifications", "#certifications")}
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
                  <Link
                    to="/veille"
                    onClick={(e) => handleNavigation(e, "/veille", "#veille")}
                    className="text-gray-800 hover:text-sky-600"
                  >
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
              <li>
                <div className="flex space-x-4">
                  <img
                    src={Linkedin}
                    alt="linkedin"
                    className="w-[25px] h-[25px]"
                  />
                  <a
                    href="https://www.linkedin.com/in/matteo-piselli-354a27231/"
                    className="text-gray-800 hover:text-sky-600"
                  >
                    Linkedin
                  </a>
                </div>
              </li>
            </ul>
            <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2">
              CONTACT
            </div>
            <div className="absolute bottom-5 flex flex-col space-y-4">
              <div className="flex space-x-2">
                <img
                  src={Telephone}
                  alt="téléphone"
                  className="w-[25px] h-[25px]"
                />
                <span>06 48 35 73 19</span>
              </div>

              <div className="flex space-x-2">
                <img src={Mail} alt="mail" className="w-[25px] h-[25px]" />
                <span>pro.matteo.piselli@gmail.com</span>
              </div>

              <Copyright />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
