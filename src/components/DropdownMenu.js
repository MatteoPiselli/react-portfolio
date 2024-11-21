import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Copyright from "./copyright";

// Images
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
    stiffness: 300,
    damping: 20,
  };

  const navigate = useNavigate();

  const handleNavigation = (e, path, anchor) => {
    e.preventDefault(); // Empêcher la redirection immédiate
    setTimeout(() => {
      navigate(path, { state: { scrollTo: anchor } });
    }, 500);
  };

  return (
    <div>
      {/* Bouton menu hamburger / croix */}
      <div
        className="absolute top-8 left-8 w-10 h-10 flex items-center justify-center cursor-pointer z-50" // Ajout du z-index ici
        onClick={toggleMenu}
      >
        {/* Animation dynamique du menu hamburger / croix */}
        <motion.div
          initial={false}
          animate={isOn ? "open" : "closed"}
          className="relative w-8 h-8"
        >
          <motion.span
            className="absolute top-1 left-0 w-8 h-1 bg-white rounded"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 },
            }}
            transition={spring}
          />
          <motion.span
            className="absolute top-3 left-0 w-8 h-1 bg-white rounded"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={spring}
          />
          <motion.span
            className="absolute top-5 left-0 w-8 h-1 bg-white rounded"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 },
            }}
            transition={spring}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {/* Menu déroulant */}
        {isOn && (
          <motion.div
            className="absolute top-0 left-0 bg-white bg-opacity-75 w-full md:w-auto h-full rounded-md p-4 z-40" // Ajout du z-index ici pour que le menu soit en dessous du bouton
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={spring}
          >
            <p className="font-bold text-xl md:text-3xl">Matteo PISELLI</p>
            <p className="italic text-md md:text-lg">Etudiant Développeur Web</p>
            <br />
            <ul className="flex flex-col items-center justify-center md:items-start space-y-4">
              <li>
                <div className="flex space-x-4">
                  <img src={Home} alt="accueil" className="w-[25px] h-[25px]" />
                  <Link to="/react-portfolio/" className="text-gray-800 hover:text-sky-600">
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
                    src={Code}
                    alt="compétences professionnelles"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    to="/competences"
                    onClick={(e) =>
                      handleNavigation(e, "/competences", "#competences")
                    }
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
                    alt="expériences"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    to="/experiences"
                    onClick={(e) =>
                      handleNavigation(e, "/experiences", "#experiences")
                    }
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
                    src={Formation}
                    alt="formation"
                    className="w-[25px] h-[25px]"
                  />
                  <Link
                    to="/formation"
                    onClick={(e) =>
                      handleNavigation(e, "/formation", "#formation")
                    }
                    className="text-gray-800 hover:text-sky-600"
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
                    className="text-gray-800 hover:text-sky-600"
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
                <a href="mailto:pro.matteo.piselli@gmail.com" className="hover:text-sky-600">pro.matteo.piselli@gmail.com</a>
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
