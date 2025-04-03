import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import header from "../assets/images/header.png";
import DropdownMenu from "./DropdownMenu";
import ParticlesBackground from "./particles";

const ImageWithText = () => {
  const [text, setText] = useState(""); // État pour le texte affiché progressivement
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel des lettres
  const [isDeleting, setIsDeleting] = useState(false); // État pour savoir si on est en train de supprimer les lettres
  const fullText = "N'hésitez pas à explorer mon portfolio !"; // Texte complet à afficher
  const typingSpeed = 90; // Vitesse d'apparition des lettres (en millisecondes)
  const pauseTime = 1000; // Temps de pause avant de redémarrer la boucle (en millisecondes)
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && currentIndex < fullText.length) {
      // Cas où on ajoute des lettres
      timeoutId = setTimeout(() => {
        setText((prev) => prev + fullText[currentIndex]); // Ajoute la lettre suivante
        setCurrentIndex(currentIndex + 1); // Incrémente l'index
      }, typingSpeed);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Quand tout le texte est affiché, mettre une pause avant de commencer à supprimer
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime); // Active la suppression après une pause
    } else if (isDeleting && currentIndex > 0) {
      // Cas où on supprime des lettres
      timeoutId = setTimeout(() => {
        setText((prev) => prev.slice(0, -1)); // Supprime la dernière lettre
        setCurrentIndex(currentIndex - 1); // Décrémente l'index
      }, typingSpeed);
    } else if (isDeleting && currentIndex === 0) {
      // Quand tout le texte est supprimé, mettre une pause avant de recommencer à ajouter les lettres
      timeoutId = setTimeout(() => setIsDeleting(false), pauseTime); // Désactive la suppression pour recommencer
    }

    // Nettoyage du timeout à chaque itération pour éviter les fuites
    return () => clearTimeout(timeoutId);
  }, [currentIndex, isDeleting, fullText, typingSpeed, pauseTime]);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact", { state: { scrollTo: "contactForm" } });
  };

  return (
    <div className="relative">
      <img src={header} alt="Header" className="w-full h-screen" />

      <ParticlesBackground />

      <DropdownMenu />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Matteo PISELLI</h1>

        <div className="h-10" />

        <h3 className="text-white md:text-3xl font-bold">{text}</h3>

        <div className="flex absolute bottom-32 md:bottom-[5%] md:right-4 space-x-2">
          <div className="bg-gray-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-xl">
            <Link to="/contact" onClick={handleContactClick}>
              Me contacter
            </Link>
          </div>
          <a
            href="/react-portfolio/cv.pdf"
            className="bg-gray-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-xl"
          >
            Mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
