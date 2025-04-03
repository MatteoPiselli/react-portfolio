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
import Github from "../assets/images/icons/github.png";
import Telephone from "../assets/images/icons/telephone.png";
import Mail from "../assets/images/icons/mail.png";
import Linkedin from "../assets/images/icons/linkedin.png";
import Information from "../assets/images/icons/about-me.png";
import Formation from "../assets/images/icons/formation.png";

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
    }, 800); // Délai correspondant à la durée de l'animation
  };

  return (
    <div>
      {/* Bouton qui déclenche le menu déroulant */}
      <div
        className={`absolute top-8 right-8 w-20 h-10 flex items-center z-20
        ${isOn ? "justify-end" : "justify-start"} + ${
          isOn ? "bg-sky-400" : "bg-gray-600"
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
            className="absolute top-0 bg-white bg-opacity-75 w-full md:w-auto h-screen rounded-md p-4 z-10"
            initial={{ x: "-100%" }} // Le menu commence hors de l'écran à gauche
            animate={{ x: "0%" }} // Le menu glisse vers la position finale
            exit={{ x: "-100%" }} // Le menu glisse hors de l'écran quand il disparaît
            transition={spring} // Transition avec effet de ressort
          >
            <p className="font-bold text-xl md:text-3xl">Matteo PISELLI</p>
            <p className="italic text-md md:text-lg">
              Etudiant Développeur Full Stack
            </p>
            <div className="h-20 md:h-8" />
            <ul className="relative flex flex-col items-center justify-center md:items-start space-y-4">
              <li>
                <div className="flex space-x-4">
                  <img src={Home} alt="accueil" className="w-[25px] h-[25px]" />
                  <Link
                    to="/react-portfolio/"
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
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
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    À propos
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
                    onClick={(e) =>
                      handleNavigation(e, "/competences", "#competences")
                    }
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Compétences Dév. & OS
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
                    onClick={(e) =>
                      handleNavigation(e, "/experiences", "#experiences")
                    }
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
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
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Mes projets
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
                    onClick={(e) =>
                      handleNavigation(e, "/formation", "#formation")
                    }
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Formation
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
                    onClick={(e) =>
                      handleNavigation(e, "/certifications", "#certifications")
                    }
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Certifications
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
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
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
                    className="text-gray-800 hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Linkedin
                  </a>
                </div>
              </li>
            </ul>
            <div className="flex flex-col items-center md:items-start justify-center space-y-4 md:mr-4 mt-28 md:absolute md:bottom-4">
              <p className="w-full text-center">CONTACT</p>
              <div className="flex space-x-2">
                <img
                  src={Telephone}
                  alt="téléphone"
                  className="w-[25px] h-[25px]"
                />
                <span>+33 6 48 35 73 19</span>
              </div>

              <div className="flex space-x-2">
                <img src={Mail} alt="mail" className="w-[25px] h-[25px]" />
                <a
                  href="mailto:pro.matteo.piselli@gmail.com"
                  className="hover:text-sky-600 transform transition-transform duration-300 hover:scale-105"
                >
                  pro.matteo.piselli@gmail.com
                </a>
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
